'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronLeftIcon, GridIcon } from '@/components/ui/icons';
import { categories } from '@/data/categories';
import { cn } from '@/lib/utils';
import type { Category } from '@/types/category';

/**
 * A single leaf link inside a submenu — the animated expanding dash
 * line before the title matches the original HTML's group-hover effect.
 */
function SubCategoryLink({ category }: { category: Category }) {
  return (
    <li>
      <Link
        href={category.href}
        className="w-full flex items-center gap-x-2 bg-transparent rounded-xl text-zinc-400 transition-all group/nav-item hover:text-black dark:hover:text-white py-2 px-3"
      >
        <span className="inline-flex w-2 h-px bg-zinc-200 dark:bg-zinc-800 transition-all group-hover/nav-item:w-4 group-hover/nav-item:bg-black dark:group-hover/nav-item:bg-white" />
        <span className="font-medium text-xs">{category.title}</span>
      </Link>
    </li>
  );
}

/**
 * A single top-level category row with its own open/close state.
 * When it has children, renders a nested accordion; otherwise renders
 * a plain link — matching the original Alpine `x-data="{ openChild: false }"`.
 */
function CategoryAccordionItem({ category }: { category: Category }) {
  const [isOpen, setIsOpen] = useState(false);
  const hasChildren = category.children && category.children.length > 0;

  if (!hasChildren) {
    return (
      <li>
        <Link
          href={category.href}
          className="w-full flex items-center gap-x-2 bg-transparent rounded-xl text-zinc-400 transition-all group/nav-item hover:text-black dark:hover:text-white py-2 px-3"
        >
          <span className="inline-flex w-2 h-px bg-zinc-200 dark:bg-zinc-800 transition-all group-hover/nav-item:w-4 group-hover/nav-item:bg-black dark:group-hover/nav-item:bg-white" />
          <span className="font-medium text-xs">{category.title}</span>
        </Link>
      </li>
    );
  }

  return (
    <li>
      <button
        type="button"
        onClick={() => setIsOpen(prev => !prev)}
        className="w-full flex items-center gap-x-2 bg-transparent rounded-xl text-zinc-400 transition-all hover:text-black dark:hover:text-white py-2 px-3"
      >
        <ChevronLeftIcon
          className={cn('w-4 h-4 transition-transform', isOpen && '-rotate-90')}
        />
        <span className="font-medium text-xs">{category.title}</span>
      </button>

      {isOpen && (
        <ul className="flex flex-col relative before:content-[''] before:absolute before:inset-y-3 rtl:before:right-3 ltr:before:left-3 before:w-px before:bg-zinc-200 dark:before:bg-zinc-900 py-3 rtl:pr-5 ltr:pl-5">
          {category.children!.map(child => (
            <SubCategoryLink key={child.id} category={child} />
          ))}
        </ul>
      )}
    </li>
  );
}

/**
 * Top-level categories accordion for the mobile offcanvas menu.
 * Manages its own open/closed state (the outer accordion toggle)
 * independently from each category item's inner state.
 *
 * Replaces the original `x-data="{ open: false }"` on the outer <li>
 * and `x-data="{ openChild: false }"` on each inner <li> with
 * component-level useState, one per accordion level — keeping each
 * item's state isolated from its siblings.
 */
export function MobileCategoriesAccordion() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li>
      <button
        type="button"
        onClick={() => setIsOpen(prev => !prev)}
        aria-expanded={isOpen}
        className={cn(
          'w-full flex items-center gap-x-2 relative transition-all hover:text-foreground py-2',
          isOpen ? 'text-foreground' : 'text-muted'
        )}
      >
        <GridIcon className="w-5 h-5" />
        <span className="font-semibold text-xs">دسته بندی آموزشها</span>
        <span
          className={cn(
            'absolute rtl:left-3 ltr:right-3 transition-transform',
            isOpen && 'rotate-180'
          )}
        >
          <ChevronLeftIcon className="w-5 h-5 rotate-[-90deg]" />
        </span>
      </button>

      {isOpen && (
        <ul className="flex flex-col relative before:content-[''] before:absolute before:inset-y-3 rtl:before:right-3 ltr:before:left-3 before:w-px before:bg-zinc-200 dark:before:bg-zinc-900 py-3 rtl:pr-5 ltr:pl-5">
          {categories.map(category => (
            <CategoryAccordionItem key={category.id} category={category} />
          ))}
        </ul>
      )}
    </li>
  );
}
