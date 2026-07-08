import { DashboardStatsGrid } from '@/components/features/profile/dashboard-stats-grid';
import { LearningCoursesCarousel } from '@/components/features/profile/learning-courses-carousel';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'پیشخوان',
};

/**
 * `/profile` — account dashboard: stat summary grid + "courses in
 * progress" carousel.
 *
 * Rendered inside `app/(main)/profile/layout.tsx`, which supplies the
 * account sidebar shared across every `/profile*` route.
 *
 * Server Component: both child sections currently read static
 * placeholder data — swap `dashboardStats`/`enrolledCourses` for real
 * fetches once the account/enrollment backend exists.
 */
export default function ProfileDashboardPage() {
  return (
    <div className="space-y-10">
      <DashboardStatsGrid />
      <div className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            <div className="w-1 h-1 bg-foreground rounded-full" />
            <div className="w-2 h-2 bg-foreground rounded-full" />
          </div>
          <div className="font-black text-foreground">
            دوره های در حال یادگیری
          </div>
        </div>
        <LearningCoursesCarousel />
      </div>
    </div>
  );
}
