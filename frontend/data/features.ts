export interface FeatureBadge {
  id: string;
  label: string;
  /** Tailwind color class for the icon and text (e.g. "text-emerald-500"). */
  colorClass: string;
  iconName:
    | 'CodeBracketIcon'
    | 'CircleStackIcon'
    | 'SwatchIcon'
    | 'BoltIcon'
    | 'LockClosedIcon'
    | 'WrenchIcon';
}

export interface FeatureTab {
  id: string;
  label: string;
  iconName: 'LightBulbIcon' | 'CommunityIcon' | 'CodeIcon' | 'SupportIcon';
  paragraphs: { id: string; text: string; bold?: boolean }[];
  imageSrc: string;
  imageAlt: string;
}
export const featureBadges: FeatureBadge[] = [
  {
    id: 'challenging',
    label: 'توسعه اختصاصی نرم‌افزار',
    colorClass: 'text-emerald-500',
    iconName: 'CodeBracketIcon',
  },
  {
    id: 'project-based',
    label: 'معماری نرم‌افزار مقیاس‌پذیر',
    colorClass: 'text-yellow-500',
    iconName: 'CircleStackIcon',
  },
  {
    id: 'comprehensive',
    label: 'طراحی حرفه‌ای UI/UX',
    colorClass: 'text-blue-500',
    iconName: 'SwatchIcon',
  },
  {
    id: 'up-to-date',
    label: 'توسعه سریع و استاندارد',
    colorClass: 'text-green-500',
    iconName: 'BoltIcon',
  },
  {
    id: 'video',
    label: 'امنیت و پایداری بالا',
    colorClass: 'text-rose-500',
    iconName: 'LockClosedIcon',
  },
  {
    id: 'mentorship',
    label: 'پشتیبانی و توسعه بلندمدت',
    colorClass: 'text-cyan-500',
    iconName: 'WrenchIcon',
  },
];

export const featureTabs: FeatureTab[] = [
  {
    id: 'tabOne',
    label: 'تحلیل و بررسی ایده',
    iconName: 'LightBulbIcon',
    imageSrc: '/images/features/01.jpg',
    imageAlt: 'تحلیل و بررسی ایده',
    paragraphs: [
      {
        id: 'p1',
        bold: true,
        text: 'هر محصول دیجیتال موفق با یک تحلیل دقیق و درک عمیق از نیازهای کسب‌وکار آغاز می‌شود. ما پیش از شروع توسعه، ایده و اهداف پروژه را به‌صورت کامل بررسی کرده و بهترین مسیر فنی و محصولی را پیشنهاد می‌دهیم.',
      },
      {
        id: 'p2',
        text: 'در این مرحله نیازهای کاربران، مدل کسب‌وکار، امکانات مورد نیاز و ساختار فنی سیستم تحلیل می‌شود تا محصول نهایی دقیقاً مطابق با نیاز بازار و کاربران طراحی شود.',
      },
      {
        id: 'p3',
        text: 'هدف ما این است که قبل از نوشتن حتی یک خط کد، تصویری شفاف از محصول نهایی و مسیر توسعه آن داشته باشیم تا پروژه با کمترین ریسک و بیشترین بازدهی اجرا شود.',
      },
    ],
  },

  {
    id: 'tabTwo',
    label: 'طراحی تجربه کاربری',
    iconName: 'CommunityIcon',
    imageSrc: '/images/features/02.jpg',
    imageAlt: 'طراحی تجربه کاربری',
    paragraphs: [
      {
        id: 'p1',
        bold: true,
        text: 'یک محصول دیجیتال موفق فقط به کدنویسی خوب نیاز ندارد؛ بلکه باید تجربه کاربری ساده، جذاب و قابل فهمی برای کاربران ایجاد کند.',
      },
      {
        id: 'p2',
        text: 'در این مرحله ساختار صفحات، جریان تعامل کاربران و طراحی رابط کاربری محصول انجام می‌شود تا کاربران بتوانند به ساده‌ترین شکل ممکن با سیستم ارتباط برقرار کنند.',
      },
      {
        id: 'p3',
        text: 'طراحی UI/UX حرفه‌ای باعث افزایش تعامل کاربران، کاهش نرخ خروج و در نهایت رشد کسب‌وکار شما خواهد شد.',
      },
    ],
  },

  {
    id: 'tabThree',
    label: 'توسعه و پیاده‌سازی',
    iconName: 'CodeIcon',
    imageSrc: '/images/features/03.jpg',
    imageAlt: 'توسعه نرم افزار',
    paragraphs: [
      {
        id: 'p1',
        bold: true,
        text: 'پس از طراحی کامل محصول، تیم توسعه ما با استفاده از تکنولوژی‌های مدرن و استانداردهای مهندسی نرم‌افزار فرآیند پیاده‌سازی سیستم را آغاز می‌کند.',
      },
      {
        id: 'p2',
        text: 'در توسعه پروژه‌ها تمرکز ما بر ایجاد معماری مقیاس‌پذیر، کدنویسی تمیز و ساختار قابل توسعه است تا محصول شما در آینده نیز به‌راحتی قابل ارتقا باشد.',
      },
      {
        id: 'p3',
        text: 'ما در پروژه‌های خود از تکنولوژی‌های مدرن و فریمورک‌های قدرتمند برای ساخت سیستم‌های سریع، پایدار و قابل اطمینان استفاده می‌کنیم.',
      },
    ],
  },

  {
    id: 'tabFour',
    label: 'پشتیبانی و توسعه محصول',
    iconName: 'SupportIcon',
    imageSrc: '/images/features/04.jpg',
    imageAlt: 'پشتیبانی و توسعه محصول',
    paragraphs: [
      {
        id: 'p1',
        bold: true,
        text: 'تحویل پروژه پایان مسیر نیست. ما در کنار شما می‌مانیم تا محصول دیجیتال شما همواره به‌روز، پایدار و در حال رشد باشد.',
      },
      {
        id: 'p2',
        text: 'خدمات پشتیبانی شامل نگهداری سیستم، بهبود عملکرد، رفع مشکلات احتمالی و افزودن قابلیت‌های جدید متناسب با نیازهای کسب‌وکار شما خواهد بود.',
      },
      {
        id: 'p3',
        text: 'هدف ما ایجاد یک همکاری بلندمدت است تا محصول شما همگام با رشد کسب‌وکارتان توسعه پیدا کند.',
      },
    ],
  },
];
