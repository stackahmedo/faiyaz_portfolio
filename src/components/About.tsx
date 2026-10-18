import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "../contexts/LanguageContext";
import type { TranslationKey } from "../i18n/en";
import { scrollToSection } from "../lib/scroll";
import { SectionBackground } from "./ui/SectionBackground";
import { SectionHeading } from "./ui/SectionHeading";

const paragraphKeys: TranslationKey[] = ["about.intro", "about.journey", "about.passion", "about.philosophy"];

export function About() {
  const { t } = useLanguage();

  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-20 md:py-24"
    >
      <SectionBackground
        particles={10}
        seed={22}
        orbs={[
          { className: "top-1/3 right-10 h-[400px] w-[400px] bg-accent/5", duration: 18, drift: [-30, 30] },
          { className: "bottom-1/4 left-10 h-[500px] w-[500px] bg-brand/5", duration: 22, drift: [40, -40] },
        ]}
      />

      <div className="relative z-10 container mx-auto max-w-6xl">
        <SectionHeading id="about-title" title={t("about.title")} />

        <div className="grid items-start gap-10 lg:grid-cols-[2fr_3fr] lg:gap-16">
          {/* Headline column */}
          <motion.div
            className="lg:sticky lg:top-28"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="mb-6 text-3xl leading-tight font-semibold text-fg md:text-4xl">
              {t("about.headline")}
            </p>
            <p className="mb-8 text-sm tracking-widest text-accent/60 uppercase">{t("about.tagline")}</p>
            <button
              type="button"
              onClick={() => scrollToSection("contact")}
              className="group inline-flex items-center gap-2 rounded-full border border-accent/50 px-6 py-3 text-accent transition-colors hover:bg-accent/10"
            >
              {t("about.cta")}
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </button>
          </motion.div>

          {/* Story column */}
          <div className="space-y-6 text-lg leading-relaxed text-accent-soft md:text-xl">
            {paragraphKeys.map((key, index) => (
              <motion.p
                key={key}
                className="relative border-l-2 border-accent/15 pl-5 transition-colors duration-300 hover:border-accent"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.12, ease: "easeOut" }}
              >
                {t(key)}
              </motion.p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
