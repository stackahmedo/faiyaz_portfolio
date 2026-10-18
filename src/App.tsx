import { MotionConfig } from "motion/react";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Services } from "./components/Services";
import { Projects } from "./components/Projects";
import { Blogs } from "./components/Blogs";
import { Contact } from "./components/Contact";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { SkipLink } from "./components/ui/SkipLink";
import { LanguageProvider } from "./contexts/LanguageContext";

export default function App() {
  return (
    <LanguageProvider>
      {/* Honour the OS "reduce motion" setting for every animation on the page. */}
      <MotionConfig reducedMotion="user">
        <div className="min-h-screen bg-ink text-fg">
          <SkipLink />
          <Navigation />
          <main id="main">
            <Hero />
            <About />
            <Skills />
            <Services />
            <Projects />
            <Blogs />
            <Contact />
          </main>
          <Footer />
        </div>
      </MotionConfig>
    </LanguageProvider>
  );
}
