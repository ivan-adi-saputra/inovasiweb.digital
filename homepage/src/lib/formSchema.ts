import z from "zod";

export const SigninSchema = z.object({
  email: z
    .string({ required_error: "Email harus di isi" })
    .email({ message: "Email tidak valid" }),
  password: z
    .string({ required_error: "Password wajib di isi" })
    .min(5, { message: "Password minimal 5 karakter" }),
});

export const SignupSchema = z.object({
  name: z
    .string({ required_error: "Nama harus di isi" })
    .min(3, { message: "Nama minimal 3 karakter" }),
  email: z
    .string({ required_error: "Email harus di isi" })
    .email({ message: "Email tidak valid" }),
  password: z
    .string({ required_error: "Password harus di isi" })
    .min(5, { message: "Password minimal 5 karakter" }),
  phone: z.string().optional().nullable(),
  company: z.string().nullable().optional(),
});

export const ActivateSchema = z.object({
  otp: z.string({ required_error: "Otp harus di isi" }),
});
