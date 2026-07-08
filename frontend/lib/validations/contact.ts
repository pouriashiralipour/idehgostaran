import { z } from 'zod';

/**
 * Contact-us form schema. Kept separate from `lib/validations/auth.ts`
 * since the two forms have entirely different fields/rules — same
 * one-schema-file-per-feature convention already used in the project.
 */
export const contactFormSchema = z.object({
  fullName: z.string().trim().min(1, 'نام و نام خانوادگی الزامی است'),
  email: z
    .string()
    .trim()
    .min(1, 'ایمیل الزامی است')
    .email('ایمیل وارد شده معتبر نیست'),
  message: z.string().trim().min(1, 'متن پیام الزامی است'),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
