'use client';

import { useState } from 'react';
import { HeartIcon } from '@/components/ui/icons';
import { cn } from '@/lib/utils';

interface SaveArticleButtonProps {
  articleId: string;
  /**
   * Overrides the default size/position/background utilities (merged
   * via `cn`, so conflicting classes like `w-11` vs `w-9` resolve
   * correctly). Lets callers reuse this same toggle as either an
   * inline button or a floating circular bookmark over an image.
   */
  className?: string;
}

/**
 * Bookmark/save toggle for a single article card.
 *
 * Client Component: owns the local `isSaved` state. Kept as a small,
 * single-purpose island so the parent card can stay a Server
 * Component — same pattern as isolating `ThemeToggle`/`CartButton`
 * from the otherwise static header layout.
 *
 * TODO: wire `onClick` to the real save/unsave mutation once the
 * backend endpoint exists; local state is a placeholder for now.
 */
export function SaveArticleButton({
  articleId,
  className,
}: SaveArticleButtonProps) {
  const [isSaved, setIsSaved] = useState(false);

  return (
    <button
      type="button"
      onClick={() => setIsSaved(prev => !prev)}
      aria-pressed={isSaved}
      aria-label={isSaved ? 'حذف از مقالات ذخیره‌شده' : 'ذخیره مقاله'}
      data-article-id={articleId}
      className={cn(
        'flex-shrink-0 w-11 h-11 inline-flex items-center justify-center bg-background rounded-full transition-colors',
        isSaved ? 'text-red-500' : 'text-muted hover:text-red-500',
        className
      )}
    >
      <HeartIcon className="w-5 h-5" />
    </button>
  );
}
