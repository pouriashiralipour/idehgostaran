import { Footer } from '@/components/layout/footer/footer';
import { SiteHeader } from '@/components/layout/header/site-header';
import type { ReactNode } from 'react';

interface AboutUsLayout {
  children: ReactNode;
}

/**
 * Layout for aboutUs routes (`/auth`).
 */
export default function AboutUsLayout({ children }: AboutUsLayout) {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <SiteHeader />
      <main className="flex-auto py-5">
        <div className="max-w-7xl space-y-14 px-4 mx-auto">{children}</div>
      </main>
      <Footer />
    </div>
  );
}
