import { ChevronRight, Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";

export function Blogs() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const { t } = useLanguage();

  const blogPosts = [
    {
      id: 1,
      title: t("blogs.post1.title"),
      excerpt: t("blogs.post1.excerpt"),
      date: t("blogs.post1.date"),
      readTime: t("blogs.post1.readTime"),
      category: t("blogs.post1.category"),
      image: "programming code",
    },
    {
      id: 2,
      title: t("blogs.post2.title"),
      excerpt: t("blogs.post2.excerpt"),
      date: t("blogs.post2.date"),
      readTime: t("blogs.post2.readTime"),
      category: t("blogs.post2.category"),
      image: "design interface",
    },
    {
      id: 3,
      title: t("blogs.post3.title"),
      excerpt: t("blogs.post3.excerpt"),
      date: t("blogs.post3.date"),
      readTime: t("blogs.post3.readTime"),
      category: t("blogs.post3.category"),
      image: "tokyo city",
    },
  ];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % blogPosts.length);
  };

  return (
    <section id="blogs" className="min-h-screen px-4 py-16 md:py-20 flex items-center justify-center relative overflow-hidden">
      {/* Animated background effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Diagonal lines pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, #5cb6ff 0, #5cb6ff 2px, transparent 2px, transparent 60px)`,
          }}
        />
        
        {/* Floating orbs */}
        <motion.div 
          className="absolute top-1/3 right-20 w-[500px] h-[500px] bg-[#5cb6ff]/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -40, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-20 w-[400px] h-[400px] bg-[#4373b5]/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 60, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Floating particles */}
        {[...Array(16)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#5cb6ff]/25 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -60, 0],
              opacity: [0.25, 0.7, 0.25],
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
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.h2 
            className="text-[#5cb6ff] text-5xl md:text-[56px] mb-6" 
            style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {t("blogs.title")}
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

        {/* Blogs Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
          {/* Blog Cards Stack - Left Side */}
          <motion.div 
            className="relative w-full h-[500px] md:h-[600px] max-w-[600px] mx-auto lg:mx-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Back cards (stacked) */}
            {blogPosts.map((post, index) => {
              const offset = (index - activeIndex + blogPosts.length) % blogPosts.length;
              const isActive = offset === 0;
              const isNext = offset === 1;
              const isFarther = offset > 1;

              return (
                <motion.div
                  key={post.id}
                  className="absolute top-0 left-0 w-full h-[420px] rounded-[30px] cursor-pointer group"
                  style={{
                    zIndex: blogPosts.length - offset,
                  }}
                  initial={false}
                  animate={{
                    y: isActive ? 0 : isNext ? 80 : 120,
                    x: isActive ? 0 : isNext ? 80 : 120,
                    scale: isActive ? 1 : isNext ? 0.9 : 0.85,
                    opacity: isFarther ? 0 : 1,
                  }}
                  transition={{
                    duration: 0.5,
                    ease: [0.4, 0, 0.2, 1]
                  }}
                  onClick={isActive ? handleNext : undefined}
                  onHoverStart={() => isActive && setHoveredCard(post.id)}
                  onHoverEnd={() => setHoveredCard(null)}
                >
                  {/* Card content */}
                  <div className="relative w-full h-full bg-gradient-to-br from-[#0e1b2d] to-[#1a2942] rounded-[30px] border-2 border-[#5cb6ff]/30 overflow-hidden shadow-2xl">
                    {/* Background image */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#d9d9d9] via-[#b0b0b0] to-[#8a8a8a]">
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-[#5cb6ff]/20 to-[#4373b5]/20"
                        animate={{
                          opacity: isActive && hoveredCard === post.id ? 0.8 : 0.4
                        }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>

                    {/* Content overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#000414]/95 via-[#000414]/70 to-transparent flex flex-col justify-end p-6 md:p-8">
                      {/* Category badge */}
                      <motion.div
                        className="absolute top-6 right-6"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isActive ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                        transition={{ duration: 0.3, delay: 0.2 }}
                      >
                        <span className="px-4 py-2 bg-[#5cb6ff]/20 border border-[#5cb6ff] rounded-full text-[#5cb6ff] text-sm backdrop-blur-sm">
                          {post.category}
                        </span>
                      </motion.div>

                      {/* Title */}
                      <motion.h3 
                        className="text-white text-2xl md:text-3xl mb-3 group-hover:text-[#5cb6ff] transition-colors line-clamp-2"
                        style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 600 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                      >
                        {post.title}
                      </motion.h3>

                      {/* Excerpt */}
                      <motion.p 
                        className="text-white/80 text-sm md:text-base mb-4 line-clamp-2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                      >
                        {post.excerpt}
                      </motion.p>

                      {/* Meta info */}
                      <motion.div 
                        className="flex items-center gap-4 text-[#5cb6ff]/80 text-sm"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.4, delay: 0.3 }}
                      >
                        <div className="flex items-center gap-2">
                          <Calendar size={16} />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock size={16} />
                          <span>{post.readTime}</span>
                        </div>
                      </motion.div>

                      {/* Read more indicator */}
                      <motion.div
                        className="absolute bottom-6 right-6 w-12 h-12 bg-[#5cb6ff] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100"
                        initial={{ scale: 0, rotate: -180 }}
                        animate={isActive && hoveredCard === post.id ? { 
                          scale: 1, 
                          rotate: 0 
                        } : { 
                          scale: 0, 
                          rotate: -180 
                        }}
                        transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
                      >
                        <ArrowRight className="text-white" size={20} />
                      </motion.div>
                    </div>

                    {/* Border glow on hover */}
                    {isActive && (
                      <motion.div
                        className="absolute inset-0 rounded-[30px] pointer-events-none"
                        style={{
                          background: "linear-gradient(135deg, rgba(92, 182, 255, 0.5), rgba(67, 115, 181, 0.5))",
                          padding: "2px",
                          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                          maskComposite: "exclude",
                        }}
                        animate={{ opacity: hoveredCard === post.id ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Scroll More CTA - Right Side */}
          <motion.div 
            className="w-full flex flex-col items-center lg:items-start justify-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="text-left relative">
              {/* Decorative icon */}
              <motion.div
                className="absolute -top-16 -left-4 opacity-20"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <BookOpen className="w-20 h-20 text-[#5cb6ff]" strokeWidth={1.5} />
              </motion.div>

              <motion.p 
                className="text-[#5cb6ff] text-[80px] md:text-[96px] lg:text-[110px] leading-none mb-2" 
                style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                Scroll
              </motion.p>
              <motion.p 
                className="text-[#5cb6ff] text-[80px] md:text-[96px] lg:text-[110px] leading-none mb-8" 
                style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                More
              </motion.p>
              
              <motion.div 
                className="flex"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7, type: "spring", stiffness: 200 }}
              >
                <motion.button
                  onClick={handleNext}
                  className="relative group cursor-pointer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <motion.div
                    animate={{ x: [0, 10, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <ChevronRight 
                      className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] text-[#5cb6ff]" 
                      strokeWidth={3} 
                    />
                  </motion.div>

                  {/* Glow effect */}
                  <motion.div
                    className="absolute inset-0 bg-[#5cb6ff] rounded-full blur-xl opacity-0 group-hover:opacity-50"
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              </motion.div>

              {/* Progress indicator */}
              <motion.div 
                className="flex gap-3 mt-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                {blogPosts.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className="relative"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <motion.div
                      className="w-12 h-1.5 bg-[#5cb6ff]/30 rounded-full overflow-hidden"
                      animate={{
                        backgroundColor: activeIndex === index ? "rgba(92, 182, 255, 1)" : "rgba(92, 182, 255, 0.3)"
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {activeIndex === index && (
                        <motion.div
                          className="h-full bg-white/50"
                          initial={{ width: "0%" }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </motion.div>
                  </motion.button>
                ))}
              </motion.div>

              {/* Post count */}
              <motion.p
                className="text-[#5cb6ff]/60 text-lg mt-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                {activeIndex + 1} / {blogPosts.length}
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}