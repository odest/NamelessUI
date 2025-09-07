import TextPressure from "@/components/core/text-pressure";

export default function TextPressureExample() {
  return (
    <>
      <TextPressure
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
  );
}
