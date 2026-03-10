import z from "zod";

export const ContactSchema = z.object({
  name: z.string().nonempty('Name Is Required'),
  email: z.email("Invalid Email Address").nonempty('Email Is Required'),
  company_name: z.string().nonempty('Company Name Is Required'),
  contact_message: z.string().nonempty('Contact Message Is Required').min(5, "Contact Message Must Be At least 5 Character"),
})