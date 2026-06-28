'use client';

import { EnvelopeIcon } from '@/components/ui/icons';
import { useState, type FormEvent } from 'react';

/**
 * Newsletter email subscription form in the footer.
 * Client Component: manages controlled input and form submission.
 */
export function NewsletterFrom() {
  const [email, setEmail] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setEmail('');
  };
  return (
    <div className="space-y-5">
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1">
          <div className="w-1 h-1 bg-foreground rounded-full" />
          <div className="w-2 h-2 bg-foreground rounded-full" />
        </div>
        <div className="font-black text-foreground">خبرنامه</div>
      </div>
      <p className="text-sm text-muted">
        برای دریافت آخرین اخبار، پروژه‌ها و مقالات تخصصی ایده گستران جنوب، ایمیل
        خود را وارد کنید.
      </p>
      <form onSubmit={handleSubmit}>
        <div className="flex items-center gap-3 relative">
          <label htmlFor="footer-email" className="sr-only">
            آدرس ایمیل
          </label>
          <span className="absolute right-3 text-muted">
            <EnvelopeIcon className="w-5 h-5" />
          </span>
          <input
            id="footer-email"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            className="form-input w-full h-11 !ring-0 !ring-offset-0 bg-secondary border-0 focus:border-border rounded-xl text-sm text-foreground pr-10"
            placeholder="آدرس ایمیل"
          />
          <button
            type="submit"
            className="h-11 inline-flex items-center justify-center gap-3 bg-primary rounded-xl whitespace-nowrap text-xs text-primary-foreground transition-all hover:opacity-80 px-4"
          >
            ثبت ایمیل
          </button>
        </div>
      </form>
    </div>
  );
}
