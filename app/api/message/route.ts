import { contactSchema } from "../../schemas";
import { z } from "zod";
import nodemailer from "nodemailer";
import { google } from "googleapis";
import { Resend } from "resend";
import EmailTemplate from "@/app/components/EmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

const rateLimitMap = new Map<string, { count: number; lastRequest: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const RATE_LIMIT_MAX = 2; // Max 2 requests per minute

function checkRateLimit(ip: string): {
  allowed: boolean;
  message?: string;
} {
  const now = Date.now();
  const ipEl = rateLimitMap.get(ip);

  if (ipEl) {
    if (now - ipEl.lastRequest < RATE_LIMIT_WINDOW) {
      if (ipEl.count > RATE_LIMIT_MAX) {
        // Since the limit of count exceeded => not allowed
        return { allowed: false, message: "Too many requests" };
      }

      // the count is not exceeded so +1 count
      rateLimitMap.set(ip, { count: ipEl.count + 1, lastRequest: now });
    } else {
      // Since the time window is exceeded reset the ip
      rateLimitMap.set(ip, { count: 1, lastRequest: now });
    }
  } else {
    // Create a new element in the map since it does not exist
    rateLimitMap.set(ip, { count: 1, lastRequest: now });
  }

  // Early return is bypassed so allowed after mutating the map
  return { allowed: true };
}

export async function POST(req: Request) {
  if (req.method !== "POST") {
    return Response.json({ message: "Method not allowed" }, { status: 405 });
  }

  try {
    const ip =
      req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip");

    // Apply rate limiting only if ip can be get from headers
    if (ip) {
      const { message, allowed } = checkRateLimit(ip);
      if (!allowed) {
        return Response.json({ error: message }, { status: 429 });
      }
    }

    const formData = await req.json();
    const parsed = contactSchema.safeParse(formData);

    if (!parsed.success) {
      return Response.json(
        {
          message: "Invalid data provided",
          error: z.flattenError(parsed.error).fieldErrors,
          code: 333,
        },
        { status: 400 }
      );
    }

    const { email, message, name } = parsed.data;

    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_EMAIL!,
      to: [process.env.GMAIL_USER!],
      subject: `Message From portfolio <${email}>`,
      react: EmailTemplate({ email, message, name }),
    });

    if (error) {
      console.error({ error });
      return Response.json({ error }, { status: 400 });
    }

    return Response.json({
      message: "Message sent successfully!",
      success: true,
      data,
    });
  } catch (error) {
    console.error("❌ Error sending email:", error);
    return Response.json({ error: "Error sending email" }, { status: 500 });
  }
}

/*
export async function POST(req: Request) {
  if (req.method !== "POST") {
    return Response.json({ message: "Method not allowed" }, { status: 405 });
  }

  try {
    const ip =
      req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip");

    // Apply rate limiting only if ip can be get from headers
    if (ip) {
      const { message, allowed } = checkRateLimit(ip);
      if (!allowed) {
        return Response.json({ error: message }, { status: 429 });
      }
    }

    const formData = await req.json();
    const parsed = contactSchema.safeParse(formData);

    if (!parsed.success) {
      return Response.json(
        {
          message: "Invalid data provided",
          error: z.flattenError(parsed.error).fieldErrors,
          code: 333,
        },
        { status: 400 }
      );
    }

    const { name, email, message: userMessage } = parsed.data;

    const {
      GMAIL_CLIENT_ID,
      GMAIL_CLIENT_SECRET,
      GMAIL_REDIRECT_URI,
      GMAIL_REFRESH_TOKEN,
      GMAIL_USER,
    } = process.env;

    const oAuth2Client = new google.auth.OAuth2(
      GMAIL_CLIENT_ID,
      GMAIL_CLIENT_SECRET,
      GMAIL_REDIRECT_URI
    );

    oAuth2Client.setCredentials({ refresh_token: GMAIL_REFRESH_TOKEN });

    const accessToken = await oAuth2Client.getAccessToken();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: GMAIL_USER!,
        clientId: GMAIL_CLIENT_ID!,
        clientSecret: GMAIL_CLIENT_SECRET!,
        refreshToken: GMAIL_REFRESH_TOKEN!,
        accessToken: accessToken.token as string,
      },
    });

    const mailOptions = {
      from: `Message from ${name} <${GMAIL_USER}>`,
      to: GMAIL_USER,
      replyTo: email,
      subject: `Message From portfolio`,
      text: `
  Name: ${name}
  Email: ${email}
        Message: ${userMessage}
        `.trim(),
      html: `
          <h3>New Portfolio Message</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${userMessage.replace(/\n/g, "<br/>")}</p>
        `,
    };

    const result = await transporter.sendMail(mailOptions);

    return Response.json({
      message: "Message sent successfully!",
      messageId: result.messageId,
      success: true,
    });
  } catch (error) {
    console.error("❌ Error sending email:", error);
    return Response.json({ error: "Error sending email" }, { status: 500 });
  }
}
*/
