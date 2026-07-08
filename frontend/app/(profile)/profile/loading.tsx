/**
 * Route-level loading UI for `/profile` — skeleton mirrors the stat
 * grid + course-carousel shape to avoid layout shift.
 */
export default function ProfileDashboardLoading() {
  return (
    <div
      className="space-y-10 animate-pulse"
      role="status"
      aria-label="در حال بارگذاری"
    >
      <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="h-16 bg-secondary rounded-2xl" />
        ))}
      </div>

      <div className="space-y-5">
        <div className="h-5 w-40 bg-secondary rounded-full" />
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-5">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="h-64 bg-secondary rounded-3xl" />
          ))}
        </div>
      </div>
    </div>
  );
}
