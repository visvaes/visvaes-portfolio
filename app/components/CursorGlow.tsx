"use client";
import { useEffect, useRef, useState } from "react";

export function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const isFine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!isFine || reduced) return;
    setEnabled(true);

    let raf = 0;
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let x = targetX;
    let y = targetY;

    const onMove = (event: MouseEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
    };

    const animate = () => {
      x += (targetX - x) * 0.12;
      y += (targetY - y) * 0.12;
      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${x - 220}px, ${y - 220}px, 0)`;
      }
      raf = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    raf = requestAnimationFrame(animate);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[5] h-[440px] w-[440px] rounded-full opacity-[0.10] blur-3xl"
      style={{ background: "radial-gradient(circle, #ef7656 0%, transparent 70%)" }}
    />
  );
}
