import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin } from "lucide-react";
import { useRef } from "react";

const Hero = () => {
  const heroRef = useRef<HTMLElement | null>(null);
  const resumeHref = `${import.meta.env.BASE_URL}assets/docs/Jeffy_Sajan_SE.pdf`;

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const leftY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const centerY = useTransform(scrollYProgress, [0, 1], [0, 130]);
  const rightY = useTransform(scrollYProgress, [0, 1], [0, 70]);

  const leftOpacity = useTransform(scrollYProgress, [0, 0.85, 1], [1, 0.85, 0.5]);
  const centerOpacity = useTransform(scrollYProgress, [0, 0.75, 1], [1, 0.75, 0.2]);
  const rightOpacity = useTransform(scrollYProgress, [0, 0.85, 1], [1, 0.88, 0.55]);

  return (
    <section ref={heroRef} id="home" className="hero-canvas">
      <div className="shell min-h-[100svh] pt-24 md:pt-28 pb-6">
        <div className="hero-grid min-h-[80svh]">
          <motion.div style={{ y: leftY, opacity: leftOpacity }} className="order-2 lg:order-1 self-end pb-2 md:pb-10 space-y-4 md:space-y-5">
            <p className="text-[0.78rem] uppercase tracking-[0.22em] font-semibold text-muted-foreground">Full-Stack Developer</p>
            <p className="text-lg md:text-2xl font-semibold text-foreground/90">
              React, FastAPI, Python, PostgreSQL
            </p>
            <p className="section-subtitle max-w-[48ch] text-base md:text-lg">
              Product-focused engineering for reliable web and mobile experiences.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-w-[30rem] pt-1">
              <Button variant="outline" asChild className="hero-action-button bg-card/70 backdrop-blur-md">
                <a href={resumeHref} download="Jeffy_Sajan_Resume.pdf">
                  <Download className="h-4 w-4 shrink-0" />
                  <span>Resume</span>
                </a>
              </Button>
              <Button variant="outline" asChild className="hero-action-button bg-card/70 backdrop-blur-md">
                <a href="https://github.com/jeffy-sajan" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 shrink-0" />
                  <span>GitHub</span>
                </a>
              </Button>
              <Button variant="outline" asChild className="hero-action-button bg-card/70 backdrop-blur-md">
                <a href="https://linkedin.com/in/jeffysajan" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4 shrink-0" />
                  <span>LinkedIn</span>
                </a>
              </Button>
              <Button asChild className="hero-action-button">
                <a href="#contact">
                  <span>Contact Me</span>
                  <ArrowRight className="h-4 w-4 shrink-0" />
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div style={{ y: centerY, opacity: centerOpacity }} className="order-1 lg:order-2 hero-center-wrap self-end">
            <div className="hero-portrait-shell">
              <img
                src={import.meta.env.BASE_URL + "assets/img/jfy-transparent.png"}
                alt="Jeffy Sajan"
                className="hero-portrait-image"
              />
              <div className="hero-portrait-caption">
                <p className="hero-name">Jeffy Sajan</p>
                <p className="hero-role">Software Developer</p>
              </div>
              <div className="hero-portrait-fade" />
            </div>
          </motion.div>

          <motion.div style={{ y: rightY, opacity: rightOpacity }} className="order-3 self-end pb-4 md:pb-14 space-y-5 md:space-y-6 hero-right-col">
            <p className="hero-right-copy">
              Building polished user interfaces and reliable backend systems that help teams ship faster, reduce bottlenecks, and scale confidently.
            </p>

            <Button asChild className="h-12 md:h-14 rounded-[1rem] md:rounded-[1.1rem] px-6 md:px-8 text-[15px] md:text-[18px] font-medium shadow-[0_14px_32px_-20px_rgba(0,0,0,0.6)]">
              <a href="mailto:jeffysajan9400@gmail.com">
                Email Me
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
