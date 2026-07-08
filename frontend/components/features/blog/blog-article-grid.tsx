'use client';

import { useState } from 'react';
import { BlogLoadMoreButton } from './blog-load-more-button';
import type { Article } from '@/data/articles';
import { BlogArticleCard } from './blog-article-card';

interface BlogArticleGridProps {
  /** Full article dataset to paginate over client-side. */
  articles: Article[];
  /** How many cards to reveal per "مشاهده بیشتر" click. */
  pageSize?: number;
}

/**
 * Responsive article grid + client-side "load more" pagination for
 * the blog list page.
 *
 * Client Component: pagination is currently a local slice over the
 * static `articles` array (no backend yet). Once a real API exists,
 * `onLoadMore` should be swapped for a fetch call that appends the
 * next page instead of slicing further into the same array.
 */
export function BlogArticleGrid({
  articles,
  pageSize = 6,
}: BlogArticleGridProps) {
  const [visibleCount, setVisibleCount] = useState(pageSize);

  const visibleArticles = articles.slice(0, visibleCount);
  const hasMore = visibleCount < articles.length;

  const handleLoadMore = () => {
    setVisibleCount(prev => Math.min(prev + pageSize, articles.length));
  };

  return (
    <>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-x-5 gap-y-10">
        {visibleArticles.map(article => (
          <BlogArticleCard key={article.id} article={article} />
        ))}
      </div>

      <BlogLoadMoreButton onLoadMore={handleLoadMore} hasMore={hasMore} />
    </>
  );
}
