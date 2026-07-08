'use client';

import { useState, type FormEvent } from 'react';
import { SearchIcon } from '@/components/ui/icons';

/**
 * "جستجو مقالات" search box used in the blog sidebar.
 *
 * Client Component: owns controlled input state. Submission is
 * stubbed with `preventDefault` for now — wire to a real
 * `?q=` search route once the articles feed is server-fetched
 * (same seam pattern as `SearchForm` / `MobileSearch`).
 */
export function BlogSearchForm() {
  const [query, setQuery] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // TODO: navigate to /blog?q=<query> once search is wired to real data.
  };

  return (
    <div className="w-full flex flex-col space-y-3 mb-5">
      <span className="font-bold text-sm text-foreground">جستجو مقالات</span>
      <form onSubmit={handleSubmit}>
        <div className="flex items-center relative">
          <label htmlFor="blog-search" className="sr-only">
            عنوان مقاله
          </label>
          <input
            id="blog-search"
            type="text"
            value={query}
            onChange={event => setQuery(event.target.value)}
            className="form-input w-full !ring-0 !ring-offset-0 h-10 bg-secondary !border-0 rounded-xl text-sm text-foreground"
            placeholder="عنوان مقاله.."
          />
          <button
            type="submit"
            aria-label="جستجو"
            className="absolute left-3 text-muted"
          >
            <SearchIcon className="w-5 h-5" />
          </button>
        </div>
      </form>
    </div>
  );
}
