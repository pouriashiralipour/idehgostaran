/**
 * Outcome of validating a single user-provided value.
 *
 * `value` always carries the canonical, sanitized form (digits normalized to
 * English, whitespace trimmed) so callers can use it directly without
 * re-processing — even when validation fails.
 *
 * @property ok    - Whether the input satisfied all validation rules.
 * @property value - The sanitized canonical value (always populated).
 * @property error - Localized (Persian) user-facing message, present only
 *                   when `ok` is false.
 */
export interface ValidationResult<TValue = string> {
  ok: boolean;
  value: TValue;
  error?: string;
}
