import type { JSX, SVGProps } from 'react';
import {
  SubscriptionIcon,
  AcademicCapIcon,
  StarIcon,
  WalletIcon,
} from '@/components/ui/icons';
import type { DashboardStat, DashboardStatIconName } from '@/types/profile';

type IconComponent = (props: SVGProps<SVGSVGElement>) => JSX.Element;

const statIconMap: Record<DashboardStatIconName, IconComponent> = {
  SubscriptionIcon,
  AcademicCapIcon,
  StarIcon,
  WalletIcon,
};

interface DashboardStatCardProps {
  stat: DashboardStat;
}

/**
 * Single stat tile in the dashboard summary grid (subscription,
 * courses-in-progress, points, wallet balance).
 *
 * Server Component — purely presentational, no interactivity.
 */
export function DashboardStatCard({ stat }: DashboardStatCardProps) {
  const Icon = statIconMap[stat.iconName];

  return (
    <div className="flex items-center gap-3 bg-secondary rounded-2xl cursor-default p-3">
      <span
        className={`flex items-center justify-center w-12 h-12 bg-background rounded-full ${stat.colorClass}`}
      >
        <Icon className="w-5 h-5" />
      </span>
      <div className="flex flex-col items-start text-right space-y-1">
        <span className="font-bold text-xs text-muted line-clamp-1">
          {stat.label}
        </span>
        <span className="font-bold text-sm text-foreground line-clamp-1">
          {stat.value}
        </span>
      </div>
    </div>
  );
}
