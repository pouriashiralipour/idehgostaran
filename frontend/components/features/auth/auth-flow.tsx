'use client';

import { useState } from 'react';

import type { AuthStep } from '@/types/auth';
import { OtpStepForm } from './otp-step-form';
import { PhoneStepForm } from './phone-step-form';

/**
 * Orchestrates the two-step passwordless login flow (phone -> OTP) as
 * a single page: no route change between steps, just an in-place swap
 * of the active form with a short fade+slide transition.
 */
export function AuthFlow() {
  const [step, setStep] = useState<AuthStep>('phone');
  const [phone, setPhone] = useState('');

  const handlePhoneSubmit = (normalizedPhone: string): void => {
    setPhone(normalizedPhone);
    setStep('otp');
  };

  const handleOtpSubmit = (otp: string): void => {
    // TODO: replace with the real verify-OTP mutation once the backend exists.
    // eslint-disable-next-line no-console
    console.log('Verifying OTP', { phone, otp });
  };

  const handleResendOtp = (): void => {
    // TODO: replace with the real resend-OTP mutation once the backend exists.
    // eslint-disable-next-line no-console
    console.log('Resending OTP', { phone });
  };

  const handleEditPhone = (): void => {
    setStep('phone');
  };

  return (
    <div className="overflow-hidden">
      <div key={step} className="animate-fade-slide-in">
        {step === 'phone' ? (
          <PhoneStepForm
            onSubmitPhone={handlePhoneSubmit}
            defaultPhone={phone}
          />
        ) : (
          <OtpStepForm
            phone={phone}
            onSubmitOtp={handleOtpSubmit}
            onResendOtp={handleResendOtp}
            onEditPhone={handleEditPhone}
          />
        )}
      </div>
    </div>
  );
}
