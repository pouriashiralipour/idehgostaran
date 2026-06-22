'use client';

import { useState } from 'react';

import { CategoriesMegaMenu } from './categories-mega-menu';

import { CartButton } from './cart-button';
import { UserMenu } from './user-menu';
import { MainNav } from './main-nav';
import Logo from './logo';
import SearchForm from './search-form';
import ThemeToggle from './theme-toggle';
import { MobileMenuButton } from './mobile-menu-button';

/**
 * Site header: top row (logo, mobile menu trigger, categories mega
 * menu, search, theme toggle, cart, user menu) plus the primary nav
 * bar below it.
 *
 * Client Component: owns `isOffcanvasOpen` state, the single source
 * of truth shared between the mobile menu trigger button and the
 * offcanvas panel (added in the next step) — matching the original
 * `x-data="{ offcanvasOpen: false }"` scope on the <header> element.
 */
export function Header() {
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);

  return (
    <header className="relative py-5 z-30">
      <div className="max-w-7xl relative px-4 mx-auto">
        <div className="bg-background rounded-3xl py-3 px-5">
          <div className="flex items-center gap-8 h-20">
            <div className="flex items-center gap-3">
              <MobileMenuButton onClick={() => setIsOffcanvasOpen(true)} />
              <Logo />
            </div>

            <div className="lg:flex hidden items-center gap-5">
              <CategoriesMegaMenu />
              <SearchForm />
            </div>

            <div className="flex items-center md:gap-5 gap-3 mr-auto">
              <ThemeToggle className="hidden lg:inline-flex" />
              <CartButton itemCount={2} />
              <UserMenu />
            </div>
          </div>
        </div>

        <MainNav />
      </div>

      {/*
        MobileOffcanvas will be added in the next step, controlled by
        isOffcanvasOpen / setIsOffcanvasOpen.
      */}
    </header>
  );
}
