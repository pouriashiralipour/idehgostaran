import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Utility function to merge Tailwind CSS classes with conditional logic.
 *
 * This function combines `clsx` for handling conditional class strings/objects
 * and `tailwind-merge` for resolving Tailwind class conflicts (e.g., 'p-4 p-2' becomes 'p-2').
 *
 * @param inputs - A list of class values (strings, objects, arrays, etc.) to be merged.
 * @returns A single string of merged class names.
 *
 * @example
 * // Basic usage
 * cn('bg-blue-500', 'text-white') // Returns 'bg-blue-500 text-white'
 *
 * @example
 * // Conditional usage
 * cn('p-4', isActive && 'bg-blue-500', !isActive && 'bg-gray-200')
 *
 * @example
 * // Conflict resolution
 * cn('p-4', 'p-2') // Returns 'p-2' (tailwind-merge handles the conflict)
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
