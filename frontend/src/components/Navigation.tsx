import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";

const links = [
  { label: "Work", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Navigation = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-4">
      <div className="shell">
        <div className="flex items-center justify-between rounded-2xl border border-border/70 bg-background/90 px-4 py-3 backdrop-blur-xl supports-[backdrop-filter]:bg-background/85 shadow-[0_14px_36px_-24px_rgba(0,0,0,0.45)]">
          <div className="w-4 md:w-24" aria-hidden="true" />

          <nav className="hidden md:flex items-center gap-9">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[18px] font-medium text-foreground/90 hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button asChild className="h-12 rounded-[1.1rem] px-6 text-[18px] font-medium shadow-[0_12px_30px_-20px_rgba(0,0,0,0.6)]">
              <a href="mailto:jeffysajan9400@gmail.com">Email Me</a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
