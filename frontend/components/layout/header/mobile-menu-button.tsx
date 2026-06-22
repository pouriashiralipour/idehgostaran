'use client';

import { MenuIcon } from '@/components/ui/icons';

interface MobileMenuButtonProps {
  /** Called when the button is clicked, intended to open the offcanvas menu. */
  onClick: () => void;
}

/**
 * Hamburger button that opens the mobile offcanvas menu.
 * Visible only below the `lg` breakpoint (`lg:hidden`).
 *
 * Client Component: requires an onClick handler, which will be wired
 * to the offcanvas open/close state managed by the parent Header.
 */
export function MobileMenuButton({ onClick }: MobileMenuButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="باز کردن منو"
      className="lg:hidden inline-flex items-center justify-center relative w-10 h-10 bg-secondary rounded-full text-foreground"
    >
      <MenuIcon className="w-6 h-6" />
    </button>
  );
}
