import Link from 'next/link';
import { ScrollToTop } from './scroll-to-top';

import {
  PhoneIcon,
  ClockIcon,
  InstagramIcon,
  TelegramIcon,
  YouTubeIcon,
} from '@/components/ui/icons';
import {
  contactInfo,
  footerAbout,
  footerLinks,
  socialLinks,
  type SocialLink,
} from '@/data/footer';
import type { JSX, SVGProps } from 'react';
import Logo from '../header/logo';
import { NewsletterFrom } from './newsletter-form';

type IconComponent = (props: SVGProps<SVGSVGElement>) => JSX.Element;

/** Maps social link iconName strings to actual icon components. */
const socialIconMap: Record<SocialLink['iconName'], IconComponent> = {
  InstagramIcon,
  TelegramIcon,
  YouTubeIcon,
};

/**
 * Site footer — Server Component.
 *
 * Contains:
 * - ScrollToTop (Client Component)
 * - Logo + contact info bar
 * - About card + quick links + newsletter + social links
 * - Copyright bar
 *
 * Updated for ایده گستران جنوب — a software/web/mobile services company.
 */
export function Footer() {
  return (
    <footer className="pt-20">
      <div className="max-w-7xl px-4 mx-auto">
        {/* Scroll to top */}
        <ScrollToTop />

        {/* Logo + contact info */}
        <div className="flex lg:flex-nowrap flex-wrap gap-8 py-10">
          <div className="md:w-5/12 w-full">
            <Logo />
          </div>

          <div className="md:w-7/12 w-full">
            <div className="flex flex-wrap items-center gap-10">
              {/* Phone */}
              <div className="flex items-center gap-5">
                <span className="flex items-center justify-center w-12 h-12 bg-secondary rounded-full text-muted">
                  <PhoneIcon className="w-5 h-5" />
                </span>
                <div className="flex flex-col font-black space-y-2">
                  <span className="text-sm text-primary">شماره تلفن</span>
                  <span className="text-foreground">{contactInfo.phone}</span>
                </div>
              </div>

              {/* Working hours */}
              <div className="flex items-center gap-5">
                <span className="flex items-center justify-center w-12 h-12 bg-secondary rounded-full text-muted">
                  <ClockIcon className="w-5 h-5" />
                </span>
                <div className="flex flex-col font-black space-y-2">
                  <span className="text-sm text-primary">ساعات کاری</span>
                  <span className="text-foreground">
                    {contactInfo.workingHours}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main footer content */}
        <div className="flex md:flex-nowrap flex-wrap gap-8">
          {/* About card */}
          <div className="md:w-5/12 w-full">
            <div className="bg-secondary rounded-3xl space-y-5 p-8">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                  <div className="w-1 h-1 bg-foreground rounded-full" />
                  <div className="w-2 h-2 bg-foreground rounded-full" />
                </div>
                <div className="font-black text-foreground">درباره ما</div>
              </div>
              <p className="font-semibold text-sm text-muted leading-7">
                {footerAbout}
              </p>
            </div>
          </div>

          {/* Links + Newsletter + Social */}
          <div className="md:w-7/12 w-full">
            <div className="grid sm:grid-cols-5 gap-8">
              {/* Quick links */}
              <div className="sm:col-span-2 space-y-5">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    <div className="w-1 h-1 bg-foreground rounded-full" />
                    <div className="w-2 h-2 bg-foreground rounded-full" />
                  </div>
                  <div className="font-black text-foreground">
                    لینک‌های مفید
                  </div>
                </div>
                <ul className="flex flex-col space-y-1">
                  {footerLinks.map(link => (
                    <li key={link.id}>
                      <Link
                        href={link.href}
                        className="inline-flex font-semibold text-sm text-muted hover:text-primary transition-colors"
                      >
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Newsletter + Social */}
              <div className="sm:col-span-3 space-y-5">
                <NewsletterFrom />

                {/* Social links */}
                <div className="space-y-5">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1">
                      <div className="w-1 h-1 bg-foreground rounded-full" />
                      <div className="w-2 h-2 bg-foreground rounded-full" />
                    </div>
                    <div className="font-black text-foreground">
                      شبکه‌های اجتماعی
                    </div>
                  </div>
                  <ul className="flex flex-wrap items-center gap-5">
                    {socialLinks.map(social => {
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
              </div>
            </div>
          </div>
        </div>

        {/* Copyright bar */}
        <div className="flex items-center gap-3 py-5">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} ایده گستران جنوب — کلیه حقوق محفوظ است
          </p>
          <div className="flex-grow border-t border-border border-dashed" />
        </div>
      </div>
    </footer>
  );
}
