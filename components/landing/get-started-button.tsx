"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Rocket, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "motion/react";

const GetStartedButton = () => {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.3,
        delay: 0.2,
        ease: [0.23, 1, 0.32, 1],
      }}
    >
      <Link href="/docs">
        <Button
          size="lg"
          className="w-full sm:w-auto flex items-center hover:scale-105 transition-transform duration-200"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <AnimatePresence mode="wait" initial={false}>
            {hovered ? (
              <motion.span
                key="rocket"
                initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                transition={{ duration: 0.2 }}
                className="mr-2 h-4 w-4"
              >
                <Rocket className="h-4 w-4" />
              </motion.span>
            ) : (
              <motion.span
                key="code"
                initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                transition={{ duration: 0.2 }}
                className="mr-2 h-4 w-4"
              >
                <Code className="h-4 w-4" />
              </motion.span>
            )}
          </AnimatePresence>
          Get Started
        </Button>
      </Link>
    </motion.div>
  );
};

export default GetStartedButton;
