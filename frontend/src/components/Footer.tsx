import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/jeffy-sajan",
      label: "GitHub",
      color: "hover:text-primary",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/jeffy-sajan/",
      label: "LinkedIn",
      color: "hover:text-accent",
    },
    {
      icon: Mail,
      href: "mailto:jeffysajan9400@gmail.com",
      label: "Email",
      color: "hover:text-secondary",
    },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-card via-background to-card border-t border-border/50 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 gradient-mesh opacity-30" />

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="flex flex-col items-center gap-8">
          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative p-4 rounded-2xl bg-card border border-border/50 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 animate-scale-in ${link.color}`}
                style={{ animationDelay: `${index * 0.1}s` }}
                aria-label={link.label}
              >
                <link.icon className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
                <div className="absolute inset-0 rounded-2xl bg-gradient-accent opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-border to-transparent" />

          {/* Copyright */}
          <div className="flex flex-col md:flex-row items-center gap-2 text-muted-foreground">
            <p className="flex items-center gap-2">
              © {currentYear} <span className="font-semibold text-foreground">Jeffy Sajan</span>
            </p>
            <span className="hidden md:inline">•</span>
            <p className="flex items-center gap-1">
              Crafted with <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" /> and code
            </p>
          </div>

          {/* Back to Top Button */}
          <Button
            onClick={scrollToTop}
            variant="outline"
            size="sm"
            className="group border-primary/20 hover:border-primary hover:bg-primary/10 transition-all duration-300"
          >
            <ArrowUp className="w-4 h-4 mr-2 group-hover:-translate-y-1 transition-transform duration-300" />
            Back to Top
          </Button>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-accent" />
    </footer>
  );
};

export default Footer;
