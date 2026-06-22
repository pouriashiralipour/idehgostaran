import Link from 'next/link';
import { ChevronDownIcon } from '@/components/ui/icons';
import { mainNavLinks } from '@/data/navigation';
import { cn } from '@/lib/utils';

/**
 * Primary navigation bar (the primary-colored strip below the main
 * header row), desktop-only (`lg:block hidden`).
 *
 * Server Component: the "لینکهای مفید" submenu uses pure CSS
 * group-hover, matching the original Alpine markup's hover-only
 * behavior — no JS state needed since this nav never renders on
 * mobile viewports (mobile uses the offcanvas nav links instead).
 */
export function MainNav() {
  return (
    <div className="lg:block hidden bg-primary rounded-b-3xl mx-12">
      <ul className="flex items-center justify-center py-2">
        {mainNavLinks.map(link => (
          <li
            key={link.id}
            className={cn(link.hasSubmenu && 'relative group/submenu')}
          >
            <Link
              href={link.href}
              className="inline-flex text-primary-foreground transition-all hover:opacity-80 py-3 px-4"
            >
              <span className="font-semibold text-sm">{link.title}</span>
              {link.hasSubmenu && (
                <ChevronDownIcon className="w-5 h-5 transition-transform group-hover/submenu:rotate-180" />
              )}
            </Link>

            {link.hasSubmenu && link.children && (
              <ul className="absolute top-full right-0 w-56 bg-background border border-border rounded-xl shadow-2xl shadow-black/5 opacity-0 invisible transition-all group-hover/submenu:opacity-100 group-hover/submenu:visible p-3 mt-2">
                {link.children.map(child => (
                  <li key={child.id}>
                    <Link
                      href={child.href}
                      className="flex items-center gap-2 w-full text-foreground transition-colors hover:text-primary px-3 py-2"
                    >
                      <span className="font-semibold text-xs">
                        {child.title}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
