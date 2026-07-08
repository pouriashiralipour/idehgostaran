'use client';

import { useState } from 'react';
import { FilterIcon } from '@/components/ui/icons';
import { BlogSortSelect } from './blog-sort-select';
import { BlogMobileFilterOffcanvas } from './blog-mobile-filter-offcanvas';

/**
 * Toolbar row above the article grid: sort dropdown (always visible)
 * + a filter button that only appears below `md` (opens the mobile
 * filter offcanvas, since `BlogSidebar` itself is hidden there).
 *
 * Client Component: owns the offcanvas open/closed state — no other
 * component needs to reach into it.
 */
export function BlogListToolbar() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <div className="flex items-center gap-3 mb-3">
      <BlogSortSelect />

      <button
        type="button"
        onClick={() => setIsFilterOpen(true)}
        className="md:hidden flex items-center gap-1 h-11 bg-secondary rounded-2xl text-foreground px-4"
      >
        <FilterIcon className="w-5 h-5" />
        <span className="hidden sm:block font-semibold text-xs">
          فیلتر مقالات
        </span>
      </button>

      <BlogMobileFilterOffcanvas
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
      />
    </div>
  );
}
