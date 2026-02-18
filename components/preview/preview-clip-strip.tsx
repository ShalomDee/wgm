"use client"

import { useState } from "react"

const CLIPS = [
  {
    label: "Control failure",
    color: "#FF5C3A",
    gradientFrom: "from-[#2a1a18]",
    gradientTo: "to-[#1f1412]",
    time: "00:00",
  },
  {
    label: "Glance 2.4s",
    color: "#F5A623",
    gradientFrom: "from-[#2a2218]",
    gradientTo: "to-[#1f1c12]",
    time: "00:24",
    active: true,
  },
  {
    label: "Knob quote",
    color: "#AADC32",
    gradientFrom: "from-[#1e2a18]",
    gradientTo: "to-[#181f12]",
    time: "00:51",
  },
  {
    label: "Task comparison",
    color: "#A855F7",
    gradientFrom: "from-[#221a2a]",
    gradientTo: "to-[#1c141f]",
    time: "01:14",
  },
]

export function PreviewClipStrip() {
  const [activeIndex, setActiveIndex] = useState(1)

  return (
    <div className="flex items-start justify-center gap-3 w-full max-w-[780px] mx-auto">
      {CLIPS.map((clip, i) => {
        const isActive = i === activeIndex

        return (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className="group flex flex-col items-center gap-2 flex-1 max-w-[172px]"
          >
            {/* Thumbnail */}
            <div
              className={`relative w-full aspect-video rounded-lg bg-gradient-to-br ${clip.gradientFrom} ${clip.gradientTo} overflow-hidden transition-all duration-200 ${
                isActive
                  ? "ring-2 ring-coral shadow-[0_0_12px_rgba(255,92,58,0.2)]"
                  : "border border-border/40 opacity-50 hover:opacity-75"
              }`}
            >
              {/* Subtle grain */}
              <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.5) 2px, rgba(255,255,255,0.5) 3px)",
                }}
              />

              {/* Color dot */}
              <div
                className="absolute top-2 right-2 w-2.5 h-2.5 rounded-full"
                style={{
                  backgroundColor: clip.color,
                  boxShadow: `0 0 8px ${clip.color}40`,
                }}
              />

              {/* Waveform hint */}
              <div className="absolute bottom-2.5 left-2.5 right-2.5 h-[6px] flex items-end gap-px">
                {Array.from({ length: 18 }).map((_, j) => (
                  <div
                    key={j}
                    className="flex-1 rounded-[0.5px]"
                    style={{
                      height: `${2 + Math.sin(j * 0.7 + i * 1.5) * 3.5}px`,
                      backgroundColor: clip.color,
                      opacity: isActive ? 0.35 : 0.15,
                    }}
                  />
                ))}
              </div>

              {/* Clip number badge */}
              <div className="absolute top-2 left-2">
                <span
                  className={`text-[9px] font-mono font-bold tabular-nums ${
                    isActive ? "text-white/80" : "text-white/40"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
            </div>

            {/* Label */}
            <span
              className={`text-[11px] font-mono tracking-wide leading-none transition-colors ${
                isActive ? "text-foreground" : "text-muted-foreground/60"
              }`}
            >
              {clip.label}
            </span>

            {/* Timestamp */}
            <span
              className={`text-[9px] font-mono tabular-nums leading-none -mt-0.5 ${
                isActive ? "text-coral" : "text-muted-foreground/30"
              }`}
            >
              {clip.time}
            </span>
          </button>
        )
      })}
    </div>
  )
}
