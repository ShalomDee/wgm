"use client"

import { useState } from "react"

const CLIPS = [
  {
    label: "Control failure",
    color: "#FF5C3A",
    time: "00:00",
    thumbnailUrl: "/image6.png",
    caption: "P03 attempts to adjust climate — reaches for touchscreen instead of knob",
  },
  {
    label: "Glance 2.4s",
    color: "#F5A623",
    time: "00:24",
    thumbnailUrl: "/image8.jpg",
    caption: "Eyes off road for 2.4s during nav input. Audible hesitation before tap.",
  },
  {
    label: "Knob quote",
    color: "#AADC32",
    time: "00:51",
    thumbnailUrl: "/image1.jpg",
    caption: "\"I kept expecting a physical dial — my hand just went there automatically\"",
  },
  {
    label: "Task comparison",
    color: "#A855F7",
    time: "01:14",
    thumbnailUrl: "/image3.png",
    caption: "P12 completes same task 40% faster in Condition B with rotary control",
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
              className={`relative w-full aspect-video rounded-lg overflow-hidden transition-all duration-200 ${
                isActive
                  ? "ring-2 ring-coral shadow-[0_0_12px_rgba(255,92,58,0.2)]"
                  : "border border-border/40 opacity-50 hover:opacity-75"
              }`}
            >
              <img
                src={clip.thumbnailUrl}
                alt={clip.label}
                className="absolute inset-0 w-full h-full object-cover"
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
