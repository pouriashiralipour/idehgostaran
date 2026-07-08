'use client';

import { useState, type FormEvent } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowDiagonalIcon } from '@/components/ui/icons';
import type { ArticleComment } from '@/data/comments';

interface ArticleCommentFormProps {
  /** Called with the submitted comment text once validation passes. */
  onSubmit: (text: string) => void | Promise<void>;
  /**
   * The current authenticated user shown next to the composer
   * (avatar + name + a placeholder "joined X ago" label), matching
   * the reference markup's hardcoded "امید تاجیک" block. Swap for the
   * real session user once auth state is wired into this form.
   */
  currentUser: { name: string; avatarSrc: string; href: string };
  /** The comment being replied to, or `null` when composing a top-level comment. */
  replyingTo: ArticleComment | null;
  /** Called when the user clicks "لغو پاسخ" to exit reply mode. */
  onCancelReply: () => void;
}

/**
 * "ارسال دیدگاه یا پرسش" comment composer.
 *
 * Client Component: owns the controlled textarea + submitting state.
 * When `replyingTo` is set, renders the "در پاسخ به ..." row with a
 * cancel button — 1:1 with the reference markup's reply-context bar
 * (only visible while actively replying to a specific comment).
 */
export function ArticleCommentForm({
  onSubmit,
  currentUser,
  replyingTo,
  onCancelReply,
}: ArticleCommentFormProps) {
  const [text, setText] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmed = text.trim();
    if (!trimmed) return;

    setIsSubmitting(true);
    try {
      await onSubmit(trimmed);
      setText('');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-background border border-border rounded-3xl p-5 mb-5">
      <div className="flex items-center gap-3 mb-5">
        <div className="flex items-center gap-1">
          <div className="w-1 h-1 bg-foreground rounded-full" />
          <div className="w-2 h-2 bg-foreground rounded-full" />
        </div>
        <div className="font-black text-xs text-foreground">
          ارسال دیدگاه یا پرسش
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3 mb-5">
        <div className="flex items-center gap-3 sm:w-auto w-full">
          <div className="flex-shrink-0 w-10 h-10 rounded-full overflow-hidden">
            <Image
              src={currentUser.avatarSrc}
              alt={currentUser.name}
              width={40}
              height={40}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col items-start space-y-1">
            <Link
              href={currentUser.href}
              className="line-clamp-1 font-semibold text-sm text-foreground hover:text-primary"
            >
              {currentUser.name}
            </Link>
            <span className="text-xs text-muted">۲ هفته پیش</span>
          </div>
        </div>

        {replyingTo && (
          <>
            <span className="block w-1 h-1 bg-border rounded-full" />
            <span className="font-semibold text-xs text-muted">در پاسخ به</span>
            <span className="block w-1 h-1 bg-border rounded-full" />
            <Link
              href={replyingTo.author.href}
              className="line-clamp-1 font-semibold text-sm text-foreground hover:text-primary"
            >
              {replyingTo.author.name}
            </Link>
            <button
              type="button"
              onClick={onCancelReply}
              className="line-clamp-1 font-semibold text-sm text-red-500 mr-auto"
            >
              لغو پاسخ
            </button>
          </>
        )}
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col space-y-5">
        <label htmlFor="comment-text" className="sr-only">
          متن دیدگاه
        </label>
        <textarea
          id="comment-text"
          rows={10}
          value={text}
          onChange={event => setText(event.target.value)}
          placeholder="متن مورد نظر خود را وارد کنید ..."
          className="form-textarea w-full !ring-0 !ring-offset-0 bg-secondary border-0 focus:border-border border-border rounded-xl text-sm text-foreground p-5"
        />
        <button
          type="submit"
          disabled={isSubmitting || text.trim().length === 0}
          className="h-10 inline-flex items-center justify-center gap-1 bg-primary rounded-full text-primary-foreground transition-all hover:opacity-80 disabled:opacity-50 disabled:cursor-not-allowed px-4 mr-auto"
        >
          <span className="font-semibold text-sm">
            {isSubmitting ? 'در حال ارسال...' : 'ثبت دیدگاه یا پرسش'}
          </span>
          <ArrowDiagonalIcon className="w-5 h-5" />
        </button>
      </form>
    </div>
  );
}
