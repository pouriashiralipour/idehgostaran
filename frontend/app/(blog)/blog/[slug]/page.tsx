import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';

import { ArticleBody } from '@/components/features/blog/article-body';
import { ArticleAuthorCard } from '@/components/features/blog/article-author-card';
import { ArticleCommentsSection } from '@/components/features/blog/article-comments-section';
import { getArticleBySlug, getAllArticleSlugs } from '@/lib/utils/articles';
import { commentsByArticleId } from '@/data/comments';

interface ArticleDetailPageProps {
  params: Promise<{ slug: string }>;
}

/** Pre-renders one static page per known article slug at build time. */
export function generateStaticParams(): { slug: string }[] {
  return getAllArticleSlugs().map(slug => ({ slug }));
}

export async function generateMetadata({
  params,
}: ArticleDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  return {
    title: article ? article.title : 'مقاله یافت نشد',
    description: article ? `${article.title} — ${article.category}` : undefined,
  };
}

/**
 * `/blog/[slug]` — full article detail: hero image, title/excerpt,
 * body content, author card, and the comments thread.
 *
 * Rendered inside `app/(main)/blog/layout.tsx`, so it shares the same
 * category sidebar as `/blog` and `/blog/category/[slug]` per the
 * project's requirement that all blog-scoped routes show it.
 *
 * Server Component: article + comments are resolved server-side from
 * the static dataset; only the comment composer/list below is
 * client-interactive (`ArticleCommentsSection`).
 */
export default async function ArticleDetailPage({
  params,
}: ArticleDetailPageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const comments = commentsByArticleId[article.id] ?? [];

  return (
    <div className="flex md:flex-nowrap flex-wrap items-start gap-5">
      <div className="md:w-8/12 w-full">
        <div className="relative">
          {/* article:thumbnail */}
          <div className="relative z-10">
            <Image
              src={article.imageSrc}
              alt={article.imageAlt}
              width={800}
              height={450}
              priority
              className="w-full max-w-full rounded-3xl object-cover"
            />
          </div>

          <div className="-mt-12 pt-12">
            <div className="bg-gradient-to-b from-background to-secondary rounded-b-3xl space-y-2 p-5 mx-5">
              <h1 className="font-bold text-xl text-foreground">
                {article.title}
              </h1>
              <p className="text-sm text-muted">
                {article.category} — {article.readingTimeLabel}
              </p>
            </div>

            <div className="space-y-10 py-5">
              <ArticleBody paragraphs={article.bodyParagraphs} />

              <ArticleCommentsSection initialComments={comments} />
            </div>
          </div>
        </div>
      </div>
      <div className="md:w-4/12 w-full md:sticky md:top-24 space-y-8">
        <ArticleAuthorCard author={article.author} />
      </div>
    </div>
  );
}
