import Image from 'next/image';
import type { FeatureTab } from '@/data/features';

interface FeaturesTabPanelProps {
  tab: FeatureTab;
}

/**
 * Content panel for a single tab: text paragraphs on the right (RTL)
 * and a rounded image on the left, matching the original HTML layout.
 *
 * Server Component — receives its data from the parent Client Component
 * via props; no state needed here.
 */
export function FeaturesTabPanel({ tab }: FeaturesTabPanelProps) {
  return (
    <div className="flex md:flex-nowrap flex-wrap items-center gap-10">
      {/* Text column */}
      <div className="md:w-9/12 w-full text-justify space-y-3">
        {tab.paragraphs.map(p => (
          <p
            key={p.id}
            className={
              p.bold ? 'font-bold text-foreground' : 'font-semibold text-muted'
            }
          >
            {p.text}
          </p>
        ))}
      </div>

      {/* Image column */}
      <div className="md:w-3/12 w-full">
        <div className="w-full md:h-60 h-96 rounded-3xl overflow-hidden">
          <Image
            src={tab.imageSrc}
            alt={tab.imageAlt}
            width={300}
            height={240}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
