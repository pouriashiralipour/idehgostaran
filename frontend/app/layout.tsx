import type { Metadata } from 'next';
import NextTopLoader from 'nextjs-toploader';

import { yekanBakh } from './fonts';
import './globals.css';
import { Providers } from './providers';

export const metadata: Metadata = {
  title: {
    default: 'ایده گستران جنوب | طراحی سایت و اپلیکیشن',
    template: '%s | ایده گستران جنوب',
  },
  description:
    'شرکت ایده گستران جنوب؛ ارائه‌دهنده خدمات حرفه‌ای طراحی و توسعه وب‌سایت‌های مدرن، سیستم‌های تحت وب و وبلاگ تخصصی آموزش برنامه‌نویسی.',
  keywords: [
    'طراحی سایت',
    'برنامه‌نویسی',
    'توسعه وب',
    'ایده گستران جنوب',
    'طراحی وب‌سایت',
  ],
};

/**
 * Root layout — the only place `<html>`/`<body>` are declared.
 *
 * `NextTopLoader` renders a site-wide top progress bar on every route
 * change (Link clicks, router.push, back/forward). It's a Client
 * Component internally, but Server Components can render Client
 * Components as children with no extra wrapper needed, so it's placed
 * directly here rather than in `(main)`/`(auth)` layouts — this way
 * BOTH the public site and the auth flow get the same bar for free.
 *
 * Color is tied to the `--primary` CSS variable (not a hardcoded hex)
 * so it automatically follows the app's blue brand color in both
 * light and dark theme, instead of drifting out of sync if the
 * palette changes later.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={yekanBakh.variable}
      suppressHydrationWarning
    >
      <body className={`${yekanBakh.className} antialiased`}>
        <NextTopLoader
          color="hsl(var(--primary))"
          height={3}
          showSpinner={false}
          easing="ease"
          speed={300}
          crawlSpeed={200}
          shadow="0 0 10px hsl(var(--primary)), 0 0 5px hsl(var(--primary))"
        />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
