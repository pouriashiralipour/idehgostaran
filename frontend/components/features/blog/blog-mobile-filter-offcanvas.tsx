'use client';

import { CloseIcon } from '@/components/ui/icons';
import { cn } from '@/lib/utils';
import { BlogSearchForm } from './blog-search-form';
import { BlogPopularTags } from './blog-popular-tags';
import { BlogCategoryFilter } from './blog-category-filter';

interface BlogMobileFilterOffcanvasProps {
  isOpen: boolean;
  onClose: () => void;
}

/**
 * Mobile-only offcanvas duplicating `BlogSidebar`'s content
 * (search + tags + category accordion), matching the original
 * `md:hidden` filter-trigger + offcanvas pattern in `blog.html` /
 * `article-category.html`. Kept separate from `BlogSidebar` itself
 * since the wrapping chrome (close button, overlay, slide transform)
 * differs from the desktop sticky-aside version.
 */
export function BlogMobileFilterOffcanvas({
  isOpen,
  onClose,
}: BlogMobileFilterOffcanvasProps) {
  return (
    <>
      <div
        className={cn(
          'fixed inset-y-0 right-0 xs:w-80 w-72 h-full bg-background rounded-l-2xl overflow-y-auto transition-transform z-50',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex items-center justify-between gap-x-4 sticky top-0 bg-background p-4 z-10">
          <div className="font-bold text-sm text-foreground">
            فیلتر مقالات آموزشی
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="بستن فیلتر"
            className="text-foreground focus:outline-none hover:text-red-500"
          >
            <CloseIcon className="w-6 h-6" />
          </button>
        </div>

        <div className="p-4">
          <BlogSearchForm />
          <BlogPopularTags />
          <BlogCategoryFilter />
        </div>
      </div>

      <div
        onClick={onClose}
        aria-hidden="true"
        className={cn(
          'fixed inset-0 bg-black/10 dark:bg-white/10 cursor-pointer transition-all duration-300 z-40',
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        )}
      />
    </>
  );
}
