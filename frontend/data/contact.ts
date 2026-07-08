export interface ContactSocialLink {
  id: string;
  label: string;
  href: string;
  iconName: 'InstagramIcon' | 'TelegramIcon' | 'YouTubeIcon';
}

export interface ContactDetails {
  phone: string;
  address: string;
}

/**
 * Office contact details for the /contact-us page — separate from
 * `data/footer.ts`'s `contactInfo` (which only holds phone + working
 * hours for the footer strip) since this page also needs a full
 * address and reuses the footer's social icon set.
 */
export const contactDetails: ContactDetails = {
  phone: '021-123-45678',
  address: 'استان، شهر، خیابان (...)، کوچه (...)، پلاک (...)',
};

export const contactSocialLinks: ContactSocialLink[] = [
  {
    id: 'instagram',
    label: 'اینستاگرام',
    href: '#',
    iconName: 'InstagramIcon',
  },
  { id: 'telegram', label: 'تلگرام', href: '#', iconName: 'TelegramIcon' },
  { id: 'youtube', label: 'یوتیوب', href: '#', iconName: 'YouTubeIcon' },
];
