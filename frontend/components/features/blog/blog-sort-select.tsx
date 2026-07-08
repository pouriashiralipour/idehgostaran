'use client';

import { useState, useRef } from 'react';
import { ChevronDownIcon } from '@/components/ui/icons';
import { useClickOutside } from '@/hooks/use-click-outside';
import { cn } from '@/lib/utils';

/** A single selectable sort option. */
interface SortOption {
  value: string;
  label: string;
}

/** Sort options mirroring the original Alpine `options` array in blog.html. */
const sortOptions: SortOption[] = [
  { value: 'newest', label: 'جدید‌ترین' },
  { value: 'most-viewed', label: 'پربازدیدترین' },
  { value: 'most-discussed', label: 'پرطرفدارترین' },
  { value: 'oldest', label: 'قدیمی‌ترین' },
];

interface BlogSortSelectProps {
  /** Called with the newly selected option's value. */
  onChange?: (value: string) => void;
}

/**
 * Custom sort dropdown for the blog list toolbar ("مرتب سازی:").
 *
 * Client Component: needs open/closed state and outside-click
 * dismissal (reusing `useClickOutside`, the same hook that backs
 * `UserMenu`). Emits `onChange` so a parent Server Component wrapper
 * can eventually re-fetch/re-sort articles server-side once a real
 * data source exists — this component itself holds no article data.
 */
export function BlogSortSelect({ onChange }: BlogSortSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<SortOption>(sortOptions[0]);
  const containerRef = useRef<HTMLDivElement>(null);

  useClickOutside(containerRef, () => setIsOpen(false), isOpen);

  const handleSelect = (option: SortOption) => {
    setSelected(option);
    setIsOpen(false);
    onChange?.(option.value);
  };

  return (
    <div className="flex items-center gap-3">
      <label className="sm:flex hidden items-center gap-1 font-semibold text-xs text-muted">
        مرتب سازی:
      </label>

      <div ref={containerRef} className="w-52 relative">
        <button
          type="button"
          onClick={() => setIsOpen(prev => !prev)}
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          className="flex items-center w-full h-11 relative bg-secondary rounded-2xl font-semibold text-xs text-foreground px-4"
        >
          <span className="line-clamp-1">{selected.label}</span>
          <ChevronDownIcon
            className={cn(
              'absolute left-3 pointer-events-none transition-transform w-5 h-5',
              isOpen && 'rotate-180'
            )}
          />
        </button>

        {isOpen && (
          <div
            role="listbox"
            className="absolute w-full bg-background rounded-2xl shadow-lg overflow-hidden mt-2 z-30"
          >
            <ul className="max-h-48 overflow-y-auto">
              {sortOptions.map(option => (
                <li key={option.value}>
                  <button
                    type="button"
                    role="option"
                    aria-selected={option.value === selected.value}
                    onClick={() => handleSelect(option)}
                    className="w-full text-right font-medium text-xs text-foreground cursor-pointer hover:bg-secondary px-4 py-3"
                  >
                    {option.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
