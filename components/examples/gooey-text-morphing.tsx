import { GooeyText } from "@/components/core/gooey-text-morphing";

export default function GooeyTextExample() {
  return (
    <div className="h-[200px] flex items-center justify-center">
      <GooeyText
        texts={["Open", "Source", "Make", "Your", "Life", "Better"]}
        morphTime={1}
        cooldownTime={0.25}
        className="font-bold"
      />
    </div>
  );
}
