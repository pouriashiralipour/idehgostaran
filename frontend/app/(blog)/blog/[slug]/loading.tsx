/**
 * Route-level loading UI for `/blog/[slug]` — mirrors the article
 * detail shape (hero image, title block, body lines) to avoid layout
 * shift while the static page data resolves.
 */
export default function ArticleDetailLoading() {
  return (
    <div
      className="space-y-5 animate-pulse"
      role="status"
      aria-label="در حال بارگذاری"
    >
      <div className="h-64 w-full bg-secondary rounded-3xl" />
      <div className="space-y-2 px-5">
        <div className="h-6 w-2/3 bg-secondary rounded-full" />
        <div className="h-4 w-1/3 bg-secondary rounded-full" />
      </div>
      <div className="space-y-3 px-5">
        <div className="h-4 w-full bg-secondary rounded-full" />
        <div className="h-4 w-full bg-secondary rounded-full" />
        <div className="h-4 w-3/4 bg-secondary rounded-full" />
      </div>
    </div>
  );
}
