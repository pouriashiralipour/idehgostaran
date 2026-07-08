/**
 * Route-level loading UI for `/blog/category/[slug]`. Reuses the same
 * skeleton shape as the main blog list (`/blog/loading.tsx`) since
 * both routes render the identical grid layout — only the title data
 * source differs, which has no bearing on the skeleton itself.
 */
export default function BlogCategoryLoading() {
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
