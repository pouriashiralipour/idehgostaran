import Link from 'next/link';
import Image from 'next/image';
import { ClockOutlineIcon } from '@/components/ui/icons';
import { SaveArticleButton } from '@/components/articles/save-article-button';
import type { Article } from '@/data/articles';

interface BlogArticleCardProps {
  article: Article;
}

/**
 * Article card used specifically on `/blog` and `/blog/category/[slug]`
 * grids — deliberately distinct from `ArticleCard` (the home-page
 * "latest articles" card, which has a top-overlay category badge, a
 * status pill, view/publish stats, and a CTA button).
 *
 * This variant mirrors the reference markup exactly:
 * - Elevated shadow (`shadow-xl shadow-black/5`), matching the blog
 *   grid's card style rather than the flatter home-page card.
 * - A floating bookmark button overlapping the bottom-left corner of
 *   the thumbnail.
 * - Category rendered as an inline pill next to the author (not an
 *   overlay on the image).
 * - A single reading-time footer row instead of a full stats block.
 *
 * Server Component — the bookmark toggle is isolated into
 * `SaveArticleButton` (Client Component) so the card itself stays
 * server-rendered, same pattern as `ArticleCard`/`ArticleListCard`.
 */
export function BlogArticleCard({ article }: BlogArticleCardProps) {
  return (
    <div className="relative bg-background rounded-xl shadow-xl shadow-black/5 p-4">
      <div className="relative mb-3 z-20">
        <Link href={article.href} className="block">
          <Image
            src={article.imageSrc}
            alt={article.imageAlt}
            width={400}
            height={260}
            className="w-full max-w-full rounded-xl object-cover"
          />
        </Link>
        <SaveArticleButton
          articleId={article.id}
          className="absolute left-3 -bottom-3 w-9 h-9 bg-secondary shadow-xl z-10"
        />
      </div>

      <div className="relative space-y-3 z-10">
        <h2 className="font-bold text-sm">
          <Link
            href={article.href}
            className="line-clamp-1 text-foreground transition-colors hover:text-primary"
          >
            {article.title}
          </Link>
        </h2>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <div className="flex-shrink-0 w-8 h-8 border border-white rounded-full overflow-hidden">
              <Image
                src={article.author.avatarSrc}
                alt={article.author.name}
                width={32}
                height={32}
                className="w-full h-full object-cover"
              />
            </div>
            <Link
              href={article.author.href}
              className="line-clamp-1 font-bold text-xs text-foreground transition-colors hover:text-primary"
            >
              {article.author.name}
            </Link>
          </div>

          <Link
            href={article.categoryHref}
            className="bg-primary/10 rounded-full text-primary transition-all hover:opacity-80 py-1 px-4"
          >
            <span className="font-bold text-xxs">{article.category}</span>
          </Link>
        </div>

        <div className="flex justify-end">
          <div className="flex items-center gap-1 text-muted">
            <ClockOutlineIcon className="w-5 h-5" />
            <span className="font-semibold text-xs text-muted">
              زمان مطالعه:
            </span>
            <span className="font-semibold text-xs text-foreground">
              {article.readingMinutesLabel}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
