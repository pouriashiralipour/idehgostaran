export interface ArticleAuthor {
  name: string;
  avatarSrc: string;
  href: string;
}

export interface Article {
  id: string;
  title: string;
  category: string;
  categoryHref: string;
  imageSrc: string;
  imageAlt: string;
  /** Small success-colored status pill (e.g. "تازه منتشر شده"). */
  statusLabel: string;
  readingTimeLabel: string;
  /** Bare minutes (e.g. "۱۲ دقیقه") for compact cards with their own "زمان مطالعه:" label. */
  readingMinutesLabel: string;
  viewsLabel: string;
  publishedAtLabel: string;
  author: ArticleAuthor;
  href: string;
}

/**
 * Latest-articles mock data, mirroring the shape of the original
 * "latest-courses" slider but for blog content.
 *
 * This is a placeholder for backend data — once the API is available,
 * replace usage of this constant with a fetch call that returns the
 * same `Article[]` shape (e.g. in a Server Component, or a dedicated
 * data-fetching function in this same file).
 */
export const latestArticles: Article[] = [
  {
    id: 'article-01',
    title: 'راهنمای کامل شروع به کار با React و Next.js در سال ۱۴۰۴',
    category: 'فرانت اند',
    categoryHref: '/blog/category/frontend',
    imageSrc: '/images/features/01.jpg',
    imageAlt: 'راهنمای شروع به کار با React و Next.js',
    statusLabel: 'تازه منتشر شده',
    readingTimeLabel: '۱۲ دقیقه مطالعه',
    readingMinutesLabel: '۱۲ دقیقه',
    viewsLabel: '۳٬۴۲۰ بازدید',
    publishedAtLabel: '۲ روز پیش',
    author: {
      name: 'جلال بهرامی راد',
      avatarSrc: '/images/theme/intro/study.png',
      href: '/author/jalal-bahramirad',
    },
    href: '/blog/react-nextjs-getting-started',
  },
  {
    id: 'article-02',
    title: 'معماری تمیز در پروژه‌های Django؛ از تئوری تا عمل',
    category: 'بک اند',
    categoryHref: '/blog/category/backend',
    imageSrc: '/images/features/02.jpg',
    imageAlt: 'معماری تمیز در پروژه‌های Django',
    statusLabel: 'تازه منتشر شده',
    readingTimeLabel: '۹ دقیقه مطالعه',
    readingMinutesLabel: '۹ دقیقه',
    viewsLabel: '۲٬۱۵۰ بازدید',
    publishedAtLabel: '۴ روز پیش',
    author: {
      name: 'جلال بهرامی راد',
      avatarSrc: '/images/theme/intro/study.png',
      href: '/author/jalal-bahramirad',
    },
    href: '/blog/clean-architecture-django',
  },
  {
    id: 'article-03',
    title: 'آموزش Flutter از صفر؛ ساخت اولین اپلیکیشن چندسکویی',
    category: 'موبایل',
    categoryHref: '/blog/category/mobile',
    imageSrc: '/images/features/03.jpg',
    imageAlt: 'آموزش Flutter از صفر',
    statusLabel: 'به‌روزرسانی شده',
    readingTimeLabel: '۱۵ دقیقه مطالعه',
    readingMinutesLabel: '۱۵ دقیقه',
    viewsLabel: '۵٬۹۸۰ بازدید',
    publishedAtLabel: '۱ هفته پیش',
    author: {
      name: 'جلال بهرامی راد',
      avatarSrc: '/images/theme/intro/study.png',
      href: '/author/jalal-bahramirad',
    },
    href: '/blog/flutter-from-zero',
  },
  {
    id: 'article-04',
    title: 'Docker و DevOps؛ استقرار صحیح سرویس‌های Go و FastAPI',
    category: 'زیرساخت',
    categoryHref: '/blog/category/devops',
    imageSrc: '/images/features/04.jpg',
    imageAlt: 'Docker و DevOps برای سرویس‌های Go و FastAPI',
    statusLabel: 'تازه منتشر شده',
    readingTimeLabel: '۱۱ دقیقه مطالعه',
    readingMinutesLabel: '۱۱ دقیقه',
    viewsLabel: '۱٬۸۰۰ بازدید',
    publishedAtLabel: '۲ هفته پیش',
    author: {
      name: 'جلال بهرامی راد',
      avatarSrc: '/images/theme/intro/study.png',
      href: '/author/jalal-bahramirad',
    },
    href: '/blog/docker-devops-go-fastapi',
  },
];
