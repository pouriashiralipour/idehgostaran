import { IntroContent } from './intro_content';
import { IntroImage } from './intro_image';

/**
 * Intro section — the first visible content block on the home page.
 *
 * Layout:
 * - Mobile: image on top (order-first via `-order-1`), content below
 * - Desktop (lg+): side-by-side, content right / image left (RTL)
 *
 * Server Component: every child is static — no interactivity needed.
 */
export function IntroSection() {
  return (
    <div className="p-5">
      <div className="flex lg:flex-nowrap flex-wrap lg:flex-row flex-col lg:items-center lg:justify-center gap-10 lg:py-16">
        <IntroContent />
        <IntroImage />
      </div>
    </div>
  );
}
