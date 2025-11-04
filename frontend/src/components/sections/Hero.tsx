import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center gradient-hero relative"
    >
      <div className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            Hello, I'm <span className="text-accent">JEFFY SAJAN</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            Full Stack Developer | Creative Problem Solver | Tech Enthusiast
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white font-semibold px-8"
              onClick={() => scrollToSection("projects")}
            >
              View My Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 px-8"
              onClick={() => scrollToSection("contact")}
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
      <button
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 hover:text-white transition-colors animate-bounce"
      >
        <ArrowDown size={32} />
      </button>
    </section>
  );
};

export default Hero;
