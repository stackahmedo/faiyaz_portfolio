import { motion } from "motion/react";
import { useLanguage } from "../contexts/LanguageContext";

export function About() {
  const { t } = useLanguage();
  
  const paragraphs = [
    t("about.intro"),
    t("about.journey"),
    t("about.passion"),
    t("about.philosophy"),
  ];

  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-4 py-16 md:py-20 relative overflow-hidden">
      {/* Animated background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-[#5cb6ff]/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -30, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-10 w-[500px] h-[500px] bg-[#5099ff]/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 40, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Floating dots */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-[#5cb6ff]/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="container mx-auto max-w-5xl relative z-10" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 400 }}>
        {/* Title Section */}
        <motion.div 
          className="text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.h2 
            className="text-[#5cb6ff] text-4xl md:text-5xl lg:text-6xl mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {t("about.title")}
          </motion.h2>
          
          {/* Animated underline */}
          <motion.div 
            className="w-72 h-1 bg-gradient-to-r from-[#5cb6ff]/30 via-[#5cb6ff] to-[#5cb6ff]/30 mx-auto rounded-full relative overflow-hidden"
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: 288, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            {/* Shimmer effect on underline */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
              animate={{ x: ["-100%", "200%"] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
                repeatDelay: 1
              }}
            />
          </motion.div>
        </motion.div>
        
        {/* Content paragraphs with staggered animation */}
        <div className="text-[#5cb6ff] text-lg md:text-2xl lg:text-3xl space-y-6 md:space-y-8 leading-relaxed">
          {paragraphs.map((text, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                ease: "easeOut" 
              }}
            >
              <motion.p
                className="relative group cursor-default"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                {/* Subtle hover effect - left border */}
                <motion.span
                  className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#5cb6ff]/0 via-[#5cb6ff] to-[#5cb6ff]/0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ marginLeft: '-1rem' }}
                />
                
                {/* Background glow on hover */}
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-[#5cb6ff]/5 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ margin: '-0.5rem', padding: '0.5rem' }}
                />
                
                {/* Text content */}
                <span className="relative z-10 block px-2 py-1">
                  {text}
                </span>
              </motion.p>
            </motion.div>
          ))}
        </div>

        {/* Decorative elements */}
        <motion.div
          className="mt-12 flex items-center justify-center gap-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.div 
            className="flex gap-1"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-[#5cb6ff]/60 rounded-full"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3,
                  ease: "easeInOut"
                }}
              />
            ))}
          </motion.div>
        </motion.div>

        {/* Quote decoration */}
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <div className="inline-flex items-center gap-3 text-[#5cb6ff]/40" style={{ fontSize: '14px' }}>
            <motion.div 
              className="w-16 h-px bg-gradient-to-r from-transparent to-[#5cb6ff]/40"
              initial={{ width: 0 }}
              whileInView={{ width: 64 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.2 }}
            />
            <span>Passionate • Creative • Innovative</span>
            <motion.div 
              className="w-16 h-px bg-gradient-to-l from-transparent to-[#5cb6ff]/40"
              initial={{ width: 0 }}
              whileInView={{ width: 64 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.2 }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}