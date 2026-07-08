import Link from 'next/link';

export interface BlogTag {
  id: string;
  label: string;
  href: string;
}

/**
 * Static placeholder tag list ("تگ های محبوب") shown in the blog
 * sidebar. Placeholder for backend data — swap for a fetch once a
 * tags endpoint exists (same convention as `data/articles.ts`).
 */
const popularTags: BlogTag[] = [
  { id: 'laravel', label: 'لاراول', href: '/blog/tag/laravel' },
  { id: 'web-design', label: 'طراحی_وب', href: '/blog/tag/web-design' },
  { id: 'javascript', label: 'جاوااسکریپت', href: '/blog/tag/javascript' },
  { id: 'php', label: 'php', href: '/blog/tag/php' },
  { id: 'react', label: 'ریکت', href: '/blog/tag/react' },
  { id: 'wordpress', label: 'وردپرس', href: '/blog/tag/wordpress' },
  { id: 'flutter', label: 'فلاتر', href: '/blog/tag/flutter' },
  { id: 'tailwind', label: 'تیلویند', href: '/blog/tag/tailwind' },
  { id: 'programming', label: 'برنامه نویسی', href: '/blog/tag/programming' },
  { id: 'misc', label: 'متفرقه', href: '/blog/tag/misc' },
];

/**
 * Renders the popular-tags pill list. Server Component — purely
 * presentational, no client state required.
 */
export function BlogPopularTags() {
  return (
    <div className="w-full flex flex-col space-y-5">
      <span className="font-bold text-sm text-foreground">تگ های محبوب</span>
      <ul className="flex flex-wrap gap-3">
        {popularTags.map(tag => (
          <li key={tag.id}>
            <Link
              href={tag.href}
              className="inline-flex items-center h-9 bg-secondary rounded-xl font-semibold text-xs text-muted transition-colors hover:text-primary px-4"
            >
              # {tag.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
