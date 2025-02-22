/**
 *
 * @property {string} [href] - Если указан URL ссылки (href), то элемент рендерится как Link
 * @property {ReactNode} [children] - Если не указан URL (href), то рендерится переданный компонент
 */
type NavElement = { children: React.ReactNode } | { href: string };

export type NavBarProps = {
	navElements: NavElement[];
};
