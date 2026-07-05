/**
 * Digit conversion helpers.
 *
 * Iranian users routinely type phone numbers and OTP codes using
 * Persian (۰-۹) or Arabic-Indic (٠-٩) numerals depending on their
 * keyboard/input method. All validation must normalize to plain
 * English digits *before* running any regex, otherwise valid input
 * gets rejected.
 */

const PERSIAN_DIGITS = '۰۱۲۳۴۵۶۷۸۹';
const ARABIC_INDIC_DIGITS = '٠١٢٣٤٥٦٧٨٩';

/**
 * Converts Persian or Arabic-Indic digits found in `value` to plain
 * English (ASCII) digits. Non-digit characters are left untouched.
 */
export function toEnglishDigits(value: string): string {
  return value.replace(/[۰-۹٠-٩]/g, char => {
    const persianIndex = PERSIAN_DIGITS.indexOf(char);
    if (persianIndex !== -1) return String(persianIndex);

    const arabicIndicIndex = ARABIC_INDIC_DIGITS.indexOf(char);
    return String(arabicIndicIndex);
  });
}

/**
 * Converts English digits in `value` to Persian digits — used when
 * *displaying* numbers (e.g. formatted phone numbers) in the UI,
 * mirroring the Persian-digit convention used across the rest of the
 * site (see `cart-button.tsx`'s `toPersianDigits`).
 */
export function toPersianDigits(value: string | number): string {
  return String(value).replace(
    /[0-9]/g,
    digit => PERSIAN_DIGITS[Number(digit)]
  );
}
