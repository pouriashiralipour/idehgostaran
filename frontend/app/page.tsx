import { LatestArticles } from '@/components/articles/latest-articles';
import CounselingSection from '@/components/sections/counseling/counseling-section';
import { FeaturesBadges } from '@/components/sections/features/features-badges';
import { FeatureTab } from '@/components/sections/features/features-tabs';
import { FeedbackSection } from '@/components/sections/feedback/feedback-section';
import { IntroSection } from '@/components/sections/intro/intro_section';

export default function Home() {
  return (
    <div>
      <main className="flex-auto py-5">
        <div className="space-y-14">
          <div className="max-w-7xl space-y-14 px-4 mx-auto">
            <IntroSection />
            <FeaturesBadges />
            <FeatureTab />
            <LatestArticles maxItems={3} />
            <CounselingSection />
          </div>
          <FeedbackSection />
        </div>
      </main>
    </div>
  );
}
