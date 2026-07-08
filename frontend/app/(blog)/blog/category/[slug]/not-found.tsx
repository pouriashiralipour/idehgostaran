import Link from 'next/link';
import { ArrowDiagonalIcon } from '@/components/ui/icons';

/**
 * Scoped 404 for invalid category slugs — triggered by `notFound()`
 * in `page.tsx`. More specific than the app-wide `not-found.tsx`:
 * it points the user back to `/blog` instead of the home page, since
 * they were already browsing blog content.
 */
export default function BlogCategoryNotFound() {
  return (
    <div className="flex flex-col items-center justify-center text-center space-y-5 py-20">
      <h2 className="font-bold text-xl text-foreground">
        این دسته‌بندی پیدا نشد
      </h2>
      <p className="font-semibold text-sm text-muted">
        دسته‌بندی مورد نظر وجود ندارد یا حذف شده است.
      </p>
      <Link
        href="/blog"
        className="inline-flex items-center justify-center gap-1 h-11 bg-primary rounded-full text-primary-foreground transition-all hover:opacity-80 px-6"
      >
        <span className="font-semibold text-sm">بازگشت به مقالات</span>
        <ArrowDiagonalIcon className="w-5 h-5" />
      </Link>
    </div>
  );
}
