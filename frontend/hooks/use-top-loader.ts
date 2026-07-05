/**
 * Thin re-export of `nextjs-toploader`'s hook.
 *
 * Kept as a single indirection point (same pattern as
 * `components/ui/icons.tsx` for icons) so that if the underlying
 * top-loading-bar library is ever swapped, only this file changes —
 * not every form component that manually starts/stops the bar.
 */
export { useTopLoader } from 'nextjs-toploader';
