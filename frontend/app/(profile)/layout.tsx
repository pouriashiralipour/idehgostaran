import { ProfileSidebar } from '@/components/features/profile/profile-sidebar';
import { SiteHeader } from '@/components/layout/header/site-header';
import type { ReactNode } from 'react';

interface ProfileLayoutProps {
  children: ReactNode;
}

/**
 * Layout scoped to `/profile` (the dashboard). Owns the 12-column
 * grid + account sidebar — the same "route-family-exclusive sidebar"
 *
 * `userName`/`avatarSrc` are hardcoded placeholders for now — swap
 * for real session data once auth state is available app-wide.
 */
export default function ProfileLayout({ children }: ProfileLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <SiteHeader />
      <div className="flex-auto py-5">
        <div className="max-w-7xl space-y-14 px-4 mx-auto">
          <div className="grid md:grid-cols-12 grid-cols-1 items-start gap-5">
            <ProfileSidebar
              userName="پوریا شیرالی پور"
              avatarSrc="/images/avatars/01.jpeg"
            />
            <div className="lg:col-span-9 md:col-span-8">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
