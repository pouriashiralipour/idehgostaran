'use client';

import { useState } from 'react';
import Link from 'next/link';

import { ChevronDownIcon, SearchIcon, CloseIcon } from '@/components/ui/icons';
import { mainNavLinks } from '@/data/navigation';
import { cn } from '@/lib/utils';
import { CategoriesMegaMenu } from './categories-mega-menu';
import { MobileMenuButton } from './mobile-menu-button';
import { MobileOffcanvas } from './mobile-offcanvas/mobile-offcanvas';
import { UserMenu } from './user-menu';
import Logo from './logo';
import ThemeToggle from './theme-toggle';
import SearchForm from './search-form';

interface SiteHeaderProps {
  /**
   * Renders the categories mega-menu button + flyout panel.
   *
   * Only blog-related routes (listing / category / detail) pass
   * `true` here. Every other page keeps the header clean, matching
   * the product decision to scope category browsing to the blog
   * section instead of showing it site-wide.
   */
  showCategories?: boolean;
}

/**
 * Site-wide header used by every route EXCEPT the homepage.
 *
 * Rebuilt 1:1 from the legacy static markup in `html/home.html`
 * (single row: logo, categories, nav links, search toggle, theme
 * toggle, user menu) — as opposed to the redesigned homepage header
 * (`Header`), which additionally renders a colored `MainNav` strip.
 *
 * Deliberately ships NO cart button/icon: the cart flow isn't part
 * of this product, so it's dropped instead of being duplicated
 * across two header implementations.
 *
 * Client Component: owns both the mobile offcanvas state AND the
 * desktop search-overlay toggle state — the same dual-state pattern
 * the original Alpine markup used (`offcanvasOpen` + `openSearchBox`
 * on the same `<header>` scope).
 */
export function SiteHeader({ showCategories = false }: SiteHeaderProps) {
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const usefulLinks = mainNavLinks.find(link => link.id === 'useful-links');

  return (
    <header className="relative bg-background/80 backdrop-blur-xl border-b border-border sticky top-0 z-30">
      <div className="max-w-7xl relative px-4 mx-auto">
        <div className="flex items-center gap-4 sm:gap-8 h-20">
          {/* Left cluster: mobile hamburger + logo only — no inline
              search form here, it previously caused mobile overflow
              since SearchForm is `flex-grow` by design. */}
          <div className="flex items-center gap-3">
            <MobileMenuButton onClick={() => setIsOffcanvasOpen(true)} />
            <Logo />
          </div>

          {/* Desktop centre: categories (conditional) + nav links */}
          <div className="lg:flex hidden items-center gap-5">
            {showCategories && <CategoriesMegaMenu />}

            <ul className="flex items-center gap-5">
              <li>
                <Link
                  href="/blog"
                  className="inline-flex text-muted transition-colors hover:text-foreground"
                >
                  <span className="font-semibold text-sm">مقالات آموزشی</span>
                </Link>
              </li>

              {usefulLinks?.children && (
                <li className="relative group/submenu">
                  <Link
                    href="#"
                    className="inline-flex items-center gap-1 text-muted transition-colors hover:text-foreground"
                  >
                    <span className="font-semibold text-sm">
                      {usefulLinks.title}
                    </span>
                    <ChevronDownIcon className="w-5 h-5 transition-transform group-hover/submenu:rotate-180" />
                  </Link>
                  <ul className="absolute top-full right-0 w-56 bg-background border border-border rounded-xl shadow-2xl shadow-black/5 opacity-0 invisible transition-all group-hover/submenu:opacity-100 group-hover/submenu:visible p-3 mt-2">
                    {usefulLinks.children.map(child => (
                      <li key={child.id}>
                        <Link
                          href={child.href}
                          className="flex items-center gap-2 w-full text-foreground transition-colors hover:text-primary px-3 py-2"
                        >
                          <span className="font-semibold text-xs">
                            {child.title}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              )}
            </ul>
          </div>

          {/* Right cluster: search toggle (desktop only) + theme + user */}
          <div className="flex items-center md:gap-5 gap-3 mr-auto">
            <button
              type="button"
              onClick={() => setIsSearchOpen(true)}
              aria-label="جستجو"
              aria-expanded={isSearchOpen}
              className="hidden lg:inline-flex items-center justify-center w-10 h-10 bg-secondary rounded-full text-foreground"
            >
              <SearchIcon className="w-5 h-5" />
            </button>

            <ThemeToggle className="hidden lg:inline-flex" />
            <UserMenu />
          </div>
        </div>
      </div>

      {/* Desktop search overlay — slides down from the top of the
          header only, matching the reference's `openSearchBox`
          panel. `hidden lg:flex` keeps it out of the DOM flow on
          mobile (search there lives inside MobileOffcanvas instead). */}
      <div
        className={cn(
          'absolute inset-x-4 hidden lg:flex flex-col h-full bg-background transition-all',
          isSearchOpen ? 'top-0' : '-top-full'
        )}
      >
        <div className="flex items-center h-full relative">
          <div className="flex-grow">
            <SearchForm />
          </div>
          <button
            type="button"
            onClick={() => setIsSearchOpen(false)}
            aria-label="بستن جستجو"
            className="absolute left-0 inline-flex items-center justify-center w-9 h-9 bg-secondary rounded-full text-muted transition-colors hover:text-red-500"
          >
            <CloseIcon className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Shared mobile offcanvas (same component used by the homepage header) */}
      <MobileOffcanvas
        isOpen={isOffcanvasOpen}
        onClose={() => setIsOffcanvasOpen(false)}
      />
    </header>
  );
}
