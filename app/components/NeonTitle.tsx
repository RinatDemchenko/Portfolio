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
          ? [
              "0px 0px 10px rgb(from #d0cce3 r g b / 0)",
              "0px 0px 10px rgb(from #d0cce3 r g b / 0.7)",
              "0px 0px 10px rgb(from #d0cce3 r g b / 1)",
              "0px 0px 10px rgb(from #d0cce3 r g b / 0)",
              "0px 0px 10px rgb(from #d0cce3 r g b / 0.7)",
              "0px 0px 10px rgb(from #d0cce3 r g b / 0)",
              "0px 0px 10px rgb(from #d0cce3 r g b / 0.4)",
              "0px 0px 10px rgb(from #d0cce3 r g b / 0.8)",
              "0px 0px 10px rgb(from #d0cce3 r g b / 0.7)",
              "0px 0px 10px rgb(from #d0cce3 r g b / 0)",
              "0px 0px 10px rgb(from #d0cce3 r g b / 0.7)",
              "0px 0px 10px rgb(from #d0cce3 r g b / 0.7)",
              "0px 0px 10px rgb(from #d0cce3 r g b / 0)",
              "0px 0px 10px rgb(from #d0cce3 r g b / 0.7)",
              "0px 0px 10px rgb(from #d0cce3 r g b / 0)",
              "0px 0px 10px rgb(from #d0cce3 r g b / 0.5)",
            ]
          : "0px 0px 10px rgb(from #d0cce3 r g b / 0.5)",
        opacity: isInView
          ? [
              1, 0.8, 1, 0.6, 0.9, 0.7, 0.95, 1, 0.75, 0.65, 0.85, 0.8, 0.6,
              0.9, 0.7, 1,
            ]
          : 0.8,
      }}
      transition={{
        duration: 1.2,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.h1>
  );
}
