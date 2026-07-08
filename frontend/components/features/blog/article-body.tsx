import type { ArticleBodyParagraph } from '@/data/articles';

interface ArticleBodyProps {
  paragraphs?: ArticleBodyParagraph[];
}

/**
 * Renders an article's full body content, paragraph by paragraph.
 * Falls back to a neutral placeholder notice when `paragraphs` is
 * absent — keeps the detail page from crashing/looking broken for
 * the placeholder articles that don't yet have real body content.
 *
 * Server Component — purely presentational.
 */
export function ArticleBody({ paragraphs }: ArticleBodyProps) {
  if (!paragraphs || paragraphs.length === 0) {
    return (
      <p className="font-semibold text-sm text-muted">
        محتوای این مقاله به‌زودی تکمیل می‌شود.
      </p>
    );
  }

  return (
    <div className="space-y-5 text-justify leading-8">
      {paragraphs.map(paragraph => (
        <p
          key={paragraph.id}
          className={
            paragraph.bold
              ? 'font-bold text-foreground'
              : 'font-medium text-muted'
          }
        >
          {paragraph.text}
        </p>
      ))}
    </div>
  );
}
