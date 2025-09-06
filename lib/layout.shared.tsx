import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 512 512"
          >
            <path
              d="m 253.87018,0 -119.63394,70.27463 -0.34339,129.70571 -27.37989,-4.35617 -0.72652,-108.693963 -71.131619,41.648863 0.23271,132.61453 96.927999,56.66127 106.82938,-63.17424 0.15598,-159.758925 87.4977,-51.876612 z m 107.38276,59.79431 -97.5353,55.61127 1.29691,124.1037 138.27603,80.01429 1.18057,101.71559 73.48985,-41.20331 -1.04147,-138.74154 -112.15893,-65.15224 17.46435,-21.53391 94.49308,53.71841 -0.50229,-82.42649 z m -97.55232,212.6146 -139.47645,77.90574 -88.011348,-51.00538 -2.173822,84.22856 119.7588,70.05609 113.34516,-63.06073 9.5722,26.01779 -94.48741,53.72974 71.08903,41.71979 115.60129,-64.98197 2.09156,-112.25552 z"
              fill="currentColor"
            />
          </svg>
          NamelessUI
        </>
      ),
    },
    // see https://fumadocs.dev/docs/ui/navigation/links
    links: [],
    githubUrl: "https://github.com/odest/NamelessUI",
  };
}
