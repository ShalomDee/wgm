"use client"

import { useEffect, useRef, useState } from "react"
import { Play, Pause, RotateCcw, RotateCw, Volume2 } from "lucide-react"

const TOTAL_SECONDS = 102 // 01:42

function formatTime(s: number) {
  const m = Math.floor(s / 60)
  const sec = Math.floor(s % 60)
  return `${String(m).padStart(2, "0")}:${String(sec).padStart(2, "0")}`
}

export function BriefPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentSeconds, setCurrentSeconds] = useState(38)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentSeconds((prev) => {
          if (prev >= TOTAL_SECONDS) {
            setIsPlaying(false)
            return TOTAL_SECONDS
          }
          return prev + 1
        })
      }, 1000)
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
    return () => { if (intervalRef.current) clearInterval(intervalRef.current) }
  }, [isPlaying])

  const progress = (currentSeconds / TOTAL_SECONDS) * 100

  const handleScrub = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width))
    setCurrentSeconds(Math.round(ratio * TOTAL_SECONDS))
  }

  const skip = (secs: number) => {
    setCurrentSeconds((prev) => Math.max(0, Math.min(TOTAL_SECONDS, prev + secs)))
  }

  return (
    <div className="flex flex-col gap-0 w-full max-w-[780px] mx-auto">
      {/* Video viewport */}
      <div className="relative aspect-video bg-[#0a0a0a] rounded-t-xl overflow-hidden">
        {/* Placeholder image */}
        <img
          src="/image2.jpg"
          alt="Brief preview"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.7)_100%)]" />

        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center px-2.5 py-1 rounded bg-coral/90 text-[10px] font-mono font-bold text-white uppercase tracking-wider">
            Insight Brief
          </span>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <div className="h-[3px] bg-coral" />
          <div className="bg-black/90 px-5 py-4 flex flex-col gap-2">
            <p className="text-[10px] font-mono text-coral font-bold uppercase tracking-[0.12em] leading-none">
              {'In-Vehicle UX Study Q1'}
            </p>
            <p className="font-sans text-white max-w-[640px] leading-tight">
              <span className="block text-[20px] font-semibold">
                31% of drivers distracted by touchscreen navigation
              </span>
              <span className="block text-[13px] text-white/80 mt-1">
                2.4s average off-road glance
              </span>
            </p>

          </div>
        </div>
      </div>

      {/* Scrubber */}
      <div className="relative bg-[#111111]">
        <div
          className="relative h-[5px] bg-[#2a2a2a] cursor-pointer group"
          onClick={handleScrub}
        >
          <div
            className="absolute inset-y-0 left-0 bg-coral rounded-r-full transition-all duration-200"
            style={{ width: `${progress}%` }}
          />
          <div
            className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-coral shadow-[0_0_8px_rgba(255,92,58,0.4)] border-2 border-[#111111] transition-all opacity-0 group-hover:opacity-100"
            style={{ left: `${progress}%`, marginLeft: "-6px" }}
          />
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between bg-[#111111] px-4 py-3 rounded-b-xl border-x border-b border-border/50">
        <div className="flex items-center gap-3">
          <button
            onClick={() => skip(-10)}
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
            onClick={() => skip(10)}
            className="w-8 h-8 flex items-center justify-center rounded-lg text-muted-foreground hover:text-foreground hover:bg-surface transition-colors"
            aria-label="Forward 10 seconds"
          >
            <RotateCw className="w-4 h-4" />
          </button>

          <div className="w-px h-5 bg-border ml-1" />

          <button className="w-8 h-8 flex items-center justify-center rounded-lg text-muted-foreground hover:text-foreground hover:bg-surface transition-colors">
            <Volume2 className="w-4 h-4" />
          </button>
        </div>

        <span className="text-xs font-mono text-muted-foreground tabular-nums">
          {formatTime(currentSeconds)}{" "}
          <span className="text-muted-foreground/40">/</span>{" "}
          {formatTime(TOTAL_SECONDS)}
        </span>
      </div>
    </div>
  )
}
