import Image from 'next/image';
import type { AboutFeature } from '@/data/about';

interface AboutFeatureItemProps {
  feature: AboutFeature;
}

/**
 * Single "activity" block: title with a primary-colored underline
 * accent, justified paragraphs, and a side image — reused for each
 * entry in `aboutFeatures`.
 *
 * Server Component — purely presentational.
 */
export function AboutFeatureItem({ feature }: AboutFeatureItemProps) {
  return (
    <div className="flex md:flex-nowrap flex-wrap items-center gap-10">
      <div className="md:w-9/12 w-full text-justify space-y-5">
        <div className="inline-block font-black text-base text-foreground relative before:content-[''] before:absolute before:right-0 before:-bottom-2 before:w-2/3 before:h-1 before:bg-primary">
          {feature.title}
        </div>
        <div className="font-semibold text-sm text-muted space-y-3">
          {feature.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>

      <div className="md:w-3/12 w-full">
        <div className="w-full md:h-60 h-96 rounded-3xl overflow-hidden">
          <Image
            src={feature.imageSrc}
            alt={feature.imageAlt}
            width={300}
            height={240}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
