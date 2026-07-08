import { BlogSearchForm } from './blog-search-form';
import { BlogPopularTags } from './blog-popular-tags';
import { BlogCategoryFilter } from './blog-category-filter';

/**
 * Sticky sidebar shown only on blog routes (`/blog`, `/blog/category/*`,
 * `/blog/[slug]`) via `app/(main)/blog/layout.tsx` — deliberately NOT
 * part of the global `(main)/layout.tsx`, so the rest of the site
 * (home, auth, etc.) never renders it.
 *
 * Hidden below `md` breakpoint, matching the original HTML
 * (`md:block hidden ... md:sticky md:top-24`) where the equivalent
 * content moves into an offcanvas filter panel on mobile instead.
 *
 * Server Component — every child piece that needs interactivity
 * (search input, accordion) is isolated into its own Client Component.
 */
export function BlogSidebar() {
  return (
    <aside className="md:block hidden lg:col-span-3 md:col-span-4 md:sticky md:top-24">
      <BlogSearchForm />
      <BlogPopularTags />
      <BlogCategoryFilter />
    </aside>
  );
}
