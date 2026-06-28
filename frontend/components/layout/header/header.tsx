'use client';

import { useState } from 'react';

import { MobileMenuButton } from './mobile-menu-button';
import { CategoriesMegaMenu } from './categories-mega-menu';

import { CartButton } from './cart-button';
import { UserMenu } from './user-menu';
import { MainNav } from './main-nav';
import { MobileOffcanvas } from './mobile-offcanvas/mobile-offcanvas';
import Logo from './logo';
import SearchForm from './search-form';
import ThemeToggle from './theme-toggle';

/**
 * Site header: top row (logo, mobile menu trigger, categories mega
 * menu, search, theme toggle, cart, user menu) plus the primary nav
 * bar below it, and the full mobile offcanvas panel.
 *
 * Client Component: owns `isOffcanvasOpen` state — the single source
 * of truth shared between MobileMenuButton (opens) and MobileOffcanvas
 * (reads + closes), matching the original Alpine
 * `x-data="{ offcanvasOpen: false }"` scope on the <header> element.
 */
export function Header() {
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);

  return (
    <header className="relative py-5 z-30">
      <div className="max-w-7xl relative px-4 mx-auto">
        <div className="bg-background rounded-3xl py-3 px-5">
          <div className="flex items-center gap-8 h-20">
            {/* Left cluster: hamburger + logo */}
            <div className="flex items-center gap-3">
              <MobileMenuButton onClick={() => setIsOffcanvasOpen(true)} />
              <Logo />
            </div>

            {/* Desktop centre: mega menu + search */}
            <div className="lg:flex hidden items-center gap-5">
              {/* <CategoriesMegaMenu /> */}
              <SearchForm />
            </div>

            {/* Right cluster: theme, cart, user */}
            <div className="flex items-center md:gap-5 gap-3 mr-auto">
              <ThemeToggle className="hidden lg:inline-flex" />
              {/* <CartButton itemCount={2} /> */}
              <UserMenu />
            </div>
          </div>
        </div>

        {/* Desktop primary nav bar */}
        <MainNav />
      </div>

      {/* Mobile offcanvas — controlled by isOffcanvasOpen */}
      <MobileOffcanvas
        isOpen={isOffcanvasOpen}
        onClose={() => setIsOffcanvasOpen(false)}
      />
    </header>
  );
}
