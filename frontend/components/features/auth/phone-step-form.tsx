'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { ArrowDiagonalIcon } from '@/components/ui/icons';
import { useTopLoader } from '@/hooks/use-top-loader';
import { withMinimumDuration } from '@/lib/utils/async';
import { phoneFormSchema, type PhoneFormValues } from '@/lib/validations/auth';

interface PhoneStepFormProps {
  onSubmitPhone: (phone: string) => void;
  defaultPhone?: string;
}

/**
 * Step 1 of the auth flow: collect and validate an Iranian mobile
 * number, then hand the normalized value up to `AuthFlow`.
 *
 * Manually drives the site-wide top-loading bar around the submit
 * handler (`start()`/`done()`), since form submission here doesn't
 * navigate — it's a client state transition, which the bar has no
 * automatic way to detect.
 */
export function PhoneStepForm({
  onSubmitPhone,
  defaultPhone,
}: PhoneStepFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<PhoneFormValues>({
    resolver: zodResolver(phoneFormSchema),
    defaultValues: { phone: defaultPhone ?? '' },
  });

  const { start, done } = useTopLoader();

  const onSubmit = handleSubmit(async ({ phone }) => {
    start();
    try {
      await withMinimumDuration(Promise.resolve(onSubmitPhone(phone)));
    } finally {
      done();
    }
  });

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-3">
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1">
          <div className="w-1 h-1 bg-foreground rounded-full" />
          <div className="w-2 h-2 bg-foreground rounded-full" />
        </div>
        <div className="font-black text-foreground">ورود یا ثبت نام</div>
      </div>

      <div className="text-sm text-muted space-y-3">
        <p>درود 👋</p>
        <p>لطفا شماره موبایل خود را وارد کنید</p>
      </div>

      <div className="flex flex-col relative space-y-1">
        <label htmlFor="phone" className="sr-only">
          شماره موبایل
        </label>
        <input
          id="phone"
          type="tel"
          dir="ltr"
          inputMode="tel"
          autoComplete="tel"
          placeholder="0912xxxxxxx"
          aria-invalid={Boolean(errors.phone)}
          aria-describedby={errors.phone ? 'phone-error' : undefined}
          className="form-input w-full h-11 !ring-0 !ring-offset-0 bg-secondary border-border focus:border-border invalid:!border-error rounded-xl text-sm text-foreground placeholder:text-right px-5"
          {...register('phone')}
        />
        {errors.phone && (
          <span
            id="phone-error"
            role="alert"
            className="font-semibold text-xs text-error mt-2"
          >
            {errors.phone.message}
          </span>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="flex items-center justify-center gap-1 w-full h-10 bg-primary rounded-full text-primary-foreground transition-all hover:opacity-80 disabled:opacity-50 disabled:cursor-not-allowed px-4"
      >
        <span className="font-semibold text-sm">
          {isSubmitting ? 'در حال ارسال...' : 'برو بریم'}
        </span>
        <ArrowDiagonalIcon className="w-5 h-5" />
      </button>
    </form>
  );
}
