import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/80">
            © {currentYear} Jeffy Sajan. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="https://github.com/jeffy-sajan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-accent transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/jeffy-sajan/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-accent transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:jeffysajan9400@gmail.com"
              className="text-white/80 hover:text-accent transition-colors"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
