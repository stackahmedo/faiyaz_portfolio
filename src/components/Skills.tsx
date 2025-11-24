import imgAdobePhotoshop from "../assets/eef2fdb563e91b9c3f45d1adb750e7cd36dc8566.png";
import imgAdobeIllustrator from "../assets/b4c5996c40ec24752a95fc0ae044b935e51cdb66.png";
import imgAdobeXd from "../assets/facf2129f350649bf95999fa986d64d655cafa8c.png";
import imgSketch from "../assets/823a3e7b1afac75c8954ccc248abf063c7cda2ea.png";
import imgHtml6 from "../assets/e50a160042082bf3d7ff6a37bc89c5fa7f520245.png";
import imgCss3 from "../assets/b17a351f9c703c713d6d65ce36025dc0c051cfff.png";
import imgJavaScript from "../assets/23806f2c14e1585bb19e0600c313b3f946aad98b.png";
import imgReact from "../assets/514b7addd2b426d61689b2e9d91529b32e7361f4.png";
import imgTailwindCss from "../assets/1424d24997551c51efa1846072fcd223071b5429.png";
import imgTypeScript from "../assets/daa0d0d8efc0720c4d256ad91751481519ac49ae.png";
import imgCProgramming from "../assets/2e5d57747389287a093bd2a94982b69e47a8ef48.png";
import imgC from "../assets/711e62513fdeb3e3978d960a4382f718ab0bdba1.png";
import imgPhpLogo from "../assets/7a2ccc9a89d7a9966ae22345a9c7e7b8c160609b.png";
import imgNodeJs from "../assets/bfe0e57cd3aace52aa3af0d6f9d9b26c256fec4a.png";
import imgPython from "../assets/807e6d26e97c4fe1c5e248cfe48374416495f3f4.png";
import imgJava from "../assets/13bfc0d341d95ec6a69134c0fe47710b58b8ccef.png";
import imgDocker from "../assets/d5cc00c0207b52fa26cf272bb91b9326279333cd.png";
import imgMySqlLogo from "../assets/22916b6b3062cb41a11f6f5744e9c19494eeebb9.png";
import imgFirebase from "../assets/c1655b94b6b388a74858b06ee4f550112f28ba32.png";
import imgSupabase from "../assets/544f56d45ec05bddd27652b3366d8ebc9f963070.png";
import imgMongoDb from "../assets/461cbfedce83342b7def044771b6566e0ff44adc.png";
import imgOracleLogo from "../assets/5e0d2571da02e181049e8f740048ab8c62fe797c.png";
import imgChatGpt from "../assets/d2c1f3ffd53c0cd871b37b039600aaf5bd0aa5ce.png";
import imgAi from "../assets/29dcb62f80fe96fe5fc054858011f594ed48e70c.png";
import imgPostmanInc from "../assets/507b53137c0a623ed9da69562d932f6bbdff0d95.png";
import imgNpm from "../assets/0c12ca7a629312762022a27341496ac27d739676.png";
import imgVisualStudioCode2020 from "../assets/1cd9e19622984e47284f61afad27f95901ca5704.png";
import imgGit from "../assets/c47d5565b87e261d830ce8afd46eac81941277e5.png";
import imgGitHub from "../assets/e39af590a1199ee3c954e6ee50c17608a3494a82.png";
import imgWix from "../assets/20583325ffc0446e4a36ee436b832eebfbdc90eb.png";
import imgShopify from "../assets/f2d5d281477a36bd8d8f8707b2d05c8452d7cbc1.png";
import imgWordPress from "../assets/b0f72847abd9b9439ac32b5daf65ccf968f36425.png";
import imgMicrosoftOffice2019 from "../assets/df97648facc5ba8a57045cc6c6431594efbf2132.png";
import imgNotion from "../assets/8790947bd5370d3cdbe4662588b04da5b53c0bc2.png";
import imgSlack from "../assets/4f5b913a103090fd28f75b4ec44e81dbe7c8a632.png";
import imgPerplexityAi from "../assets/e38eb9829547856bb393f9b9186c6b63622430e6.png";
import { ReactNode } from "react";
import { motion } from "motion/react";
import { useLanguage } from "../contexts/LanguageContext";
import { 
  FigmaIcon,
  FirestoreIcon, 
  GitHubPagesIcon, 
  NetlifyIcon, 
  VercelIcon, 
  JSONIcon,
  GitLabIcon,
  HostingerIcon,
  ZoomIcon,
} from "./SkillIcons";

interface Skill {
  name: string;
  icon?: string;
  iconComponent?: ReactNode;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Designing Tools",
    skills: [
      { name: "Figma", iconComponent: <FigmaIcon /> },
      { name: "PhotoShop", icon: imgAdobePhotoshop },
      { name: "Illustrator", icon: imgAdobeIllustrator },
      { name: "Adobe XD", icon: imgAdobeXd },
      { name: "Sketch", icon: imgSketch },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "HTML", icon: imgHtml6 },
      { name: "CSS", icon: imgCss3 },
      { name: "Javascript", icon: imgJavaScript },
      { name: "React", icon: imgReact },
      { name: "Tailwind", icon: imgTailwindCss },
      { name: "TypeScript", icon: imgTypeScript },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "C", icon: imgCProgramming },
      { name: "C++", icon: imgC },
      { name: "php", icon: imgPhpLogo },
      { name: "Node.js", icon: imgNodeJs },
      { name: "Python", icon: imgPython },
      { name: "Java", icon: imgJava },
    ],
  },
  {
    title: "Cloud & Deployment",
    skills: [
      { name: "Vercel", iconComponent: <VercelIcon /> },
      { name: "Git Page", iconComponent: <GitHubPagesIcon /> },
      { name: "Netlify", iconComponent: <NetlifyIcon /> },
      { name: "FB Store", iconComponent: <FirestoreIcon /> },
      { name: "Docker", icon: imgDocker },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "MongoDB", icon: imgMongoDb },
      { name: "Firebase", icon: imgFirebase },
      { name: "Supabase", icon: imgSupabase },
      { name: "My Sql", icon: imgMySqlLogo },
      { name: "Oracle", icon: imgOracleLogo },
    ],
  },
  {
    title: "API & AI Interagation",
    skills: [
      { name: "JSON", iconComponent: <JSONIcon /> },
      { name: "Open AI", icon: imgChatGpt },
      { name: "Gemini", icon: imgAi },
      { name: "Postman", icon: imgPostmanInc },
    ],
  },
  {
    title: "Version Control",
    skills: [
      { name: "Git", icon: imgGit },
      { name: "Github", icon: imgGitHub },
      { name: "GitLab", iconComponent: <GitLabIcon /> },
      { name: "VS Code", icon: imgVisualStudioCode2020 },
      { name: "npm", icon: imgNpm },
    ],
  },
  {
    title: "CMS",
    skills: [
      { name: "Wordpress", icon: imgWordPress },
      { name: "Shopify", icon: imgShopify },
      { name: "Wix", icon: imgWix },
    ],
  },
  {
    title: "Collaboration Tools",
    skills: [
      { name: "Zoom", iconComponent: <ZoomIcon /> },
      { name: "Office", icon: imgMicrosoftOffice2019 },
      { name: "Notion", icon: imgNotion },
      { name: "Hostinger", iconComponent: <HostingerIcon /> },
      { name: "Slack", icon: imgSlack },
      { name: "Perplexity", icon: imgPerplexityAi },
    ],
  },
];

function SkillCard({ category, index }: { category: SkillCategory; index: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1]
      }}
      whileHover={{ 
        y: -8,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      className="group backdrop-blur-md rounded-xl overflow-hidden border border-[#2a4a7c]/40 hover:border-[#5cb6ff]/60 transition-all duration-300 hover:shadow-2xl hover:shadow-[#5cb6ff]/30 relative"
      style={{
        background: "linear-gradient(135deg, var(--color-card-gradient-start), var(--color-card-gradient-end))",
      }}
    >
      {/* Animated gradient overlay */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-[#5cb6ff]/0 via-[#5cb6ff]/0 to-[#5cb6ff]/0 group-hover:from-[#5cb6ff]/5 group-hover:via-[#5cb6ff]/0 group-hover:to-[#1057bc]/5 transition-all duration-500 pointer-events-none"
        initial={false}
      />
      
      {/* Header */}
      <div className="bg-gradient-to-r from-[#1057bc] to-[#0d4a9f] px-6 py-4 border-b border-[#2a4a7c]/30 relative overflow-hidden">
        {/* Shimmer effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
          initial={{ x: "-100%" }}
          animate={{ x: "200%" }}
          transition={{
            repeat: Infinity,
            duration: 3,
            delay: index * 0.2,
            ease: "linear"
          }}
        />
        <h3 
          className="text-[color:var(--color-text-primary)] text-center group-hover:text-[#a8d1ff] transition-colors duration-300 relative z-10"
          style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 600, fontSize: '20px', letterSpacing: '0.5px' }}
        >
          {category.title}
        </h3>
      </div>
      
      {/* Skills Container */}
      <div className="px-5 py-6 relative">
        <div className="flex flex-wrap gap-2.5">
          {category.skills.map((skill, skillIndex) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.3, 
                delay: index * 0.1 + skillIndex * 0.05,
                ease: "easeOut"
              }}
              whileHover={{ 
                scale: 1.08,
                rotate: [0, -2, 2, 0],
                transition: { duration: 0.3 }
              }}
              className="bg-[color:var(--color-chip-bg)] hover:bg-[color:var(--color-chip-hover)] border border-[#2563c7]/50 rounded-lg px-3 py-2 flex items-center gap-2 hover:border-[#5cb6ff] transition-all duration-200 hover:shadow-md hover:shadow-[#5cb6ff]/20 cursor-default"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                {skill.icon && (
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-5 h-5 object-contain"
                  />
                )}
                {skill.iconComponent && (
                  <div className="w-5 h-5 flex items-center justify-center">
                    {skill.iconComponent}
                  </div>
                )}
              </motion.div>
              <span 
                className="text-[#a8d1ff] whitespace-nowrap"
                style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 400, fontSize: '14px' }}
              >
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center px-4 py-16 md:py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(#5cb6ff 1px, transparent 1px), linear-gradient(90deg, #5cb6ff 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
        
        {/* Gradient orbs */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-[#5cb6ff]/10 rounded-full blur-[100px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-[#349bef]/10 rounded-full blur-[100px]"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
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
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="container mx-auto max-w-[1400px] relative z-10">
        {/* Title Section */}
        <motion.div 
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.h2 
            className="text-[#5cb6ff] mb-4 tracking-tight"
            style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '56px' }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {t("skills.title")}
          </motion.h2>
          <motion.p 
            className="text-[#a8d1ff]/70 mb-6 max-w-2xl mx-auto" 
            style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 400, fontSize: '18px' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {t("skills.subtitle")}
          </motion.p>
          <motion.div 
            className="w-[120px] h-[4px] bg-gradient-to-r from-transparent via-[#5cb6ff] to-transparent mx-auto"
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: 120, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          />
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard key={category.title} category={category} index={index} />
          ))}
        </div>

        {/* Bottom decoration */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 text-[#5cb6ff]/40" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 300, fontSize: '14px' }}>
            <motion.div 
              className="w-12 h-px bg-gradient-to-r from-transparent to-[#5cb6ff]/40"
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            />
            Continuously learning and expanding my skillset
            <motion.div 
              className="w-12 h-px bg-gradient-to-l from-transparent to-[#5cb6ff]/40"
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
