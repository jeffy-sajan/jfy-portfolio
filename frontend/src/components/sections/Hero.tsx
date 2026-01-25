import { Button } from "@/components/ui/button";
import { ArrowDown, Code2, Sparkles, Zap } from "lucide-react";

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

  const highlights = [
    { icon: Code2, text: "Full Stack Developer", color: "from-primary to-accent" },
    { icon: Sparkles, text: "Creative Problem Solver", color: "from-accent to-secondary" },
    { icon: Zap, text: "Tech Enthusiast", color: "from-secondary to-primary" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 gradient-mesh opacity-40 dark:opacity-20" />

      {/* Floating Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl animate-pulse-glow" />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-12">
          {/* Main Content */}
          <div className="space-y-6 animate-slide-in-up">
            <div className="inline-block">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium backdrop-blur-sm animate-scale-in">
                <Sparkles className="w-4 h-4" />
                Welcome to my portfolio
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight flex flex-col items-center justify-center gap-2">
              <span className="text-foreground">Hi, I'm</span>
              <span className="text-gradient inline-block animate-scale-in font-[Dancing_Script] p-2 tracking-wide text-6xl md:text-8xl lg:text-9xl" style={{ animationDelay: "0.2s" }}>
                Jeffy Sajan
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-slide-in-up" style={{ animationDelay: "0.3s" }}>
              Passionate about building{" "}
              <span className="text-primary font-semibold">scalable solutions</span> and crafting{" "}
              <span className="text-secondary font-semibold">exceptional user experiences</span>
            </p>
          </div>

          {/* Highlight Cards */}
          <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="group relative p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 animate-slide-in-up"
                style={{ animationDelay: `${0.4 + index * 0.1}s` }}
              >
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                <item.icon className="w-8 h-8 mx-auto mb-3 text-primary group-hover:scale-110 transition-transform duration-300" />
                <p className="text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Buttons - Improved Visibility */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-in-up" style={{ animationDelay: "0.7s" }}>
            <Button
              size="lg"
              className="group relative overflow-hidden bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-glow transition-all duration-300 px-8 py-6 text-lg"
              onClick={() => scrollToSection("projects")}
            >
              <span className="relative z-10 flex items-center gap-2 font-semibold">
                View My Work
                <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
              </span>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="group border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 px-8 py-6 text-lg bg-transparent hover:border-transparent"
              onClick={() => scrollToSection("contact")}
            >
              <span className="flex items-center gap-2 font-semibold">
                Get In Touch
                <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              </span>
            </Button>
          </div>
        </div>
      </div>

      {/* Stylish Scroll Indicator */}
      <button
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 group flex flex-col items-center gap-2 text-primary/60 hover:text-primary transition-colors duration-300"
        aria-label="Scroll to about section"
      >
        <span className="text-sm font-medium tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">SCROLL</span>
        <div className="w-6 h-10 border-2 border-current rounded-full p-1">
          <div className="w-1.5 h-1.5 bg-current rounded-full animate-bounce mx-auto" />
        </div>
      </button>
    </section>
  );
};

export default Hero;
