"use client"

import { ArrowRight } from "lucide-react"

const CLIPS = [
  { label: "Control failure", color: "#FF5C3A", gradientFrom: "from-[#2a1a18]", gradientTo: "to-[#1f1412]" },
  { label: "Glance 2.4s", color: "#F5A623", gradientFrom: "from-[#2a2218]", gradientTo: "to-[#1f1c12]" },
  { label: "Knob quote", color: "#AADC32", gradientFrom: "from-[#1e2a18]", gradientTo: "to-[#181f12]" },
  { label: "Task comparison", color: "#A855F7", gradientFrom: "from-[#221a2a]", gradientTo: "to-[#1c141f]" },
]

export function ClipStrip() {
  return (
    <div className="flex items-center gap-2">
      {CLIPS.map((clip, i) => (
        <div key={i} className="flex items-center gap-2">
          <div className="flex flex-col items-center gap-1.5">
            {/* Thumbnail */}
            <div
              className={`relative w-[88px] h-[52px] rounded-md bg-gradient-to-br ${clip.gradientFrom} ${clip.gradientTo} border border-border/60 overflow-hidden`}
            >
              {/* Subtle scanlines */}
              <div className="absolute inset-0 opacity-[0.04]" style={{
                backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.5) 2px, rgba(255,255,255,0.5) 3px)"
              }} />
              {/* Color dot */}
              <div
                className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full"
                style={{ backgroundColor: clip.color, boxShadow: `0 0 6px ${clip.color}50` }}
              />
              {/* Faint waveform hint */}
              <div className="absolute bottom-2 left-2 right-2 h-[6px] flex items-end gap-px">
                {Array.from({ length: 14 }).map((_, j) => (
                  <div
                    key={j}
                    className="flex-1 rounded-[0.5px] opacity-20"
                    style={{
                      height: `${2 + Math.sin(j * 0.8 + i) * 3}px`,
                      backgroundColor: clip.color,
                    }}
                  />
                ))}
              </div>
            </div>
            {/* Label */}
            <span className="text-[10px] font-mono text-muted-foreground leading-none tracking-wide">
              {clip.label}
            </span>
          </div>

          {/* Arrow connector (not after last) */}
          {i < CLIPS.length - 1 && (
            <ArrowRight className="w-3.5 h-3.5 text-border mb-4 flex-shrink-0" />
          )}
        </div>
      ))}
    </div>
  )
}
