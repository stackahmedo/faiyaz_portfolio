import { useLanguage } from "../contexts/LanguageContext";
import { motion, AnimatePresence } from "motion/react";
import { Globe, Check, ChevronDown } from "lucide-react";
import { useState } from "react";

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'en', label: 'English', flag: '🇺🇸', nativeLabel: 'English' },
    { code: 'jp', label: 'Japanese', flag: '🇯🇵', nativeLabel: '日本語' },
  ];

  const currentLanguage = languages.find(lang => lang.code === language);

  return (
    <div className="relative">
      {/* Horizontal Language Switcher - Smaller Version */}
      <div className="flex items-center gap-1.5 px-2 py-1 bg-[#0e1b2d]/80 backdrop-blur-md border border-[#5cb6ff]/30 rounded-full relative overflow-hidden group">
        {/* Background gradient */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-[#5cb6ff]/5 to-[#4373b5]/5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />

        {/* Globe icon - smaller */}
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <Globe className="w-3 h-3 text-[#5cb6ff] relative z-10" />
        </motion.div>

        {/* Divider - smaller */}
        <div className="w-px h-3 bg-[#5cb6ff]/30 relative z-10" />

        {/* Language Options - Horizontal */}
        <div className="flex items-center gap-0.5 relative z-10">
          {languages.map((lang) => {
            const isActive = language === lang.code;
            
            return (
              <motion.button
                key={lang.code}
                onClick={() => setLanguage(lang.code as 'en' | 'jp')}
                className="relative px-2 py-0.5 flex items-center gap-1 rounded-full transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Active background */}
                {isActive && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#5cb6ff]/20 to-[#4373b5]/20 rounded-full border border-[#5cb6ff]/40"
                    layoutId="activeLanguageBg"
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  />
                )}

                {/* Hover background */}
                {!isActive && (
                  <motion.div
                    className="absolute inset-0 bg-[#5cb6ff]/10 rounded-full opacity-0 hover:opacity-100"
                    transition={{ duration: 0.2 }}
                  />
                )}

                {/* Flag - smaller */}
                <span className="text-sm relative z-10">{lang.flag}</span>

                {/* Language code - smaller */}
                <span className={`text-[10px] font-medium relative z-10 transition-colors hidden sm:inline ${
                  isActive ? 'text-[#5cb6ff]' : 'text-white/70'
                }`}>
                  {lang.code.toUpperCase()}
                </span>

                {/* Check icon for active language - smaller */}
                <motion.div
                  className="relative z-10"
                  initial={{ scale: 0 }}
                  animate={{ 
                    scale: isActive ? 1 : 0,
                    rotate: isActive ? 0 : -180
                  }}
                  transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
                >
                  <Check className="w-2.5 h-2.5 text-[#5cb6ff]" />
                </motion.div>

                {/* Glow effect on active */}
                {isActive && (
                  <motion.div
                    className="absolute inset-0 bg-[#5cb6ff] rounded-full blur-md opacity-20"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.2 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.button>
            );
          })}
        </div>

        {/* Outer glow effect */}
        <motion.div
          className="absolute inset-0 bg-[#5cb6ff] rounded-full blur-lg opacity-0 group-hover:opacity-20"
          transition={{ duration: 0.3 }}
        />
      </div>
    </div>
  );
}