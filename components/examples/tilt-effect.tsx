import Image from "next/image";

import { TiltEffect } from "@/components/core/tilt-effect";
import { Card, CardContent } from "@/components/ui/card";

export default function TiltEffectExample() {
  return (
    <TiltEffect>
      <Card className="overflow-hidden pt-0 md:w-[280px]">
        <Image
          src="/hat.webp"
          alt=""
          width={200}
          height={200}
          className="aspect-square size-full w-full object-cover transition-all duration-200 ease-linear"
          unoptimized
        />
        <CardContent>
          <div className="text-xl">Green Hat</div>
          <div className="text-muted-foreground text-sm">Best Sellers</div>
        </CardContent>
      </Card>
    </TiltEffect>
  );
}
