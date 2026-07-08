import Image from 'next/image';
import Link from 'next/link';
import type { ArticleAuthor } from '@/data/articles';

interface ArticleAuthorCardProps {
  author: ArticleAuthor;
}

/**
 * Author bio card shown alongside an article's body — mirrors the
 * "نویسنده:" block from `article-detail.html`'s sidebar, relocated
 * into the main content column here (see the design note at the top
 * of this step for why).
 *
 * Server Component — purely presentational.
 */
export function ArticleAuthorCard({ author }: ArticleAuthorCardProps) {
  return (
    <div className="space-y-5">
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1">
          <div className="w-1 h-1 bg-foreground rounded-full" />
          <div className="w-2 h-2 bg-foreground rounded-full" />
        </div>
        <div className="font-black text-sm text-foreground">نویسنده:</div>
      </div>

      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="flex-shrink-0 w-10 h-10 rounded-full overflow-hidden">
            <Image
              src={author.avatarSrc}
              alt={author.name}
              width={40}
              height={40}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col items-start space-y-1">
            <Link
              href={author.href}
              className="line-clamp-1 font-bold text-sm text-foreground hover:text-primary"
            >
              {author.name}
            </Link>
            <span className="line-clamp-1 font-semibold text-xs text-primary">
              دیدن رزومه
            </span>
          </div>
        </div>

        {author.bio && (
          <div className="bg-secondary rounded-tl-3xl rounded-b-3xl text-sm text-muted p-5">
            {author.bio}
          </div>
        )}
      </div>
    </div>
  );
}
