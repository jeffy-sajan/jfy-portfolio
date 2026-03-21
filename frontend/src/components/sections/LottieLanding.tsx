import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const LottieLanding = () => {
  const [animationData, setAnimationData] = useState<object | null>(null);

  useEffect(() => {
    let isMounted = true;

    const loadAnimation = async () => {
      const response = await fetch(`${import.meta.env.BASE_URL}lottie/landing.json`);
      const data = await response.json();
      if (isMounted) {
        setAnimationData(data);
      }
    };

    loadAnimation().catch(() => setAnimationData(null));

    return () => {
      isMounted = false;
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (!element) return;
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
    >
      <div className="absolute inset-0 gradient-mesh opacity-60 dark:opacity-30" />
      <div className="absolute -top-32 -left-20 w-96 h-96 rounded-full bg-accent/20 blur-3xl" />
      <div className="absolute -bottom-24 -right-16 w-[28rem] h-[28rem] rounded-full bg-primary/20 blur-3xl" />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 text-center lg:text-left animate-slide-in-left">
            <p className="uppercase tracking-[0.3em] text-xs text-primary font-semibold">
              Portfolio 2026
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Building products with motion, clarity, and intent.
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-xl mx-auto lg:mx-0">
              I am revamping my portfolio into a modern experience with stronger
              storytelling, smoother animation, and a cleaner visual system.
            </p>
            <Button
              size="lg"
              className="mt-2 group"
              onClick={() => scrollToSection("about")}
            >
              Explore Portfolio
              <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </Button>
          </div>

          <div className="animate-slide-in-right">
            <div className="rounded-3xl border border-border/50 bg-card/60 backdrop-blur-md p-4 md:p-6 shadow-card">
              {animationData ? (
                <Lottie animationData={animationData} loop autoplay />
              ) : (
                <div className="aspect-square w-full rounded-2xl bg-muted/60 grid place-items-center text-muted-foreground text-sm">
                  Loading animation...
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LottieLanding;
