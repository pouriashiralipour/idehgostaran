import Link from 'next/link';
import { CartIcon } from '@/components/ui/icons';

interface CartButtonProps {
  /**
   * Number of items currently in the cart. Defaults to 0, in which
   * case the badge is hidden entirely (showing an empty/zero badge
   * is not meaningful UX, unlike the original static markup which
   * always rendered a hardcoded "2").
   */
  itemCount?: number;
}

/**
 * Formats a number using Persian (Farsi) digits, matching the
 * digit style used throughout the rest of the site (e.g. "۲۵ ساعت").
 */
function toPersianDigits(value: number): string {
  return new Intl.NumberFormat('fa-IR').format(value);
}

/**
 * Cart icon button with an animated pulsing badge showing the
 * current item count. Server Component — purely presentational,
 * the actual cart count will eventually come from a cart
 * context/store passed down via `itemCount`.
 */
export function CartButton({ itemCount = 0 }: CartButtonProps) {
  const hasItems = itemCount > 0;

  return (
    <Link
      href="/cart"
      className="inline-flex items-center justify-center relative w-10 h-10 bg-secondary rounded-full text-foreground"
      aria-label={
        hasItems ? `سبد خرید (${toPersianDigits(itemCount)} کالا)` : 'سبد خرید'
      }
    >
      <CartIcon className="w-5 h-5" />
      {hasItems && (
        <span
          className="absolute -top-1 left-0 flex h-5 w-5"
          aria-hidden="true"
        >
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
          <span className="relative inline-flex items-center justify-center rounded-full h-5 w-5 bg-primary text-primary-foreground font-bold text-xs">
            {toPersianDigits(itemCount)}
          </span>
        </span>
      )}
    </Link>
  );
}
