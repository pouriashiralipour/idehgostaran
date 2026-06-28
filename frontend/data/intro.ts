export interface IntroFeature {
  id: string;
  label: string;
  /** Tailwind color token used for both the icon text color and the bg ring. */
  color: 'success' | 'warning' | 'primary' | 'info';
  /** Icon component name — resolved to an actual component in IntroFeatureItem. */
  iconName:
    | 'WebsiteDesignIcon'
    | 'MobileDesignIcon'
    | 'UiDesignIcon'
    | 'SupportIcon';
}

/**
 * Four trust-building feature highlights shown in the intro section.
 * Colors and icon names map directly to tokens defined in globals.css
 * and components in icons.tsx — no JSX here, keeping data layer pure.
 */
export const introFeatures: IntroFeature[] = [
  {
    id: 'courses',
    label: 'طراحی وب‌سایت های اختصاصی',
    color: 'success',
    iconName: 'WebsiteDesignIcon',
  },
  {
    id: 'guarantee',
    label: 'توسعه اپلیکیشن موبایل',
    color: 'warning',
    iconName: 'MobileDesignIcon',
  },
  {
    id: 'learning',
    label: 'ساخت نرم‌افزارهای اختصاصی',
    color: 'primary',
    iconName: 'UiDesignIcon',
  },
  {
    id: 'support',
    label: 'پشتیبانی و توسعه مداوم',
    color: 'info',
    iconName: 'SupportIcon',
  },
];
