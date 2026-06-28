import {
  CodeBracketIcon,
  CircleStackIcon,
  SwatchIcon,
  BoltIcon,
  LockClosedIcon,
  WrenchIcon,
} from '@/components/ui/icons';
import { featureBadges, type FeatureBadge } from '@/data/features';
import type { JSX, SVGProps } from 'react';

type IconComponent = (props: SVGProps<SVGSVGElement>) => JSX.Element;

/** Maps iconName strings from data layer to actual icon components. */
const badgeIconMap: Record<FeatureBadge['iconName'], IconComponent> = {
  CodeBracketIcon,
  CircleStackIcon,
  SwatchIcon,
  BoltIcon,
  LockClosedIcon,
  WrenchIcon,
};

/**
 * Horizontal strip of six animated feature badges (puzzle, fire, book,
 * forward, video, mentorship) — the "چرا آکادمی نابغه؟" block.
 *
 * Server Component: purely presentational, no interactivity.
 */
export function FeaturesBadges() {
  return (
    <div className="relative bg-secondary rounded-3xl">
      {/* Floating title pill, centred above the card */}
      <div className="relative right-1/2 translate-x-1/2 -translate-y-1/2 inline-flex items-center justify-center h-12 bg-background border border-border rounded-2xl font-black text-foreground text-lg text-center px-8">
        چرا ما انتخاب درستی برای پروژه شما هستیم؟
      </div>

      <div className="flex flex-wrap items-center justify-center gap-10 md:pb-10 pb-5 md:px-10 px-5">
        {featureBadges.map(badge => {
          const Icon = badgeIconMap[badge.iconName];
          return (
            <div
              key={badge.id}
              className={`flex flex-col items-center justify-center text-center ${badge.colorClass} space-y-3 cursor-default animate-pulse`}
            >
              <span className="flex items-center justify-center w-20 h-20 bg-background rounded-full">
                <Icon className="w-8 h-8" />
              </span>
              <span className="font-bold text-sm line-clamp-1">
                {badge.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
