import type { ReactNode } from 'react';

interface AuthLayoutProps {
  children: ReactNode;
}

/**
 * Layout for authentication routes (`/auth`).
 *
 * Renders a minimal, full-viewport centered shell — no Header, no
 * Footer, no site nav — mirroring the standalone card layout used in
 * the original `verification.html` / `login-register.html` designs:
 * a single vertically+horizontally centered card on a plain background.
 */
export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-5">
      {children}
    </div>
  );
}
