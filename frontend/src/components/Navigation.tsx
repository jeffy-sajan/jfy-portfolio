import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import MagneticButton from "./MagneticButton";

const links = [
  { label: "Work", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Navigation = () => {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const sectionIds = links.map((l) => l.href.replace("#", ""));
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${id}`);
          }
        },
        { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-4">
      <div className="shell">
        <div className="flex items-center justify-between rounded-2xl border border-border/70 bg-background/90 px-3 sm:px-4 py-2.5 sm:py-3 backdrop-blur-xl supports-[backdrop-filter]:bg-background/85 shadow-[0_14px_36px_-24px_rgba(0,0,0,0.45)]">
          <nav className="flex items-center gap-3 sm:gap-6 md:gap-9">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link text-[14px] sm:text-[16px] md:text-[18px] font-medium text-foreground/90 hover:text-foreground transition-colors"
              >
                {link.label}
                {activeSection === link.href && (
                  <motion.span
                    className="nav-indicator"
                    layoutId="nav-underline"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <MagneticButton>
              <Button asChild className="h-10 sm:h-12 rounded-[1rem] sm:rounded-[1.1rem] px-4 sm:px-6 text-[14px] sm:text-[18px] font-medium shadow-[0_12px_30px_-20px_rgba(0,0,0,0.6)]">
                <a href="mailto:jeffysajan9400@gmail.com">Email Me</a>
              </Button>
            </MagneticButton>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
