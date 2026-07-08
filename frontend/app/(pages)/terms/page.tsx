import type { Metadata } from 'next';
import { RulesIcon } from '@/components/ui/icons';
import { SectionDivider } from '@/components/ui/section-divider';
import { ExpandableRulesCard } from '@/components/features/terms/expandable-rules-card';
import { TermsFaqList } from '@/components/features/terms/terms-faq-list';

export const metadata: Metadata = {
  title: 'قوانین و مقررات',
};

/**
 * `/terms` — usage rules (expandable card), privacy policy (static
 * card), and an FAQ-style accordion of supplementary terms.
 *
 * Server Component: interactivity is fully isolated into
 * `ExpandableRulesCard` and `TermsFaqItem`.
 */
export default function TermsPage() {
  return (
    <div className="max-w-7xl space-y-14 px-4 mx-auto">
      {/* Hero */}
      <div className="max-w-xl space-y-5 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-3">
          <RulesIcon className="w-10 h-10 text-cyan-500" />
          <h2 className="font-black text-2xl text-center text-foreground bg-gradient-to-l from-transparent to-cyan-300 dark:to-cyan-800 py-5 px-8">
            قوانین و مقررات
          </h2>
          <SectionDivider />
        </div>
        <p className="font-semibold text-sm text-center text-muted">
          در این صفحه شرایط استفاده از وبسایت ایده گستران جنوب را مشاهده
          می‌کنید.
        </p>
      </div>

      <div className="max-w-5xl space-y-10 mx-auto">
        <ExpandableRulesCard />

        {/* Privacy policy — static, no expand/collapse needed per reference */}
        <div className="relative bg-background border border-border rounded-xl space-y-5 p-5">
          <div className="grid gap-y-1.5">
            <h2 className="font-black text-base text-foreground">
              حریم شخصی کاربران
            </h2>
            <p className="font-semibold text-sm text-muted">
              امروزه حفظ حریم شخصی برای اکثر افراد جامعه بسیار مهم است، همانطور
              که این مسئله برای ما مهم است. ما سعی داریم با حفظ حریم شخصی شما،
              حاشیه امنی برای فعالیتتان در این وبسایت بوجود آوریم.
            </p>
          </div>
          <div className="font-semibold text-sm text-muted space-y-3">
            اطلاعاتی که از شما در روند عضویت دریافت می‌کنیم نزد ما محفوظ مانده و
            در اختیار شخص حقیقی یا حقوقی ثالث، به جز در مواردی که به درخواست
            قانون و مراجع ذی‌صلاح الزام‌آور باشد، قرار نخواهد گرفت.
          </div>
        </div>

        {/* Supplementary FAQ */}
        <div className="grid">
          <div className="flex flex-col items-center justify-center space-y-3 mb-5">
            <h2 className="font-black text-xl text-foreground">
              موارد تکمیلی دیگر
            </h2>
            <SectionDivider />
          </div>
          <TermsFaqList />
        </div>
      </div>
    </div>
  );
}
