import Link from 'next/link';
import { IntroFeatureItem } from './intro-feature-item';
import { introFeatures } from '@/data/intro';
import { ArrowDiagonalIcon, PhoneIcon } from '@/components/ui/icons';
import { IntroBadge } from './intro_badge';

/**
 * Left column of the intro section containing:
 * - Promo badge
 * - Main heading
 * - Sub-description
 * - Two CTA buttons (start learning / consultation)
 * - 2×2 feature grid
 *
 * Server Component — purely presentational, no interactivity needed.
 */
export function IntroContent() {
  return (
    <div className="space-y-10">
      <div className="space-y-5">
        <IntroBadge
          label="راهکارهای نوین طراحی وب و اپلیکیشن
"
        />

        <h2 className="font-black sm:text-5xl text-3xl text-foreground">
          ایده شما را به یک <br />
          محصول دیجیتال قدرتمند تبدیل می‌کنیم
        </h2>

        <p className="sm:text-base text-sm text-muted">
          ما با طراحی وب‌سایت‌های حرفه‌ای، توسعه اپلیکیشن‌های مدرن و ارائه
          راهکارهای نرم‌افزاری مقیاس‌پذیر، به کسب‌وکارها کمک می‌کنیم تا حضور
          قدرتمندی در دنیای دیجیتال داشته باشند.
        </p>

        <div className="flex flex-wrap items-center gap-3">
          <Link
            href="/series"
            className="inline-flex items-center justify-center gap-1 h-11 bg-primary rounded-full text-primary-foreground transition-all hover:opacity-80 px-4"
          >
            <span className="whitespace-nowrap font-semibold text-sm">
              شروع همکاری
            </span>
            <ArrowDiagonalIcon className="w-5 h-5" />
          </Link>

          <Link
            href="/contact-us"
            className="inline-flex items-center justify-center gap-1 h-11 bg-foreground rounded-full text-background transition-all hover:opacity-80 px-4"
          >
            <span className="whitespace-nowrap font-semibold text-sm">
              دریافت مشاوره رایگان
            </span>
            <PhoneIcon className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* 2×2 feature grid */}
      <div className="grid sm:grid-cols-2 gap-8">
        {introFeatures.map(feature => (
          <IntroFeatureItem key={feature.id} feature={feature} />
        ))}
      </div>
    </div>
  );
}
