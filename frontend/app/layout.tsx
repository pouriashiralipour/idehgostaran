import type { Metadata } from 'next';

import { yekanBakh } from './fonts';
import './globals.css';

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className={yekanBakh.variable}>
      <body className={`${yekanBakh.className} antialiased`}>{children}</body>
    </html>
  );
}
