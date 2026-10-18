import { ChevronLeft, ChevronRight, Calendar, Clock, Code2, Palette, Camera, type LucideIcon } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import type { TranslationKey } from "../i18n/en";
import { SectionBackground } from "./ui/SectionBackground";
import { SectionHeading } from "./ui/SectionHeading";

interface BlogPost {
  id: "post1" | "post2" | "post3";
  icon: LucideIcon;
  /** Tailwind gradient classes for the card artwork. */
  art: string;
}

const blogPosts: BlogPost[] = [
  { id: "post1", icon: Code2, art: "from-[#0b3d91] via-[#1057bc] to-[#5cb6ff]" },
  { id: "post2", icon: Palette, art: "from-[#3b1d6e] via-[#4373b5] to-[#a8d1ff]" },
  { id: "post3", icon: Camera, art: "from-[#5a0f1e] via-[#b0303f] to-[#f2a07b]" },
];

const key = (id: BlogPost["id"], field: "title" | "excerpt" | "date" | "readTime" | "category") =>
  `blogs.${id}.${field}` as TranslationKey;

export function Blogs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { t } = useLanguage();
  const count = blogPosts.length;

  const step = (delta: number) => setActiveIndex((prev) => (prev + delta + count) % count);

  return (
    <section
      id="blogs"
      aria-labelledby="blogs-title"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-20 md:py-24"
    >
      <SectionBackground
        pattern="diagonal"
        particles={10}
        seed={66}
        orbs={[
          { className: "top-1/3 right-20 h-[500px] w-[500px] bg-accent/5", duration: 24, drift: [-40, 50] },
          { className: "bottom-1/4 left-20 h-[400px] w-[400px] bg-steel/5", duration: 20, drift: [60, -40] },
        ]}
      />

      <div className="relative z-10 container mx-auto max-w-7xl">
        <SectionHeading id="blogs-title" title={t("blogs.title")} subtitle={t("blogs.subtitle")} />

        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-[3fr_2fr] lg:gap-20">
          {/* Stacked cards */}
          <motion.div
            className="relative mx-auto h-[440px] w-full max-w-[600px] sm:h-[500px] lg:mx-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            aria-roledescription="carousel"
          >
            {blogPosts.map((post, index) => {
              const offset = (index - activeIndex + count) % count;
              const isActive = offset === 0;
              const Icon = post.icon;

              return (
                <motion.article
                  key={post.id}
                  className="absolute top-0 left-0 h-[360px] w-[calc(100%-48px)] sm:h-[420px] sm:w-[calc(100%-64px)]"
                  style={{ zIndex: count - offset }}
                  initial={false}
                  animate={{
                    x: offset * 28,
                    y: offset * 36,
                    scale: 1 - offset * 0.06,
                    opacity: offset > 1 ? 0.5 : 1,
                  }}
                  transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                  aria-hidden={!isActive}
                  aria-roledescription="slide"
                >
                  <div className="group relative h-full w-full overflow-hidden rounded-[30px] border-2 border-accent/30 shadow-2xl shadow-black/50">
                    {/* Artwork */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${post.art}`} aria-hidden="true">
                      <Icon
                        className="absolute -top-6 -right-6 h-56 w-56 text-white/15 transition-transform duration-700 group-hover:scale-110 group-hover:rotate-6"
                        strokeWidth={1}
                      />
                    </div>

                    <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-ink/95 via-ink/70 to-transparent p-6 md:p-8">
                      <span className="absolute top-6 left-6 rounded-full border border-accent bg-accent/20 px-4 py-1.5 text-sm text-accent backdrop-blur-sm">
                        {t(key(post.id, "category"))}
                      </span>

                      <h3 className="mb-3 line-clamp-2 text-2xl font-semibold text-fg md:text-3xl">
                        {t(key(post.id, "title"))}
                      </h3>
                      <p className="mb-4 line-clamp-3 text-sm text-fg-soft md:text-base">{t(key(post.id, "excerpt"))}</p>

                      <div className="flex items-center gap-4 text-sm text-accent/80">
                        <span className="flex items-center gap-2">
                          <Calendar size={16} aria-hidden="true" />
                          {t(key(post.id, "date"))}
                        </span>
                        <span className="flex items-center gap-2">
                          <Clock size={16} aria-hidden="true" />
                          {t(key(post.id, "readTime"))}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>

          {/* Controls */}
          <motion.div
            className="flex flex-col items-center lg:items-start"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="mb-8 text-center text-6xl leading-none font-bold text-accent md:text-7xl lg:text-left lg:text-8xl">
              {t("blogs.scrollMore")}
            </p>

            <div className="mb-8 flex gap-4">
              {[
                { delta: -1, label: t("blogs.prev"), Icon: ChevronLeft },
                { delta: 1, label: t("blogs.next"), Icon: ChevronRight },
              ].map(({ delta, label, Icon }) => (
                <motion.button
                  key={delta}
                  type="button"
                  onClick={() => step(delta)}
                  aria-label={label}
                  className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-accent/50 text-accent transition-colors hover:border-accent hover:bg-accent/10 md:h-16 md:w-16"
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.92 }}
                >
                  <Icon size={30} strokeWidth={2.5} />
                </motion.button>
              ))}
            </div>

            {/* Progress indicator */}
            <div className="flex items-center gap-3">
              {blogPosts.map((post, index) => (
                <button
                  key={post.id}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`${index + 1} / ${count}`}
                  aria-current={activeIndex === index ? "true" : undefined}
                  className="py-2"
                >
                  <span
                    className={`block h-1.5 rounded-full transition-all duration-300 ${
                      activeIndex === index ? "w-14 bg-accent" : "w-10 bg-accent/30 hover:bg-accent/60"
                    }`}
                  />
                </button>
              ))}
              <span className="ml-3 text-lg text-accent/60 tabular-nums" aria-live="polite">
                {activeIndex + 1} / {count}
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
