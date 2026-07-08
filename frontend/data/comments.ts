export interface ArticleCommentAuthor {
  name: string;
  avatarSrc: string;
  href: string;
}

export interface ArticleComment {
  id: string;
  author: ArticleCommentAuthor;
  timeLabel: string;
  text: string;
  /** Like counter shown as a small red badge on the like button. */
  likeCount?: number;
  /** Nested replies — mirrors the reply-thread UI in article-detail.html. */
  replies?: ArticleComment[];
}

export const commentsByArticleId: Record<string, ArticleComment[]> = {
  'article-01': [
    {
      id: 'comment-1',
      author: {
        name: 'امید تاجیک',
        avatarSrc: '/images/avatars/01.jpeg',
        href: '#',
      },
      timeLabel: '۲ هفته پیش',
      likeCount: 3,
      text: 'من این دوره رو خریدم و میخوام نکست هم بعدا یاد بگیرم چون نیاز بیشتری دارم به اموزش های این دوره میشه بدون اینکه دوره نکست رو ببینم این دوره رو ببینم(بخش۶ دوره بیشتر مد نظرمه)',
      replies: [
        {
          id: 'comment-1-reply-1',
          author: {
            name: 'جلال بهرامی راد',
            avatarSrc: '/images/avatars/01.jpeg',
            href: '/author/jalal-bahramirad',
          },
          timeLabel: '۲ هفته پیش',
          likeCount: 2,
          text: 'درود امید جان باید next رو ببینی بدون اون که متوجه داستان نمیشی',
        },
        {
          id: 'comment-1-reply-2',
          author: {
            name: 'امید تاجیک',
            avatarSrc: '/images/avatars/01.jpeg',
            href: '#',
          },
          timeLabel: '۲ هفته پیش',
          text: 'خیلی ممنون از راهنماییتون.',
        },
      ],
    },
  ],
};
