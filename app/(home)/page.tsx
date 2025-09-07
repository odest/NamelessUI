import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Star, Code } from "lucide-react";
import { WritingText } from "@/components/core/writing-text";
import FeatureBlock from "@/components/landing/feature-block";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
      <WritingText
        className="mb-6 text-4xl md:text-6xl font-bold"
        text="Nameless UI"
        spacing={9}
      />
      <WritingText
        className="mb-8 text-lg md:text-xl text-muted-foreground max-w-3xl"
        text="Find the perfect React UI component in seconds. Collect favorites from
        any library, search by features, accessibility, and usage examples.
        Build beautiful interfaces faster."
        spacing={9}
        transition={{ type: "spring", bounce: 0, duration: 1, delay: 0.05 }}
      />
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <Link href="/docs">
          <Button size="lg" className="w-full sm:w-auto">
            <Code className="mr-2 h-4 w-4" />
            Get Started
          </Button>
        </Link>
        <Link
          href="https://github.com/odest/NamelessUI"
          target="_blank"
          rel="noreferrer"
        >
          <Button variant="outline" size="lg" className="w-full sm:w-auto">
            <Star className="mr-2 h-4 w-4 text-yellow-500" />
            Star on GitHub
          </Button>
        </Link>
      </div>
      <FeatureBlock />
    </main>
  );
}
