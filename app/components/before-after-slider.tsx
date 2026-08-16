"use client";

import { useState } from "react";
import Image from "next/image";

type Pair = { before: string; after: string };

export default function BeforeAfterSlider({
  pairs,
  alt,
}: {
  pairs: Pair[];
  alt: string;
}) {
  const [pairIndex, setPairIndex] = useState(0);
  const [position, setPosition] = useState(50);
  const { before, after } = pairs[pairIndex];

  function selectPair(i: number) {
    setPairIndex(i);
    setPosition(50);
  }

  function step(delta: number) {
    selectPair((pairIndex + delta + pairs.length) % pairs.length);
  }

  return (
    <div className="relative aspect-video w-full select-none overflow-hidden rounded-t-lg bg-ink">
      <Image
        key={`after-${pairIndex}`}
        src={after}
        alt={`${alt} (after)`}
        fill
        sizes="(min-width: 768px) 480px, 100vw"
        className="object-cover"
      />
      <Image
        key={`before-${pairIndex}`}
        src={before}
        alt={`${alt} (before)`}
        fill
        sizes="(min-width: 768px) 480px, 100vw"
        className="object-cover"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      />

      <span className="pointer-events-none absolute left-2 top-2 font-mono text-[10px] uppercase tracking-[0.2em] text-paper/80">
        Before
      </span>
      <span className="pointer-events-none absolute right-2 top-2 font-mono text-[10px] uppercase tracking-[0.2em] text-paper/80">
        After
      </span>

      <div
        className="pointer-events-none absolute inset-y-0 flex items-center"
        style={{ left: `${position}%` }}
      >
        <div className="absolute inset-y-0 w-0.5 -translate-x-1/2 bg-accent" />
        <div className="relative flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border-2 border-accent bg-panel text-accent shadow-[0_0_20px_-4px_var(--color-accent)]">
          <span className="text-xs">↔</span>
        </div>
      </div>

      <input
        type="range"
        min={0}
        max={100}
        value={position}
        onChange={(e) => setPosition(Number(e.target.value))}
        onClick={(e) => e.stopPropagation()}
        aria-label={`Before/after comparison for ${alt}`}
        className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
      />

      {pairs.length > 1 && (
        <>
          <button
            type="button"
            aria-label="Previous comparison"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              step(-1);
            }}
            className="absolute bottom-2 left-2 flex h-7 w-7 items-center justify-center rounded-full bg-ink/70 text-paper transition hover:bg-ink"
          >
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" aria-hidden>
              <path
                d="M15 18l-6-6 6-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Next comparison"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              step(1);
            }}
            className="absolute bottom-2 right-2 flex h-7 w-7 items-center justify-center rounded-full bg-ink/70 text-paper transition hover:bg-ink"
          >
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" aria-hidden>
              <path
                d="M9 18l6-6-6-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <div className="pointer-events-none absolute bottom-2 left-1/2 flex h-7 items-center -translate-x-1/2 gap-1.5">
            {pairs.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Show comparison ${i + 1}`}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  selectPair(i);
                }}
                className={`pointer-events-auto h-1.5 w-1.5 rounded-full border border-accent transition ${
                  i === pairIndex ? "bg-accent" : "bg-transparent"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
