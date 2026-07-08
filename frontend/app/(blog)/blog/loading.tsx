/**
 * Route-level loading UI for `/blog` (and, via the shared segment,
 * its children) — shown while the page and its layout are being
 * prepared. Skeleton mirrors the real grid's shape (title pill +
 * toolbar + 6 card placeholders) to avoid layout shift.
 */
export default function BlogLoading() {
  return (
    <div
      className="space-y-8 animate-pulse"
      role="status"
      aria-label="در حال بارگذاری"
    >
      <div className="flex items-center gap-5">
        <div className="w-12 h-12 bg-secondary rounded-full" />
        <div className="flex flex-col space-y-2">
          <div className="h-6 w-32 bg-secondary rounded-full" />
          <div className="h-4 w-48 bg-secondary rounded-full" />
        </div>
      </div>

      <div className="h-11 w-52 bg-secondary rounded-2xl" />

      <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-x-5 gap-y-10">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="space-y-3">
            <div className="h-48 w-full bg-secondary rounded-xl" />
            <div className="h-4 w-3/4 bg-secondary rounded-full" />
            <div className="h-4 w-1/2 bg-secondary rounded-full" />
          </div>
        ))}
      </div>
    </div>
  );
}
