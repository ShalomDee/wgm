"use client"

import { Play } from "lucide-react"

const dataPoints = [
  { label: "42% Control Failure", color: "bg-coral text-white" },
  { label: "2.4s Avg Glance", color: "bg-amber text-[#1a1a1a]" },
  { label: "58% Physical Pref", color: "bg-lime text-[#1a1a1a]" },
  { label: "31% Distracted", color: "bg-violet text-white" },
]

export function BriefSummaryCard() {
  return (
    <div className="bg-card rounded-xl border border-border overflow-hidden">
      <div className="flex flex-col md:flex-row gap-0">
        {/* 16:9 thumbnail */}
        <div className="relative w-full md:w-[320px] aspect-video md:aspect-auto md:h-auto shrink-0">
          <img
            src="/image2.jpg"
            alt="Brief thumbnail"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />

          {/* Play icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-coral/20 border border-coral/30 flex items-center justify-center backdrop-blur-sm">
              <Play className="w-5 h-5 text-coral fill-coral ml-0.5" />
            </div>
          </div>

          {/* Duration badge */}
          <div className="absolute bottom-3 left-3">
            <span className="inline-flex items-center px-2 py-0.5 rounded bg-amber/90 text-[10px] font-mono font-bold text-[#1a1a1a] tabular-nums">
              1:42
            </span>
          </div>

          {/* Moments badge */}
          <div className="absolute bottom-3 right-3">
            <span className="inline-flex items-center px-2 py-0.5 rounded bg-[#1a1a1a]/80 text-[10px] font-mono text-foreground/70 tabular-nums">
              4 moments
            </span>
          </div>
        </div>

        {/* Text content */}
        <div className="flex flex-col gap-3 p-5">
          <div className="flex flex-col gap-1.5">
            <h2 className="text-lg font-sans font-bold text-foreground tracking-tight text-balance">
              In-Vehicle UX Friction Map &middot; Q1 2025
            </h2>
            <p className="text-xs font-mono text-muted-foreground leading-relaxed">
              {'1m 42s \u00B7 4 moments \u00B7 Control Discovery & Safety Signals'}
            </p>
          </div>

          {/* Data point pills */}
          <div className="flex flex-wrap gap-2 mt-1">
            {dataPoints.map((point) => (
              <span
                key={point.label}
                className={`inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-mono font-bold ${point.color}`}
              >
                {point.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
