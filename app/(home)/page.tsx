"use client";

import { motion } from "motion/react";
import FeatureBlock from "@/components/landing/feature-block";
import GithubButton from "@/components/landing/github-button";
import GetStartedButton from "@/components/landing/get-started-button";
import ScrambledText from "@/components/core/scrambled-text";
import TextPressure from "@/components/core/text-pressure";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
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
        <>
          <TextPressure
            className="w-md sm:w-lg md:w-3xl max-w-3xl"
            text="NamelessUI"
            flex={true}
            alpha={false}
            stroke={false}
            width={true}
            weight={true}
            italic={true}
            textColor="#ffffff"
            minFontSize={32}
          />
        </>
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
      >
        <ScrambledText
          className="mb-8 mt-8"
          radius={50}
          duration={1.2}
          speed={0.5}
          scrambleChars={".:"}
        >
          Find the perfect React UI component in seconds, build beautiful
          interfaces faster
        </ScrambledText>
      </motion.div>

      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <GetStartedButton />
        <GithubButton />
      </div>
      <FeatureBlock />
    </main>
  );
}
