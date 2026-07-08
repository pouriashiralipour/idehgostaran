import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { GridIcon } from '@/components/ui/icons';
import { BlogArticleGrid } from '@/components/features/blog/blog-article-grid';
import {
  getArticlesByCategorySlug,
  getAllCategorySlugs,
} from '@/lib/utils/articles';
import { BlogSidebar } from '@/components/features/blog/blog-sidebar';
import { BlogListToolbar } from '@/components/features/blog/blog-list-toolbar';

interface BlogCategoryPageProps {
  params: Promise<{ slug: string }>;
}

/**
 * Pre-renders one static page per known category slug at build time,
 * matching the App Router's SSG-by-default philosophy for content
 * that doesn't change per-request.
 */
export function generateStaticParams(): { slug: string }[] {
  return getAllCategorySlugs().map(slug => ({ slug }));
}

/**
 * Dynamic per-category metadata (falls back gracefully if the slug
 * turns out to be invalid — `generateMetadata` runs before the page
 * body, so it can't itself call `notFound()`).
 */
export async function generateMetadata({
  params,
}: BlogCategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const result = getArticlesByCategorySlug(slug);

  return {
    title: result ? result.categoryLabel : 'دسته بندی یافت نشد',
  };
}

/**
 * `/blog/category/[slug]` — articles filtered by a single category.
 *
 * Rendered inside `app/(main)/blog/layout.tsx`, so it automatically
 * inherits the same category/tag sidebar as `/blog` — no sidebar
 * logic duplicated here.
 *
 * Server Component: category matching happens server-side against the
 * static dataset; an unknown slug triggers Next's built-in 404 flow
 * via `notFound()` rather than rendering an empty/broken page.
 */
export default async function BlogCategoryPage({
  params,
}: BlogCategoryPageProps) {
  const { slug } = await params;
  const result = getArticlesByCategorySlug(slug);

  if (!result) {
    notFound();
  }

  const { categoryLabel, articles } = result;

  return (
    <>
      {/* section:title — category label instead of the generic "مقالات آموزشی" */}
      <div className="flex items-center gap-5 bg-gradient-to-l from-secondary to-background rounded-2xl p-5">
        <span className="flex items-center justify-center w-12 h-12 bg-primary text-primary-foreground rounded-full">
          <GridIcon className="w-5 h-5" />
        </span>
        <div className="flex flex-col space-y-2">
          <span className="font-black xs:text-2xl text-lg text-primary">
            {categoryLabel}
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
          <BlogArticleGrid articles={articles} />
        </div>
      </div>
    </>
  );
}
