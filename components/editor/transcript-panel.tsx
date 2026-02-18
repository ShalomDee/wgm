"use client"

import { useState } from "react"
import { MessageSquarePlus } from "lucide-react"

interface TranscriptLine {
  timestamp: string
  text: string
  highlightColor?: string
  showAnnotationTooltip?: boolean
}

const transcriptLines: TranscriptLine[] = [
  {
    timestamp: "00:42",
    text: "Participant attempts to adjust fan speed while merging \u2014 taps wrong menu tier twice.",
    highlightColor: "#FF5C3A",
  },
  {
    timestamp: "01:14",
    text: "Eyes off road approximately 3.1 seconds during climate control search.",
    highlightColor: "#F5A623",
  },
  {
    timestamp: "01:37",
    text: "Unprompted: \u2018I just want a knob. I don\u2019t want to swipe for it.\u2019",
    highlightColor: "#AADC32",
    showAnnotationTooltip: true,
  },
  {
    timestamp: "02:08",
    text: "Task completed via steering wheel physical control in 0.9s vs 4.2s touchscreen.",
    highlightColor: "#A855F7",
  },
  {
    timestamp: "03:22",
    text: "Participant navigates to media screen, finds controls on first attempt. No hesitation observed.",
  },
  {
    timestamp: "04:15",
    text: "Return to climate controls \u2014 participant recalls shortcut from first trial. Completion in 1.4s.",
  },
]

export function TranscriptPanel() {
  const [hoveredLine, setHoveredLine] = useState<number | null>(null)

  return (
    <div className="flex flex-col gap-0 mt-4">
      <div className="flex items-center justify-between px-1 mb-2">
        <h3 className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
          Session Notes
        </h3>
        <span className="text-[10px] font-mono text-muted-foreground/60">
          {transcriptLines.length} observations
        </span>
      </div>

      <div className="rounded-xl border border-border bg-[#141414] overflow-hidden divide-y divide-border">
        {transcriptLines.map((line, i) => (
          <div
            key={i}
            className="relative flex gap-3 px-4 py-3 transition-colors hover:bg-surface/50 group"
            onMouseEnter={() => setHoveredLine(i)}
            onMouseLeave={() => setHoveredLine(null)}
          >
            {/* Color indicator bar */}
            {line.highlightColor && (
              <div
                className="absolute left-0 top-0 bottom-0 w-[3px]"
                style={{ backgroundColor: line.highlightColor }}
              />
            )}

            {/* Timestamp */}
            <span className="text-[11px] font-mono text-muted-foreground/70 mt-0.5 shrink-0 tabular-nums">
              {line.timestamp}
            </span>

            {/* Text */}
            <p
              className="text-sm font-sans leading-relaxed flex-1"
              style={{
                color: line.highlightColor
                  ? "#f0f0f0"
                  : "#999999",
              }}
            >
              {line.text}
            </p>

            {/* Hover action */}
            {hoveredLine === i && !line.showAnnotationTooltip && (
              <button
                className="shrink-0 self-center opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground hover:text-foreground"
                aria-label="Add annotation"
              >
                <MessageSquarePlus className="w-3.5 h-3.5" />
              </button>
            )}

            {/* Floating annotation tooltip */}
            {line.showAnnotationTooltip && (
              <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-lime/15 border border-lime/30 text-lime text-[10px] font-mono font-medium shadow-lg z-10">
                <MessageSquarePlus className="w-3 h-3" />
                Add annotation
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
