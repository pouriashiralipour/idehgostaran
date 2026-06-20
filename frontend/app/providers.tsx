'use client';

import { ThemeProvider } from 'next-themes';
import type { ReactNode } from 'react';

interface ProviderProps {
  children: ReactNode;
}

/**
 * Wraps the application with next-themes' ThemeProvider.
 *
 * - attribute="class": toggles the "dark" class on <html>, matching
 *   the existing Tailwind dark-mode setup (`.dark { ... }` in globals.css).
 * - defaultTheme="system": respects the user's OS preference on first visit.
 * - enableSystem: allows automatic switching when the OS theme changes.
 * - disableTransitionOnChange: avoids a flash/transition flicker when
 *   the theme toggles.
 */
export function Providers({ children }: ProviderProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
}
