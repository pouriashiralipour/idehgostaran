'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

/**
 * Dark mode toggle rendered as a labeled switch inside the mobile
 * offcanvas — visually distinct from the desktop ThemeToggle (icon
 * button), so it lives in its own component rather than a variant prop.
 *
 * Shares the same mounted-check pattern as ThemeToggle to prevent
 * hydration mismatch (the switch's checked state depends on the
 * resolved theme, which is only known client-side).
 */
export default function MobileThemeSwitch() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === 'dark';

  const handleChange = () => {
    setTheme(isDark ? 'light' : 'dark');
  };

  return (
    <label className="relative w-full flex items-center justify-between cursor-pointer">
      <span className="font-bold text-sm text-foreground">تم تاریک</span>
      <input
        type="checkbox"
        className="sr-only peer"
        checked={isDark}
        onChange={handleChange}
        aria-label="تغییر به حالت تاریک"
      />
      <div className="w-11 h-5 relative bg-background border-2 border-border peer-focus:outline-none rounded-full peer peer-checked:after:left-[26px] peer-checked:after:bg-background after:content-[''] after:absolute after:left-0.5 after:top-0.5 after:bg-border after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-primary peer-checked:border-primary"></div>
    </label>
  );
}
