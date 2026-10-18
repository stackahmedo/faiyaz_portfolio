import imgUxUiDesign from "../assets/58eb843da08c7370070fe534df9597e13529b089.png";
import imgWebDev from "../assets/e2f3dfd3be5dca7ab43613b7ee6a6e363b5e396c.png";
import imgBackendDev from "../assets/f6414cb1cb6d10c54792807cbce04b32c271639c.png";
import imgCustomization from "../assets/69f9e68337143477b1f0fed8e89c4cdbd8628321.png";
import { ArrowDown } from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "../contexts/LanguageContext";
import type { TranslationKey } from "../i18n/en";
import { scrollToSection } from "../lib/scroll";
import { SectionBackground } from "./ui/SectionBackground";
import { SectionHeading } from "./ui/SectionHeading";

const services: { titleKey: TranslationKey; descKey: TranslationKey; icon: string }[] = [
  { titleKey: "services.uiux.title", descKey: "services.uiux.desc", icon: imgUxUiDesign },
  { titleKey: "services.webdev.title", descKey: "services.webdev.desc", icon: imgWebDev },
  { titleKey: "services.backend.title", descKey: "services.backend.desc", icon: imgBackendDev },
  { titleKey: "services.customization.title", descKey: "services.customization.desc", icon: imgCustomization },
];

export function Services() {
  const { t } = useLanguage();

  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-20 md:py-24"
    >
      <SectionBackground
        pattern="grid"
        particles={10}
        seed={44}
        orbs={[
          { className: "top-20 left-1/4 h-[300px] w-[300px] bg-accent/5", duration: 20, drift: [50, -30] },
          { className: "right-1/4 bottom-20 h-[400px] w-[400px] bg-accent-strong/5", duration: 25, drift: [-40, 40] },
        ]}
      />

      <div className="relative z-10 container mx-auto max-w-7xl">
        <SectionHeading id="services-title" title={t("services.title")} subtitle={t("services.subtitle")} />

        <div className="mx-auto mb-16 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.article
              key={service.titleKey}
              className="group relative flex flex-col items-center overflow-hidden rounded-xl border border-white/15 bg-surface p-6 text-center shadow-[0_4px_1px_rgba(0,0,0,0.5)] transition-[border-color,box-shadow] duration-300 hover:border-accent/50 hover:shadow-[0_20px_40px_rgba(92,182,255,0.25)]"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              whileHover={{ y: -8 }}
            >
              {/* Hover wash */}
              <div
                className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-accent-strong/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                aria-hidden="true"
              />

              <span className="absolute top-4 left-5 text-sm font-medium text-accent/40" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="relative mt-4 mb-6 flex h-28 items-center justify-center">
                <div
                  className="absolute inset-0 rounded-full bg-accent/20 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
                  aria-hidden="true"
                />
                <img
                  src={service.icon}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="relative h-24 w-24 object-contain transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3 md:h-28 md:w-28"
                />
              </div>

              <h3 className="relative mb-3 text-2xl leading-snug text-accent-strong transition-colors duration-300 text-balance group-hover:text-accent">
                {t(service.titleKey)}
              </h3>
              <p className="relative text-sm leading-relaxed text-fg-muted md:text-base">{t(service.descKey)}</p>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.button
            type="button"
            onClick={() => scrollToSection("projects")}
            className="group flex items-center gap-3 rounded-full border border-white/40 bg-surface px-6 py-2 text-lg text-fg transition-colors hover:border-accent hover:text-accent"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t("services.seeWork")}
            <motion.span animate={{ y: [0, 3, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}>
              <ArrowDown size={18} />
            </motion.span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
