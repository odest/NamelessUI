import "@/app/global.css";
import type { Metadata } from "next";
import { RootProvider } from "fumadocs-ui/provider";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NamelessUI",
  description:
    "Personal collection for the best React UI components from multiple libraries and design systems.",
};

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
