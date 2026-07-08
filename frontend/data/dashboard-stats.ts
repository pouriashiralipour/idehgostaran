import type { DashboardStat } from '@/types/profile';

/**
 * Placeholder dashboard summary tiles. Replace with a real fetch
 * (e.g. `getUserDashboardStats(userId)`) once account/subscription
 * data is available from the backend.
 */
export const dashboardStats: DashboardStat[] = [
  {
    id: 'subscription',
    label: 'باقیمانده اشتراک',
    value: 'عضو ویژه نیستید',
    colorClass: 'text-cyan-500',
    iconName: 'SubscriptionIcon',
  },
  {
    id: 'learning',
    label: 'درحال یادگیری',
    value: '۷ دوره',
    colorClass: 'text-green-500',
    iconName: 'AcademicCapIcon',
  },
  {
    id: 'points',
    label: 'امتیازات',
    value: '۸۵,۴۸۰ ستاره',
    colorClass: 'text-yellow-500',
    iconName: 'StarIcon',
  },
  {
    id: 'wallet',
    label: 'موجودی کیف پول',
    value: '۱,۰۷۹,۰۰۰ تومان',
    colorClass: 'text-violet-500',
    iconName: 'WalletIcon',
  },
];
