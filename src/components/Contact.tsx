import imgGmail from "figma:asset/509bf497099afa9d7192b9cf61f0a13160aec435.png";
import imgInstagram from "figma:asset/67e34b1cbcffd45ecea86bc09833bdbc19ffa60a.png";
import imgFacebook from "figma:asset/cdc12c352f169c60fcde32e82e64acc46f8e2cb7.png";
import imgX from "figma:asset/60d95c92f7e8ee83b8f2d3ccbc77adf7c2e68b55.png";
import imgBehance from "figma:asset/d2eb623c572df7ebd9a61eadc23985f32b4fbe47.png";
import imgTelegram from "figma:asset/8b93f6af2c76e04330fb1f79dd6f74df5cba6788.png";
import imgWhatsApp from "figma:asset/336e9a9a435dc4e7320d3e09f51e689cb76559a9.png";
import imgDribbble from "figma:asset/646bc62a4f94be4b9fee8f3bb5e7e4d346bd418f.png";
import { motion } from "motion/react";
import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const socialLinks = [
  { name: "Gmail", icon: imgGmail, url: "mailto:ahmed@example.com" },
  { name: "Instagram", icon: imgInstagram, url: "#" },
  { name: "Facebook", icon: imgFacebook, url: "#" },
  { name: "X (Twitter)", icon: imgX, url: "#" },
  { name: "Behance", icon: imgBehance, url: "#" },
  { name: "Telegram", icon: imgTelegram, url: "#" },
  { name: "WhatsApp", icon: imgWhatsApp, url: "#" },
  { name: "Dribbble", icon: imgDribbble, url: "#" },
];

export function Contact() {
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="min-h-screen px-4 py-16 md:py-20 relative overflow-hidden">
      {/* Animated background effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle, #5cb6ff 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />
        
        {/* Floating orbs */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-[#5cb6ff]/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 40, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-[#4373b5]/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -50, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 26,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Floating particles */}
        {[...Array(18)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-[#5cb6ff]/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.3, 1],
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

      <div className="container mx-auto max-w-5xl relative z-10">
        {/* Title Section */}
        <motion.div 
          className="text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.h2 
            className="text-[#5cb6ff] text-4xl md:text-5xl lg:text-6xl mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {t("contact.title")}
          </motion.h2>
          
          {/* Animated underline */}
          <motion.div 
            className="w-72 h-1 bg-gradient-to-r from-[#5cb6ff]/30 via-[#5cb6ff] to-[#5cb6ff]/30 mx-auto rounded-full relative overflow-hidden"
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: 288, opacity: 1 }}
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

        {/* Contact Info */}
        <motion.div 
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.h3 
            className="text-[#5cb6ff] text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            AHMED FAIYAZ
          </motion.h3>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <motion.p 
              className="text-[#5cb6ff] text-xl md:text-2xl mb-2 hover:text-[#6ec5ff] transition-colors cursor-default"
              whileHover={{ x: 5 }}
            >
              +81 (80) 1291 1533
            </motion.p>
            <motion.p 
              className="text-[#5cb6ff] text-xl md:text-2xl hover:text-[#6ec5ff] transition-colors cursor-default"
              whileHover={{ x: 5 }}
            >
              ahmdfaiyaz@gmail.com
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Social Links */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 md:gap-6 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
              aria-label={social.name}
              initial={{ opacity: 0, scale: 0, rotate: -180 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5, 
                delay: 0.5 + index * 0.05,
                type: "spring",
                stiffness: 200
              }}
              whileHover={{ y: -8, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div 
                className="bg-[#0e1b2d]/50 backdrop-blur-sm border border-[#a3a2c3] rounded-full p-3 relative overflow-hidden"
                whileHover={{ borderColor: "#5cb6ff" }}
                transition={{ duration: 0.3 }}
              >
                {/* Glow effect on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#5cb6ff]/20 to-[#4373b5]/20 opacity-0 group-hover:opacity-100 rounded-full"
                  transition={{ duration: 0.3 }}
                />
                
                {/* Rotating background on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#5cb6ff]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
                
                <img
                  src={social.icon}
                  alt={social.name}
                  className="w-8 h-8 md:w-10 md:h-10 object-contain relative z-10"
                />
              </motion.div>

              {/* Tooltip on hover */}
              <motion.div
                className="absolute -top-10 left-1/2 -translate-x-1/2 bg-[#5cb6ff] text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none"
                initial={{ y: 10 }}
                whileHover={{ y: 0 }}
                transition={{ duration: 0.2 }}
              >
                {social.name}
                <div className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-2 h-2 bg-[#5cb6ff] rotate-45" />
              </motion.div>

              {/* Outer glow */}
              <motion.div
                className="absolute inset-0 bg-[#5cb6ff] rounded-full blur-xl opacity-0 group-hover:opacity-30"
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}
        </motion.div>

        {/* Contact Form */}
        <motion.div 
          className="bg-[#0e1b2d]/50 backdrop-blur-sm border border-[#a3a2c3] rounded-2xl p-6 md:p-8 relative overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {/* Background gradient effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-[#5cb6ff]/5 via-transparent to-[#4373b5]/5 opacity-0"
            animate={{ opacity: focusedField ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          />

          <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name Field */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <label htmlFor="name" className="block text-[#5cb6ff] mb-2">
                  {t("contact.name")}
                </label>
                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-[#00060d] border border-[#2378ee] rounded-lg px-4 py-3 text-white focus:border-[#5cb6ff] focus:outline-none focus:ring-2 focus:ring-[#5cb6ff]/20 transition-all"
                    placeholder={t("contact.namePlaceholder")}
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField(null)}
                  />
                </motion.div>
              </motion.div>

              {/* Email Field */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <label htmlFor="email" className="block text-[#5cb6ff] mb-2">
                  {t("contact.email")}
                </label>
                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-[#00060d] border border-[#2378ee] rounded-lg px-4 py-3 text-white focus:border-[#5cb6ff] focus:outline-none focus:ring-2 focus:ring-[#5cb6ff]/20 transition-all"
                    placeholder={t("contact.emailPlaceholder")}
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                  />
                </motion.div>
              </motion.div>
            </div>
            
            {/* Subject Field */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <label htmlFor="subject" className="block text-[#5cb6ff] mb-2">
                {t("contact.subject")}
              </label>
              <motion.div
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <input
                  type="text"
                  id="subject"
                  className="w-full bg-[#00060d] border border-[#2378ee] rounded-lg px-4 py-3 text-white focus:border-[#5cb6ff] focus:outline-none focus:ring-2 focus:ring-[#5cb6ff]/20 transition-all"
                  placeholder={t("contact.subjectPlaceholder")}
                  onFocus={() => setFocusedField("subject")}
                  onBlur={() => setFocusedField(null)}
                />
              </motion.div>
            </motion.div>
            
            {/* Message Field */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <label htmlFor="message" className="block text-[#5cb6ff] mb-2">
                {t("contact.message")}
              </label>
              <motion.div
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <textarea
                  id="message"
                  rows={6}
                  className="w-full bg-[#00060d] border border-[#2378ee] rounded-lg px-4 py-3 text-white focus:border-[#5cb6ff] focus:outline-none focus:ring-2 focus:ring-[#5cb6ff]/20 resize-none transition-all"
                  placeholder={t("contact.messagePlaceholder")}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                ></textarea>
              </motion.div>
            </motion.div>
            
            {/* Submit Button */}
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <motion.button
                type="submit"
                className="bg-[#5099ff] text-white px-8 md:px-12 py-3 md:py-4 rounded-full border border-white text-lg md:text-xl relative overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={submitted}
              >
                {/* Gradient overlay on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#5cb6ff] to-[#4088ee] opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
                
                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: "-100%" }}
                  animate={{ x: submitted ? "0%" : "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />

                <span className="relative z-10 flex items-center justify-center gap-2">
                  {submitted ? (
                    <>
                      <CheckCircle2 size={20} />
                      {t("contact.messageSent")}
                    </>
                  ) : (
                    <>
                      {t("contact.sendButton")}
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <Send size={20} />
                      </motion.span>
                    </>
                  )}
                </span>

                {/* Border glow on hover */}
                <motion.div
                  className="absolute inset-0 border-2 border-[#5cb6ff]/50 rounded-full opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </motion.div>
          </form>

          {/* Form border glow when focused */}
          <motion.div
            className="absolute inset-0 rounded-2xl pointer-events-none"
            style={{
              background: "linear-gradient(135deg, rgba(92, 182, 255, 0.3), rgba(67, 115, 181, 0.3))",
              padding: "2px",
              mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              maskComposite: "exclude",
            }}
            animate={{ opacity: focusedField ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </div>
    </section>
  );
}