import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import ScrollSection from "@/components/ScrollSection";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Resume from "@/components/sections/Resume";
import Skills from "@/components/sections/Skills";
import TechnicalSkills from "@/components/sections/TechnicalSkills";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <ScrollSection amount={0.25}>
          <Hero />
        </ScrollSection>

        <About />

        <Skills />

        <TechnicalSkills />

        <Projects />

        <Resume />

        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
