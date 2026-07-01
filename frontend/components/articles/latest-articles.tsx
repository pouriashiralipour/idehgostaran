import Link from 'next/link';
import { SparkleIcon, ArrowDiagonalIcon } from '@/components/ui/icons';
import { latestArticles } from '@/data/articles';
import { ArticleCard } from './article-card';

interface LatestArticlesProps {
  /**
   * How many of the most-recently-published articles to render.
   * `latestArticles` is ordered newest → oldest, so this simply takes
   * the first N entries. Defaults to 3.
   */
  maxItems?: number;
}

/**
 * "Latest articles" section: header pill (icon + title + view-all
 * link) plus a responsive grid of article cards.
 *
 * Only renders the `maxItems` most-recently-published articles (3 by
 * default) rather than the whole dataset — the "view all" link in the
 * header is where the rest live.
 *
 * Note: the original design used a Swiper.js carousel for this block.
 * Since no slider dependency is wired into this project yet, this
 * renders a responsive CSS grid (1 / 2 / 3 columns) instead. The grid
 * can be swapped for a Swiper-based client wrapper later without
 * touching `ArticleCard` itself.
 *
 * Server Component — purely presentational, no interactivity needed.
 */
export function LatestArticles({ maxItems = 3 }: LatestArticlesProps = {}) {
  const visibleArticles = latestArticles.slice(0, maxItems);

  return (
    <div className="space-y-8">
      {/* section:title */}
      <div className="flex items-center justify-between gap-8 bg-gradient-to-r from-secondary to-background rounded-2xl p-5">
        <div className="flex items-center gap-5">
          <span className="flex items-center justify-center w-12 h-12 bg-primary text-primary-foreground rounded-full">
            <SparkleIcon className="w-5 h-5" />
          </span>
          <div className="flex flex-col space-y-2">
            <span className="font-black xs:text-2xl text-lg text-primary">
              آخرین مقالات
            </span>
            <span className="font-semibold xs:text-base text-sm text-foreground">
              منتشر شده
            </span>
          </div>
        </div>
        <Link
          href="/blog"
          className="sm:w-auto w-11 h-11 inline-flex items-center justify-center gap-1 bg-background rounded-full text-foreground transition-colors hover:text-primary sm:px-4"
        >
          <span className="font-semibold text-sm sm:block hidden">
            مشاهده همه
          </span>
          <ArrowDiagonalIcon className="w-5 h-5" />
        </Link>
      </div>
      {/* end section:title */}

      {/* section:latest-articles:grid */}
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
        {visibleArticles.map(article => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
      {/* end section:latest-articles:grid */}
    </div>
  );
}
