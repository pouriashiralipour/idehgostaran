import Link from 'next/link';
import Image from 'next/image';
import {
  GridIcon,
  ClockIcon,
  EyeIcon,
  ArrowDiagonalIcon,
} from '@/components/ui/icons';
import { SaveArticleButton } from './save-article-button';
import type { Article } from '@/data/articles';

interface ArticleCardProps {
  article: Article;
}

/**
 * Single blog-article card used in the "latest articles" grid.
 *
 * Server Component — fully static aside from the bookmark toggle,
 * which is isolated into `SaveArticleButton` (Client Component) so
 * the bulk of the markup stays server-rendered.
 */
export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <div className="relative">
      <div className="relative z-10">
        <Link href={article.href} className="block">
          <Image
            src={article.imageSrc}
            alt={article.imageAlt}
            width={400}
            height={260}
            className="w-full max-w-full rounded-3xl object-cover"
          />
        </Link>
        <Link
          href={article.categoryHref}
          className="absolute left-3 top-3 h-11 inline-flex items-center justify-center gap-1 bg-black/20 rounded-full text-white transition-all hover:opacity-80 px-4"
        >
          <GridIcon className="w-6 h-6" />
          <span className="font-semibold text-sm">{article.category}</span>
        </Link>
      </div>

      <div className="bg-secondary rounded-b-3xl -mt-12 pt-12">
        <div className="bg-gradient-to-b from-secondary to-background rounded-b-3xl space-y-2 p-5 mx-5">
          <div className="flex items-center gap-2">
            <span className="block w-1 h-1 bg-success rounded-full" />
            <span className="font-bold text-xs text-success">
              {article.statusLabel}
            </span>
          </div>
          <h2 className="font-bold text-sm">
            <Link
              href={article.href}
              className="line-clamp-1 text-foreground transition-colors hover:text-primary"
            >
              {article.title}
            </Link>
          </h2>
        </div>

        <div className="space-y-3 p-5">
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-1 text-muted">
              <ClockIcon className="w-5 h-5" />
              <span className="font-semibold text-xs">
                {article.readingTimeLabel}
              </span>
            </div>
            <span className="block w-1 h-1 bg-muted rounded-full" />
            <div className="flex items-center gap-1 text-muted">
              <EyeIcon className="w-5 h-5" />
              <span className="font-semibold text-xs">
                {article.viewsLabel}
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between gap-5">
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0 w-10 h-10 rounded-full overflow-hidden">
                <Image
                  src={article.author.avatarSrc}
                  alt={article.author.name}
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col items-start space-y-1">
                <span className="line-clamp-1 font-semibold text-xs text-muted">
                  نویسنده:
                </span>
                <Link
                  href={article.author.href}
                  className="line-clamp-1 font-bold text-xs text-foreground hover:text-primary"
                >
                  {article.author.name}
                </Link>
              </div>
            </div>
            <div className="flex flex-col items-end justify-center h-14">
              <span className="font-semibold text-xs text-muted">
                تاریخ انتشار
              </span>
              <span className="font-black text-sm text-foreground">
                {article.publishedAtLabel}
              </span>
            </div>
          </div>

          <div className="flex gap-3 mt-3">
            <Link
              href={article.href}
              className="w-full h-11 inline-flex items-center justify-center gap-1 bg-primary rounded-full text-primary-foreground transition-all hover:opacity-80 px-4"
            >
              <span className="line-clamp-1 font-semibold text-sm">
                مطالعه مقاله
              </span>
              <ArrowDiagonalIcon className="w-5 h-5" />
            </Link>
            <SaveArticleButton articleId={article.id} />
          </div>
        </div>
      </div>
    </div>
  );
}
