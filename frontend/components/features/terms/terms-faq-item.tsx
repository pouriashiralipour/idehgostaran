'use client';

import { useState } from 'react';
import { ChevronDownIcon } from '@/components/ui/icons';
import type { TermsFaqItem as TermsFaqItemData } from '@/data/terms';
import { cn } from '@/lib/utils';

interface TermsFaqItemProps {
  item: TermsFaqItemData;
}

/**
 * Single collapsible row under "موارد تکمیلی دیگر" — each item owns
 * its own `open` state independently (matching the original
 * per-`<div x-data="{ open: false }">` Alpine scope), so opening one
 * item never affects the others.
 *
 * Client Component: needs local toggle state.
 */
export function TermsFaqItem({ item }: TermsFaqItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        type="button"
        onClick={() => setIsOpen(prev => !prev)}
        aria-expanded={isOpen}
        className="flex items-center justify-between w-full py-3"
      >
        <span className="font-bold text-sm text-foreground text-right">
          {item.question}
        </span>
        <ChevronDownIcon
          className={cn(
            'w-5 h-5 text-foreground transition-transform',
            isOpen && 'rotate-180'
          )}
        />
      </button>

      {isOpen && (
        <div className="faq-description space-y-2 pb-3">
          {item.answerParagraph && <h2>{item.answerParagraph}</h2>}
          {item.answerListItems && (
            <ul>
              {item.answerListItems.map((listItem, index) => (
                <li key={index}>{listItem}</li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
