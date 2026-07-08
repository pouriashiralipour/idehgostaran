'use client';

import { useState } from 'react';
import { ArticleCommentForm } from './article-comment-form';
import { ArticleCommentItem } from './article-comment-item';
import type { ArticleComment } from '@/data/comments';

interface ArticleCommentsSectionProps {
  /** Initial comments, fetched server-side and passed down as props. */
  initialComments: ArticleComment[];
}

/**
 * Placeholder for the authenticated user shown on the composer —
 * mirrors the reference markup's hardcoded "امید تاجیک" block.
 * Swap for real session data once auth state feeds into this section.
 */
const placeholderCurrentUser = {
  name: 'امید تاجیک',
  avatarSrc: '/images/avatars/01.jpeg',
  href: '#',
};

/**
 * "دیدگاه و پرسش" section: title + composer + comment thread list.
 *
 * Client Component: owns two pieces of local state —
 * 1. `comments`, to optimistically prepend a newly submitted comment.
 * 2. `replyingTo`, the comment currently targeted by "پاسخ", which
 *    drives the composer's "در پاسخ به ... / لغو پاسخ" row.
 *
 * The submit handler itself is still a stub (no backend yet) — same
 * seam pattern as `AuthFlow`'s TODO-marked handlers — ready to be
 * swapped for a real create-comment mutation.
 */
export function ArticleCommentsSection({
  initialComments,
}: ArticleCommentsSectionProps) {
  const [comments, setComments] = useState(initialComments);
  const [replyingTo, setReplyingTo] = useState<ArticleComment | null>(null);

  const handleSubmit = (text: string) => {
    // TODO: replace with the real create-comment mutation once the
    // comments backend/API route exists. `replyingTo` should be sent
    // as the parent comment id so the API can nest the reply properly.
    const optimisticComment: ArticleComment = {
      id: `comment-${Date.now()}`,
      author: placeholderCurrentUser,
      timeLabel: 'همین الان',
      text,
    };
    setComments(prev => [optimisticComment, ...prev]);
    setReplyingTo(null);
  };

  return (
    <div className="space-y-5">
      <div className="flex items-center gap-3 mb-5">
        <div className="flex items-center gap-1">
          <div className="w-1 h-1 bg-foreground rounded-full" />
          <div className="w-2 h-2 bg-foreground rounded-full" />
        </div>
        <div className="font-black text-foreground">دیدگاه و پرسش</div>
      </div>

      <ArticleCommentForm
        onSubmit={handleSubmit}
        currentUser={placeholderCurrentUser}
        replyingTo={replyingTo}
        onCancelReply={() => setReplyingTo(null)}
      />

      <div className="space-y-3">
        {comments.length === 0 ? (
          <p className="font-semibold text-sm text-muted">
            هنوز دیدگاهی ثبت نشده — اولین نفری باشید که نظر می‌دهد.
          </p>
        ) : (
          comments.map(comment => (
            <ArticleCommentItem
              key={comment.id}
              comment={comment}
              onReply={setReplyingTo}
            />
          ))
        )}
      </div>
    </div>
  );
}
