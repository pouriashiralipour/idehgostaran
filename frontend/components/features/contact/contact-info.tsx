import Link from 'next/link';
import type { JSX, SVGProps } from 'react';
import {
  InstagramIcon,
  TelegramIcon,
  YouTubeIcon,
} from '@/components/ui/icons';
import {
  contactDetails,
  contactSocialLinks,
  type ContactSocialLink,
} from '@/data/contact';

type IconComponent = (props: SVGProps<SVGSVGElement>) => JSX.Element;

const socialIconMap: Record<ContactSocialLink['iconName'], IconComponent> = {
  InstagramIcon,
  TelegramIcon,
  YouTubeIcon,
};

/**
 * Left column of the contact page: social links, office phone, and
 * office address — all static/placeholder data.
 *
 * Server Component — purely presentational, no interactivity.
 */
export function ContactInfo() {
  return (
    <div className="md:col-span-7 space-y-8">
      <div className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            <div className="w-1 h-1 bg-foreground rounded-full"></div>
            <div className="w-2 h-2 bg-foreground rounded-full"></div>
          </div>
          <div className="font-black text-foreground">شبکه های اجتماعی</div>
        </div>
        <ul className="flex flex-wrap items-center gap-5">
          {contactSocialLinks.map(social => {
            const Icon = socialIconMap[social.iconName];
            return (
              <li key={social.id}>
                <Link
                  href={social.href}
                  aria-label={social.label}
                  className="flex items-center justify-center w-12 h-12 bg-secondary rounded-full text-foreground transition-colors hover:text-primary"
                >
                  <Icon className="w-5 h-5" />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            <div className="w-1 h-1 bg-foreground rounded-full"></div>
            <div className="w-2 h-2 bg-foreground rounded-full"></div>
          </div>
          <div className="font-black text-foreground">شماره تماس دفتر</div>
        </div>
        <a
          href={`tel:${contactDetails.phone}`}
          className="inline-flex font-bold text-base text-foreground transition-colors hover:text-primary"
          dir="ltr"
        >
          {contactDetails.phone}
        </a>
      </div>
      <div className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            <div className="w-1 h-1 bg-foreground rounded-full"></div>
            <div className="w-2 h-2 bg-foreground rounded-full"></div>
          </div>
          <div className="font-black text-foreground">آدرس دفتر</div>
        </div>
        <span className="inline-flex font-bold text-base text-foreground transition-colors hover:text-primary">
          {contactDetails.address}
        </span>
      </div>
    </div>
  );
}
