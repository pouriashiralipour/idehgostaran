import { IntroSection } from '@/components/sections/intro/intro_section';

export default function Home() {
  return (
    <div>
      <main className="flex-auto py-5">
        <div className="space-y-14">
          <div className="max-w-7xl space-y-14 px-4 mx-auto">
            <IntroSection />
          </div>
        </div>
      </main>
    </div>
  );
}
