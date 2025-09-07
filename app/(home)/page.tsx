import { WritingText } from "@/components/core/writing-text";
import FeatureBlock from "@/components/landing/feature-block";
import GithubButton from "@/components/landing/github-button";
import GetStartedButton from "@/components/landing/get-started-button";

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
        <GetStartedButton />
        <GithubButton />
      </div>
      <FeatureBlock />
    </main>
  );
}
