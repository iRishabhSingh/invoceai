"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { FileUpload } from "./ui/file-upload";
import { Highlight } from "./ui/hero-highlight";

const Hero = () => {
  const [files, setFiles] = useState<File[]>([]);
  const handleFileUpload = (files: File[]) => {
    setFiles(files);
  };

  return (
    <div>
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
        <motion.span
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 1,
            ease: [0.4, 0.0, 0.2, 1],
          }}
        >
          <Highlight className="font-bold text-black dark:text-white">
            InvoceAI.
          </Highlight>
        </motion.span>
      </motion.h1>

      <br />
      <div className="mx-auto min-h-96 w-full max-w-4xl rounded-lg">
        <FileUpload onChange={handleFileUpload} />
      </div>
    </div>
  );
};

export default Hero;
