import svgPaths from "../data/projectSvgPaths";
import imgRectangle27 from "../assets/97e65d1cb835b877fe73c19a7b6c5b3900144de3.png";
import imgUnsplashOdFtpBn0SPm from "../assets/958ad66765db7773515d49ad8c5ec8c5c3ac1217.png";
import { motion } from "motion/react";
import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export function Projects() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [activeDot, setActiveDot] = useState(0);
  const { t, language } = useLanguage();
  const isJapanese = language === "jp";

  const projects = [
    {
      title: t("projects.travelsite.title"),
      thumbnail: imgUnsplashOdFtpBn0SPm,
      description: t("projects.travelsite.desc"),
      tags: t("projects.travelsite.tags").split(", "),
    },
    {
      title: t("projects.groupware.title"),
      thumbnail: imgUnsplashOdFtpBn0SPm,
      description: t("projects.groupware.desc"),
      tags: t("projects.groupware.tags").split(", "),
    },
    {
      title: t("projects.schoolhub.title"),
      thumbnail: imgUnsplashOdFtpBn0SPm,
      description: t("projects.schoolhub.desc"),
      tags: t("projects.schoolhub.tags").split(", "),
    },
    {
      title: t("projects.portfolio.title"),
      thumbnail: imgUnsplashOdFtpBn0SPm,
      description: t("projects.portfolio.desc"),
      tags: t("projects.portfolio.tags").split(", "),
    },
  ];

  return (
    <section id="projects" className="min-h-screen px-4 py-16 md:py-20 relative overflow-hidden">
      {/* Animated background effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Radial gradient orbs */}
        <motion.div 
          className="absolute top-1/4 right-20 w-[450px] h-[450px] bg-[#5cb6ff]/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -60, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/3 left-20 w-[500px] h-[500px] bg-[#4373b5]/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#5cb6ff]/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -60, 0],
              opacity: [0.2, 0.7, 0.2],
              scale: [1, 1.4, 1],
            }}
            transition={{
              duration: 7 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Title Section */}
        <motion.div 
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.h2 
            className="text-[#5cb6ff] text-5xl md:text-[56px] mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {t("projects.title")}
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

        {/* Projects Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start max-w-6xl mx-auto">
          {/* Featured Project - Left Side */}
          <motion.div 
            className="w-full max-w-[600px] mx-auto lg:mx-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.div 
              className="relative rounded-[20px] border-2 border-[#4373b5] overflow-hidden group cursor-pointer"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {/* Glow effect on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#5cb6ff]/20 via-transparent to-[#4373b5]/20 opacity-0 group-hover:opacity-100 rounded-[20px] pointer-events-none z-10"
                transition={{ duration: 0.4 }}
              />

              {/* Image container */}
              <div className="relative h-[338px] w-full border border-[#4373b5] overflow-hidden">
                <div className="absolute inset-0 bg-[#d9d9d9]">
                  <motion.img 
                    src={imgRectangle27} 
                    alt="QR Code Generate" 
                    className="absolute inset-0 size-full object-cover object-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  />
                  
                  {/* Overlay with links on hover */}
                  <motion.div
                    className="absolute inset-0 bg-[#000414]/90 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.3 }}
                  >
                    <motion.button
                      className="bg-[#5cb6ff] text-white p-3 rounded-full hover:bg-[#4da3e6] transition-colors"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ExternalLink size={24} />
                    </motion.button>
                    <motion.button
                      className="bg-[#4373b5] text-white p-3 rounded-full hover:bg-[#5680c7] transition-colors"
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github size={24} />
                    </motion.button>
                  </motion.div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 pb-10 relative z-20">
                <motion.h3 
                  className={`text-[#5cb6ff] text-center mb-4 group-hover:text-[#6ec5ff] transition-colors ${isJapanese ? "text-3xl md:text-[32px]" : "text-[40px]"}`} 
                  style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}
                >
                  {t("projects.qrcode.title")}
                </motion.h3>
                <p
                  className="text-[color:var(--color-text-primary)] text-[20px] text-center mb-4"
                  style={{ fontFamily: "Outfit, sans-serif", fontWeight: 300 }}
                >
                  {t("projects.qrcode.desc")}
                </p>
                
                {/* Tech tags */}
                <motion.div 
                  className="flex gap-2 justify-center flex-wrap"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  {t("projects.qrcode.tags").split(", ").map((tag, i) => (
                    <motion.span
                      key={tag}
                      className="px-3 py-1 bg-[#5cb6ff]/10 border border-[#5cb6ff]/30 rounded-full text-[#5cb6ff] text-sm"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 + i * 0.1 }}
                      whileHover={{ scale: 1.1, backgroundColor: "rgba(92, 182, 255, 0.2)" }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </motion.div>
              </div>

              {/* Border glow effect */}
              <motion.div
                className="absolute inset-0 rounded-[20px] opacity-0 group-hover:opacity-100 pointer-events-none"
                style={{
                  background: "linear-gradient(135deg, rgba(92, 182, 255, 0.5), rgba(67, 115, 181, 0.5))",
                  padding: "2px",
                  mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  maskComposite: "exclude",
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </motion.div>

          {/* Project List - Right Side */}
          <motion.div 
            className="w-full max-w-[680px] mx-auto lg:mx-0 space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {projects.map((project, index) => (
              <motion.div 
                key={index} 
                className="relative"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
              >
                <motion.div 
                  className="bg-[color:var(--color-surface)] h-[111px] rounded-[20px] border-2 border-[#5cb6ff] flex items-center overflow-hidden cursor-pointer group relative"
                  whileHover={{ 
                    x: 10,
                    boxShadow: "0px 10px 30px rgba(92, 182, 255, 0.3)"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Background glow */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#5cb6ff]/5 to-transparent opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.3 }}
                  />

                  {/* Thumbnail */}
                  <div className="h-full w-[135px] flex-shrink-0 rounded-bl-[20px] rounded-tl-[20px] overflow-hidden border-r-2 border-[#5cb6ff] relative">
                    <motion.img 
                      src={project.thumbnail} 
                      alt={project.title}
                      className="size-full object-cover object-center"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                    />
                    
                    {/* Overlay on hover */}
                    <motion.div
                      className="absolute inset-0 bg-[#5cb6ff]/20 opacity-0 group-hover:opacity-100"
                      transition={{ duration: 0.3 }}
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col items-center justify-center px-4 relative z-10">
                    <motion.h3 
                      className={`text-[#5cb6ff] text-center group-hover:text-[#6ec5ff] transition-colors ${isJapanese ? "text-2xl md:text-4xl" : "text-3xl md:text-[56px]"}`} 
                      style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 300 }}
                    >
                      {project.title}
                    </motion.h3>
                    
                    {/* Description appears on hover */}
                  <motion.p
                    className="text-[color:var(--color-text-muted)] text-center mt-1 text-sm overflow-hidden"
                      initial={{ opacity: 0, height: 0 }}
                      animate={hoveredCard === index ? { 
                        opacity: 1, 
                        height: "auto" 
                      } : { 
                        opacity: 0, 
                        height: 0 
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {project.description}
                    </motion.p>
                  </div>

                  {/* Arrow indicator on hover */}
                  <motion.div
                    className="absolute right-4 opacity-0 group-hover:opacity-100"
                    initial={{ x: -10 }}
                    animate={hoveredCard === index ? { x: 0 } : { x: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ExternalLink className="text-[#5cb6ff]" size={20} />
                  </motion.div>

                  {/* Border glow on hover */}
                  <motion.div
                    className="absolute inset-0 rounded-[20px] opacity-0 group-hover:opacity-100 pointer-events-none"
                    style={{
                      background: "linear-gradient(135deg, rgba(92, 182, 255, 0.4), rgba(92, 182, 255, 0.1))",
                      padding: "2px",
                      mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                      maskComposite: "exclude",
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </motion.div>
            ))}

            {/* Pagination Dots */}
            <div className="absolute right-[-40px] top-1/2 -translate-y-1/2 space-y-6 hidden lg:flex flex-col">
              {[0, 1, 2, 3].map((dotIndex) => (
                <motion.div 
                  key={dotIndex}
                  className="relative size-[20px] cursor-pointer group"
                  onClick={() => setActiveDot(dotIndex)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg className="block size-full rotate-180 scale-y-[-100%]" fill="none" viewBox="0 0 20 20">
                    <motion.circle 
                      cx="10" 
                      cy="10" 
                      r="10" 
                      fill="#5cb6ff"
                      animate={{
                        fill: activeDot === dotIndex ? "#5cb6ff" : "#4373b5",
                        scale: activeDot === dotIndex ? 1.1 : 1
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </svg>
                  
                  {dotIndex === 0 && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg className="block w-[13px] h-[12px] rotate-180 scale-y-[-100%]" fill="none" viewBox="0 0 13 12">
                        <path d={svgPaths.p15f45e00} fill="#1057bc" />
                      </svg>
                    </div>
                  )}

                  {/* Glow on hover */}
                  <motion.div
                    className="absolute inset-0 bg-[#5cb6ff] rounded-full blur-md opacity-0 group-hover:opacity-50"
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
