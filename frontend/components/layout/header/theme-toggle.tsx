'use client';

import { MoonIcon, SunIcon } from '@/components/ui/icons';
import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

interface ThemeToggleProps {
  /** Optional extra classes for the wrapping <button>. */
  className?: string;
}

/**
 * Dark mode toggle button.
 *
 * Must be a Client Component because it reads/writes the theme via
 * next-themes' `useTheme` hook, which depends on browser APIs
 * (localStorage, matchMedia).
 *
 * Hydration-safety note: on the server, the real resolved theme is
 * unknown (it depends on the client's localStorage/system preference),
 * so we render a neutral skeleton circle until the component mounts
 * on the client. This avoids a hydration mismatch warning while also
 * avoiding a layout shift (the skeleton occupies the exact same
 * dimensions as the real button).
 */

export default function ThemeToggle({ className }: ThemeToggleProps) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  if (!mounted) {
    return (
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex w-10 h-10 bg-secondary rounded-full',
          className
        )}
      />
    );
  }

  const isDark = resolvedTheme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={cn(
        'hidden lg:inline-flex items-center justify-center w-10 h-10 bg-secondary rounded-full text-foreground',
        className
      )}
    >
      {isDark ? (
        <MoonIcon className="w-5 h-5" />
      ) : (
        <SunIcon className="w-5 h-5" />
      )}
    </button>
  );
}
