import ScrambledText from "@/components/core/scrambled-text";

export default function ScrambledTextExample() {
  return (
    <ScrambledText radius={50} duration={1.2} speed={0.5} scrambleChars={".:"}>
      Nameless UI - Find the perfect React UI component in seconds, build
      beautiful interfaces faster
    </ScrambledText>
  );
}
