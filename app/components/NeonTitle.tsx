"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function NeonTitle({ children }: { children: React.ReactNode }) {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <motion.h1
      ref={ref}
      className="text-white text-5xl text-center font-bold mb-16 mt-8 z-10"
      animate={{
        textShadow: isInView
          ? "0px 0px 20px rgb(from #d0cce3 r g b / 0.8)"
          : "0px 0px 5px rgb(from #d0cce3 r g b / 0.2)",
        opacity: isInView ? 1 : 0.3,
      }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.h1>
  );
}
