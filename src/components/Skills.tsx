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
import type { ReactNode } from "react";
import { motion } from "motion/react";
import { useLanguage } from "../contexts/LanguageContext";
import type { TranslationKey } from "../i18n/en";
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
import { SectionBackground } from "./ui/SectionBackground";
import { SectionHeading } from "./ui/SectionHeading";

interface Skill {
  name: string;
  icon?: string;
  iconComponent?: ReactNode;
}

interface SkillCategory {
  titleKey: TranslationKey;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    titleKey: "skills.cat.design",
    skills: [
      { name: "Figma", iconComponent: <FigmaIcon /> },
      { name: "Photoshop", icon: imgAdobePhotoshop },
      { name: "Illustrator", icon: imgAdobeIllustrator },
      { name: "Adobe XD", icon: imgAdobeXd },
      { name: "Sketch", icon: imgSketch },
    ],
  },
  {
    titleKey: "skills.cat.frontend",
    skills: [
      { name: "HTML", icon: imgHtml6 },
      { name: "CSS", icon: imgCss3 },
      { name: "JavaScript", icon: imgJavaScript },
      { name: "React", icon: imgReact },
      { name: "Tailwind", icon: imgTailwindCss },
      { name: "TypeScript", icon: imgTypeScript },
    ],
  },
  {
    titleKey: "skills.cat.backend",
    skills: [
      { name: "C", icon: imgCProgramming },
      { name: "C++", icon: imgC },
      { name: "PHP", icon: imgPhpLogo },
      { name: "Node.js", icon: imgNodeJs },
      { name: "Python", icon: imgPython },
      { name: "Java", icon: imgJava },
    ],
  },
  {
    titleKey: "skills.cat.cloud",
    skills: [
      { name: "Vercel", iconComponent: <VercelIcon /> },
      { name: "GitHub Pages", iconComponent: <GitHubPagesIcon /> },
      { name: "Netlify", iconComponent: <NetlifyIcon /> },
      { name: "Firestore", iconComponent: <FirestoreIcon /> },
      { name: "Docker", icon: imgDocker },
    ],
  },
  {
    titleKey: "skills.cat.database",
    skills: [
      { name: "MongoDB", icon: imgMongoDb },
      { name: "Firebase", icon: imgFirebase },
      { name: "Supabase", icon: imgSupabase },
      { name: "MySQL", icon: imgMySqlLogo },
      { name: "Oracle", icon: imgOracleLogo },
    ],
  },
  {
    titleKey: "skills.cat.ai",
    skills: [
      { name: "JSON", iconComponent: <JSONIcon /> },
      { name: "OpenAI", icon: imgChatGpt },
      { name: "Gemini", icon: imgAi },
      { name: "Postman", icon: imgPostmanInc },
    ],
  },
  {
    titleKey: "skills.cat.vcs",
    skills: [
      { name: "Git", icon: imgGit },
      { name: "GitHub", icon: imgGitHub },
      { name: "GitLab", iconComponent: <GitLabIcon /> },
      { name: "VS Code", icon: imgVisualStudioCode2020 },
      { name: "npm", icon: imgNpm },
    ],
  },
  {
    titleKey: "skills.cat.cms",
    skills: [
      { name: "WordPress", icon: imgWordPress },
      { name: "Shopify", icon: imgShopify },
      { name: "Wix", icon: imgWix },
    ],
  },
  {
    titleKey: "skills.cat.collab",
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
  const { t } = useLanguage();

  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6, transition: { duration: 0.3, ease: "easeOut" } }}
      className="group relative overflow-hidden rounded-xl border border-line/40 bg-gradient-to-br from-card-start to-card-end backdrop-blur-md transition-[border-color,box-shadow] duration-300 hover:border-accent/60 hover:shadow-2xl hover:shadow-accent/20"
    >
      {/* Header */}
      <div className="relative overflow-hidden border-b border-line/30 bg-gradient-to-r from-brand-deep to-[#0d4a9f] px-6 py-4">
        <span
          className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 group-hover:translate-x-full"
          aria-hidden="true"
        />
        <h3 className="relative text-center text-xl font-semibold tracking-wide text-fg transition-colors duration-300 group-hover:text-accent-soft">
          {t(category.titleKey)}
        </h3>
      </div>

      {/* Skills */}
      <ul className="flex flex-wrap gap-2.5 px-5 py-6">
        {category.skills.map((skill) => (
          <li
            key={skill.name}
            className="flex items-center gap-2 rounded-lg border border-[#2563c7]/50 bg-chip px-3 py-2 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:bg-chip-hover hover:shadow-md hover:shadow-accent/20"
          >
            {skill.icon && (
              <img src={skill.icon} alt="" className="h-5 w-5 object-contain" loading="lazy" decoding="async" />
            )}
            {skill.iconComponent && (
              <span className="flex h-5 w-5 items-center justify-center" aria-hidden="true">
                {skill.iconComponent}
              </span>
            )}
            <span className="text-sm whitespace-nowrap text-accent-soft">{skill.name}</span>
          </li>
        ))}
      </ul>
    </motion.article>
  );
}

export function Skills() {
  const { t } = useLanguage();

  return (
    <section
      id="skills"
      aria-labelledby="skills-title"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-20 md:py-24"
    >
      <SectionBackground
        pattern="grid"
        particles={12}
        seed={33}
        orbs={[
          { className: "top-1/4 left-1/4 h-[400px] w-[400px] bg-accent/10", duration: 15, drift: [0, 0] },
          { className: "right-1/4 bottom-1/4 h-[350px] w-[350px] bg-accent-strong/10", duration: 20, drift: [0, 0] },
        ]}
      />

      <div className="relative z-10 container mx-auto max-w-7xl">
        <SectionHeading id="skills-title" title={t("skills.title")} subtitle={t("skills.subtitle")} />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard key={category.titleKey} category={category} index={index} />
          ))}
        </div>

        <motion.p
          className="mt-16 flex items-center justify-center gap-3 text-center text-sm font-light text-accent/50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <span className="h-px w-12 bg-gradient-to-r from-transparent to-accent/40" aria-hidden="true" />
          {t("skills.closing")}
          <span className="h-px w-12 bg-gradient-to-l from-transparent to-accent/40" aria-hidden="true" />
        </motion.p>
      </div>
    </section>
  );
}
