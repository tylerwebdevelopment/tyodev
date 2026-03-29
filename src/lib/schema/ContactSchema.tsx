import z from "zod";

export const ContactSchema = z.object({
  name: z.string().nonempty('Name Is Required'),
  email: z.string().nonempty("Email Adress Is Required").email("Invalid Email Address"),
  company_name: z.string().optional(),
  contact_message: z.string().nonempty('Contact Message Is Required').min(5, "Contact Message Must Be At least 5 Character").max(500, "Contact Message Cannot Exceed 500 Characters"),
})