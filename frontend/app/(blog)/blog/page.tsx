import type { Metadata } from 'next';
import { SparkleIcon } from '@/components/ui/icons';
import { latestArticles } from '@/data/articles';
import { BlogListToolbar } from '@/components/features/blog/blog-list-toolbar';
import { BlogArticleGrid } from '@/components/features/blog/blog-article-grid';
import { BlogSidebar } from '@/components/features/blog/blog-sidebar';

export const metadata: Metadata = {
  title: 'مقالات آموزشی',
  description: 'آخرین مقالات آموزشی منتشر شده در ایده گستران جنوب.',
};

/**
 * `/blog` — full article list.
 *
 * Rendered inside `app/(main)/blog/layout.tsx`, which supplies the
 * category/tag sidebar exclusively for blog routes — this page only
 * owns the section title, toolbar, and paginated article grid.
 *
 * Server Component: `latestArticles` is passed down as plain props;
 * only the sort/filter/pagination pieces below it are client-side.
 */
export default function BlogPage() {
  return (
    <div className="space-y-8">
      {/* section:title */}
      <div className="flex items-center gap-5">
        <span className="flex items-center justify-center w-12 h-12 bg-primary text-primary-foreground rounded-full">
          <SparkleIcon className="w-5 h-5" />
        </span>
        <div className="flex flex-col space-y-2">
          <span className="font-black xs:text-2xl text-lg text-primary">
            مقالات آموزشی
          </span>
          <span className="font-semibold text-xs text-muted">
            از گوشه و اطراف دنیای برنامه‌نویسی
          </span>
        </div>
      </div>
      {/* end section:title */}
      <div className="grid md:grid-cols-12 grid-cols-1 items-start gap-5">
        <BlogSidebar />
        <div className="lg:col-span-9 md:col-span-8">
          <BlogListToolbar />
          <BlogArticleGrid articles={latestArticles} />
        </div>
      </div>
    </div>
  );
}
