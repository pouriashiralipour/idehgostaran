import Image from 'next/image';
import Link from 'next/link';

import { ChevronLeftIcon, QuestionCircleIcon } from '@/components/ui/icons';

export default function CounselingSection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="flex flex-col-reverse items-center gap-12 md:flex-row">
        {/* Content */}

        <div className="flex-1 max-w-3xl">
          <div className="mb-8 flex flex-col items-start gap-4">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
              <QuestionCircleIcon className="h-8 w-8" />
            </span>

            <h2 className="text-3xl font-black leading-relaxed text-foreground lg:text-4xl">
              انتخاب تیم درست،
              <span className="text-primary">
                {' '}
                اولین قدم موفقیت پروژه شماست
              </span>
            </h2>
          </div>

          <div className="space-y-5 text-justify leading-8">
            <p className="font-medium text-muted">
              شروع یک پروژه نرم‌افزاری فقط با نوشتن چند خط کد نیست؛ انتخاب یک
              تیم توسعه حرفه‌ای می‌تواند مسیر موفقیت یا شکست یک محصول دیجیتال را
              مشخص کند.
            </p>

            <p className="font-bold text-foreground">
              ما در ایده گستران جنوب قبل از شروع هر پروژه، نیازهای کسب‌وکار،
              اهداف شما و بهترین مسیر فنی را بررسی می‌کنیم تا محصولی دقیق،
              مقیاس‌پذیر و متناسب با نیاز واقعی شما توسعه دهیم.
            </p>

            <p className="font-medium text-muted">
              خدمات ما شامل طراحی و توسعه وب‌سایت، اپلیکیشن موبایل، نرم‌افزارهای
              اختصاصی، API، زیرساخت‌های Docker و DevOps و پیاده‌سازی معماری‌های
              مدرن با React، Next.js، Flutter، Django، FastAPI و Go است تا
              محصولی سریع، امن و آماده توسعه برای آینده کسب‌وکارتان داشته باشید.
            </p>
          </div>
        </div>

        {/* Image */}

        <div className="w-full max-w-sm shrink-0">
          <div className="space-y-5">
            <div className="overflow-hidden rounded-3xl shadow-xl shadow-black/10">
              <Image
                src="/images/features/01.jpg"
                alt="مشاوره توسعه نرم افزار"
                width={500}
                height={500}
                className="h-auto w-full transition duration-500 hover:scale-105"
              />
            </div>

            <Link
              href="/contact"
              className="
                group
                flex
                h-12
                w-full
                items-center
                justify-center
                gap-2
                rounded-full
                bg-primary
                px-5
                text-sm
                font-bold
                text-primary-foreground
                transition-all
                hover:opacity-90
              "
            >
              شروع یک همکاری حرفه‌ای
              <ChevronLeftIcon className="h-5 w-5 transition group-hover:-translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
