import type { ProfileNavLink } from '@/types/profile';

/**
 * Account sidebar navigation — mirrors the legacy flat-file routes
 * (profile.html, profile-courses.html, ...) 1:1 as Next.js paths.
 * Only `/profile` (the dashboard) is implemented so far; the rest are
 * wired as real hrefs so `ProfileSidebar`'s active-state highlighting
 * and navigation work immediately once each page is built.
 */
export const profileNavLinks: ProfileNavLink[] = [
  {
    id: 'dashboard',
    title: 'پیشخوان',
    href: '/profile',
    iconName: 'DashboardIcon',
  },
  {
    id: 'courses',
    title: 'دوره ها',
    href: '/profile-courses',
    iconName: 'CoursesIcon',
  },
  {
    id: 'wishlist',
    title: 'علاقمندی ها',
    href: '/profile-wishlist',
    iconName: 'HeartIcon',
  },
  {
    id: 'financial',
    title: 'مالی و اشتراک',
    href: '/profile-financial',
    iconName: 'WalletIcon',
  },
  {
    id: 'comments',
    title: 'دیدگاه و پرسشهای شما',
    href: '/profile-comments',
    iconName: 'CommentsIcon',
  },
  {
    id: 'tickets',
    title: 'تیکت و پشتیبانی',
    href: '/profile-tickets',
    iconName: 'TicketIcon',
  },
  {
    id: 'notifications',
    title: 'اعلانات',
    href: '/profile-notifications',
    iconName: 'BellIcon',
  },
  {
    id: 'edit',
    title: 'ویرایش پروفایل',
    href: '/profile-edit',
    iconName: 'PencilIcon',
  },
];
