import type { Metadata } from 'next';
import { LogoIcon } from '@/components/ui/icons';
import { SectionDivider } from '@/components/ui/section-divider';
import { aboutFeatures } from '@/data/about';
import { AboutFeatureItem } from '@/components/features/about/about-feature-item';

export const metadata: Metadata = {
  title: 'درباره ما',
  description: 'داستان شکل‌گیری ایده گستران جنوب و فعالیت‌های تیم ما.',
};

/**
 * `/about-us` — static company story + activity highlights.
 *
 * Server Component: fully static content, no interactivity anywhere
 * on this page.
 */
export default function AboutUsPage() {
  return (
    <div className="max-w-7xl space-y-14 px-4 mx-auto">
      {/* Hero: logo mark + heading + intro paragraph */}
      <div className="max-w-xl space-y-5 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-3">
          <LogoIcon className="w-10 h-10 text-yellow-500 -rotate-[120deg]" />
          <h2 className="font-black text-2xl text-center text-foreground bg-gradient-to-l from-transparent to-yellow-300 dark:to-yellow-800 py-5 px-8">
            داستان شکل‌گیری ایده گستران جنوب
          </h2>
          <SectionDivider />
        </div>
        <p className="font-semibold text-sm text-center text-muted">
          تیم ما متشکل از چند متخصص در حوزه‌های مختلف توسعه نرم‌افزار تصمیم گرفت
          خدماتی حرفه‌ای در زمینه طراحی و توسعه وب، اپلیکیشن موبایل و
          نرم‌افزارهای اختصاصی ارائه دهد. هدفمان به اشتراک گذاشتن دانش و تجربه
          خود برای رشد کسب‌وکارهای مشتریانمان است.
        </p>
      </div>

      {/* Activity highlights */}
      <div className="max-w-5xl space-y-10 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-3">
          <p className="font-bold text-sm text-muted">
            از فعالیت‌های ایده گستران جنوب برایتان بگوییم
          </p>
          <h2 className="font-black text-2xl text-foreground">
            بخشی از فعالیت‌های تیم ما
          </h2>
          <SectionDivider />
        </div>

        {aboutFeatures.map(feature => (
          <AboutFeatureItem key={feature.id} feature={feature} />
        ))}

        <div className="flex flex-col items-center justify-center space-y-3">
          <h2 className="font-black text-2xl text-foreground">و...</h2>
        </div>
      </div>
    </div>
  );
}
