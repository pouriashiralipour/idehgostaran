import Image from 'next/image';
import Link from 'next/link';
import { ReplyIcon, HeartIcon } from '@/components/ui/icons';
import type { ArticleComment } from '@/data/comments';

interface ArticleCommentItemProps {
  comment: ArticleComment;
  /** True for nested replies — reserved for future depth-limiting logic. */
  isReply?: boolean;
  /** Called when the user clicks "پاسخ" on this specific comment. */
  onReply?: (comment: ArticleComment) => void;
}

/**
 * Renders a single comment — header (avatar, name, time, reply/like
 * buttons), body text — then recursively renders its `replies` inside
 * an indented, connector-lined block, matching the before:/after:
 * pseudo-element thread lines from `article-detail.html`.
 *
 * Server Component: the reply/like buttons are plain interactive
 * elements without real mutations yet (no backend), so `onReply` is
 * the only callback wired up — it only needs to bubble the target
 * comment up to `ArticleCommentsSection`, which owns the composer's
 * "replying to" state.
 */
export function ArticleCommentItem({
  comment,
  isReply = false,
  onReply,
}: ArticleCommentItemProps) {
  return (
    <div className="space-y-3">
      <div className="bg-background border border-border rounded-3xl space-y-3 p-5">
        <div className="flex sm:flex-nowrap flex-wrap sm:flex-row flex-col sm:items-center sm:justify-between gap-5 border-b border-border pb-3">
          <div className="flex items-center gap-3">
            <div className="flex-shrink-0 w-10 h-10 rounded-full overflow-hidden">
              <Image
                src={comment.author.avatarSrc}
                alt={comment.author.name}
                width={40}
                height={40}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col items-start space-y-1">
              <Link
                href={comment.author.href}
                className="line-clamp-1 font-semibold text-sm text-foreground hover:text-primary"
              >
                {comment.author.name}
              </Link>
              <span className="text-xs text-muted">{comment.timeLabel}</span>
            </div>
          </div>

          <div className="flex items-center gap-3 sm:mr-0 mr-auto">
            <button
              type="button"
              onClick={() => onReply?.(comment)}
              className="flex items-center h-9 gap-1 bg-secondary rounded-full text-muted transition-colors hover:text-primary px-4"
            >
              <span className="text-xs">پاسخ</span>
              <ReplyIcon className="w-5 h-5" />
            </button>

            <button
              type="button"
              aria-label="پسندیدن دیدگاه"
              className="flex items-center justify-center relative w-9 h-9 bg-secondary rounded-full text-muted transition-colors hover:text-red-500"
            >
              <HeartIcon className="w-5 h-5" />
              {typeof comment.likeCount === 'number' &&
                comment.likeCount > 0 && (
                  <span className="absolute -top-1 -right-1 inline-flex bg-red-500 rounded-full text-xs text-white px-1">
                    {comment.likeCount}
                  </span>
                )}
            </button>
          </div>
        </div>

        <p className="text-sm text-muted">{comment.text}</p>
      </div>

      {comment.replies && comment.replies.length > 0 && (
        <div className="relative before:content-[''] before:absolute before:-top-3 before:right-8 before:w-px before:h-[calc(100%-24px)] before:bg-border after:content-[''] after:absolute after:bottom-9 after:right-8 after:w-8 after:h-px after:bg-border space-y-3 pr-16">
          {comment.replies.map(reply => (
            <ArticleCommentItem
              key={reply.id}
              comment={reply}
              isReply
              onReply={onReply}
            />
          ))}
        </div>
      )}
    </div>
  );
}
