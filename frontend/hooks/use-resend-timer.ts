'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

interface UseResendTimerOptions {
  /** Countdown duration in seconds before resend becomes available. Defaults to 60. */
  durationInSeconds?: number;
}

interface UseResendTimerResult {
  /** Seconds remaining until resend is allowed (0 once expired). */
  secondsLeft: number;
  /** True once the countdown reaches zero. */
  canResend: boolean;
  /** Resets the countdown to the full duration — call right after a resend actually fires. */
  restart: () => void;
}

/**
 * Countdown hook powering the "ارسال مجدد کد" cooldown on the OTP step.
 *
 * Encapsulates the `setInterval` lifecycle (start on mount, cleanup on
 * unmount/restart) so consuming components never touch a raw timer id
 * — they just read `secondsLeft`/`canResend` and call `restart()`.
 */
export function useResendTimer({
  durationInSeconds = 60,
}: UseResendTimerOptions = {}): UseResendTimerResult {
  const [secondsLeft, setSecondsLeft] = useState(durationInSeconds);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const clearExistingInterval = useCallback(() => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const startInterval = useCallback(() => {
    clearExistingInterval();
    intervalRef.current = setInterval(() => {
      setSecondsLeft(current => {
        if (current <= 1) {
          clearExistingInterval();
          return 0;
        }
        return current - 1;
      });
    }, 1000);
  }, [clearExistingInterval]);

  useEffect(() => {
    startInterval();
    return clearExistingInterval;
    // Intentionally runs once per mount: AuthFlow remounts this whole
    // form (via `key={step}`) whenever the OTP step becomes active,
    // so a fresh mount is exactly when the countdown should restart.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const restart = useCallback(() => {
    setSecondsLeft(durationInSeconds);
    startInterval();
  }, [durationInSeconds, startInterval]);

  return { secondsLeft, canResend: secondsLeft === 0, restart };
}
