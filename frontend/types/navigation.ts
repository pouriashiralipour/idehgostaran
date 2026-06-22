/**
 * Represents a single link in the main navigation bar
 * (e.g. "صفحه اصلی", "مقالات آموزشی").
 */
export interface NavLink {
  id: string;
  title: string;
  href: string;
  /** True if this link should render a "has-submenu" chevron/dropdown. */
  hasSubmenu?: boolean;
  /** Sub-links shown in the dropdown (e.g. "لینکهای مفید" submenu). */
  children?: NavLink[];
}

/**
 * Represents a single link in the user account dropdown
 * (header avatar menu + mobile offcanvas account menu).
 */
export interface UserMenuLink {
  id: string;
  title: string;
  href: string;
  /** Visual variant — "danger" is used for the logout button (red text). */
  variant?: 'default' | 'danger';
}
