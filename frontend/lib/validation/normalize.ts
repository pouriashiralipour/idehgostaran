/**
 * Input normalization helpers shared across all validators.
 *
 * Iranian users frequently type Persian (۰-۹) and Arabic-Indic (٠-٩) digits,
 * and paste values with stray whitespace or separators. These helpers convert
 * such input into a canonical ASCII-digit form so the rest of the validation
 * pipeline works against a single, predictable representation.
 */

/** Persian/Arabic-Indic digit characters mapped to ASCII 0-9. */
const PERSIAN_DIGIT_MAP: Record<string, string> = {
  '۰': '0', '۱': '1', '۲': '2', '۳': '3', '۴': '4',
  '۵': '5', '۶': '6', '۷': '7', '۸': '8', '۹': '9',
  '٠': '0', '١': '1', '٢': '2', '٣': '3', '٤': '4',
  '٥': '5', '٦': '6', '٧': '7', '٨': '8', '٩': '9',
};

/**
 * Replace Persian (۰-۹) and Arabic-Indic (٠-٩) digits with ASCII digits.
 * All other characters are left untouched.
 *
 * @param input - Raw user input, possibly containing non-ASCII digits.
 * @returns The input with all Persian/Arabic digits converted to 0-9.
 */
export function normalizeDigits(input: string): string {
  return input.replace(
    /[۰-۹٠-٩]/g,
    (match) => PERSIAN_DIGIT_MAP[match] ?? match,
  );
}

/**
 * Remove every non-digit character from the input.
 * Intended to be used only after invalid characters have been handled (e.g.
 * reported to the user) — it intentionally discards separators like spaces.
 *
 * @param input - Raw or normalized input.
 * @returns The input with everything except 0-9 removed.
 */
export function extractDigits(input: string): string {
  return input.replace(/\D+/g, '');
}

/**
 * Detect the first character that is neither a digit nor a commonly-tolerated
 * separator (space, dash, leading plus). Tolerated separators let users type
 * "0912 345 6789" without being flagged; anything else (letters, symbols,
 * Persian letters) is reported as invalid.
 *
 * @param input - Preferably digit-normalized input to inspect.
 * @returns The first invalid character found, or `null` when none are present.
 */
export function findInvalidChar(input: string): string | null {
  const match = input.match(/[^\d\s\-+]/);
  return match ? match[0] : null;
}
