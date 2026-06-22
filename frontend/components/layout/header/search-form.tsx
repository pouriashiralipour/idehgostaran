'use client';

/**
 * Desktop search form, shown in the main header row (lg breakpoint+).
 *
 * Currently a presentational form with local input state — no actual
 * search request is wired up yet, since the backend isn't available.
 * `onSubmit` is wired to `preventDefault` so the form is functional
 * and ready to be connected to real search logic (e.g. router push to
 * `/search?q=...`) later without changing the markup.
 */

import { SearchIcon } from '@/components/ui/icons';
import { FormEvent, useState } from 'react';

export default function SearchForm() {
  const [query, setQuery] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="flex-grow">
      <div className="flex items-center relative">
        <input
          id="desktop-search"
          type="text"
          value={query}
          onChange={event => setQuery(event.target.value)}
          className="form-input !ring-0 !ring-offset-0 h-10 bg-secondary !border-0 rounded-xl text-foreground"
          placeholder="جســـتجو.."
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
  );
}
