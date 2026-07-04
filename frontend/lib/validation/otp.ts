import type { ValidationResult } from './types';
import { extractDigits, findInvalidChar, normalizeDigits } from './normalize';

/**
 * One-time password (OTP) validation.
 *
 * The OTP is a fixed-length numeric code (5 digits by default, matching the
 * legacy verification screen). Like the phone validator, it normalizes
 * Persian/Arabic digits and reports invalid characters explicitly so the user
 * gets a clear message instead of a silent rejection.
 */

/** Default OTP length used across the auth flow. */
export const DEFAULT_OTP_LENGTH = 5;

/** Localized (Persian) error messages. */
const ERRORS = {
  empty: 'کد تایید را وارد کنید.',
  invalidChars: 'کد تایید باید فقط شامل عدد باشد.',
  invalidLength: (expected: number) => `کد تایید باید ${expected} رقم باشد.`,
} as const;

/**
 * Validate an OTP code.
 *
 * @param input          - Raw user input from the OTP field.
 * @param expectedLength - Required number of digits (defaults to
 *                         {@link DEFAULT_OTP_LENGTH}).
 * @returns A {@link ValidationResult} whose `value` is the sanitized
 *          digits-only code.
 */
export function validateOtp(
  input: string,
  expectedLength: number = DEFAULT_OTP_LENGTH,
): ValidationResult {
  const trimmed = input.trim();

  if (trimmed.length === 0) {
    return { ok: false, value: '', error: ERRORS.empty };
  }

  const normalized = normalizeDigits(trimmed);

  if (findInvalidChar(normalized) !== null) {
    return { ok: false, value: extractDigits(normalized), error: ERRORS.invalidChars };
  }

  const digits = extractDigits(normalized);

  if (digits.length !== expectedLength) {
    return { ok: false, value: digits, error: ERRORS.invalidLength(expectedLength) };
  }

  return { ok: true, value: digits };
}
