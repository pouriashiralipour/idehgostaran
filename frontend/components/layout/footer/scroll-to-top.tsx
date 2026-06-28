'use client';

import { ChevronUpIcon } from '@/components/ui/icons';

/**
 * Scroll-to-top button with a dashed divider line on each side.
 * Client Component: needs window.scrollTo on click.
 */
export function ScrollToTop() {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <div className="flex items-center gap-3">
      <div className="flex-grow border-t border-border border-dashed" />
      <button
        type="button"
        onClick={handleClick}
        className="flex-shrink-0 h-11 inline-flex items-center gap-3 bg-secondary rounded-full text-foreground transition-colors hover:text-primary px-4"
      >
        <span className="text-xs">برگشت به بالا</span>
        <ChevronUpIcon className="w-5 h-5" />
      </button>
    </div>
  );
}
