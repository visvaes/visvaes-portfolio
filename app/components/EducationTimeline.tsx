"use client";
import { useInView } from "../hooks/useInView";
import { Reveal } from "./Reveal";

export function EducationTimeline({ items }: { items: string[][] }) {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <div ref={ref} className="relative mt-5 pl-6">
      <span
        className="absolute bottom-1 left-[3px] top-1 w-px bg-ink/15"
        aria-hidden="true"
      />
      <span
        className="absolute left-[3px] top-1 w-px bg-coral transition-[height] duration-[1400ms] ease-out"
        style={{ height: inView ? "calc(100% - 8px)" : "0%" }}
        aria-hidden="true"
      />
      <div className="grid gap-0">
        {items.map(([degree, school, years], index) => (
          <Reveal key={degree} delay={index * 140}>
            <div className="group relative grid gap-2 border-b border-ink/15 py-5 pl-2 transition-transform duration-300 hover:-translate-y-0.5 md:grid-cols-[1fr_auto]">
              <span
                className="absolute -left-[27px] top-6 h-2.5 w-2.5 rounded-full border-2 border-coral bg-paper transition-transform duration-300 group-hover:scale-125"
                aria-hidden="true"
              />
              <div>
                <h3 className="font-display text-xl">{degree}</h3>
                <p className="mt-1 text-sm text-ink/60">{school}</p>
              </div>
              <span className="font-mono text-xs text-coral">{years}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
