import { LogoIcon } from '@/components/ui/icons';
import { cn } from '@/lib/utils';
import Link from 'next/link';

interface LogoProps {
  /** Optional extra classes for the wrapping <Link>, e.g. spacing tweaks
   * when reused inside the mobile offcanvas header. */
  className?: string;
}

/**
 * Brand logo: icon + two-line wordmark ("ایده گستران" / "جنوب").
 *
 * Reused in both the desktop header and the mobile offcanvas header,
 * always linking back to the home page.
 */

export default function Logo({ className }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn('inline-flex items-center gap-2 text-primary', className)}
    >
      <LogoIcon className="w-6 h-6" />
      <span className="flex flex-col items-start">
        <span className="font-semibold text-sm text-muted">ایده گستران</span>
        <span className="font-black text-xl">جنوب</span>
      </span>
    </Link>
  );
}
