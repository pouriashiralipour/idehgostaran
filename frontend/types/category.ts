/**
 * Represents a single category/sub-category in the navigation mega menu.
 *
 * The structure is recursive (`children`) so it can represent an
 * arbitrary depth of nesting — e.g. "Web Programming" -> "JavaScript",
 * matching the current 2-3 level hierarchy in the HTML markup, while
 * remaining flexible for when this data is replaced by a real API
 * response with a different depth.
 */
export interface Category {
  /** Stable unique identifier, used as React `key` and for links. */
  id: string;
  /** Display label shown in the menu. */
  title: string;
  /** Destination URL for this category. Defaults to "#" if not yet linked. */
  href: string;
  /** Optional nested sub-categories. Absent or empty means a leaf node. */
  children?: Category[];
  /**
   * Optional section heading shown above this group of children
   * (e.g. "محبوب ترین موضوعات" above the JavaScript/Node/React list).
   */
  childrenSectionTitle?: string;
}
