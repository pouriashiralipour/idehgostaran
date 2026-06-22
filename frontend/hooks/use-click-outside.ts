import { useEffect, type RefObject } from 'react';

/**
 * Calls `onClickOutside` whenever a pointer event occurs outside the
 * referenced element. Used to close dropdowns/menus when the user
 * clicks anywhere else on the page — equivalent to Alpine's
 * `x-on:click.outside` directive used throughout the original markup.
 *
 * @param ref - Ref to the element that defines the "inside" boundary.
 * @param onClickOutside - Callback fired on an outside click.
 * @param enabled - When false, the listener is not attached at all
 *                   (useful to skip the effect entirely while a menu
 *                   is already closed, avoiding unnecessary listeners).
 */

export function useClickOutside<T extends HTMLElement>(
  ref: RefObject<T | null>,
  onClickOutside: () => void,
  enable: boolean = true
): void {
  useEffect(() => {
    if (!enable) return;

    function handlePointerDown(event: PointerEvent) {
      const target = event.target as Node;
      if (ref.current && !ref.current.contains(target)) {
        onClickOutside();
      }
    }

    document.addEventListener('pointerdown', handlePointerDown);
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
    };
  }, [ref, onClickOutside, enable]);
}
