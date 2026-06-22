import type { Category } from '@/types/category';

/**
 * Mega menu category data, extracted from the original static HTML.
 *
 * This is a placeholder for backend data — once the API is available,
 * replace the usage of this constant with a fetch call that returns
 * the same `Category[]` shape (e.g. in a Server Component or a
 * dedicated data-fetching function in this same file).
 */
export const categories: Category[] = [
  {
    id: 'web-programming',
    title: 'برنامه نویسی وب',
    href: '#',
    childrenSectionTitle: 'محبوب ترین موضوعات',
    children: [
      { id: 'javascript', title: 'جاوااسکریپت', href: '#' },
      { id: 'nodejs', title: 'نود جی اس', href: '#' },
      { id: 'reactjs', title: 'ریکت جی اس', href: '#' },
      { id: 'vuejs', title: 'ویو جی اس', href: '#' },
      { id: 'tailwind', title: 'تیلویند', href: '#' },
      { id: 'bootstrap', title: 'بوت استرپ', href: '#' },
      { id: 'css', title: 'سی اس اس', href: '#' },
      { id: 'html', title: 'اچ تی ام ال', href: '#' },
      { id: 'php', title: 'پی اچ پی', href: '#' },
      { id: 'laravel', title: 'لاراول', href: '#' },
      { id: 'livewire', title: 'لایووایر', href: '#' },
      { id: 'alpinejs', title: 'آلپاین جی اس', href: '#' },
      { id: 'dotnet', title: 'دات نت', href: '#' },
    ],
  },
  {
    id: 'data-science',
    title: 'دیتا ساینس',
    href: '#',
    childrenSectionTitle: 'محبوب ترین موضوعات',
    children: [
      { id: 'javascript-ds', title: 'جاوااسکریپت', href: '#' },
      { id: 'nodejs-ds', title: 'نود جی اس', href: '#' },
      { id: 'reactjs-ds', title: 'ریکت جی اس', href: '#' },
      { id: 'vuejs-ds', title: 'ویو جی اس', href: '#' },
      { id: 'php-ds', title: 'پی اچ پی', href: '#' },
      { id: 'laravel-ds', title: 'لاراول', href: '#' },
      { id: 'livewire-ds', title: 'لایووایر', href: '#' },
      { id: 'alpinejs-ds', title: 'آلپاین جی اس', href: '#' },
      { id: 'dotnet-ds', title: 'دات نت', href: '#' },
    ],
  },
  {
    id: 'programming-languages',
    title: 'زبانهای برنامه نویسی',
    href: '#',
  },
  {
    id: 'game-development',
    title: 'توسعه بازی',
    href: '#',
  },
  {
    id: 'mobile-programming',
    title: 'برنامه نویسی موبایل',
    href: '#',
  },
  {
    id: 'database-design',
    title: 'طراحی دیتابیس',
    href: '#',
  },
  {
    id: 'testing',
    title: 'تست نویسی',
    href: '#',
  },
];

/**
 * Subset of categories used by the mobile offcanvas accordion, where
 * only "Web Programming" has a third nesting level (a placeholder
 * "..." link pointing to /series.html). We reuse the same `categories`
 * array — the mobile accordion component is responsible for rendering
 * up to N levels recursively.
 */
export const mobileCategoriesSeriesHref = '/series';
