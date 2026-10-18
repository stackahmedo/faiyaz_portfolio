import { motion, useReducedMotion } from "motion/react";
import { useMemo, type CSSProperties } from "react";

type Pattern = "grid" | "dots" | "diagonal" | "none";

interface Orb {
  className: string;
  duration: number;
  drift?: [number, number];
}

interface SectionBackgroundProps {
  pattern?: Pattern;
  orbs?: Orb[];
  particles?: number;
  /** Seed for particle placement so positions stay stable across renders and language switches. */
  seed?: number;
}

const patternStyles: Record<Exclude<Pattern, "none">, CSSProperties> = {
  grid: {
    backgroundImage:
      "linear-gradient(var(--color-accent) 1px, transparent 1px), linear-gradient(90deg, var(--color-accent) 1px, transparent 1px)",
    backgroundSize: "56px 56px",
    maskImage: "radial-gradient(ellipse 80% 60% at 50% 50%, black, transparent)",
  },
  dots: {
    backgroundImage: "radial-gradient(circle, var(--color-accent) 1px, transparent 1px)",
    backgroundSize: "40px 40px",
  },
  diagonal: {
    backgroundImage:
      "repeating-linear-gradient(45deg, var(--color-accent) 0, var(--color-accent) 2px, transparent 2px, transparent 60px)",
  },
};

// Small deterministic PRNG (mulberry32) — avoids Math.random() during render.
function createRandom(seed: number) {
  let a = seed;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function SectionBackground({ pattern = "none", orbs = [], particles = 10, seed = 1 }: SectionBackgroundProps) {
  const reduceMotion = useReducedMotion();

  const dots = useMemo(() => {
    const random = createRandom(seed);
    return Array.from({ length: particles }, () => ({
      left: random() * 100,
      top: random() * 100,
      duration: 5 + random() * 5,
      delay: random() * 4,
    }));
  }, [particles, seed]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {pattern !== "none" && <div className="absolute inset-0 opacity-[0.03]" style={patternStyles[pattern]} />}

      {orbs.map((orb, i) => {
        const [dx, dy] = orb.drift ?? [30, -30];
        return (
          <motion.div
            key={i}
            className={`absolute rounded-full blur-3xl ${orb.className}`}
            animate={reduceMotion ? undefined : { scale: [1, 1.2, 1], x: [0, dx, 0], y: [0, dy, 0] }}
            transition={{ duration: orb.duration, repeat: Infinity, ease: "easeInOut" }}
          />
        );
      })}

      {!reduceMotion &&
        dots.map((dot, i) => (
          <motion.div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-accent/30"
            style={{ left: `${dot.left}%`, top: `${dot.top}%` }}
            animate={{ y: [0, -40, 0], opacity: [0.2, 0.7, 0.2] }}
            transition={{ duration: dot.duration, repeat: Infinity, delay: dot.delay, ease: "easeInOut" }}
          />
        ))}
    </div>
  );
}
