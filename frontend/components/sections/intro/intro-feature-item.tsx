import {
  MobileDesignIcon,
  SupportIcon,
  UiDesignIcon,
  WebsiteDesignIcon,
} from '@/components/ui/icons';

import type { IntroFeature } from '@/data/intro';
import type { JSX, SVGProps } from 'react';

/**
 * Maps each color token to its Tailwind ring pseudo-element class.
 * Using a lookup object (not template literals) so Tailwind's static
 * scanner detects and includes these classes in the production bundle.
 */
const ringColorMap: Record<IntroFeature['color'], string> = {
  success: 'before:bg-success/20',
  warning: 'before:bg-warning/20',
  primary: 'before:bg-primary/20',
  info: 'before:bg-info/20',
};

/**
 * Maps each color token to its Tailwind text-color class for the icon.
 * Same reason as above — static strings required by Tailwind's scanner.
 */
const iconColorMap: Record<IntroFeature['color'], string> = {
  success: 'text-success',
  warning: 'text-warning',
  primary: 'text-primary',
  info: 'text-info',
};

type IconComponent = (props: SVGProps<SVGSVGElement>) => JSX.Element;

/**
 * Maps iconName strings from the data layer to actual icon components.
 * Keeps JSX out of data/intro.ts (which must stay a .ts file).
 */
const iconMap: Record<IntroFeature['iconName'], IconComponent> = {
  SupportIcon,
  WebsiteDesignIcon,
  MobileDesignIcon,
  UiDesignIcon,
};

interface IntroFeatureItemProps {
  feature: IntroFeature;
}

/**
 * A single feature row: colored icon with a soft glow ring + label.
 * The ring is a pseudo-element positioned behind the icon, matching
 * the original `before:` utility classes in the HTML.
 */
export function IntroFeatureItem({ feature }: IntroFeatureItemProps) {
  const Icon = iconMap[feature.iconName];
  const ringClass = ringColorMap[feature.color];
  const iconClass = `w-6 h-6 ${iconColorMap[feature.color]}`;

  return (
    <div className="flex items-center gap-3">
      <span
        className={`relative before:content-[''] before:absolute before:-bottom-1 before:-right-2 before:w-6 before:h-6 before:rounded-full ${ringClass}`}
      >
        <Icon className={iconClass} />
      </span>
      <span className="font-semibold text-sm text-foreground">
        {feature.label}
      </span>
    </div>
  );
}
