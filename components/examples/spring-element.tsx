import { SpringElement } from "@/components/core/spring-element";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function SpringElementExample() {
  return (
    <SpringElement>
      <Avatar className="size-20">
        <AvatarImage draggable={false} src="/favicon.ico" />
        <AvatarFallback>NUI</AvatarFallback>
      </Avatar>
    </SpringElement>
  );
}
