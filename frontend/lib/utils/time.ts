import { toPersianDigits } from './digits';

/**
 * Formats a duration in seconds as a Persian-digit "mm:ss" clock
 * string (e.g. 75 -> "۰۱:۱۵") for the OTP resend countdown display.
 */
export function formatSecondsAsPersianClock(totalSeconds: number): string {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  const pad = (value: number): string => String(value).padStart(2, '0');

  return toPersianDigits(`${pad(minutes)}:${pad(seconds)}`);
}
