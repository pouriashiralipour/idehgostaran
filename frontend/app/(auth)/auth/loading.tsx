/**
 * Route-level loading UI for `/auth`, shown by Next.js while the
 * page (and, once wired up, any server-side data it fetches) is
 * being prepared. Mirrors the real card's shape so there's no
 * layout shift when the actual content swaps in.
 */
export default function AuthLoading() {
  return (
    <div
      className="w-full max-w-sm space-y-5 animate-pulse"
      role="status"
      aria-label="در حال بارگذاری"
    >
      <div className="bg-gradient-to-b from-secondary to-background rounded-3xl space-y-5 px-5 pb-5">
        <div className="bg-background rounded-b-3xl p-5">
          <div className="h-6 w-32 bg-secondary rounded-full" />
        </div>
        <div className="space-y-3">
          <div className="h-4 w-40 bg-secondary rounded-full" />
          <div className="h-11 w-full bg-secondary rounded-xl" />
          <div className="h-10 w-full bg-secondary rounded-full" />
        </div>
      </div>
    </div>
  );
}
