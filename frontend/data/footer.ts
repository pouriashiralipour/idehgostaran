export interface FooterLink {
  id: string;
  title: string;
  href: string;
}

export interface SocialLink {
  id: string;
  label: string;
  href: string;
  iconName: 'InstagramIcon' | 'TelegramIcon' | 'YouTubeIcon';
}

export interface ContactInfo {
  phone: string;
  workingHours: string;
}

/** Company contact details shown in the footer top bar. */
export const contactInfo: ContactInfo = {
  phone: '۰۷۱−۱۲۳۴۵۶۷۸',
  workingHours: '۰۹:۰۰ - ۱۸:۰۰',
};

/** Short about text for the footer description card. */
export const footerAbout =
  'ایده گستران جنوب یک تیم متخصص در توسعه نرم‌افزار، طراحی وب و اپلیکیشن موبایل است. با بهره‌گیری از جدیدترین تکنولوژی‌های روز دنیا — از Next.js و Django تا Flutter و هوش مصنوعی — ایده شما را به یک محصول دیجیتال حرفه‌ای تبدیل می‌کنیم.';

/** Quick links shown in the footer link column. */
export const footerLinks: FooterLink[] = [
  { id: 'about', title: 'درباره ما', href: '/about' },
  { id: 'services', title: 'خدمات ما', href: '/services' },
  { id: 'portfolio', title: 'نمونه کارها', href: '/portfolio' },
  { id: 'blog', title: 'مقالات و اخبار', href: '/blog' },
  { id: 'contact', title: 'ارتباط با ما', href: '/contact' },
];

/** Social media links shown in the footer. */
export const socialLinks: SocialLink[] = [
  {
    id: 'instagram',
    label: 'اینستاگرام',
    href: '#',
    iconName: 'InstagramIcon',
  },
  { id: 'telegram', label: 'تلگرام', href: '#', iconName: 'TelegramIcon' },
  { id: 'youtube', label: 'یوتیوب', href: '#', iconName: 'YouTubeIcon' },
];
