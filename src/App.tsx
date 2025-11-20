import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Services } from "./components/Services";
import { Projects } from "./components/Projects";
import { Blogs } from "./components/Blogs";
import { Contact } from "./components/Contact";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { LanguageProvider } from "./contexts/LanguageContext";

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[color:var(--color-bg-primary)] text-[color:var(--color-text-primary)]">
        <Navigation />
        <Hero />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Blogs />
        <Contact />
        <Footer />
      </div>
    </LanguageProvider>
  );
}
