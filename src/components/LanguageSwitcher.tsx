import { motion } from "motion/react";
import { Globe } from "lucide-react";
import { useLanguage, type Language } from "../contexts/LanguageContext";

const languages: { code: Language; label: string; flag: string }[] = [
  { code: "en", label: "English", flag: "🇺🇸" },
  { code: "jp", label: "日本語", flag: "🇯🇵" },
];

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      role="group"
      aria-label="Language"
      className="relative flex items-center gap-1.5 rounded-full border border-accent/30 bg-surface-glass px-2 py-1 backdrop-blur-md"
    >
      <Globe className="h-3 w-3 text-accent" aria-hidden="true" />
      <div className="h-3 w-px bg-accent/30" />

      <div className="flex items-center gap-0.5">
        {languages.map((lang) => {
          const isActive = language === lang.code;
          return (
            <button
              key={lang.code}
              type="button"
              onClick={() => setLanguage(lang.code)}
              aria-pressed={isActive}
              aria-label={lang.label}
              lang={lang.code === "jp" ? "ja" : "en"}
              className="relative flex items-center gap-1 rounded-full px-2 py-0.5 transition-colors hover:bg-accent/10"
            >
              {isActive && (
                <motion.span
                  className="absolute inset-0 rounded-full border border-accent/40 bg-gradient-to-r from-accent/20 to-steel/20"
                  layoutId="activeLanguageBg"
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                />
              )}
              <span className="relative text-sm" aria-hidden="true">
                {lang.flag}
              </span>
              <span
                className={`relative hidden text-[10px] font-medium transition-colors sm:inline ${
                  isActive ? "text-accent" : "text-fg-muted"
                }`}
              >
                {lang.code.toUpperCase()}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
