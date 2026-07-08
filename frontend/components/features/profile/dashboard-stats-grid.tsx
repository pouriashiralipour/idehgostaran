import { dashboardStats } from '@/data/dashboard-stats';
import { DashboardStatCard } from './dashboard-stat-card';

/**
 * Responsive 4-column (lg) / 2-column (sm) / 1-column stat grid.
 * Server Component — data is static/placeholder for now.
 */
export function DashboardStatsGrid() {
  return (
    <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5 mb-8">
      {dashboardStats.map(stat => (
        <DashboardStatCard key={stat.id} stat={stat} />
      ))}
    </div>
  );
}
