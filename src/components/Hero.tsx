import { Download, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "../contexts/LanguageContext";

export function Hero() {
  const { t } = useLanguage();

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 pt-14 md:pt-16 relative overflow-hidden"
    >
      {/* Animated background effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Gradient orbs */}
        <motion.div
          className="absolute top-20 left-10 w-[500px] h-[500px] bg-[#5099ff]/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-[600px] h-[600px] bg-[#f20819]/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(92,182,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(92,182,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#5cb6ff]/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto text-center relative z-10">
        {/* Greeting */}
        <motion.p
          className="text-red-500 text-2xl md:text-4xl lg:text-5xl mb-4 md:mb-8 font-['Dekko']"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.2,
            ease: "easeOut",
          }}
        >
          {t("hero.greeting")} {t("hero.intro")}
        </motion.p>

        {/* Name with split text animation */}
        <div className="mb-4 md:mb-8">
          <motion.h1
            className="text-[color:var(--color-text-primary)] text-4xl md:text-6xl lg:text-7xl xl:text-8xl mb-6 md:mb-10 tracking-wider"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {t("hero.name")
              .split("")
              .map((char, index) => (
                <motion.span
                  key={index}
                  className="inline-block"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.5 + index * 0.05,
                    ease: "easeOut",
                  }}
                  whileHover={{
                    y: -10,
                    color: "#5cb6ff",
                    textShadow:
                      "0 0 20px rgba(92, 182, 255, 0.8)",
                    transition: { duration: 0.2 },
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
          </motion.h1>
        </div>

        {/* Title */}
        <motion.p
          className="text-[#349bef] text-2xl md:text-3xl lg:text-4xl mb-6 md:mb-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.6,
            delay: 1.2,
            ease: "easeOut",
          }}
        >
          {t("hero.title")}
        </motion.p>

        {/* Location */}
        <motion.p
          className="text-[#f20819] text-xl md:text-2xl mb-6 md:mb-8"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.6,
            delay: 1.4,
            ease: "easeOut",
          }}
        >
          Based In Tokyo
        </motion.p>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 1.6,
            ease: "easeOut",
          }}
        >
          <p className="text-[#5cb6ff] text-base md:text-xl lg:text-2xl max-w-4xl mx-auto mb-8 md:mb-12 px-4 leading-relaxed">
            {t("hero.description")}
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 1.8,
            ease: "easeOut",
          }}
        >
          <a
            href="https://drive.google.com/file/d/1nmbxssfXE8wV4r3yLnmgn_Hbh5ftgZ2I/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              className="bg-[#5099ff] text-white px-6 md:px-8 py-2 md:py-3 rounded-full border border-white hover:bg-[#4088ee] transition-all flex items-center gap-2 min-w-[160px] justify-center relative overflow-hidden group"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 25px rgba(80, 153, 255, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              {/* Button shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
              <span className="relative z-10">{t("hero.resume")}</span>
              <motion.div
                animate={{ y: [0, -3, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Download size={20} />
              </motion.div>
            </motion.button>
          </a>

          <motion.button
            onClick={scrollToContact}
            className="bg-[#5099ff] text-white px-6 md:px-8 py-2 md:py-3 rounded-full border border-white hover:bg-[#4088ee] transition-all flex items-center gap-2 min-w-[160px] justify-center relative overflow-hidden group"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 25px rgba(80, 153, 255, 0.5)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            {/* Button shine effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.6 }}
            />
            <span className="relative z-10">
              {t("hero.cta")}
            </span>
            <motion.div
              animate={{ x: [0, 3, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <ArrowRight size={20} />
            </motion.div>
          </motion.button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.5 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="flex flex-col items-center gap-2"
          >
            <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-[#5cb6ff] to-transparent" />
            <div className="w-6 h-10 rounded-full border-2 border-[#5cb6ff]/50 flex items-start justify-center p-1">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-1 h-2 bg-[#5cb6ff] rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
