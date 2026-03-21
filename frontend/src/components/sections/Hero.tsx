import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";

const Hero = () => {
  const heroRef = useRef<HTMLElement | null>(null);

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
            <h1 className="hero-left-title">
              Strategic engineering for seamless, user-centered digital products
            </h1>
          </motion.div>

          <motion.div style={{ y: centerY, opacity: centerOpacity }} className="order-1 lg:order-2 hero-center-wrap self-end">
            <div className="hero-portrait-shell">
              <img
                src={import.meta.env.BASE_URL + "assets/img/jfy-transparent.png"}
                alt="Jeffy Sajan"
                className="hero-portrait-image"
              />
              <div className="hero-portrait-caption">
                <p className="hero-name">JEFFY SAJAN</p>
                <p className="hero-role">Software Developer</p>
              </div>
              <div className="hero-portrait-fade" />
            </div>
          </motion.div>

          <motion.div style={{ y: rightY, opacity: rightOpacity }} className="order-3 self-end pb-4 md:pb-14 space-y-5 md:space-y-6 hero-right-col">
            <p className="hero-right-copy">
              Building polished interfaces and reliable backend systems for teams that ship fast and scale with confidence.
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
