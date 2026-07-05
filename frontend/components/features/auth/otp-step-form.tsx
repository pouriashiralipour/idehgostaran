'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { ArrowDiagonalIcon, ChevronRightIcon } from '@/components/ui/icons';
import { useResendTimer } from '@/hooks/use-resend-timer';
import { maskIranianPhoneNumber } from '@/lib/utils/phone';
import { formatSecondsAsPersianClock } from '@/lib/utils/time';
import { otpFormSchema, type OtpFormValues } from '@/lib/validations/auth';

interface OtpStepFormProps {
  /** The normalized phone number the code was "sent" to (masked before rendering). */
  phone: string;
  /** Called with the normalized 6-digit code once validation passes. */
  onSubmitOtp: (otp: string) => void;
  /** Lets the user step back and correct a mistyped phone number. */
  onEditPhone: () => void;
  /** Called when the user requests a new code after the cooldown expires. */
  onResendOtp: () => void;
}

/**
 * Step 2 of the auth flow: collect and validate the 6-digit OTP sent
 * to the phone number confirmed in step 1, plus a resend-cooldown
 * timer so the user always has a way forward if the SMS never arrives.
 */
export function OtpStepForm({
  phone,
  onSubmitOtp,
  onEditPhone,
  onResendOtp,
}: OtpStepFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<OtpFormValues>({
    resolver: zodResolver(otpFormSchema),
    defaultValues: { otp: '' },
  });

  const { secondsLeft, canResend, restart } = useResendTimer({
    durationInSeconds: 60,
  });

  const onSubmit = handleSubmit(({ otp }) => {
    onSubmitOtp(otp);
  });

  const handleResendClick = (): void => {
    if (!canResend) return;
    onResendOtp();
    restart();
  };

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-3">
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1">
          <div className="w-1 h-1 bg-foreground rounded-full" />
          <div className="w-2 h-2 bg-foreground rounded-full" />
        </div>
        <div className="font-black text-foreground">کد تایید را وارد کنید</div>
      </div>

      <div className="text-sm text-muted space-y-3">
        <p>
          کد تایید برای شماره{' '}
          <span dir="ltr">{maskIranianPhoneNumber(phone)}</span> پیامک شد
        </p>
      </div>

      <div className="flex flex-col relative space-y-1">
        <label htmlFor="otp" className="sr-only">
          کد تایید
        </label>
        <input
          id="otp"
          type="text"
          inputMode="numeric"
          dir="ltr"
          autoComplete="one-time-code"
          maxLength={6}
          aria-invalid={Boolean(errors.otp)}
          aria-describedby={errors.otp ? 'otp-error' : undefined}
          className="form-input w-full h-11 peer !ring-0 !ring-offset-0 bg-secondary border-border focus:border-border invalid:!border-error rounded-xl text-lg tracking-9 text-center text-foreground invalid:!text-error px-5"
          {...register('otp')}
        />
        {errors.otp && (
          <span
            id="otp-error"
            role="alert"
            className="font-semibold text-xs text-error mt-2"
          >
            {errors.otp.message}
          </span>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="flex items-center justify-center gap-1 w-full h-10 bg-primary rounded-full text-primary-foreground transition-all hover:opacity-80 disabled:opacity-50 disabled:cursor-not-allowed px-4"
      >
        <span className="font-semibold text-sm">
          {isSubmitting ? 'در حال بررسی...' : 'تایید'}
        </span>
        <ArrowDiagonalIcon className="w-5 h-5" />
      </button>

      <div className="flex items-center justify-center">
        {canResend ? (
          <button
            type="button"
            onClick={handleResendClick}
            className="font-semibold text-xs text-primary transition-colors hover:opacity-80"
          >
            ارسال مجدد کد
          </button>
        ) : (
          <span className="font-semibold text-xs text-muted">
            ارسال مجدد کد تا{' '}
            <span dir="ltr">{formatSecondsAsPersianClock(secondsLeft)}</span>
          </span>
        )}
      </div>

      <button
        type="button"
        onClick={onEditPhone}
        className="flex items-center justify-center gap-1 w-full text-xs font-semibold text-muted transition-colors hover:text-primary"
      >
        <ChevronRightIcon className="w-4 h-4" />
        <span>ویرایش شماره موبایل</span>
      </button>
    </form>
  );
}
