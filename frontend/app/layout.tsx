import type { Metadata } from 'next';

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
 * Deliberately contains NO Header/Footer and no page-chrome wrapper
 * div anymore. Chrome (site header/footer vs. a minimal centered auth
 * card) now belongs to each route group's own layout, since the two
 * areas of the app need fundamentally different shells:
 *   - `(main)`  → sticky-footer flex column with Header + Footer
 *   - `(auth)`  → full-page centered card, no Header/Footer
 *
 * This file only owns what's truly global: fonts, RTL direction, and
 * the theme Provider.
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
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
