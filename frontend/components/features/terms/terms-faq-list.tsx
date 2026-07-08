import { termsFaqItems } from '@/data/terms';
import { TermsFaqItem } from './terms-faq-item';

/**
 * "موارد تکمیلی دیگر" — divider-separated list of independent FAQ
 * accordion rows. Server Component; interactivity is isolated per row
 * into `TermsFaqItem`.
 */
export function TermsFaqList() {
  return (
    <div className="divide-y divide-border">
      {termsFaqItems.map(item => (
        <TermsFaqItem key={item.id} item={item} />
      ))}
    </div>
  );
}
