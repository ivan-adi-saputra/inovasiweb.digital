import { z } from "zod";

export const companySchema = z.object({
  name: z.string({ required_error: "Nama perusahaan harus di isi" }),
  image: z.string({ required_error: "Image perusahaan harus di isi" }),
  description: z.string().nullable().optional(),
});
