import { useLanguage } from "../../contexts/LanguageContext";

export function SkipLink() {
  const { t } = useLanguage();
  return (
    <a
      href="#about"
      className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-ink"
    >
      {t("nav.skip")}
    </a>
  );
}
