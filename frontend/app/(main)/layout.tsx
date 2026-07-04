import type { ReactNode } from 'react';

import { Footer } from '@/components/layout/footer/footer';
import { Header } from '@/components/layout/header/header';

interface MainLayoutProps {
  children: ReactNode;
}

/**
 * Layout for every public/marketing page (home, blog, etc.).
 *
 * Owns the sticky-footer flex column (`min-h-screen flex flex-col`)
 * plus the site-wide Header and Footer. Previously this lived in the
 * root layout; it moved here so that `(auth)` routes can opt out of
 * this chrome entirely without any conditional rendering logic.
 */
export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-secondary">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
