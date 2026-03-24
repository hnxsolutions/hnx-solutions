import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Invalid email address"),
  projectType: z.enum([
    "Web Application",
    "Mobile App",
    "AI & Automation",
    "Cloud Solutions",
    "UI/UX Design",
    "Full-Stack Solution",
    "Other",
  ]),
  budget: z
    .enum([
      "Under $1,000",
      "$1,000 - $3,000",
      "$3,000 - $8,000",
      "$8,000 - $15,000",
      "$15,000+",
    ])
    .optional(),
  message: z.string().min(10, "Message must be at least 10 characters").max(2000),
});

export type ContactFormData = z.infer<typeof contactSchema>;
