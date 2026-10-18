import { Download, ArrowRight, MapPin } from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "../contexts/LanguageContext";
import { RESUME_URL } from "../data/contact";
import { scrollToSection } from "../lib/scroll";
import { SectionBackground } from "./ui/SectionBackground";

const ctaClass =
  "group relative flex min-w-[170px] items-center justify-center gap-2 overflow-hidden rounded-full border px-7 py-3 transition-colors md:px-8";

const ctaHover = { scale: 1.05, boxShadow: "0 0 25px rgba(80, 153, 255, 0.5)" };

function Shine() {
  return (
    <span
      className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full"
      aria-hidden="true"
    />
  );
}

export function Hero() {
  const { t } = useLanguage();
  const name = t("hero.name");

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pt-14 md:pt-16"
    >
      <SectionBackground
        pattern="grid"
        particles={14}
        seed={11}
        orbs={[
          { className: "top-20 left-10 h-[500px] w-[500px] bg-brand/10", duration: 15 },
          { className: "right-10 bottom-20 h-[600px] w-[600px] bg-signal/10", duration: 20, drift: [-40, 40] },
        ]}
      />

      <div className="relative z-10 container mx-auto text-center">
        {/* Greeting */}
        <motion.p
          className="mb-4 font-display text-2xl text-red-500 md:mb-8 md:text-4xl lg:text-5xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          {t("hero.greeting")} {t("hero.intro")}
        </motion.p>

        {/* Name with split text animation */}
        <h1
          className="mb-8 text-[2rem] leading-tight font-semibold tracking-wider text-fg sm:text-4xl md:mb-12 md:text-6xl lg:text-7xl xl:text-8xl"
          aria-label={name}
        >
          {/* Letters animate individually, but each word stays unbreakable so lines only wrap between words. */}
          {name.split(/\s+/).map((word, wordIndex, words) => {
            const offset = words.slice(0, wordIndex).join("").length;
            return (
              <span key={`${word}-${wordIndex}`} aria-hidden="true" className="inline-block whitespace-nowrap">
                {word.split("").map((char, index) => (
                  <motion.span
                    key={`${char}-${index}`}
                    className="inline-block"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + (offset + index) * 0.04, ease: "easeOut" }}
                    whileHover={{
                      y: -10,
                      color: "#5cb6ff",
                      textShadow: "0 0 20px rgba(92, 182, 255, 0.8)",
                      transition: { duration: 0.2 },
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
                {wordIndex < words.length - 1 && " "}
              </span>
            );
          })}
        </h1>

        {/* Title */}
        <motion.p
          className="mb-4 text-2xl text-accent-strong md:mb-6 md:text-3xl lg:text-4xl"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 1.1, ease: "easeOut" }}
        >
          {t("hero.title")}
        </motion.p>

        {/* Location */}
        <motion.p
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-signal/30 bg-signal/5 px-4 py-1.5 text-lg text-signal md:mb-8 md:text-xl"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 1.3, ease: "easeOut" }}
        >
          <MapPin size={18} aria-hidden="true" />
          {t("hero.location")}
        </motion.p>

        {/* Description */}
        <motion.p
          className="mx-auto mb-10 max-w-3xl px-4 text-base leading-relaxed text-accent md:mb-12 md:text-xl lg:text-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.5, ease: "easeOut" }}
        >
          {t("hero.description")}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.7, ease: "easeOut" }}
        >
          <motion.a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`${ctaClass} border-white bg-brand text-white hover:bg-brand-hover`}
            whileHover={ctaHover}
            whileTap={{ scale: 0.95 }}
          >
            <Shine />
            <span className="relative">{t("hero.resume")}</span>
            <Download size={20} className="relative transition-transform group-hover:translate-y-0.5" />
          </motion.a>

          <motion.button
            type="button"
            onClick={() => scrollToSection("contact")}
            className={`${ctaClass} border-accent/60 bg-transparent text-fg hover:bg-accent/10`}
            whileHover={ctaHover}
            whileTap={{ scale: 0.95 }}
          >
            <Shine />
            <span className="relative">{t("hero.cta")}</span>
            <ArrowRight size={20} className="relative transition-transform group-hover:translate-x-1" />
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        type="button"
        onClick={() => scrollToSection("about")}
        aria-label={t("nav.about")}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 md:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.3 }}
      >
        <motion.span
          className="flex flex-col items-center gap-2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="h-12 w-px bg-gradient-to-b from-transparent via-accent to-transparent" />
          <span className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-accent/50 p-1">
            <motion.span
              className="h-2 w-1 rounded-full bg-accent"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </span>
        </motion.span>
      </motion.button>
    </section>
  );
}
