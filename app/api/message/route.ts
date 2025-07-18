import { contactSchema } from "../../schemas";
import { z } from "zod";
import nodemailer from "nodemailer";
import { google } from "googleapis";

export async function POST(req: Request) {
  if (req.method !== "POST") {
    return Response.json({ message: "Method not allowed" }, { status: 405 });
  }

  try {
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
