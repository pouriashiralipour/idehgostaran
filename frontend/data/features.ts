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
    | 'PuzzleIcon';
}

export interface FeatureTab {
  id: string;
  label: string;
  iconName: 'LightBulbIcon' | 'SwatchIcon' | 'CodeIcon' | 'ShieldIcon';
  paragraphs: { id: string; text: string; bold?: boolean }[];
  imageSrc: string;
  imageAlt: string;
}
export const featureBadges: FeatureBadge[] = [
  {
    id: 'code',
    label: 'توسعه اختصاصی',
    colorClass: 'text-emerald-500',
    iconName: 'CodeBracketIcon',
  },
  {
    id: 'circle',
    label: 'معماری استاندارد و مقیاس‌پذیر',
    colorClass: 'text-yellow-500',
    iconName: 'CircleStackIcon',
  },
  {
    id: 'swatch',
    label: 'طراحی رابط کاربری حرفه‌ای',
    colorClass: 'text-blue-500',
    iconName: 'SwatchIcon',
  },
  {
    id: 'bolt',
    label: 'استفاده از تکنولوژی‌های مدرن',
    colorClass: 'text-green-500',
    iconName: 'BoltIcon',
  },
  {
    id: 'lock',
    label: 'امنیت و عملکرد پایدار',
    colorClass: 'text-rose-500',
    iconName: 'LockClosedIcon',
  },
  {
    id: 'wrench',
    label: 'همراهی پس از انتشار محصول',
    colorClass: 'text-cyan-500',
    iconName: 'PuzzleIcon',
  },
];

export const featureTabs: FeatureTab[] = [
  {
    id: 'tabOne',
    label: 'تحلیل و معماری پروژه',
    iconName: 'LightBulbIcon',
    imageSrc: '/images/features/01.jpg',
    imageAlt: 'تحلیل و بررسی ایده',
    paragraphs: [
      {
        id: 'p1',
        bold: true,
        text: 'هر محصول موفق با یک تصمیم درست شروع می‌شود.',
      },
      {
        id: 'p2',
        text: `قبل از شروع توسعه، نیازهای کسب‌وکار، اهداف پروژه،
مخاطبان و امکانات مورد نیاز را بررسی می‌کنیم تا بهترین مسیر فنی مشخص شود.
`,
      },
      {
        id: 'p3',
        text: ' در این مرحله ساختار پروژه، معماری نرم‌افزار و تکنولوژی‌های مناسب انتخاب می‌شوند تا محصول شما از ابتدا اصولی ساخته شود.',
      },
    ],
  },

  {
    id: 'tabTwo',
    label: 'طراحی تجربه کاربری',
    iconName: 'SwatchIcon',
    imageSrc: '/images/features/02.jpg',
    imageAlt: 'طراحی تجربه کاربری',
    paragraphs: [
      {
        id: 'p1',
        bold: true,
        text: `یک محصول حرفه‌ای فقط کد نیست؛
تجربه‌ای است که کاربران با آن ارتباط برقرار می‌کنند.
`,
      },
      {
        id: 'p2',
        text: `تیم ما با طراحی UI/UX مدرن،
ساختار صفحات، مسیر حرکت کاربران و رابط کاربری را طراحی می‌کند تا محصولی ساده، جذاب و کاربردی داشته باشی`,
      },
      {
        id: 'p3',
        text: 'ما از طراحی اولیه تا آماده‌سازی کامل رابط کاربری همراه شما هستیم.',
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
        text: ' پس از طراحی، تیم توسعه ما محصول شما را با استفاده از تکنولوژی‌های روز پیاده‌سازی می‌کند.',
      },
      {
        id: 'p2',
        text: `در بخش Front-end از تکنولوژی‌هایی مانند:

React،
Next.js،
TypeScript،
JavaScript،
Tailwind CSS،
Bootstrap

برای ساخت رابط‌های سریع و مدرن استفاده می‌کنیم.
`,
      },
      {
        id: 'p3',
        text: `در بخش Back-end نیز با:

Python،
Django،
FastAPI،
Node.js،
Go،
Dart

سیستم‌های امن، سریع و قابل توسعه ایجاد می‌کنیم.

برای اپلیکیشن‌های موبایل نیز از Flutter و Dart استفاده می‌کنیم تا تجربه‌ای روان و حرفه‌ای روی Android و iOS ارائه شود.`,
      },
    ],
  },

  {
    id: 'tabFour',
    label: 'استقرار، پشتیبانی و رشد محصول',
    iconName: 'ShieldIcon',
    imageSrc: '/images/features/04.jpg',
    imageAlt: 'پشتیبانی و توسعه محصول',
    paragraphs: [
      {
        id: 'p1',
        bold: true,
        text: 'راه‌اندازی محصول پایان مسیر نیست.',
      },
      {
        id: 'p2',
        text: `ما زیرساخت پروژه را مدیریت می‌کنیم و با استفاده از ابزارهای DevOps،
Docker و پایگاه‌های داده مانند SQL،
به پایداری، امنیت و عملکرد بهتر سیستم کمک می‌کنیم.`,
      },
      {
        id: 'p3',
        text: 'پس از انتشار نیز در کنار شما هستیم تا محصول بر اساس نیاز کاربران و رشد کسب‌وکار توسعه پیدا کند.',
      },
    ],
  },
];
