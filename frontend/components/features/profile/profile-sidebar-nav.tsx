'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { JSX, SVGProps } from 'react';

import {
  DashboardIcon,
  CoursesIcon,
  HeartIcon,
  WalletIcon,
  CommentsIcon,
  TicketIcon,
  BellIcon,
  PencilIcon,
  LogoutIcon,
} from '@/components/ui/icons';
import { profileNavLinks } from '@/data/profile-nav';
import type { ProfileNavIconName } from '@/types/profile';
import { cn } from '@/lib/utils';

type IconComponent = (props: SVGProps<SVGSVGElement>) => JSX.Element;

/** Maps each `iconName` string from the data layer to its icon component. */
const navIconMap: Record<ProfileNavIconName, IconComponent> = {
  DashboardIcon,
  CoursesIcon,
  HeartIcon,
  WalletIcon,
  CommentsIcon,
  TicketIcon,
  BellIcon,
  PencilIcon,
  LogoutIcon,
};

/**
 * Account sidebar menu — highlights the active route (primary
 * background + `text-primary-foreground`) instead of relying on a
 * hardcoded "current page" class like the legacy static HTML did.
 *
 * Client Component: needs `usePathname()` for active-link detection.
 * The logout entry stays a plain `<button>` (no real sign-out mutation
 * wired up yet), matching the reference markup and the same TODO-seam
 * pattern used elsewhere (e.g. `AuthFlow`).
 */
export function ProfileSidebarNav() {
  const pathname = usePathname();

  return (
    <ul className="flex flex-col space-y-3 bg-secondary rounded-2xl p-5">
      {profileNavLinks.map(link => {
        const Icon = navIconMap[link.iconName];
        const isActive = pathname === link.href;

        return (
          <li key={link.id}>
            <Link
              href={link.href}
              aria-current={isActive ? 'page' : undefined}
              className={cn(
                'w-full h-11 inline-flex items-center text-right gap-3 rounded-full transition-colors px-4',
                isActive
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-background text-muted hover:bg-primary hover:text-primary-foreground'
              )}
            >
              <Icon className="w-5 h-5" />
              <span className="font-semibold text-xs">{link.title}</span>
            </Link>
          </li>
        );
      })}

      <li>
        <button
          type="button"
          className="w-full h-11 inline-flex items-center text-right gap-3 bg-background rounded-full text-muted transition-colors hover:bg-primary hover:text-primary-foreground px-4"
        >
          <LogoutIcon className="w-5 h-5" />
          <span className="font-semibold text-xs">خروج از حساب</span>
        </button>
      </li>
    </ul>
  );
}
