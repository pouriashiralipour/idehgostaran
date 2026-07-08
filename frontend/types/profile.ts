/** A single item in the account sidebar menu (پیشخوان,. ...). */
export interface ProfileNavLink {
  id: string;
  title: string;
  href: string;
  iconName: ProfileNavIconName;
}

export type ProfileNavIconName =
  | 'DashboardIcon'
  | 'CoursesIcon'
  | 'HeartIcon'
  | 'WalletIcon'
  | 'CommentsIcon'
  | 'TicketIcon'
  | 'BellIcon'
  | 'PencilIcon'
  | 'LogoutIcon';

/** A single stat tile in the dashboard's 4-column summary grid. */
export interface DashboardStat {
  id: string;
  label: string;
  value: string;
  /** Tailwind text-color token for the icon (e.g. "text-cyan-500"). */
  colorClass: string;
  iconName: DashboardStatIconName;
}

export type DashboardStatIconName =
  | 'SubscriptionIcon'
  | 'AcademicCapIcon'
  | 'StarIcon'
  | 'WalletIcon';
