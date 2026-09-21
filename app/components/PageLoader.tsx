"use client";
import { useEffect, useState } from "react";

export function PageLoader() {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const holdTime = reduced ? 0 : 950;
    const fadeTimer = setTimeout(() => setFading(true), holdTime);
    const removeTimer = setTimeout(() => setVisible(false), holdTime + 380);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center gap-3 bg-ink transition-opacity duration-[380ms] ease-out ${
        fading ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <div className="flex items-baseline gap-[2px] font-display text-5xl font-bold tracking-tight text-paper">
        <span className="loader-letter">V</span>
        <span className="loader-letter loader-letter-delay-1">J</span>
        <span className="loader-dot ml-2 h-2 w-2 rounded-full bg-coral" />
      </div>
      <span className="loader-letter loader-letter-delay-2 font-mono text-[10px] uppercase tracking-[.3em] text-paper/45">
        Visvaeswaraiya Jayakumar
      </span>
    </div>
  );
}
