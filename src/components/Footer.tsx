import { ArrowUp } from "lucide-react";
import imgLogo from "../assets/personal-logo.svg";
import { useLanguage } from "../contexts/LanguageContext";
import { CONTACT_EMAIL, CONTACT_PHONE, CONTACT_PHONE_HREF, activeSocialLinks } from "../data/contact";
import { navItems } from "../data/navigation";

// Email is listed under Contact, so the icon row only shows other profiles.
const profiles = activeSocialLinks.filter((link) => !link.url.startsWith("mailto:"));

const linkClass = "text-footer-link transition-colors hover:text-accent";

export function Footer() {
  const { t } = useLanguage();
  const copyrightText = t("footer.copyright").replace("{year}", String(new Date().getFullYear()));

  return (
    <footer className="border-t border-brand-deep bg-ink px-4 py-12 md:py-16">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-12">
          {/* Logo and Description */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <img src={imgLogo} alt="Ahmed Faiyaz" className="mb-4 h-20 w-20 object-contain md:h-24 md:w-24" />
            <p className="mb-2 text-lg text-accent">{t("footer.role")}</p>
            <p className="max-w-xs text-sm text-fg-muted">{t("footer.description")}</p>
          </div>

          {/* Quick Links */}
          <nav className="text-center" aria-labelledby="footer-links">
            <h2 id="footer-links" className="mb-4 text-xl text-accent md:text-2xl">
              {t("footer.quickLinks")}
            </h2>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2 sm:inline-grid">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} className={linkClass}>
                    {t(item.labelKey)}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <h2 className="mb-4 text-xl text-accent md:text-2xl">{t("footer.contact")}</h2>
            <address className="space-y-2 not-italic">
              <p className="text-footer-link">{t("footer.location")}</p>
              <p>
                <a href={CONTACT_PHONE_HREF} className={linkClass}>
                  {CONTACT_PHONE}
                </a>
              </p>
              <p>
                <a href={`mailto:${CONTACT_EMAIL}`} className={linkClass}>
                  {CONTACT_EMAIL}
                </a>
              </p>
            </address>
          </div>
        </div>

        {profiles.length > 0 && (
          <ul className="mt-10 flex flex-wrap justify-center gap-4 md:mt-12">
            {profiles.map((social) => (
              <li key={social.name}>
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  title={social.name}
                  className="block transition-transform hover:scale-110"
                >
                  <img src={social.icon} alt="" className="h-8 w-8 object-contain" />
                </a>
              </li>
            ))}
          </ul>
        )}

        {/* Copyright */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-brand-deep pt-8 sm:flex-row md:mt-12">
          <p className="text-accent">{copyrightText}</p>
          <a href="#hero" className="group inline-flex items-center gap-2 text-sm text-accent/80 hover:text-accent">
            {t("footer.backToTop")}
            <ArrowUp size={16} className="transition-transform group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
