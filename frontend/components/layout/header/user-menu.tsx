'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import { ChevronDownIcon, UserIcon } from '@/components/ui/icons';
import { userMenuLinks } from '@/data/navigation';
import { useClickOutside } from '@/hooks/use-click-outside';
import { cn } from '@/lib/utils';

interface UserMenuProps {
  /** Display name shown next to the avatar (e.g. from the authenticated user). */
  userName?: string;
}

/**
 * User account dropdown shown in the desktop header — avatar, name,
 * and a chevron that opens a dropdown with profile/orders/logout links.
 *
 * Client Component: manages open/closed state and closes on outside
 * click (replacing the original `x-data="{ isOpen: false }"` +
 * `x-on:click.outside` Alpine pattern).
 */
export function UserMenu({ userName = 'جلال بهرامی راد' }: UserMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useClickOutside(menuRef, () => setIsOpen(false), isOpen);

  return (
    <div ref={menuRef} className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(prev => !prev)}
        aria-haspopup="menu"
        aria-expanded={isOpen}
        className="flex items-center sm:gap-3 gap-1"
      >
        <span className="inline-flex items-center justify-center w-9 h-9 bg-secondary rounded-full text-foreground">
          <UserIcon className="w-5 h-5" />
        </span>
        <span className="xs:flex flex-col items-start hidden text-xs space-y-1">
          <span className="font-semibold text-foreground">{userName}</span>
          <span className="font-semibold text-muted">خوش آمـــدید</span>
        </span>
        <span
          className={cn(
            'text-foreground transition-transform',
            isOpen && 'rotate-180'
          )}
        >
          <ChevronDownIcon className="w-5 h-5" />
        </span>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 pt-3" role="menu">
          <div className="w-56 bg-background border border-border rounded-xl shadow-2xl shadow-black/5 p-3">
            {userMenuLinks.map(link =>
              link.id === 'logout' ? (
                <button
                  key={link.id}
                  type="button"
                  role="menuitem"
                  className="flex items-center gap-2 w-full text-red-500 transition-colors hover:text-red-700 px-3 py-2"
                >
                  <span className="font-semibold text-xs">{link.title}</span>
                </button>
              ) : (
                <Link
                  key={link.id}
                  href={link.href}
                  role="menuitem"
                  className="flex items-center gap-2 w-full text-foreground transition-colors hover:text-primary px-3 py-2"
                >
                  <span className="font-semibold text-xs">{link.title}</span>
                </Link>
              )
            )}
          </div>
        </div>
      )}
    </div>
  );
}
