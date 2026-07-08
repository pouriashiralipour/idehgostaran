// components/features/blog/blog-category-filter.tsx
'use client';

import { useState } from 'react';
import { ChevronDownIcon, GridIcon } from '@/components/ui/icons';
import { categories } from '@/data/categories';
import { cn } from '@/lib/utils';

/**
 * Collapsible "دسته بندی مقالات" accordion box used inside the blog
 * sidebar. Mirrors the original Alpine `x-data="{ open: false }"`
 * single-accordion pattern from `article-category.html` (a single
 * toggle revealing a radio-button category list), NOT the multi-level
 * mega-menu tree used in the header — that's why this is a dedicated,
 * simpler component rather than reusing `CategoriesMegaMenu`.
 *
 * Client Component: needs local `isOpen` state for the accordion and
 * `selectedCategoryId` for the radio group (future: will drive a
 * `?category=` query param once the articles feed is server-fetched).
 */
export function BlogCategoryFilter() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(
    null
  );

  return (
    <div className="flex flex-col divide-y divide-border">
      <div className="w-full space-y-2 py-3">
        <button
          type="button"
          onClick={() => setIsOpen(prev => !prev)}
          aria-expanded={isOpen}
          aria-controls="blog-category-filter-panel"
          className={cn(
            'w-full h-11 flex items-center justify-between gap-x-2 relative bg-secondary rounded-2xl transition hover:text-primary px-3',
            isOpen ? 'text-primary' : 'text-foreground'
          )}
        >
          <span className="flex items-center gap-x-2">
            <GridIcon className="w-5 h-5 flex-shrink-0" />
            <span className="font-semibold text-sm text-right">
              دسته بندی مقالات
            </span>
          </span>
          <ChevronDownIcon
            className={cn(
              'w-5 h-5 transition-transform',
              isOpen && 'rotate-180'
            )}
          />
        </button>

        {isOpen && (
          <div
            id="blog-category-filter-panel"
            role="radiogroup"
            aria-label="دسته بندی مقالات"
            className="bg-secondary rounded-2xl relative p-3"
          >
            <div className="space-y-2">
              {categories.map(category => (
                <label
                  key={category.id}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <input
                    type="radio"
                    name="blog-category"
                    checked={selectedCategoryId === category.id}
                    onChange={() => setSelectedCategoryId(category.id)}
                    className="form-radio !ring-0 !ring-offset-0 bg-border border-0"
                  />
                  <span className="text-sm text-muted">{category.title}</span>
                </label>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
