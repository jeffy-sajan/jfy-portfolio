import { Card, CardContent } from "@/components/ui/card";
import { motion, useInView, useSpring, useMotionValue } from "framer-motion";
import { useRef, useEffect } from "react";

const stats = [
  { value: 3, suffix: "+", label: "Projects" },
  { value: 1, suffix: "+", label: "Years Experience" },
  { value: 8, suffix: "+", label: "Technologies" },
];

const AnimatedCounter = ({ value, suffix }: { value: number; suffix: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { damping: 30, stiffness: 100 });
  const isInView = useInView(ref, { once: false, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    } else {
      motionValue.set(0);
    }
  }, [isInView, motionValue, value]);

  useEffect(() => {
    const unsubscribe = spring.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = `${Math.round(latest)}${suffix}`;
      }
    });
    return unsubscribe;
  }, [spring, suffix]);

  return <span ref={ref} className="stat-number">0{suffix}</span>;
};

const About = () => {
  return (
    <section id="about" className="section-gap">
      <div className="shell grid lg:grid-cols-[1fr_1fr] gap-5">
        <Card className="flat-card border-none glow-border">
          <CardContent className="p-7 md:p-9">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">About</p>
            <h2 className="section-title mt-3">Designing thoughtful products, not just screens.</h2>
            <p className="section-subtitle mt-4">
              I work across frontend, backend, and product collaboration. I care about clarity, performance,
              and interfaces that communicate intent quickly.
            </p>
          </CardContent>
        </Card>

        <Card className="flat-card border-none glow-border">
          <CardContent className="p-7 md:p-9">
            <p className="section-subtitle">
              I'm a passionate software developer focused on backend systems and
              cross-platform applications. I work with Python, FastAPI, React Native,
              GraphQL, and PostgreSQL, and I collaborate in Agile workflows using Jira to
              ship production-ready solutions.
            </p>
            <p className="section-subtitle mt-4">
              Over time, I've built a diverse skill set and a fast learning mindset. I care
              deeply about clean, maintainable code and consistent delivery quality across
              teams and products.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Animated stat counters */}
      <motion.div
        className="shell mt-5"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <div className="grid grid-cols-3 gap-3 md:gap-4">
          {stats.map((stat) => (
            <div key={stat.label} className="stat-card">
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default About;
