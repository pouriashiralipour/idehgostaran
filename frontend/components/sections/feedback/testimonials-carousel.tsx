'use client';

import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation, Autoplay, EffectCards } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-cards';

import { testimonials } from '@/data/testimonials';

import { ChevronLeftIcon, ChevronRightIcon } from '@/components/ui/icons';

export function TestimonialsCarousel() {
  return (
    <div className="relative">
      <Swiper
        modules={[Navigation, Autoplay, EffectCards]}
        effect="cards"
        grabCursor
        loop
        speed={700}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: '.feedback-next',
          prevEl: '.feedback-prev',
        }}
        cardsEffect={{
          rotate: true,
          perSlideRotate: 2,
          perSlideOffset: 8,
          slideShadows: false,
        }}
        className="pb-10"
      >
        {testimonials.map(item => (
          <SwiperSlide key={item.id}>
            <div
              className="
                                flex
                                flex-col
                                items-center
                                justify-center

                                bg-background

                                border
                                border-border

                                rounded-2xl

                                shadow-xl
                                shadow-black/5

                                p-8

                                space-y-8

                                min-h-[280px]
                            "
            >
              <p
                className="
                                    text-center
                                    text-sm
                                    leading-8
                                    font-semibold
                                    text-muted
                                "
              >
                {item.text}
              </p>

              <div className="flex items-center gap-3">
                <div
                  className="
                                        relative
                                        w-10
                                        h-10
                                        rounded-full
                                        overflow-hidden
                                    "
                >
                  <Image
                    src={item.avatarSrc}
                    alt={item.authorName}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="space-y-1">
                  <h4
                    className="
                                            text-xs
                                            font-bold
                                            text-foreground
                                        "
                  >
                    {item.authorName}
                  </h4>

                  <p
                    className="
                                            text-xs
                                            font-semibold
                                            text-muted
                                        "
                  >
                    {item.authorRole}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Prev */}

      <button
        className="
                    feedback-prev

                    absolute

                    top-1/2
                    -translate-y-1/2

                    -right-6

                    z-20

                    w-11
                    h-11

                    rounded-full

                    border
                    border-border

                    bg-background

                    flex
                    items-center
                    justify-center

                    transition

                    hover:text-primary
                "
      >
        <ChevronRightIcon className="w-5 h-5" />
      </button>

      {/* Next */}

      <button
        className="
                    feedback-next

                    absolute

                    top-1/2
                    -translate-y-1/2

                    -left-6

                    z-20

                    w-11
                    h-11

                    rounded-full

                    border
                    border-border

                    bg-background

                    flex
                    items-center
                    justify-center

                    transition

                    hover:text-primary
                "
      >
        <ChevronLeftIcon className="w-5 h-5" />
      </button>
    </div>
  );
}
