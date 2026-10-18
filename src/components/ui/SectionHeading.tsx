import { motion } from "motion/react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  id?: string;
}

export function SectionHeading({ title, subtitle, id }: SectionHeadingProps) {
  return (
    <motion.div
      className="mb-12 text-center md:mb-16"
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h2
        id={id}
        className="mb-4 text-4xl font-bold tracking-tight text-accent md:text-5xl lg:text-[56px]"
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto mb-6 max-w-2xl text-base text-accent-soft/70 md:text-lg">{subtitle}</p>
      )}

      {/* Animated underline with shimmer */}
      <motion.div
        className="relative mx-auto h-1 w-56 overflow-hidden rounded-full bg-gradient-to-r from-accent/30 via-accent to-accent/30 md:w-72"
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent"
          animate={{ x: ["-100%", "200%"] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
        />
      </motion.div>
    </motion.div>
  );
}
