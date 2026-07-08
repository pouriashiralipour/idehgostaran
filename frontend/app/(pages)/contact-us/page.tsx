// app/(main)/contact-us/page.tsx
import type { Metadata } from 'next';
import { ContactInfo } from '@/components/features/contact/contact-info';
import { ContactForm } from '@/components/features/contact/contact-form';

export const metadata: Metadata = {
  title: 'تماس با ما',
  description: 'اطلاعات ارتباطی ایده گستران جنوب.',
};

/**
 * `/contact-us` — office contact details + contact form, 7/5 column
 * split on `md`+.
 *
 * Server Component: `ContactForm` is the only interactive piece,
 * isolated into its own Client Component.
 */
export default function ContactUsPage() {
  return (
    <div className="max-w-7xl space-y-14 px-4 mx-auto">
      <div className="flex flex-col items-start space-y-2">
        <h2 className="font-black text-2xl text-foreground">تمـــــاس باما</h2>
        <p className="font-semibold text-sm text-muted">
          در این صفحه می‌توانید اطلاعات ارتباطی ایده گستران جنوب را مشاهده کنید.
        </p>
      </div>

      <div className="grid md:grid-cols-12 gap-8">
        <div className="md:col-span-7">
          <ContactInfo />
        </div>
        <div className="md:col-span-5">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
