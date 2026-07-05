import { toPersianDigits } from './digits';

/**
 * Masks a canonical Iranian mobile number for display, e.g. when
 * confirming where the OTP was sent
 * ("کد تایید برای شماره ۰۹********* پیامک شد").
 *
 * Only the "09" prefix stays visible; every remaining digit is
 * replaced with "*" so the full number is never re-exposed on screen.
 */
export function maskIranianPhoneNumber(phone: string): string {
  const visiblePrefix = phone.slice(0, 2);
  const maskedRest = '*'.repeat(Math.max(phone.length - 2, 0));
  return `${toPersianDigits(visiblePrefix)}${maskedRest}`;
}
