import { z } from "zod";

export const companySchema = z.object({
  name: z.string({ required_error: "Nama perusahaan harus di isi" }),
  image: z.string({ required_error: "Image perusahaan harus di isi" }),
  description: z.string().nullable().optional(),
});

export const serviceSchema = z.object({
  name: z
    .string({ required_error: "Nama service harus di isi" })
    .min(5, { message: "Nama service minimal 5 karakter" })
    .max(50, { message: "Nama service maximal 50 karakter" }),
  benefits: z
    .string({ required_error: "Benefits harus di isi" })
    .array()
    .min(1, { message: "Benefits minimal 1" }),
  price: z.number({ required_error: "Harga service harus di isi" }),
  isRecomended: z.boolean(),
  description: z.string().nullable().optional(),
});

export const projectSchema = z.object({
  service: z.string({ required_error: "Service harus diisi" }),
  date: z.date({ required_error: "Tanggal harus diisi" }).nullable(),
  name: z
    .string({ required_error: "Nama project harus diisi" })
    .min(1, { message: "Nama project tidak boleh kosong" }),
  image: z.string().optional().nullable(),
  features: z
    .array(z.string(), { required_error: "Features harus diisi" })
    .min(1, { message: "Features minimal 1" }),
  description: z.string().optional().nullable(),
});
