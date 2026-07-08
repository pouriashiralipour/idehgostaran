/**
 * Small "line – dot – line" horizontal divider reused across the
 * about-us, terms, and (eventually) other static content pages —
 * extracted once instead of duplicating the same 3-span markup in
 * every page that needs it.
 */
export function SectionDivider() {
  return (
    <div className="flex items-center gap-3 w-40">
      <span className="block flex-grow h-px bg-border" />
      <span className="w-2 h-2 bg-border rounded-full" />
      <span className="block flex-grow h-px bg-border" />
    </div>
  );
}
