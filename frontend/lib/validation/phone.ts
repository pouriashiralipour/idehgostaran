import type { ValidationResult } from './types';
import { extractDigits, findInvalidChar, normalizeDigits } from './normalize';

/**
 * Iranian mobile number validation.
 *
 * Accepts domestic numbers in the forms:
 *   - 09XXXXXXXXX   (11 digits, leading 0)
 *   - 9XXXXXXXXX    (10 digits, no leading 0 — normalized to 11 digits)
 *   - +989XXXXXXXXX (international — normalized to domestic 11-digit form)
 *
 * The canonical returned value is always the 11-digit domestic form
 * (09XXXXXXXXX), which is what the backend should store and what OTP dispatch
 * expects.
 */

/** Canonical Iranian mobile: 11 digits starting with 09. */
const DOMESTIC_MOBILE_RE = /^09\d{9}$/;

/** Length thresholds for early, cheap feedback. */
const MIN_DIGITS = 10;
const MAX_DIGITS = 11;

/** Localized (Persian) error messages. */
const ERRORS = {
  empty: 'شماره موبایل را وارد کنید.',
  invalidChars: 'شماره موبایل فقط می‌تواند شامل عدد باشد.',
  tooShort: 'شماره موبایل باید ۱۱ رقم باشد.',
  invalid: 'شماره موبایل وارد شده معتبر نیست.',
} as const;

/**
 * Validate and canonicalize an Iranian mobile number.
 *
 * The pipeline is intentionally explicit (trim → normalize → detect invalid
 * characters → canonicalize → format check) so each failure mode maps to a
 * specific, actionable message. Pure and side-effect free — safe to run on
 * both client and server.
 *
 * @param input - Raw user input from the phone field.
 * @returns A {@link ValidationResult} whose `value` is the canonical 11-digit
 *          domestic number (e.g. `09123456789`), regardless of success.
 */
export function validateIranianMobile(input: string): ValidationResult {
  const trimmed = input.trim();

  if (trimmed.length === 0) {
    return { ok: false, value: '', error: ERRORS.empty };
  }

  const normalized = normalizeDigits(trimmed);

  if (findInvalidChar(normalized) !== null) {
    return { ok: false, value: extractDigits(normalized), error: ERRORS.invalidChars };
  }

  const digits = extractDigits(normalized);

  // Canonicalize to 11-digit domestic: drop the +98 country code, or prepend 0.
  const canonical = normalized.startsWith('+')
    ? digits.replace(/^98/, '0')
    : digits.length === MIN_DIGITS
      ? `0${digits}`
      : digits;

  if (canonical.length < MAX_DIGITS) {
    return { ok: false, value: canonical, error: ERRORS.tooShort };
  }

  if (!DOMESTIC_MOBILE_RE.test(canonical)) {
    return { ok: false, value: canonical, error: ERRORS.invalid };
  }

  return { ok: true, value: canonical };
}
