'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import {
  contactFormSchema,
  type ContactFormValues,
} from '@/lib/validations/contact';

/**
 * "فرم تماس باما" contact form.
 *
 * Client Component: react-hook-form + Zod, same validation stack as
 * the auth forms (`PhoneStepForm`/`OtpStepForm`). Submission is
 * currently stubbed — swap `onSubmit` for a real mutation (e.g. a
 * Server Action or API route) once a contact-message backend exists.
 */
export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { fullName: '', email: '', message: '' },
  });

  const onSubmit = handleSubmit(async values => {
    // TODO: replace with the real contact-message mutation once the
    // backend/API route exists.
    // eslint-disable-next-line no-console
    console.log('Contact form submitted', values);
    reset();
  });

  return (
    <div className="bg-gradient-to-b from-secondary to-background rounded-2xl px-5 pb-5">
      <div className="bg-background rounded-b-3xl space-y-2 p-5 mb-5">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            <div className="w-1 h-1 bg-foreground rounded-full" />
            <div className="w-2 h-2 bg-foreground rounded-full" />
          </div>
          <div className="font-black text-foreground">فرم تماس باما</div>
        </div>
      </div>

      <form onSubmit={onSubmit} noValidate className="space-y-5">
        <div className="space-y-1">
          <label htmlFor="fullname" className="font-medium text-xs text-muted">
            نام و نام خانوادگی (فارسی)
          </label>
          <input
            id="fullname"
            type="text"
            aria-invalid={Boolean(errors.fullName)}
            aria-describedby={errors.fullName ? 'fullname-error' : undefined}
            className="form-input w-full h-11 !ring-0 !ring-offset-0 bg-secondary border-border focus:border-border invalid:!border-error rounded-xl text-sm text-foreground px-5"
            {...register('fullName')}
          />
          {errors.fullName && (
            <span
              id="fullname-error"
              role="alert"
              className="font-semibold text-xs text-error"
            >
              {errors.fullName.message}
            </span>
          )}
        </div>

        <div className="space-y-1">
          <label htmlFor="email" className="font-medium text-xs text-muted">
            ایمیل
          </label>
          <input
            id="email"
            type="email"
            dir="ltr"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'email-error' : undefined}
            className="form-input w-full h-11 !ring-0 !ring-offset-0 bg-secondary border-border focus:border-border invalid:!border-error rounded-xl text-sm text-foreground px-5"
            {...register('email')}
          />
          {errors.email && (
            <span
              id="email-error"
              role="alert"
              className="font-semibold text-xs text-error"
            >
              {errors.email.message}
            </span>
          )}
        </div>

        <div className="space-y-1">
          <label htmlFor="text" className="font-medium text-xs text-muted">
            متن پیـــام
          </label>
          <textarea
            id="text"
            rows={5}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? 'message-error' : undefined}
            className="form-textarea w-full !ring-0 !ring-offset-0 bg-secondary border-border focus:border-border invalid:!border-error rounded-xl text-sm text-foreground px-5"
            {...register('message')}
          />
          {errors.message && (
            <span
              id="message-error"
              role="alert"
              className="font-semibold text-xs text-error"
            >
              {errors.message.message}
            </span>
          )}
        </div>

        <div className="flex justify-end gap-5">
          <button
            type="submit"
            disabled={isSubmitting}
            className="h-11 inline-flex items-center justify-center bg-primary rounded-full text-white transition-opacity disabled:opacity-50 disabled:cursor-not-allowed px-8 mr-auto"
          >
            <span className="font-semibold text-sm">
              {isSubmitting ? 'در حال ارسال...' : 'ارسال پیـــام'}
            </span>
          </button>
        </div>
      </form>
    </div>
  );
}
