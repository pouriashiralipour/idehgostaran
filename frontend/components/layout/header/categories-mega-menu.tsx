import Link from 'next/link';
import { ChevronDownIcon, ChevronLeftIcon } from '@/components/ui/icons';
import type { Category } from '@/types/category';
import { categories } from '@/data/categories';

/**
 * Renders the flyout panel listing a category's sub-categories.
 * Extracted as a small helper to keep `CategoriesMegaMenu` readable —
 * not exported, since it only makes sense in this file's context.
 */
function CategorySubmenuPanel({ category }: { category: Category }) {
  if (!category.children || category.children.length === 0) return null;

  return (
    <ul className="absolute -top-px -bottom-px right-full flex flex-wrap flex-col w-96 bg-background border border-border shadow-2xl shadow-black/5 space-y-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible px-3 pt-8 pb-3">
      {category.childrenSectionTitle && (
        <li className="absolute top-2">
          <span className="font-bold text-sm text-muted cursor-default">
            {category.childrenSectionTitle}
          </span>
        </li>
      )}
      {category.children.map(child => (
        <li key={child.id} className="w-1/2">
          <Link
            href={child.href}
            className="flex items-center gap-2 text-muted before:content-[''] before:inline-block before:w-1 before:h-1 before:bg-border before:rounded-full transition-colors hover:text-primary hover:before:bg-primary"
          >
            <span className="font-semibold text-sm">{child.title}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

/**
 * Top-level category mega menu, triggered by hover on the
 * "دسته بندی آموزشها" button in the desktop header.
 *
 * Pure CSS hover implementation (Tailwind `group`/`group-hover`),
 * matching the original markup's behavior exactly — no JS state is
 * needed since this component never renders on mobile viewports
 * (mobile uses the separate, stateful MobileCategoriesAccordion).
 */
export function CategoriesMegaMenu() {
  return (
    <div className="relative group/categories">
      <Link
        href="/series"
        className="inline-flex items-center gap-1 h-10 bg-primary rounded-xl text-primary-foreground transition-colors px-4"
      >
        <span className="font-semibold text-sm">دسته بندی آمـــوزشها</span>
        <ChevronDownIcon className="w-5 h-5" />
      </Link>

      <div className="absolute right-0 top-full opacity-0 invisible transition-all group-hover/categories:opacity-100 group-hover/categories:visible pt-5 z-10">
        <ul className="flex flex-col relative w-56 min-h-[300px] bg-background border border-border shadow-2xl shadow-black/5">
          {categories.map(category => (
            <li key={category.id} className="group">
              <Link
                href={category.href}
                className="flex items-center relative text-foreground transition-colors hover:text-primary p-3"
              >
                <span className="font-semibold text-sm">{category.title}</span>
                <span className="absolute left-3">
                  <ChevronLeftIcon className="w-5 h-5" />
                </span>
              </Link>
              <CategorySubmenuPanel category={category} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
