'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';

interface BlogLoadMoreButtonProps {
  /** Called when the user requests more articles. */
  onLoadMore: () => void | Promise<void>;
  /** Hide entirely once there is nothing left to fetch. */
  hasMore?: boolean;
}

/**
 * "در حال بارگذاری" pagination button for the blog list.
 *
 * Client Component: tracks its own `isLoading` state around the async
 * `onLoadMore` callback so the parent stays a plain data-owner and
 * doesn't need to manage spinner UI itself.
 */
export function BlogLoadMoreButton({
  onLoadMore,
  hasMore = true,
}: BlogLoadMoreButtonProps) {
  const [isLoading, setIsLoading] = useState(false);

  if (!hasMore) return null;

  const handleClick = async () => {
    setIsLoading(true);
    try {
      await onLoadMore();
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center mt-8">
      <button
        type="button"
        onClick={handleClick}
        disabled={isLoading}
        className="h-11 inline-flex items-center justify-center gap-1 bg-secondary rounded-full text-primary transition-opacity disabled:opacity-60 px-8"
      >
        <span className="font-semibold text-sm">
          {isLoading ? 'در حال بارگذاری...' : 'مشاهده بیشتر'}
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className={cn('w-5 h-5', isLoading && 'animate-spin')}
        >
          <path d="M21 12a9 9 0 1 1-6.219-8.56" />
        </svg>
      </button>
    </div>
  );
}
