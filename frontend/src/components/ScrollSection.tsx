import { motion } from "framer-motion";
import { type ReactNode, useRef } from "react";

type ScrollSectionProps = {
  children: ReactNode;
  amount?: number;
  direction?: "up" | "left" | "right";
};

const directionMap = {
  up: { x: 0, y: 48 },
  left: { x: -60, y: 0 },
  right: { x: 60, y: 0 },
};

const ScrollSection = ({ children, amount = 0.2, direction = "up" }: ScrollSectionProps) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const offset = directionMap[direction];

  const reveal = {
    hidden: { opacity: 0, x: offset.x, y: offset.y, scale: 0.97 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollSection;
