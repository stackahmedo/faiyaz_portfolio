import imgUxUiDesign from "../assets/58eb843da08c7370070fe534df9597e13529b089.png";
import imgWebDev from "../assets/e2f3dfd3be5dca7ab43613b7ee6a6e363b5e396c.png";
import imgBackendDev from "../assets/f6414cb1cb6d10c54792807cbce04b32c271639c.png";
import imgCustomization from "../assets/69f9e68337143477b1f0fed8e89c4cdbd8628321.png";
import { motion } from "motion/react";
import { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";

const svgPaths = {
  pf06e800: "M 7.995 14.969 L 0 6.974 L 1.919 5.055 L 7.995 11.131 L 14.071 5.055 L 15.99 6.974 L 7.995 14.969 Z"
};

export function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { t } = useLanguage();

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      title: t("services.uiux.title"),
      icon: imgUxUiDesign,
      description: t("services.uiux.desc"),
    },
    {
      title: t("services.webdev.title"),
      icon: imgWebDev,
      description: t("services.webdev.desc"),
    },
    {
      title: t("services.backend.title"),
      icon: imgBackendDev,
      description: t("services.backend.desc"),
    },
    {
      title: t("services.customization.title"),
      icon: imgCustomization,
      description: t("services.customization.desc"),
    },
  ];

  return (
    <section id="services" className="min-h-screen flex items-center justify-center px-4 py-16 md:py-20 relative overflow-hidden">
      {/* Animated background effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(#5cb6ff 1px, transparent 1px), linear-gradient(90deg, #5cb6ff 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
        
        {/* Floating orbs */}
        <motion.div 
          className="absolute top-20 left-1/4 w-[300px] h-[300px] bg-[#5cb6ff]/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-1/4 w-[400px] h-[400px] bg-[#349bef]/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

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
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 4,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Title Section */}
        <motion.div 
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.h2 
            className="text-[#5cb6ff] text-5xl md:text-6xl mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {t("services.title")}
          </motion.h2>
          
          {/* Animated underline with shimmer */}
          <motion.div 
            className="w-[292px] h-[5px] bg-gradient-to-r from-[#5cb6ff]/30 via-[#5cb6ff] to-[#5cb6ff]/30 mx-auto rounded-full relative overflow-hidden"
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: 292, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent"
              animate={{ x: ["-100%", "200%"] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "linear",
                repeatDelay: 1
              }}
            />
          </motion.div>
        </motion.div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                ease: "easeOut" 
              }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <motion.div
                className="bg-[color:var(--color-surface)] border border-[color:var(--color-border-contrast)] rounded-[5px] p-6 flex flex-col items-center justify-center min-h-[300px] relative overflow-hidden group cursor-pointer"
                style={{ 
                  boxShadow: "0px 4px 1px 0px rgba(0,0,0,0.5)" 
                }}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0px 20px 40px rgba(92, 182, 255, 0.3), 0px 4px 1px 0px rgba(0,0,0,0.5)"
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                {/* Animated border glow */}
                <motion.div
                  className="absolute inset-0 rounded-[5px] opacity-0 group-hover:opacity-100"
                  style={{
                    background: "linear-gradient(135deg, rgba(92, 182, 255, 0.3), rgba(52, 155, 239, 0.3))",
                    padding: "2px",
                    mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    maskComposite: "exclude",
                  }}
                  transition={{ duration: 0.3 }}
                />

                {/* Background gradient on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#5cb6ff]/10 via-transparent to-[#349bef]/10 opacity-0 group-hover:opacity-100 rounded-[5px]"
                  transition={{ duration: 0.3 }}
                />

                {/* Shine effect */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100"
                  initial={{ x: "-100%", y: "-100%" }}
                  whileHover={{ x: "100%", y: "100%" }}
                  transition={{ duration: 0.6 }}
                  style={{
                    background: "linear-gradient(135deg, transparent, rgba(255,255,255,0.1), transparent)",
                  }}
                />

                {/* Icon with animation */}
                <motion.div 
                  className="mb-8 flex-1 flex items-center justify-center relative z-10"
                  animate={hoveredIndex === index ? {
                    y: [0, -10, 0],
                    rotate: [0, 5, -5, 0]
                  } : {}}
                  transition={{ 
                    duration: 0.5,
                    ease: "easeInOut"
                  }}
                >
                  <motion.img
                    src={service.icon}
                    alt={service.title}
                    className="w-24 h-24 md:w-28 md:h-28 object-contain"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Glow behind icon */}
                  <motion.div
                    className="absolute inset-0 bg-[#5cb6ff]/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>

                {/* Title */}
                <h3 
                  className="text-[#349bef] text-2xl text-center leading-normal relative z-10 group-hover:text-[#5cb6ff] transition-colors duration-300" 
                  style={{ textShadow: "rgba(0,0,0,0.5) 0px 4px 1px" }}
                >
                  {service.title.includes("/") || service.title === "Web Development" || service.title === "Backend Development" 
                    ? service.title.split(" ").map((word, i) => (
                        <span key={i}>
                          {word}
                          {i < service.title.split(" ").length - 1 && <br />}
                        </span>
                      ))
                    : service.title
                  }
                </h3>

                {/* Description (visible on hover) */}
                <motion.p
                  className="text-[color:var(--color-text-muted)] text-center mt-4 relative z-10"
                  initial={{ opacity: 0, height: 0 }}
                  animate={hoveredIndex === index ? { 
                    opacity: 1, 
                    height: "auto" 
                  } : { 
                    opacity: 0, 
                    height: 0 
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {service.description}
                </motion.p>

                {/* Floating particles on hover */}
                {hoveredIndex === index && (
                  <>
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-[#5cb6ff] rounded-full"
                        initial={{ 
                          x: "50%", 
                          y: "50%",
                          opacity: 1 
                        }}
                        animate={{ 
                          x: `${50 + (Math.random() - 0.5) * 200}%`, 
                          y: `${50 + (Math.random() - 0.5) * 200}%`,
                          opacity: 0
                        }}
                        transition={{ 
                          duration: 1 + Math.random(),
                          ease: "easeOut",
                          repeat: Infinity,
                          repeatDelay: Math.random() * 2
                        }}
                      />
                    ))}
                  </>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Scroll More Button */}
        <motion.div 
          className="flex justify-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <motion.button 
            onClick={scrollToProjects}
            className="border border-[color:var(--color-border-contrast)] bg-[color:var(--color-surface)] text-[color:var(--color-text-primary)] px-6 py-1 flex items-center gap-3 relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Hover background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#5cb6ff]/20 to-[#349bef]/20"
              initial={{ x: "-100%" }}
              whileHover={{ x: "0%" }}
              transition={{ duration: 0.3 }}
            />
            
            <span className="text-xl relative z-10 group-hover:text-[#5cb6ff] transition-colors">
              Scroll More
            </span>
            
            <motion.div 
              className="rotate-[31.124deg] relative z-10"
              animate={{ y: [0, 3, 0] }}
              transition={{ 
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <svg
                className="w-4 h-4 text-[color:var(--color-text-primary)] group-hover:text-[#5cb6ff] transition-colors"
                fill="currentColor"
                preserveAspectRatio="none"
                viewBox="0 0 16 15"
              >
                <path d={svgPaths.pf06e800} fill="currentColor" className="transition-colors" />
              </svg>
            </motion.div>

            {/* Border glow on hover */}
            <motion.div
              className="absolute inset-0 border-2 border-[#5cb6ff]/50 opacity-0 group-hover:opacity-100 rounded"
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
