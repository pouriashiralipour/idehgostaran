'use client';

import { useEffect } from 'react';

interface AuthErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

/**
 * Route-level error boundary for `/auth`.
 *
 * The flow is currently fully client-side with no network calls, so
 * this boundary won't trigger yet — it's wired up now so that once
 * the send-OTP / verify-OTP API calls are added, unexpected failures
 * get a graceful, on-brand fallback instead of Next.js's default
 * error screen.
 */
export default function AuthError({ error, reset }: AuthErrorProps) {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.error(error);
  }, [error]);

  return (
    <div className="w-full max-w-sm space-y-5 text-center">
      <div className="bg-gradient-to-b from-secondary to-background rounded-3xl space-y-3 p-8">
        <p className="font-black text-foreground">مشکلی پیش آمد</p>
        <p className="text-sm text-muted">
          متاسفانه در پردازش درخواست شما خطایی رخ داد. لطفاً دوباره تلاش کنید.
        </p>
        <button
          type="button"
          onClick={reset}
          className="inline-flex items-center justify-center h-10 bg-primary rounded-full text-primary-foreground font-semibold text-sm px-6 transition-all hover:opacity-80"
        >
          تلاش مجدد
        </button>
      </div>
    </div>
  );
}
