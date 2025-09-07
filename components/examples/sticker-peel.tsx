"use client";

import StickerPeel from "@/components/core/sticker-peel";

export default function StickerPeelExample() {
  return (
    <StickerPeel
      imageSrc={"/logo.png"}
      width={100}
      rotate={10}
      peelBackHoverPct={20}
      peelBackActivePct={40}
      shadowIntensity={0.6}
      lightingIntensity={0.1}
      initialPosition={{ x: 0, y: 0 }}
    />
  );
}
