import { Header } from "@/components/landing/header";
import DarkVeil from "@/components/core/dark-veil";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="fixed inset-0 w-full h-full -z-50">
        <DarkVeil
          speed={0.5}
          hueShift={20}
          noiseIntensity={0.02}
          scanlineIntensity={0.1}
          warpAmount={0.1}
        />
      </div>
      <Header />
      <div>{children}</div>
    </>
  );
}
