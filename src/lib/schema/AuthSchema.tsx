import z from "zod";

export const LoginSchema = z.object({
  admin_email: z.string().nonempty('Email Required').email(),
  admin_password: z.string().nonempty('Password Required')
})