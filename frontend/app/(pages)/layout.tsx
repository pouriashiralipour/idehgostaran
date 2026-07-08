import type { ReactNode } from 'react';

import { BlogSidebar } from '@/components/features/blog/blog-sidebar';
import { SiteHeader } from '@/components/layout/header/site-header';
import { Footer } from '@/components/layout/footer/footer';

interface AboutUsLayoutProps {
  children: ReactNode;
}

/**
 * Layout scoped to every `/blog/*` route (list, category, detail).
 *
 * This is the mechanism that keeps the category/tag sidebar exclusive
 * to blog pages: it lives here instead of in the site-wide
 * `(main)/layout.tsx`, so `/`, `/auth`, etc. never render it.
 *
 * Grid mirrors the original HTML's
 * `grid md:grid-cols-12 grid-cols-1 items-start gap-5` container —
 * sidebar takes 4/12 (md) / 3/12 (lg), content takes the rest.
 */
export default function AboutUsLayout({ children }: AboutUsLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <SiteHeader />
      <main className="flex-auto py-5">{children}</main>

      <Footer />
    </div>
  );
}
