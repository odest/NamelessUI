"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import TailwindCSS from "@/components/icons/tailwindcss";
import Motion from "@/components/icons/motion";
import Nextjs from "@/components/icons/nextjs";
import ReactIcon from "@/components/icons/react";
import ShadcnIcon from "@/components/icons/shadcn";

export default function Features() {
  return (
    <div className="w-full max-w-none flex flex-col justify-center items-center z-10 mx-auto">
      <div className="grid grid-cols-3 md:flex md:flex-wrap items-center justify-center gap-6 md:gap-8 w-[95%] mx-auto py-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.3,
            delay: 0.1,
            ease: [0.23, 1, 0.32, 1],
          }}
          className={cn(
            "text-blue-600 dark:text-blue-400 relative flex flex-col items-center gap-2",
          )}
        >
          <TailwindCSS className="w-8 h-8" aria-label="TailwindCSS" />
          <span className="text-xs text-center mt-1 whitespace-nowrap text-black dark:text-white">
            Tailwind CSS
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.3,
            delay: 0.4,
            ease: [0.23, 1, 0.32, 1],
          }}
          className={cn(
            "text-yellow-500 dark:text-[#F5EA1E] relative flex flex-col items-center gap-2",
          )}
        >
          <Motion className="w-8 h-8" aria-label="Motion" />
          <span className="text-xs text-center mt-1 whitespace-nowrap text-black dark:text-white">
            Motion
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.3,
            delay: 0.5,
            ease: [0.23, 1, 0.32, 1],
          }}
          className={cn(
            "text-black dark:text-white flex flex-col items-center gap-2 relative",
          )}
        >
          <ShadcnIcon
            className="w-8 h-8 text-black dark:text-white"
            aria-label="Shadcn/ui"
          />
          <span className="text-xs text-center mt-1 whitespace-nowrap">
            shadcn/ui
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.3,
            delay: 0.6,
            ease: [0.23, 1, 0.32, 1],
          }}
          className={cn(
            "text-black dark:text-white flex flex-col items-center gap-2 relative col-span-1 col-start-1 md:col-auto",
          )}
        >
          <Nextjs className="w-8 h-8" aria-label="Next.js" />
          <span className="text-xs text-center mt-1 whitespace-nowrap">
            Next.js
          </span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.3,
            delay: 0.7,
            ease: [0.23, 1, 0.32, 1],
          }}
          className={cn(
            "text-black dark:text-white flex flex-col items-center gap-2 relative col-span-1 col-start-3 md:col-auto",
          )}
        >
          <ReactIcon className="w-8 h-8" aria-label="React" />
          <span className="text-xs text-center mt-1 whitespace-nowrap">
            React
          </span>
        </motion.div>
      </div>
    </div>
  );
}
