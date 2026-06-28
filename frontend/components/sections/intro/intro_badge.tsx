import { TicketIcon } from '@/components/ui/icons';

interface IntroBadgeProps {
  label: string;
  subLabel?: string;
}

/**
 * Animated "discount festival" badge shown above the intro heading.
 * The `animate-pulse` on the pill draws the eye without being
 * distracting — matching the original HTML exactly.
 */
export function IntroBadge({
  label,
  subLabel = ' ایده از شما، گسترش با ما :)',
}: IntroBadgeProps) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="inline-flex items-center gap-1 bg-primary rounded-full font-semibold text-xs text-primary-foreground animate-pulse py-1 px-2">
        <TicketIcon className="w-4 h-4" />
        <span>{label}</span>
      </span>
      <span className="font-semibold text-xs text-primary">
        ایده از شما، گسترش با ما
      </span>
    </div>
  );
}
