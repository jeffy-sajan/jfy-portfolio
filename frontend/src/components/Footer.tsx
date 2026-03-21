import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";

const links = [
  { label: "GitHub", href: "https://github.com/jeffy-sajan", icon: Github },
  { label: "LinkedIn", href: "https://linkedin.com/in/jeffysajan", icon: Linkedin },
  { label: "Email", href: "mailto:jeffy.sajan@gmail.com", icon: Mail },
];

const Footer = () => {
  return (
    <footer className="pb-8">
      <div className="shell">
        <div className="flat-card rounded-3xl px-5 py-5 md:px-7 md:py-6 flex flex-col md:flex-row md:items-center justify-between gap-3">
          <p className="text-sm text-muted-foreground">{new Date().getFullYear()} Jeffy Sajan. All rights reserved.</p>
          <div className="flex flex-wrap gap-2">
            {links.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-foreground hover:bg-muted"
              >
                <item.icon className="h-4 w-4" />
                {item.label}
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
