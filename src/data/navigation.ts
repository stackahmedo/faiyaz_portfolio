import type { TranslationKey } from "../i18n/en";

export interface NavItem {
  id: string;
  labelKey: TranslationKey;
}

export const navItems: NavItem[] = [
  { id: "hero", labelKey: "nav.home" },
  { id: "about", labelKey: "nav.about" },
  { id: "skills", labelKey: "nav.skills" },
  { id: "services", labelKey: "nav.services" },
  { id: "projects", labelKey: "nav.projects" },
  { id: "blogs", labelKey: "nav.blogs" },
  { id: "contact", labelKey: "nav.contact" },
];
