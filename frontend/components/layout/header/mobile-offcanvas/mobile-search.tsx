'use client';

import { useState, type FormEvent } from 'react';
import { SearchIcon } from '@/components/ui/icons';

/**
 * Search form shown inside the mobile offcanvas menu.
 *
 * Visually distinct from the desktop SearchForm (icon on the right
 * for RTL, bordered input, full width), so it's kept as a separate
 * component rather than a `variant` prop — see the architectural
 * note in the PR description for this step.
 */
export function MobileSearch() {
  const [query, setQuery] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // TODO: wire up real search navigation once backend/search route exists.
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex items-center relative">
        <label htmlFor="mobile-search" className="sr-only">
          جستجو
        </label>
        <input
          id="mobile-search"
          type="text"
          value={query}
          onChange={event => setQuery(event.target.value)}
          className="form-input w-full h-10 !ring-0 !ring-offset-0 bg-secondary border border-border focus:border-border rounded-xl text-sm text-foreground pr-10"
          placeholder="دنبال چی میگردی؟"
        />
        <button
          type="submit"
          aria-label="جستجو"
          className="absolute right-3 text-muted"
        >
          <SearchIcon className="w-5 h-5" />
        </button>
      </div>
    </form>
  );
}
