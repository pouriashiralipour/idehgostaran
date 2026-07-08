export interface ArticleAuthor {
  name: string;
  avatarSrc: string;
  href: string;
  bio?: string;
}

/** A single paragraph in an article's full body content. */
export interface ArticleBodyParagraph {
  id: string;
  text: string;
  bold?: boolean;
}

export interface Article {
  id: string;
  title: string;
  category: string;
  categoryHref: string;
  imageSrc: string;
  imageAlt: string;
  statusLabel: string;
  readingTimeLabel: string;
  readingMinutesLabel: string;
  viewsLabel: string;
  publishedAtLabel: string;
  author: ArticleAuthor;
  href: string;
  bodyParagraphs?: ArticleBodyParagraph[];
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
    imageSrc: '/images/courses/01.jpg',
    imageAlt: 'راهنمای شروع به کار با React و Next.js',
    statusLabel: 'تازه منتشر شده',
    readingTimeLabel: '۱۲ دقیقه مطالعه',
    readingMinutesLabel: '۱۲ دقیقه',
    viewsLabel: '۳٬۴۲۰ بازدید',
    publishedAtLabel: '۲ روز پیش',
    author: {
      name: 'جلال بهرامی راد',
      avatarSrc: '/images/avatars/01.jpeg',
      href: '/author/jalal-bahramirad',
      bio: 'اول داستان، طراح گرافیک بودم و ۲ سالی به عنوان طراح مشغول بودم، بعد به برنامه‌نویسی علاقمند شدم و الان بیشتر از ۱۰ ساله که عاشق کدزنی و چالش‌های پروژه‌های مختلفم.',
    },
    bodyParagraphs: [
      {
        id: 'p1',
        bold: true,
        text: 'React همچنان یکی از پرکاربردترین فریمورک‌های جاوااسکریپتی دنیای وب است.',
      },
      {
        id: 'p2',
        text: 'در این راهنما قدم به قدم با راه‌اندازی یک پروژه‌ی Next.js 16، ساختار App Router، و بهترین شیوه‌های مدیریت کامپوننت‌های سرور و کلاینت آشنا می‌شویم.',
      },
    ],
    href: '/blog/react-nextjs-getting-started',
  },
  {
    id: 'article-02',
    title: 'معماری تمیز در پروژه‌های Django؛ از تئوری تا عمل',
    category: 'بک اند',
    categoryHref: '/blog/category/backend',
    imageSrc: '/images/courses/02.jpg',
    imageAlt: 'معماری تمیز در پروژه‌های Django',
    statusLabel: 'تازه منتشر شده',
    readingTimeLabel: '۹ دقیقه مطالعه',
    readingMinutesLabel: '۹ دقیقه',
    viewsLabel: '۲٬۱۵۰ بازدید',
    publishedAtLabel: '۴ روز پیش',
    author: {
      name: 'جلال بهرامی راد',
      avatarSrc: '/images/avatars/01.jpeg',
      href: '/author/jalal-bahramirad',
    },
    href: '/blog/clean-architecture-django',
  },
  {
    id: 'article-03',
    title: 'آموزش Flutter از صفر؛ ساخت اولین اپلیکیشن چندسکویی',
    category: 'موبایل',
    categoryHref: '/blog/category/mobile',
    imageSrc: '/images/courses/03.jpg',
    imageAlt: 'آموزش Flutter از صفر',
    statusLabel: 'به‌روزرسانی شده',
    readingTimeLabel: '۱۵ دقیقه مطالعه',
    readingMinutesLabel: '۱۵ دقیقه',
    viewsLabel: '۵٬۹۸۰ بازدید',
    publishedAtLabel: '۱ هفته پیش',
    author: {
      name: 'جلال بهرامی راد',
      avatarSrc: '/images/avatars/01.jpeg',
      href: '/author/jalal-bahramirad',
    },
    href: '/blog/flutter-from-zero',
  },
  {
    id: 'article-04',
    title: 'Docker و DevOps؛ استقرار صحیح سرویس‌های Go و FastAPI',
    category: 'زیرساخت',
    categoryHref: '/blog/category/devops',
    imageSrc: '/images/courses/04.jpg',
    imageAlt: 'Docker و DevOps برای سرویس‌های Go و FastAPI',
    statusLabel: 'تازه منتشر شده',
    readingTimeLabel: '۱۱ دقیقه مطالعه',
    readingMinutesLabel: '۱۱ دقیقه',
    viewsLabel: '۱٬۸۰۰ بازدید',
    publishedAtLabel: '۲ هفته پیش',
    author: {
      name: 'جلال بهرامی راد',
      avatarSrc: '/images/avatars/01.jpeg',
      href: '/author/jalal-bahramirad',
    },
    href: '/blog/docker-devops-go-fastapi',
  },
];
