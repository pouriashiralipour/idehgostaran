import { z } from 'zod';

import { toEnglishDigits } from '@/lib/utils/digits';

/**
 * Normalizes a raw, user-typed Iranian mobile number into the
 * canonical `09xxxxxxxxx` (11-digit) format expected by the backend:
 *
 *   ۰۹۱۲۳۴۵۶۷۸۹  -> 09123456789   (Persian digits)
 *   +989123456789 -> 09123456789   (international prefix)
 *   00989123456789 -> 09123456789  (dial-out prefix)
 *   09123456789   -> 09123456789   (already canonical)
 *
 * Any other shape is returned as-is (digit-normalized only) and will
 * fail the regex check in `iranianPhoneSchema` below, surfacing a
 * validation error instead of silently accepting garbage input.
 */
export function normalizeIranianPhoneNumber(rawValue: string): string {
  const digitsOnly = toEnglishDigits(rawValue).replace(/[\s-]/g, '');

  if (digitsOnly.startsWith('+98')) return `0${digitsOnly.slice(3)}`;
  if (digitsOnly.startsWith('0098')) return `0${digitsOnly.slice(4)}`;
  if (digitsOnly.startsWith('98') && digitsOnly.length === 12) {
    return `0${digitsOnly.slice(2)}`;
  }

  return digitsOnly;
}

/** Canonical Iranian mobile number: 11 digits, starts with "09". */
const IRANIAN_PHONE_REGEX = /^09\d{9}$/;

/** 6-digit numeric OTP code. */
const OTP_REGEX = /^\d{6}$/;

/**
 * Phone number field schema.
 *
 * Order matters: normalize first (digit conversion + prefix
 * stripping), then validate the *normalized* value — this is what
 * lets "+98912..." and "۰۹۱۲..." both resolve to a valid, canonical
 * "09123456789" instead of being rejected for cosmetic reasons.
 */
export const iranianPhoneSchema = z
  .string()
  .trim()
  .min(1, 'شماره موبایل الزامی است')
  .transform(normalizeIranianPhoneNumber)
  .refine(value => IRANIAN_PHONE_REGEX.test(value), {
    message: 'شماره موبایل وارد شده معتبر نیست',
  });

/** OTP field schema — accepts Persian digits, requires exactly 6 English digits after normalization. */
export const otpSchema = z
  .string()
  .trim()
  .min(1, 'کد تایید الزامی است')
  .transform(value => toEnglishDigits(value).replace(/\s/g, ''))
  .refine(value => OTP_REGEX.test(value), {
    message: 'کد تایید باید یک عدد ۶ رقمی باشد',
  });

/** Step 1 form: phone number entry. */
export const phoneFormSchema = z.object({
  phone: iranianPhoneSchema,
});
export type PhoneFormValues = z.infer<typeof phoneFormSchema>;

/** Step 2 form: OTP verification. */
export const otpFormSchema = z.object({
  otp: otpSchema,
});
export type OtpFormValues = z.infer<typeof otpFormSchema>;
