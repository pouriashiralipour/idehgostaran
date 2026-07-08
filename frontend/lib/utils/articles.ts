import { latestArticles, type Article } from '@/data/articles';

/**
 * Extracts the URL slug from an article's `categoryHref`
 * (e.g. "/blog/category/frontend" -> "frontend"). Centralizing this
 * here avoids duplicating the same string-splitting logic in every
 * page that needs to resolve a category by slug.
 */
function getCategorySlugFromHref(categoryHref: string): string {
  return categoryHref.split('/').filter(Boolean).pop() ?? '';
}

/**
 * Returns every article whose category matches the given slug, plus
 * the human-readable category label (taken from the first match) so
 * the page can render a title without a second data source.
 *
 * Returns `null` when no article matches — callers should treat this
 * as a 404 (see `notFound()` usage in the category page).
 */
export function getArticlesByCategorySlug(
  slug: string
): { categoryLabel: string; articles: Article[] } | null {
  const matches = latestArticles.filter(
    article => getCategorySlugFromHref(article.categoryHref) === slug
  );

  if (matches.length === 0) return null;

  return { categoryLabel: matches[0].category, articles: matches };
}

/**
 * All distinct category slugs currently present in the article
 * dataset — used by `generateStaticParams` so category pages are
 * statically pre-rendered at build time instead of on every request.
 */
export function getAllCategorySlugs(): string[] {
  const slugs = latestArticles.map(article =>
    getCategorySlugFromHref(article.categoryHref)
  );
  return Array.from(new Set(slugs));
}

/**
 * Extracts the URL slug from an article's own `href`
 * (e.g. "/blog/react-nextjs-getting-started" -> "react-nextjs-getting-started").
 */
function getArticleSlugFromHref(href: string): string {
  return href.split('/').filter(Boolean).pop() ?? '';
}

/** Resolves a single article by its detail-page slug, or `null` if unknown. */
export function getArticleBySlug(slug: string): Article | null {
  return (
    latestArticles.find(
      article => getArticleSlugFromHref(article.href) === slug
    ) ?? null
  );
}

/** All article slugs — used by `generateStaticParams` for SSG. */
export function getAllArticleSlugs(): string[] {
  return latestArticles.map(article => getArticleSlugFromHref(article.href));
}
