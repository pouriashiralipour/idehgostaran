import type { Metadata } from 'next';

import { AuthFlow } from '@/components/features/auth/auth-flow';
import Logo from '@/components/layout/header/logo';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'ورود یا ثبت نام',
};

/**
 * `/auth` — single-page passwordless login/OTP verification flow.
 *
 * Server Component: only static chrome (logo, card wrapper, legal
 * links) is rendered here. The multi-step form logic — which needs
 * client-side state and react-hook-form — is isolated inside
 * `AuthFlow`, keeping this page's server-rendered footprint as large
 * as possible per the "Server Components by default" principle.
 */
export default function AuthPage() {
  return (
    <div className="w-full max-w-sm space-y-5">
      <div className="bg-gradient-to-b from-secondary to-background rounded-3xl space-y-5 px-5 pb-5">
        <div className="bg-background rounded-b-3xl space-y-2 p-5">
          <Logo />
        </div>
        <AuthFlow />
      </div>

      <div className="bg-secondary rounded-xl space-y-5 p-5">
        <div className="font-medium text-xs text-center text-muted">
          ورود شما به معنای پذیرش{' '}
          <Link
            href="/"
            className="text-foreground transition-colors hover:text-primary hover:underline"
          >
            شرایط
          </Link>
          و
          <Link
            href="/"
            className="text-foreground transition-colors hover:text-primary hover:underline"
          >
            قوانین حریم خصوصی
          </Link>
          است.
        </div>
      </div>
    </div>
  );
}
