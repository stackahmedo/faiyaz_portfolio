import imgLogo from "../assets/personal-logo.svg";
import imgGmail from "../assets/509bf497099afa9d7192b9cf61f0a13160aec435.png";
import imgInstagram from "../assets/67e34b1cbcffd45ecea86bc09833bdbc19ffa60a.png";
import imgFacebook from "../assets/cdc12c352f169c60fcde32e82e64acc46f8e2cb7.png";
import imgX from "../assets/60d95c92f7e8ee83b8f2d3ccbc77adf7c2e68b55.png";
import imgBehance from "../assets/d2eb623c572df7ebd9a61eadc23985f32b4fbe47.png";
import imgTelegram from "../assets/8b93f6af2c76e04330fb1f79dd6f74df5cba6788.png";
import imgWhatsApp from "../assets/336e9a9a435dc4e7320d3e09f51e689cb76559a9.png";
import imgDribbble from "../assets/646bc62a4f94be4b9fee8f3bb5e7e4d346bd418f.png";
import { useLanguage } from "../contexts/LanguageContext";

const socialLinks = [
  { name: "Gmail", icon: imgGmail, url: "mailto:wc.ahmedo@gmail.com" },
  { name: "Instagram", icon: imgInstagram, url: "#" },
  { name: "Facebook", icon: imgFacebook, url: "#" },
  { name: "X", icon: imgX, url: "#" },
  { name: "Behance", icon: imgBehance, url: "#" },
  { name: "Telegram", icon: imgTelegram, url: "#" },
  { name: "WhatsApp", icon: imgWhatsApp, url: "#" },
  { name: "Dribbble", icon: imgDribbble, url: "#" },
];

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();
  const copyrightText = t("footer.copyright").replace(
    "{year}",
    String(currentYear)
  );

  return (
    <footer className="bg-[color:var(--color-bg-primary)] border-t border-[#1057bc] py-12 md:py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Logo and Description */}
          <div className="flex flex-col items-center md:items-start">
            <img
              src={imgLogo}
              alt="Ahmed Faiyaz Logo"
              className="w-24 h-24 md:w-32 md:h-32 object-contain mb-4"
            />
            <p className="text-[#5cb6ff] text-center md:text-left">
              {t("footer.role")}
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h3 className="text-[#5cb6ff] text-xl md:text-2xl mb-4">
              {t("footer.quickLinks")}
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#hero"
                  className="text-[color:var(--color-footer-link)] hover:text-[#5cb6ff] transition-colors"
                >
                  {t("nav.home")}
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-[color:var(--color-footer-link)] hover:text-[#5cb6ff] transition-colors"
                >
                  {t("nav.about")}
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-[color:var(--color-footer-link)] hover:text-[#5cb6ff] transition-colors"
                >
                  {t("nav.skills")}
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-[color:var(--color-footer-link)] hover:text-[#5cb6ff] transition-colors"
                >
                  {t("nav.projects")}
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-[color:var(--color-footer-link)] hover:text-[#5cb6ff] transition-colors"
                >
                  {t("nav.contact")}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <h3 className="text-[#5cb6ff] text-xl md:text-2xl mb-4">
              {t("footer.contact")}
            </h3>
            <div className="space-y-2 text-[color:var(--color-footer-link)]">
              <p>{t("footer.location")}</p>
              <p>{t("footer.phone")}</p>
              <p>{t("footer.email")}</p>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap justify-center gap-4 mt-8 md:mt-12">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              aria-label={social.name}
            >
              <img
                src={social.icon}
                alt={social.name}
                className="w-8 h-8 object-contain hover:scale-110 transition-transform"
              />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-center mt-8 md:mt-12 pt-8 border-t border-[#1057bc]">
          <p className="text-[#5cb6ff]">
            {copyrightText}
          </p>
        </div>
      </div>
    </footer>
  );
}
