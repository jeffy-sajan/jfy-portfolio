import { motion, useScroll, useTransform } from "framer-motion";
import { type ReactNode, useRef } from "react";

type ScrollSectionProps = {
  children: ReactNode;
  amount?: number;
};

const reveal = {
  hidden: { opacity: 0, y: 48 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const ScrollSection = ({ children, amount = 0.2 }: ScrollSectionProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const filter = useTransform(scrollYProgress, [0, 1], ["blur(0px)", "blur(10px)"]);

  return (
    <motion.div
      ref={ref}
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount }}
      style={{ filter }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollSection;
