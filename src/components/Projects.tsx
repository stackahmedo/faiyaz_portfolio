import imgCodeScene from "../assets/97e65d1cb835b877fe73c19a7b6c5b3900144de3.png";
import imgDesignScene from "../assets/958ad66765db7773515d49ad8c5ec8c5c3ac1217.png";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { ChevronRight, ExternalLink, Github } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import type { TranslationKey } from "../i18n/en";
import { SectionBackground } from "./ui/SectionBackground";
import { SectionHeading } from "./ui/SectionHeading";

type ProjectId = "qrcode" | "travelsite" | "groupware" | "schoolhub" | "portfolio";

interface Project {
  id: ProjectId;
  image: string;
  /** Optional links — the matching button only renders once a URL is filled in. */
  liveUrl?: string;
  repoUrl?: string;
}

const projects: Project[] = [
  { id: "qrcode", image: imgCodeScene },
  { id: "travelsite", image: imgDesignScene },
  { id: "groupware", image: imgCodeScene },
  { id: "schoolhub", image: imgDesignScene },
  { id: "portfolio", image: imgCodeScene },
];

const key = (id: ProjectId, field: "title" | "desc" | "tags") => `projects.${id}.${field}` as TranslationKey;

export function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { t } = useLanguage();
  const active = projects[activeIndex];

  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="relative min-h-screen overflow-hidden px-4 py-20 md:py-24"
    >
      <SectionBackground
        particles={12}
        seed={55}
        orbs={[
          { className: "top-1/4 right-20 h-[450px] w-[450px] bg-accent/5", duration: 24, drift: [-60, 50] },
          { className: "bottom-1/3 left-20 h-[500px] w-[500px] bg-steel/5", duration: 20, drift: [50, -40] },
        ]}
      />

      <div className="relative z-10 container mx-auto max-w-7xl">
        <SectionHeading id="projects-title" title={t("projects.title")} subtitle={t("projects.subtitle")} />

        <div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-8 lg:grid-cols-[1.15fr_1fr] lg:gap-12">
          {/* Featured project */}
          <motion.div
            className="lg:sticky lg:top-24"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="group relative overflow-hidden rounded-[20px] border-2 border-steel bg-surface shadow-2xl shadow-black/40">
              <div className="relative aspect-video overflow-hidden border-b-2 border-steel">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.img
                    key={active.id}
                    src={active.image}
                    alt=""
                    className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-105"
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.35 }}
                  />
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" aria-hidden="true" />
                <span className="absolute top-4 left-4 rounded-full border border-accent/50 bg-ink/70 px-3 py-1 text-xs tracking-wider text-accent uppercase backdrop-blur-sm">
                  {t("projects.featured")}
                </span>
              </div>

              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={active.id}
                  className="p-6 text-center md:p-8"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3 }}
                  aria-live="polite"
                >
                  <h3 className="mb-3 text-3xl font-bold text-accent md:text-4xl">{t(key(active.id, "title"))}</h3>
                  <p className="mb-5 text-lg font-light text-fg">{t(key(active.id, "desc"))}</p>

                  <ul className="flex flex-wrap justify-center gap-2" aria-label="Tech stack">
                    {t(key(active.id, "tags"))
                      .split(", ")
                      .map((tag) => (
                        <li
                          key={tag}
                          className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-sm text-accent"
                        >
                          {tag}
                        </li>
                      ))}
                  </ul>

                  {(active.liveUrl || active.repoUrl) && (
                    <div className="mt-6 flex justify-center gap-3">
                      {active.liveUrl && (
                        <a
                          href={active.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2 text-ink transition-colors hover:bg-accent-bright"
                        >
                          <ExternalLink size={18} />
                          {t("projects.liveDemo")}
                        </a>
                      )}
                      {active.repoUrl && (
                        <a
                          href={active.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-full border border-steel px-5 py-2 text-fg transition-colors hover:bg-steel/30"
                        >
                          <Github size={18} />
                          {t("projects.sourceCode")}
                        </a>
                      )}
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Project picker */}
          <ul className="space-y-4">
            {projects.map((project, index) => {
              const isActive = index === activeIndex;
              return (
                <motion.li
                  key={project.id}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.08 }}
                >
                  <button
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    aria-pressed={isActive}
                    className={`group flex w-full items-center overflow-hidden rounded-[20px] border-2 text-left transition-all duration-300 ${
                      isActive
                        ? "border-accent bg-surface shadow-[0_10px_30px_rgba(92,182,255,0.25)]"
                        : "border-accent/30 bg-surface/60 hover:translate-x-1 hover:border-accent/70"
                    }`}
                  >
                    <span className="h-24 w-28 shrink-0 overflow-hidden border-r-2 border-inherit sm:w-32">
                      <img
                        src={project.image}
                        alt=""
                        loading="lazy"
                        decoding="async"
                        className={`size-full object-cover transition-all duration-500 group-hover:scale-110 ${
                          isActive ? "" : "opacity-60 grayscale-[40%]"
                        }`}
                      />
                    </span>
                    <span className="flex min-w-0 flex-1 flex-col px-4 py-3 sm:px-5">
                      <span
                        className={`truncate text-xl font-medium transition-colors sm:text-2xl ${
                          isActive ? "text-accent" : "text-fg group-hover:text-accent"
                        }`}
                      >
                        {t(key(project.id, "title"))}
                      </span>
                      <span className="line-clamp-1 text-sm text-fg-muted">{t(key(project.id, "desc"))}</span>
                    </span>
                    <ChevronRight
                      className={`mr-4 shrink-0 transition-all duration-300 ${
                        isActive ? "translate-x-0 text-accent" : "-translate-x-1 text-accent/40 group-hover:translate-x-0"
                      }`}
                      size={22}
                      aria-hidden="true"
                    />
                  </button>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
