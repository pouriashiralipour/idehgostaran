'use client';

import Link from 'next/link';
import {
  CloseIcon,
  QuestionCircleIcon,
  DocumentIcon,
} from '@/components/ui/icons';
import { MobileSearch } from './mobile-search';
import { MobileCategoriesAccordion } from './mobile-categories-accordion';
import { mobileFooterLinks } from '@/data/navigation';
import { cn } from '@/lib/utils';
import Logo from '../logo';
import MobileThemeSwitch from './mobile-theme-switch';

interface MobileOffcanvasProps {
  /** Whether the offcanvas panel is visible. */
  isOpen: boolean;
  /** Called when the panel should be closed (X button or overlay click). */
  onClose: () => void;
}

/** Maps mobile footer link ids to their icon components. */
const footerLinkIcons: Record<string, React.ReactElement> = {
  qa: <QuestionCircleIcon className="w-5 h-5" />,
  articles: <DocumentIcon className="w-5 h-5" />,
};

/**
 * Mobile offcanvas navigation panel.
 *
 * Slides in from the right on mobile viewports (RTL: `translate-x-full`
 * when closed, `translate-x-0` when open), with a dimmed overlay behind
 * it — matching the original Alpine `x-bind:class="offcanvasOpen ? ..."`.
 *
 * State is lifted to the parent Header component, which owns
 * `isOffcanvasOpen` and passes it down as `isOpen`/`onClose` props.
 */
export function MobileOffcanvas({ isOpen, onClose }: MobileOffcanvasProps) {
  return (
    <>
      {/* Panel */}
      <div
        className={cn(
          'fixed inset-y-0 right-0 xs:w-80 w-72 h-screen bg-background rounded-l-2xl overflow-y-auto transition-transform z-50',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between gap-x-4 sticky top-0 bg-background p-4 z-10">
          <Logo />
          <button
            type="button"
            onClick={onClose}
            aria-label="بستن منو"
            className="text-foreground focus:outline-none hover:text-red-500"
          >
            <CloseIcon className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="space-y-5 p-4">
          <MobileSearch />

          <div className="h-px bg-border" />

          <MobileThemeSwitch />

          <div className="h-px bg-border" />

          <ul className="flex flex-col space-y-1">
            <MobileCategoriesAccordion />

            {mobileFooterLinks.map(link => (
              <li key={link.id}>
                <Link
                  href={link.href}
                  className="w-full flex items-center gap-x-2 relative text-muted transition-all hover:text-foreground py-2"
                >
                  {footerLinkIcons[link.id]}
                  <span className="font-semibold text-xs">{link.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Overlay */}
      <div
        onClick={onClose}
        aria-hidden="true"
        className={cn(
          'fixed inset-0 h-screen bg-secondary/80 cursor-pointer transition-all duration-300 z-40',
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        )}
      />
    </>
  );
}
