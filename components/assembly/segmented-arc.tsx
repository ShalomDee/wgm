"use client"

import { useEffect, useState } from "react"

const COLORS = ["#FF5C3A", "#F5A623", "#AADC32", "#A855F7"]
const ARC_RADIUS = 90
const STROKE_WIDTH = 8
const CENTER = 110
const GAP_DEG = 4
const TOTAL_SEGMENTS = 4
const TOTAL_GAP = GAP_DEG * TOTAL_SEGMENTS
const AVAILABLE_DEG = 270 - TOTAL_GAP
const SEGMENT_DEG = AVAILABLE_DEG / TOTAL_SEGMENTS
const START_ANGLE = 225 // start from bottom-left

function polarToCartesian(cx: number, cy: number, r: number, angleDeg: number) {
  const rad = ((angleDeg - 90) * Math.PI) / 180
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) }
}

function describeArc(cx: number, cy: number, r: number, startAngle: number, endAngle: number) {
  const start = polarToCartesian(cx, cy, r, endAngle)
  const end = polarToCartesian(cx, cy, r, startAngle)
  const largeArc = endAngle - startAngle > 180 ? 1 : 0
  return `M ${start.x} ${start.y} A ${r} ${r} 0 ${largeArc} 0 ${end.x} ${end.y}`
}

interface SegmentedArcProps {
  percentage: number
  label: string
}

export function SegmentedArc({ percentage, label }: SegmentedArcProps) {
  const [displayPercent, setDisplayPercent] = useState(0)

  useEffect(() => {
    const target = percentage
    const duration = 1200
    const startTime = performance.now()
    const startVal = displayPercent

    function animate(now: number) {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplayPercent(Math.round(startVal + (target - startVal) * eased))
      if (progress < 1) requestAnimationFrame(animate)
    }

    requestAnimationFrame(animate)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [percentage])

  const fillDeg = (percentage / 100) * 270

  return (
    <div className="relative w-[220px] h-[220px]">
      <svg viewBox="0 0 220 220" className="w-full h-full" aria-hidden="true">
        {/* Background segments (dim) */}
        {COLORS.map((color, i) => {
          const segStart = START_ANGLE + i * (SEGMENT_DEG + GAP_DEG)
          const segEnd = segStart + SEGMENT_DEG
          return (
            <path
              key={`bg-${i}`}
              d={describeArc(CENTER, CENTER, ARC_RADIUS, segStart, segEnd)}
              fill="none"
              stroke={color}
              strokeWidth={STROKE_WIDTH}
              strokeLinecap="round"
              opacity={0.15}
            />
          )
        })}

        {/* Filled segments */}
        {COLORS.map((color, i) => {
          const segStart = START_ANGLE + i * (SEGMENT_DEG + GAP_DEG)
          const segEnd = segStart + SEGMENT_DEG
          const segStartDeg = i * (SEGMENT_DEG + GAP_DEG)
          const segEndDeg = segStartDeg + SEGMENT_DEG

          if (fillDeg <= segStartDeg) return null

          const clippedEnd = fillDeg >= segEndDeg
            ? segEnd
            : segStart + ((fillDeg - segStartDeg) / SEGMENT_DEG) * SEGMENT_DEG

          return (
            <path
              key={`fill-${i}`}
              d={describeArc(CENTER, CENTER, ARC_RADIUS, segStart, clippedEnd)}
              fill="none"
              stroke={color}
              strokeWidth={STROKE_WIDTH}
              strokeLinecap="round"
              className="drop-shadow-[0_0_6px_rgba(255,255,255,0.1)]"
            />
          )
        })}
      </svg>

      {/* Center content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span
          className="text-[44px] font-bold text-foreground tracking-tight leading-none"
          style={{ fontFamily: "var(--font-bricolage), sans-serif" }}
        >
          {displayPercent}%
        </span>
        <span className="text-xs font-mono text-muted-foreground uppercase tracking-[0.2em] mt-1.5">
          {label}
        </span>
      </div>
    </div>
  )
}
