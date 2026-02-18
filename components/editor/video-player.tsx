"use client"

import { useState } from "react"
import { Play, Pause, RotateCcw, RotateCw, User } from "lucide-react"

interface Marker {
  position: number
  color: string
  label: string
}

interface VideoPlayerProps {
  markers: Marker[]
  currentTime: string
  totalTime: string
}

export function VideoPlayer({ markers, currentTime, totalTime }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(19) // ~01:44 out of 09:14
  const [hoveredMarker, setHoveredMarker] = useState<number | null>(null)

  return (
    <div className="flex flex-col gap-0">
      {/* Video viewport */}
      <div className="relative aspect-video bg-[#0a0a0a] rounded-t-xl overflow-hidden">
        {/* Subtle vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.6)_100%)]" />

        {/* Center avatar placeholder */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-24 h-24 rounded-full bg-[#1e1e1e] border-2 border-border flex items-center justify-center">
            <User className="w-10 h-10 text-muted-foreground/50" />
          </div>
        </div>

        {/* Recording indicator */}
        <div className="absolute top-4 left-4 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-coral animate-pulse" />
          <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">
            Session Recording
          </span>
        </div>

        {/* Frame counter */}
        <div className="absolute top-4 right-4">
          <span className="text-[10px] font-mono text-muted-foreground/50">
            1080p / 30fps
          </span>
        </div>
      </div>

      {/* Scrubber */}
      <div className="relative bg-[#141414] px-4 py-3 border-x border-border">
        {/* Timeline track */}
        <div className="relative h-2 bg-[#2a2a2a] rounded-full cursor-pointer group">
          {/* Progress fill */}
          <div
            className="absolute inset-y-0 left-0 bg-foreground/20 rounded-full"
            style={{ width: `${progress}%` }}
          />

          {/* Playhead */}
          <div
            className="absolute top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-foreground shadow-[0_0_8px_rgba(240,240,240,0.3)] border-2 border-background transition-all"
            style={{ left: `${progress}%`, marginLeft: "-7px" }}
          />

          {/* Colored markers */}
          {markers.map((marker, i) => (
            <div
              key={i}
              className="absolute top-1/2 -translate-y-1/2"
              style={{ left: `${marker.position}%`, marginLeft: "-6px" }}
              onMouseEnter={() => setHoveredMarker(i)}
              onMouseLeave={() => setHoveredMarker(null)}
            >
              {/* Marker pin */}
              <div
                className="w-3 h-3 rounded-full border-2 border-background cursor-pointer transition-transform hover:scale-125"
                style={{ backgroundColor: marker.color }}
              />

              {/* Tooltip */}
              {hoveredMarker === i && (
                <div
                  className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-2.5 py-1 rounded-md text-[10px] font-mono font-medium whitespace-nowrap z-10 border"
                  style={{
                    backgroundColor: `${marker.color}15`,
                    borderColor: `${marker.color}40`,
                    color: marker.color,
                  }}
                >
                  {marker.label}
                  <div
                    className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-[4px] border-r-[4px] border-t-[4px] border-transparent"
                    style={{ borderTopColor: `${marker.color}40` }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Playback controls */}
      <div className="flex items-center justify-between bg-[#141414] px-4 py-2.5 rounded-b-xl border-x border-b border-border">
        <div className="flex items-center gap-3">
          <button
            className="w-8 h-8 flex items-center justify-center rounded-lg text-muted-foreground hover:text-foreground hover:bg-surface transition-colors"
            aria-label="Rewind 10 seconds"
          >
            <RotateCcw className="w-4 h-4" />
          </button>

          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-9 h-9 flex items-center justify-center rounded-lg bg-foreground text-background hover:bg-foreground/90 transition-colors"
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
        </div>

        <span className="text-xs font-mono text-muted-foreground tabular-nums">
          {currentTime}{" "}
          <span className="text-muted-foreground/50">/</span>{" "}
          {totalTime}
        </span>
      </div>
    </div>
  )
}
