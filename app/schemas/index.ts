import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, { error: "Please enter a valid name" }),
  email: z.email({ error: "Please provide a valid email" }),
  message: z.string().min(10, {
    error: "Please make sure your message is at least 10 characters long.",
  }),
});

export type contactSchemaData = z.infer<typeof contactSchema>;
