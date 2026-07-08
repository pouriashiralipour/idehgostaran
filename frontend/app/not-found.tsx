import Link from 'next/link';
import Image from 'next/image';

import { ArrowDiagonalIcon } from '@/components/ui/icons';
import { Footer } from '@/components/layout/footer/footer';
import { SiteHeader } from '@/components/layout/header/site-header';

/**
 * Global 404 page.
 *
 * Must live at the app root (outside any route group) — this is the
 * only file Next.js will render for genuinely unmatched URLs. Since
 * the root layout no longer renders Header/Footer (that now belongs
 * to `(main)/layout.tsx`), this page renders them manually so the 404
 * still looks like part of the main site rather than the bare auth shell.
 */
export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <SiteHeader />
      <main className="flex-auto py-5">
        <div className="max-w-7xl space-y-14 px-4 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-12">
            <Image
              src="/images/theme/empty.svg"
              alt="صفحه پیدا نشد"
              width={320}
              height={320}
              className="w-full max-w-xs opacity-35"
            />
            <div className="text-center space-y-3">
              <h2 className="font-bold text-xl text-foreground">
                چنین صفحه‌ای پیدا نشد
              </h2>
              <p className="font-semibold text-sm text-muted">
                با عرض پوزش، چنین صفحه‌ای در سایت وجود ندارد یا حذف شده است.
              </p>
            </div>
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-1 h-11 bg-primary rounded-full text-primary-foreground transition-all hover:opacity-80 px-6"
            >
              <span className="font-semibold text-sm">بازگشت به صفحه اصلی</span>
              <ArrowDiagonalIcon className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
