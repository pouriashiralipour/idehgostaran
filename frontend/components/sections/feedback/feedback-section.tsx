import { SparkleIcon } from '@/components/ui/icons';

import { TestimonialsCarousel } from './testimonials-carousel';

export function FeedbackSection() {
  return (
    <section className="overflow-x-hidden py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div
          className="
                        md:grid
                        md:grid-cols-12
                        md:gap-10

                        space-y-8
                        md:space-y-0
                    "
        >
          {/* Right Side */}

          <div
            className="
                            md:col-span-4

                            flex
                            items-center
                            gap-5
                        "
          >
            <span
              className="
                                w-12
                                h-12

                                rounded-full

                                bg-primary
                                text-primary-foreground

                                flex
                                items-center
                                justify-center

                                shrink-0
                            "
            >
              <SparkleIcon className="w-5 h-5" />
            </span>

            <div className="space-y-2">
              <h2
                className="
                                    text-primary

                                    text-2xl

                                    font-black
                                "
              >
                مشتریان ما چه می‌گویند؟
              </h2>

              <p
                className="
                                    text-sm

                                    md:text-base

                                    font-semibold

                                    text-muted
                                "
              >
                این‌ها تنها بخشی از تجربه مشتریانی است که پروژه‌های نرم‌افزاری
                خود را به ایده گستران سپرده‌اند.
              </p>
            </div>
          </div>

          {/* Left Side */}

          <div
            className="
                            md:col-span-8

                            w-full

                            max-w-xl

                            mx-auto
                        "
          >
            <TestimonialsCarousel />
          </div>
        </div>
      </div>
    </section>
  );
}
