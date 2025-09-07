"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-2xl mx-auto bg-black/10 backdrop-blur-lg border border-gray-100/10 rounded-2xl shadow-lg">
        <div className="flex items-center justify-between px-6 py-4 ">
          <Link href="/" className="group">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 512 512"
              className="transition-transform group-hover:scale-110 group-hover:rotate-180 duration-500"
            >
              <path
                d="m 253.87018,0 -119.63394,70.27463 -0.34339,129.70571 -27.37989,-4.35617 -0.72652,-108.693963 -71.131619,41.648863 0.23271,132.61453 96.927999,56.66127 106.82938,-63.17424 0.15598,-159.758925 87.4977,-51.876612 z m 107.38276,59.79431 -97.5353,55.61127 1.29691,124.1037 138.27603,80.01429 1.18057,101.71559 73.48985,-41.20331 -1.04147,-138.74154 -112.15893,-65.15224 17.46435,-21.53391 94.49308,53.71841 -0.50229,-82.42649 z m -97.55232,212.6146 -139.47645,77.90574 -88.011348,-51.00538 -2.173822,84.22856 119.7588,70.05609 113.34516,-63.06073 9.5722,26.01779 -94.48741,53.72974 71.08903,41.71979 115.60129,-64.98197 2.09156,-112.25552 z"
                fill="white"
              />
            </svg>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/docs"
              className="text-gray-200/50 hover:text-white transition-colors text-sm font-medium transform hover:scale-105 hover:-translate-y-0.5 duration-200 ease-in-out"
            >
              Documentation
            </Link>
            <Link
              href="/docs/tilt-effect"
              className="text-gray-200/50 hover:text-white transition-colors text-sm font-medium transform hover:scale-105 hover:-translate-y-0.5 duration-200 ease-in-out"
            >
              Components
            </Link>
          </nav>

          <Link
            href="https://github.com/odest/NamelessUI"
            target="_blank"
            rel="noreferrer"
            className="hidden md:flex group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="transition-transform group-hover:scale-110 group-hover:rotate-360 duration-500"
            >
              <path
                d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                fill="white"
              />
            </svg>
          </Link>

          <div className="flex md:hidden">
            <Button
              variant="ghost"
              size="sm"
              className="h-5 w-5 text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-4 w-4" />
              ) : (
                <Menu className="h-4 w-4" />
              )}
            </Button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-100/10">
            <div className="px-6 py-4 space-y-4">
              <Link
                href="/docs"
                className="block text-gray-200/50 hover:text-white transition-colors text-sm font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Documentation
              </Link>
              <Link
                href="/docs/tilt-effect"
                className="block text-gray-200/50 hover:text-white transition-colors text-sm font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Components
              </Link>
              <Link
                href="https://github.com/odest/NamelessUI"
                target="_blank"
                rel="noreferrer"
                className="group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="transition-transform group-hover:scale-110 group-hover:rotate-360 duration-500"
                >
                  <path
                    d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                    fill="white"
                  />
                </svg>
              </Link>
            </div>
          </div>
        )}
      </header>

      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-md z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
}
