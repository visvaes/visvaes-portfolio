"use client";
import type { CSSProperties, ReactNode } from "react";
import { useInView } from "../hooks/useInView";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
};

export function Reveal({ children, className = "", delay = 0, y = 16 }: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`reveal-up ${inView ? "is-visible" : ""} ${className}`}
      style={
        {
          transitionDelay: inView ? `${delay}ms` : "0ms",
          "--reveal-y": `${y}px`,
        } as CSSProperties
      }
    >
      {children}
    </div>
  );
}
