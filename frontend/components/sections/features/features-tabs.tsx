'use client';

import {
  LightBulbIcon,
  CommunityIcon,
  CodeIcon,
  SupportIcon,
} from '@/components/ui/icons';
import { featureTabs, type FeatureTab } from '@/data/features';
import { FeaturesTabPanel } from './features-tab-panel';
import { cn } from '@/lib/utils';
import { useState, type JSX, type SVGProps } from 'react';

type IconComponent = (props: SVGProps<SVGSVGElement>) => JSX.Element;

/** Maps tab iconName strings to actual icon components. */
const tabIconMap: Record<FeatureTab['iconName'], IconComponent> = {
  LightBulbIcon,
  CommunityIcon,
  CodeIcon,
  SupportIcon,
};

/**
 * Tabbed section replacing the original Alpine `x-data="{ activeTab: 'tabOne' }"`.
 *
 * Client Component: manages `activeTab` state. The tab panels themselves
 * (`FeaturesTabPanel`) are Server Components passed the selected tab's
 * data as props — only the tab-list UI needs to be client-side.
 */
export function FeatureTab() {
  const [activeTabId, setActiveTabId] = useState<string>(featureTabs[0].id);

  const activeTab =
    featureTabs.find(t => t.id === activeTabId) ?? featureTabs[0];
  return (
    <div className="space-y-10">
      {/* Tab list */}
      <div className="flex justify-center">
        <ul className="inline-flex gap-2 border-b border-border">
          {featureTabs.map(tab => {
            const isActive = tab.id === activeTabId;
            const Icon = tabIconMap[tab.iconName];

            return (
              <li key={tab.id}>
                <button
                  type="button"
                  onClick={() => setActiveTabId(tab.id)}
                  aria-selected={isActive}
                  role="tab"
                  className={cn(
                    'flex lg:flex-col items-center justify-center relative gap-3 border-b-4 py-2 px-4 transition-colors',
                    isActive
                      ? 'text-primary border-primary'
                      : 'text-muted border-transparent'
                  )}
                >
                  <Icon
                    className={cn(
                      'sm:w-9 sm:h-9 w-8 h-8 transition-colors',
                      isActive ? 'text-primary' : 'text-muted'
                    )}
                  />
                  <span
                    className={cn(
                      'font-semibold text-sm',
                      'lg:block hidden',
                      isActive && 'md:block'
                    )}
                  >
                    {tab.label}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Active tab content */}
      <div
        role="tabpanel"
        className="bg-gradient-to-b from-secondary rounded-t-3xl max-w-4xl mx-auto p-10"
      >
        <FeaturesTabPanel tab={activeTab} />
      </div>
    </div>
  );
}
