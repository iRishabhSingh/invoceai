"use client";
import { motion } from "framer-motion";
import { Highlight } from "./ui/hero-highlight";

export function HeroText() {
  return (
    <motion.h1
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: [20, -5, 0],
      }}
      transition={{
        duration: 0.5,
        ease: [0.4, 0.0, 0.2, 1],
      }}
      className="relative z-20 mx-auto mt-6 max-w-4xl bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 bg-clip-text px-4 py-6 text-center text-4xl font-semibold leading-relaxed text-neutral-700 text-transparent dark:from-neutral-800 dark:via-white dark:to-white dark:text-white md:text-4xl lg:text-6xl lg:leading-snug"
    >
      Decode invoices in a flash <br /> w/&nbsp;
      <Highlight className="font-bold text-black dark:text-white">
        InvoceAI.
      </Highlight>
    </motion.h1>
  );
}
