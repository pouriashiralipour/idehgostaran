import { AboutUsIcon } from '@/components/ui/icons';
import Image from 'next/image';

export default function AboutUsPage() {
  return (
    <>
      <div className="max-w-xl space-y-5 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-3">
          <AboutUsIcon />
          <h2 className="font-black text-2xl text-center text-foreground bg-gradient-to-l from-transparent to-yellow-300 dark:to-yellow-800 py-5 px-8">
            داستان شکل‌گیری ایده گستران
          </h2>
          <div className="flex items-center gap-3 w-40">
            <span className="block flex-grow h-px bg-border"></span>
            <span className="w-2 h-2 bg-border rounded-full"></span>
            <span className="block flex-grow h-px bg-border"></span>
          </div>
        </div>
        <p className="font-semibold text-sm text-center text-muted">
          تیم ما متشکل از چند متخصص در حوزه های مختلف برنامه نویسی تصمیم گرفت یک
          وبسایت آموزش برنامه نویسی راه اندازی کند. هدفمان به اشتراک گذاری دانش
          و تجربیات خود در زمینه برنامه نویسی است. طراحی رابط کاربری زیبا و
          کاربرپسند، تولید محتوا مفید و کیفی، بهبود بر اساس بازخوردهای کاربران و
          ارائه منبعی جامع برای جامعه برنامه نویسی، از اهداف و وظایف ما بوده،
          اکنون تیم ما افتخار این را دارد که با دانش خود به رشد و پیشرفت برنامه
          نویسان کمک کند.
        </p>
      </div>
      <div className="max-w-5xl space-y-10 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-3">
          <p className="font-bold text-sm text-muted">
            از فعالیت های ایده گستران برایتان بگوییم
          </p>
          <h2 className="font-black text-2xl text-foreground">
            بخشی از فعالیت های تیم ما
          </h2>
          <div className="flex items-center gap-3 w-40">
            <span className="block flex-grow h-px bg-border"></span>
            <span className="w-2 h-2 bg-border rounded-full"></span>
            <span className="block flex-grow h-px bg-border"></span>
          </div>
        </div>

        <div className="flex md:flex-nowrap flex-wrap items-center gap-10">
          <div className="md:w-9/12 w-full text-justify space-y-5">
            <div className="inline-block font-black text-base text-foreground relative before:content-[''] before:absolute before:right-0 before:-bottom-2 before:w-2/3 before:h-1 before:bg-primary">
              استعداد سنجی و ارزیابی
            </div>
            <div className="font-semibold text-sm text-muted space-y-3">
              <p>
                فعالیت‌های دانشجویان در طول مشاهده دوره شامل مشاهده منظم جلسات،
                پاسخ صحیح به سوالات آزمون‌ها و فعالیت ویژه و مستمر آن‌ها در
                جامعه برنامه نویسی، برای آن‌ها امتیازاتی در بر خواهد داشت و تیم
                نابغه دانشجویان ممتاز را با توجه به امتیازاتشان رده بندی و برای
                معرفی به بازار کار معرفی می‌کند.
              </p>
              <p>
                حتی دانشجویانی که سال‌ها در دانشگاه‌های مطرح کشور در رشته‌های
                تخصصی علوم کامپیوتر درس خوانده اند و مدرک گرفته اند، آماده ورود
                به بازار کار نیستند. دوره‌های نابغه با هدف پر کردن فاصله بین
                دانشگاه و صنعت طراحی شده اند و حاوی محتوای کاملا منطبق بر نیاز
                بازار کار هستند. و مهمتر اینکه این تجربه‌ها را از مدرسینی دریافت
                می‌کنید که در بهترین شرکت ‌های فناوری ایران فعالیت دارند.
              </p>
              <p>
                در جلسات مصاحبه کاری، همه آنچه نیاز دارید مهارت مورد نیاز بازار
                کار و پرزنت درست خودتان است. با ما در این مسیر لذت بخش و البته
                نه کوتاه مدت همراه باشید تا آماده ورود به بازار کار شوید.
              </p>
            </div>
          </div>
          <div className="md:w-3/12 w-full">
            <div className="w-full md:h-60 h-96 rounded-3xl overflow-hidden">
              <Image
                width={270}
                height={276}
                src="/images/features/04.jpg"
                className="w-full h-full object-cover"
                alt="..."
              />
            </div>
          </div>
        </div>

        <div className="flex md:flex-nowrap flex-wrap items-center gap-10">
          <div className="md:w-9/12 w-full text-justify space-y-5">
            <div className="inline-block font-black text-base text-foreground relative before:content-[''] before:absolute before:right-0 before:-bottom-2 before:w-2/3 before:h-1 before:bg-primary">
              جامعه فعال برنامه نویسان
            </div>
            <div className="font-semibold text-sm text-muted space-y-3">
              <p>
                یک جامعه فعال از منتورها و دانشجویان برای پاسخگویی به سوالات شما
                آماده هستند
              </p>
              <p>
                اگر در جلسات آموزشی سوالی داشته باشید، می‌توانید سوال خود را در
                همان جلسه ثبت نمایید. سوال شما در جامعه مربوط به دوره ثبت می‌شود
                و منتور‌ها و دانشجویان هم دوره ای، پاسخگوی سوالات شما خواهند بود
              </p>
              <p>
                جامعه برنامه نویسان نابغه نه تنها فضایی است برای پشتیبانی و
                پاسخگویی به سوالات شما، بلکه به زودی از پر از تجربه‌های ارزشمند
                برترین برنامه نویسان ایرانی در شرکت‌های مطرح خواهد شد.
              </p>
            </div>
          </div>
          <div className="md:w-3/12 w-full">
            <div className="w-full md:h-60 h-96 rounded-3xl overflow-hidden">
              <Image
                width={270}
                height={276}
                src="/images/features/02.jpg"
                className="w-full h-full object-cover"
                alt="..."
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center space-y-3">
          <h2 className="font-black text-2xl text-foreground">و..</h2>
        </div>
      </div>
    </>
  );
}
