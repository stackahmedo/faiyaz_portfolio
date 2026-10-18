import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import imgLogo from "../assets/personal-logo.svg";
import { useLanguage } from "../contexts/LanguageContext";
import { navItems } from "../data/navigation";
import { scrollToSection } from "../lib/scroll";
import { LanguageSwitcher } from "./LanguageSwitcher";

function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    // A thin band just below the nav bar decides which section is "current".
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-80px 0px -70% 0px" },
    );

    ids.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [ids]);

  return [active, setActive] as const;
}

const sectionIds = navItems.map((item) => item.id);

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useActiveSection(sectionIds);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isMenuOpen]);

  const goTo = (id: string) => {
    scrollToSection(id);
    setActiveSection(id);
    setIsMenuOpen(false);
  };

  return (
    <motion.header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-nav-solid shadow-lg shadow-accent/10 backdrop-blur-md" : "bg-nav backdrop-blur-sm"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* Subtle gradient line at top */}
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

      <nav className="container mx-auto px-4" aria-label="Primary">
        <div className="flex h-14 items-center justify-between gap-4 md:h-16">
          <a
            href="#hero"
            onClick={(event) => {
              event.preventDefault();
              goTo("hero");
            }}
            className="flex shrink-0 items-center"
            aria-label="Ahmed Faiyaz — home"
          >
            <img src={imgLogo} alt="" className="h-8 w-8 md:h-9 md:w-9" />
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden items-center gap-7 lg:flex xl:gap-9">
            {navItems.map((item, index) => {
              const isActive = activeSection === item.id;
              return (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.08 }}
                >
                  <button
                    type="button"
                    onClick={() => goTo(item.id)}
                    aria-current={isActive ? "true" : undefined}
                    className={`group relative py-1 transition-colors duration-300 ${
                      isActive ? "text-accent" : "text-fg hover:text-accent"
                    }`}
                  >
                    {t(item.labelKey)}
                    <span
                      className={`absolute inset-x-0 -bottom-1 h-[2px] origin-left rounded-full bg-gradient-to-r from-accent to-[#00a8ff] transition-transform duration-300 ${
                        isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </button>
                </motion.li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2">
            <LanguageSwitcher />

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setIsMenuOpen((open) => !open)}
              className="rounded-full p-2 text-fg transition-colors hover:bg-accent/10 lg:hidden"
              aria-label={t("nav.menu")}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={isMenuOpen ? "close" : "menu"}
                  className="block"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.ul
              id="mobile-menu"
              className="overflow-hidden border-t border-accent/20 lg:hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {navItems.map((item, index) => {
                const isActive = activeSection === item.id;
                return (
                  <motion.li
                    key={item.id}
                    initial={{ x: -30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.2, delay: index * 0.04 }}
                    className="first:mt-3 last:mb-4"
                  >
                    <button
                      type="button"
                      onClick={() => goTo(item.id)}
                      aria-current={isActive ? "true" : undefined}
                      className={`relative block w-full rounded px-4 py-3 text-left transition-colors hover:bg-accent/10 ${
                        isActive ? "text-accent" : "text-fg"
                      }`}
                    >
                      <span
                        className={`absolute top-1/2 left-0 h-8 w-1 -translate-y-1/2 rounded-r bg-accent transition-transform duration-200 ${
                          isActive ? "scale-y-100" : "scale-y-0"
                        }`}
                      />
                      {t(item.labelKey)}
                    </button>
                  </motion.li>
                );
              })}
            </motion.ul>
          )}
        </AnimatePresence>
      </nav>

      {/* Bottom shadow line */}
      <div
        className={`absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent transition-opacity duration-300 ${
          scrolled ? "opacity-100" : "opacity-0"
        }`}
      />
    </motion.header>
  );
}
