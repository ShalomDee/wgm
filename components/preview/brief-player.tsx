"use client"

import { useState } from "react"
import { Play, Pause, RotateCcw, RotateCw, User, Volume2 } from "lucide-react"

export function BriefPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(38)

  return (
    <div className="flex flex-col gap-0 w-full max-w-[780px] mx-auto">
      {/* Video viewport - 16:9 */}
      <div className="relative aspect-video bg-[#0a0a0a] rounded-t-xl overflow-hidden">
        {/* Subtle vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.7)_100%)]" />

        {/* Participant avatar - center-left of frame */}
        <div className="absolute inset-0 flex items-center" style={{ paddingLeft: "28%" }}>
          <div className="w-28 h-28 rounded-full bg-[#161616] border-2 border-[#2a2a2a] flex items-center justify-center">
            <User className="w-12 h-12 text-muted-foreground/30" />
          </div>
        </div>

        {/* Top-left: INSIGHT BRIEF badge */}
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center px-2.5 py-1 rounded bg-coral/90 text-[10px] font-mono font-bold text-white uppercase tracking-wider">
            Insight Brief
          </span>
        </div>

        {/* Top-right: Clip counter */}
        <div className="absolute top-4 right-4">
          <span className="text-sm font-mono text-white/90 tabular-nums">
            2 <span className="text-white/40">/</span> 4
          </span>
        </div>

        {/* BBC-style caption bar at bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          {/* Coral top accent line */}
          <div className="h-[3px] bg-coral" />

          {/* Caption content */}
          <div className="bg-black/90 px-5 py-4 flex flex-col gap-2">
            {/* Category line */}
            <p className="text-[10px] font-mono text-coral font-bold uppercase tracking-[0.12em] leading-none">
              {'Research Insight \u00B7 In-Vehicle UX Study Q1'}
            </p>

            {/* Finding text */}
            <p className="text-[15px] font-sans text-white leading-relaxed max-w-[640px]">
              {'31% of drivers reported distraction from touchscreen navigation. Average glance duration: 2.4 seconds away from road.'}
            </p>

            {/* Attribution line */}
            <p className="text-[10px] font-mono text-coral font-bold uppercase tracking-[0.12em] leading-none">
              {'Participant 07 \u00B7 Session 03 \u00B7 Control Discovery Task'}
            </p>
          </div>
        </div>
      </div>

      {/* Coral scrubber bar */}
      <div className="relative bg-[#111111] px-0 py-0">
        <div className="relative h-[5px] bg-[#2a2a2a] cursor-pointer group">
          {/* Progress fill */}
          <div
            className="absolute inset-y-0 left-0 bg-coral rounded-r-full transition-all duration-200"
            style={{ width: `${progress}%` }}
          />
          {/* Playhead dot */}
          <div
            className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-coral shadow-[0_0_8px_rgba(255,92,58,0.4)] border-2 border-[#111111] transition-all opacity-0 group-hover:opacity-100"
            style={{ left: `${progress}%`, marginLeft: "-6px" }}
          />
        </div>
      </div>

      {/* Playback controls */}
      <div className="flex items-center justify-between bg-[#111111] px-4 py-3 rounded-b-xl border-x border-b border-border/50">
        <div className="flex items-center gap-3">
          <button
            className="w-8 h-8 flex items-center justify-center rounded-lg text-muted-foreground hover:text-foreground hover:bg-surface transition-colors"
            aria-label="Rewind 10 seconds"
          >
            <RotateCcw className="w-4 h-4" />
          </button>

          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-foreground text-background hover:bg-foreground/90 transition-colors"
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? (
              <Pause className="w-4 h-4 fill-current" />
            ) : (
              <Play className="w-4 h-4 fill-current ml-0.5" />
            )}
          </button>

          <button
            className="w-8 h-8 flex items-center justify-center rounded-lg text-muted-foreground hover:text-foreground hover:bg-surface transition-colors"
            aria-label="Forward 10 seconds"
          >
            <RotateCw className="w-4 h-4" />
          </button>

          <div className="w-px h-5 bg-border ml-1" />

          <button
            className="w-8 h-8 flex items-center justify-center rounded-lg text-muted-foreground hover:text-foreground hover:bg-surface transition-colors"
            aria-label="Volume"
          >
            <Volume2 className="w-4 h-4" />
          </button>
        </div>

        <span className="text-xs font-mono text-muted-foreground tabular-nums">
          00:38{" "}
          <span className="text-muted-foreground/40">/</span>{" "}
          01:42
        </span>
      </div>
    </div>
  )
}
