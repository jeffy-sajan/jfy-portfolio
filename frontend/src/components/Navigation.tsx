import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const sections = ["home", "about", "skills", "projects", "resume", "contact"];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-card/95 backdrop-blur-md shadow-card" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("home");
            }}
            className="text-2xl font-bold bg-gradient-accent bg-clip-text text-transparent"
          >
            Portfolio
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            {sections.map((section) => (
              <a
                key={section}
                href={`#${section}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(section);
                }}
                className="text-foreground/80 hover:text-foreground font-medium transition-colors capitalize"
              >
                {section}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 animate-fade-in">
            <div className="flex flex-col gap-3">
              {sections.map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(section);
                  }}
                  className="text-foreground/80 hover:text-foreground font-medium transition-colors capitalize py-2"
                >
                  {section}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
