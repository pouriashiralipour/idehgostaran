import type { NavLink, UserMenuLink } from '@/types/navigation';

/**
 * Main navigation bar links (the primary-colored bar below the header),
 * extracted from the original HTML. The "لینکهای مفید" entry has a
 * dropdown submenu on hover (desktop only).
 */
export const mainNavLinks: NavLink[] = [
  { id: 'home', title: 'صفحه اصلی', href: '/' },
  { id: 'blog', title: 'مقالات آموزشی', href: '/blog' },
  {
    id: 'useful-links',
    title: 'نمونه کار',
    href: '#',
    hasSubmenu: false,
    children: [
      { id: 'profile', title: 'مشاهده پروفایل', href: '/profile' },
      { id: 'profile-courses', title: 'دوره ها', href: '/profile-courses' },
      { id: 'profile-financial', title: 'مالی', href: '/profile-financial' },
      {
        id: 'profile-comments',
        title: 'پرسش و دیدگاه ها',
        href: '/profile-comments',
      },
    ],
  },
  { id: 'about-us', title: 'درباره ما', href: '/about-us' },
  { id: 'contact-us', title: 'تماس با ما', href: '/contact-us' },
];

/**
 * User account dropdown links, shown both in the header avatar menu
 * and the mobile offcanvas. The logout entry is a button (not a link)
 * in the original markup and uses the "danger" variant for red styling.
 */
export const userMenuLinks: UserMenuLink[] = [
  { id: 'profile', title: 'مشاهده پروفایل', href: '/profile' },
  { id: 'profile-courses', title: 'دوره ها', href: '/profile-courses' },
  { id: 'profile-financial', title: 'مالی', href: '/profile-financial' },
  {
    id: 'profile-comments',
    title: 'پرسش و دیدگاه ها',
    href: '/profile-comments',
  },
  { id: 'logout', title: 'خروج از حساب', href: '#', variant: 'danger' },
];

/** Mobile offcanvas footer links (Q&A and articles shortcuts). */
export const mobileFooterLinks: NavLink[] = [
  { id: 'blog', title: 'مقالات آموزشی', href: '/blog' },
  { id: 'resume', title: 'نمونه کارها', href: '/resume' },
  { id: 'about-us', title: 'درباره ما', href: '/about-us' },
  { id: 'contact-us', title: 'تماس با ما', href: '/contact-us' },
];
