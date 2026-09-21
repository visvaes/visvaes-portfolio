"use client";
import type { ReactNode } from "react";
import { useInView } from "../hooks/useInView";

export function ProgressReveal({ children }: { children: ReactNode }) {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <div ref={ref} className="relative">
      <span className="absolute left-0 top-0 h-[2px] w-full bg-ink/10" aria-hidden="true" />
      <span
        className="absolute left-0 top-0 h-[2px] bg-coral transition-[width] duration-[1300ms] ease-out"
        style={{ width: inView ? "100%" : "0%" }}
        aria-hidden="true"
      />
      <div
        className={`pt-6 transition-all duration-700 ease-out ${
          inView ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
}
