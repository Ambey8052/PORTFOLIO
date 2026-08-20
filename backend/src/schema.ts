import { z } from "zod";

export const insertContactSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Enter a valid email address"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(1, "Message is required"),
});

export type InsertContact = z.infer<typeof insertContactSchema>;

export type Contact = InsertContact & {
  id: number;
  createdAt: Date;
};
