'use client';

import { useState } from 'react';
import { ChevronDownIcon } from '@/components/ui/icons';
import { accountRules } from '@/data/terms';
import { cn } from '@/lib/utils';

/**
 * "قوانین حساب کاربری" card — collapsed to a fixed height with a
 * fade-out gradient + "نمایش بیشتر/کمتر" toggle button, matching the
 * original Alpine `x-data="{ expanded: false }"` behavior.
 *
 * Client Component: needs local `expanded` state to toggle the
 * height/overflow classes.
 */
export function ExpandableRulesCard() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={cn(
        'relative bg-background border border-border rounded-xl space-y-5 p-5',
        expanded ? 'pb-20' : 'h-56 overflow-hidden'
      )}
    >
      <div className="grid gap-y-1.5">
        <h2 className="font-black text-base text-foreground">
          قوانین حساب کاربری
        </h2>
        <p className="font-semibold text-sm text-muted">
          اکثر امکانات این وبسایت مربوط به اعضای آن می‌شود و اگر شما قصد استفاده
          از این دسته از محتوا را دارید، نیاز است ابتدا در سایت عضو شوید، داشتن
          یک حساب کاربری ملزم به رعایت قوانین زیر می‌باشد:
        </p>
      </div>

      <ul className="font-semibold text-xs text-muted/80 space-y-3">
        {accountRules.map((rule, index) => (
          <li
            key={index}
            className="relative before:inline-block before:size-1 before:bg-muted/50 before:rounded-full before:me-1.5"
          >
            {rule}
          </li>
        ))}
      </ul>

      <div className="absolute inset-x-0 bottom-0 flex justify-center h-14 bg-gradient-to-t from-background text-foreground">
        <button
          type="button"
          onClick={() => setExpanded(prev => !prev)}
          aria-expanded={expanded}
          className="inline-flex items-center gap-x-1 h-10 bg-background border border-border rounded-lg px-6"
        >
          <span className="font-semibold text-xs">
            {expanded ? 'نمایش کمتر' : 'نمایش بیشتر'}
          </span>
          <ChevronDownIcon
            className={cn(
              'w-4 h-4 transition-transform',
              expanded && 'rotate-180'
            )}
          />
        </button>
      </div>
    </div>
  );
}
