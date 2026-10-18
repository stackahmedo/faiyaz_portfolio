import { motion } from "motion/react";
import { useState, type FormEvent } from "react";
import { Send, Mail, Phone } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { CONTACT_EMAIL, CONTACT_PHONE, CONTACT_PHONE_HREF, activeSocialLinks } from "../data/contact";
import { SectionBackground } from "./ui/SectionBackground";
import { SectionHeading } from "./ui/SectionHeading";

const inputClass =
  "w-full rounded-lg border border-[#2378ee] bg-input px-4 py-3 text-fg placeholder:text-fg-muted/50 transition-all focus:border-accent focus:ring-2 focus:ring-accent/20 focus:outline-none";

// Email is already shown above the form, so only list the other profiles here.
const profiles = activeSocialLinks.filter((link) => !link.url.startsWith("mailto:"));

export function Contact() {
  const [sending, setSending] = useState(false);
  const { t } = useLanguage();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const field = (name: string) => String(data.get(name) ?? "").trim();

    const body = `${field("message")}\n\n— ${field("name")} <${field("email")}>`;
    const href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(field("subject"))}&body=${encodeURIComponent(body)}`;

    setSending(true);
    window.location.href = href;
    window.setTimeout(() => setSending(false), 3000);
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="relative min-h-screen overflow-hidden px-4 py-20 md:py-24"
    >
      <SectionBackground
        pattern="dots"
        particles={10}
        seed={77}
        orbs={[
          { className: "top-1/4 left-1/4 h-[400px] w-[400px] bg-accent/5", duration: 22, drift: [40, -50] },
          { className: "right-1/4 bottom-1/4 h-[450px] w-[450px] bg-steel/5", duration: 26, drift: [-50, 40] },
        ]}
      />

      <div className="relative z-10 container mx-auto max-w-5xl">
        <SectionHeading id="contact-title" title={t("contact.title")} subtitle={t("contact.subtitle")} />

        {/* Direct contact */}
        <motion.div
          className="mb-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {[
            { href: `mailto:${CONTACT_EMAIL}`, label: CONTACT_EMAIL, Icon: Mail },
            { href: CONTACT_PHONE_HREF, label: CONTACT_PHONE, Icon: Phone },
          ].map(({ href, label, Icon }) => (
            <a
              key={href}
              href={href}
              className="group inline-flex items-center gap-3 rounded-full border border-accent/30 bg-surface-muted px-5 py-3 text-lg text-accent backdrop-blur-sm transition-colors hover:border-accent hover:text-accent-bright md:text-xl"
            >
              <Icon size={20} className="transition-transform group-hover:-rotate-12" aria-hidden="true" />
              {label}
            </a>
          ))}
        </motion.div>

        {profiles.length > 0 && (
          <ul className="mb-12 flex flex-wrap justify-center gap-4 md:gap-6">
            {profiles.map((social) => (
              <li key={social.name}>
                <motion.a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  title={social.name}
                  className="block rounded-full border border-[#a3a2c3] bg-surface-muted p-3 backdrop-blur-sm transition-colors hover:border-accent"
                  whileHover={{ y: -6, scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <img src={social.icon} alt="" className="h-8 w-8 object-contain md:h-10 md:w-10" />
                </motion.a>
              </li>
            ))}
          </ul>
        )}

        {/* Contact Form */}
        <motion.div
          className="relative overflow-hidden rounded-2xl border border-[#a3a2c3]/60 bg-surface-muted p-6 backdrop-blur-sm transition-colors focus-within:border-accent/60 md:p-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-accent">
                  {t("contact.name")}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  autoComplete="name"
                  required
                  className={inputClass}
                  placeholder={t("contact.namePlaceholder")}
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-accent">
                  {t("contact.email")}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  autoComplete="email"
                  required
                  className={inputClass}
                  placeholder={t("contact.emailPlaceholder")}
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="mb-2 block text-accent">
                {t("contact.subject")}
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                className={inputClass}
                placeholder={t("contact.subjectPlaceholder")}
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-accent">
                {t("contact.message")}
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                className={`${inputClass} resize-y`}
                placeholder={t("contact.messagePlaceholder")}
              />
            </div>

            <div className="flex flex-col items-center gap-3">
              <motion.button
                type="submit"
                disabled={sending}
                className="group relative flex items-center justify-center gap-2 overflow-hidden rounded-full border border-white bg-brand px-8 py-3 text-lg text-white transition-colors hover:bg-brand-hover disabled:opacity-80 md:px-12 md:py-4 md:text-xl"
                whileHover={sending ? undefined : { scale: 1.05, boxShadow: "0 0 25px rgba(80, 153, 255, 0.5)" }}
                whileTap={{ scale: 0.95 }}
              >
                <span
                  className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full"
                  aria-hidden="true"
                />
                <span className="relative" aria-live="polite">
                  {sending ? t("contact.opening") : t("contact.sendButton")}
                </span>
                <Send size={20} className="relative transition-transform group-hover:translate-x-1" />
              </motion.button>
              <p className="text-center text-sm text-fg-muted">{t("contact.formNote")}</p>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
