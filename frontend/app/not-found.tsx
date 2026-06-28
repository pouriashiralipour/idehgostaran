import Link from 'next/link';
import Image from 'next/image';
import { ArrowDiagonalIcon } from '@/components/ui/icons';

/**
 * Custom 404 Not Found page.
 *
 * In Next.js App Router, this file must be named `not-found.tsx` and
 * placed in the `app/` directory to override the default 404 page.
 * It is a Server Component by default.
 */
export default function NotFound() {
  return (
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
  );
}
