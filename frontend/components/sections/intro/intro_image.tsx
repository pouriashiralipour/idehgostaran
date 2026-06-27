import Image from 'next/image';

/**
 * Hero image for the intro section.
 *
 * The `after:` pseudo-element gradient fades the bottom of the image
 * into the page background (`to-secondary`), creating a seamless blend
 * with the section below — matching the original HTML exactly.
 *
 * Using next/image for automatic optimisation (WebP conversion, lazy
 * loading, preventing layout shift via explicit width/height).
 */
export function IntroImage() {
  return (
    <div className="flex-shrink-0 flex justify-center relative lg:w-96 w-full lg:order-2 -order-1 after:content-[''] after:absolute after:bottom-0 after:inset-x-0 after:h-7 after:bg-gradient-to-b after:from-transparent after:to-secondary">
      <Image
        src="/images/theme/intro/study.png"
        alt="تصویر معرفی آکادمی نابغه"
        width={384}
        height={384}
        className="sm:w-96 max-w-full"
        priority
      />
    </div>
  );
}
