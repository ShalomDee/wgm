"use client"

import { useDroppable } from "@dnd-kit/core"
import { Play, ChevronLeft, ChevronRight } from "lucide-react"
import type { AiSuggestionCardData } from "./ai-suggestion-card"

export const TIMELINE_DROPPABLE_ID = "scene-timeline"

export interface TimelineMarker {
  id: string
  position: number
  evidence: AiSuggestionCardData
}

interface SceneVideoPlayerProps {
  markers: TimelineMarker[]
}

export function SceneVideoPlayer({ markers }: SceneVideoPlayerProps) {
  const { setNodeRef, isOver } = useDroppable({ id: TIMELINE_DROPPABLE_ID })

  return (
    <div className="flex flex-col gap-0">
      {/* Video viewport: dark bg, centered play, prev/next */}
      <div className="relative aspect-video bg-[#0a0a0a] rounded-xl overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <button
            type="button"
            className="w-16 h-16 rounded-full bg-coral/90 hover:bg-coral flex items-center justify-center text-primary-foreground transition-colors"
            aria-label="Play"
          >
            <Play className="w-8 h-8 fill-current ml-1" />
          </button>
        </div>
        <button
          type="button"
          className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-lg bg-[#1e1e1e]/90 flex items-center justify-center text-foreground hover:bg-surface border border-border"
          aria-label="Previous segment"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          type="button"
          className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-lg bg-[#1e1e1e]/90 flex items-center justify-center text-foreground hover:bg-surface border border-border"
          aria-label="Next segment"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Droppable timeline with markers */}
      <div
        ref={setNodeRef}
        className={`relative h-10 bg-[#141414] px-2 flex items-center rounded-b-xl border-x border-b border-border transition-colors ${isOver ? "bg-coral/10 border-coral/40" : ""}`}
      >
        <div className="relative h-2 flex-1 bg-[#2a2a2a] rounded-full overflow-visible">
          {/* Progress fill placeholder */}
          <div
            className="absolute inset-y-0 left-0 bg-foreground/20 rounded-full"
            style={{ width: "28%" }}
          />
          {/* Dropped evidence markers */}
          {markers.map((m) => (
            <div
              key={m.id}
              className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full border-2 border-background cursor-pointer bg-coral -ml-1.5"
              style={{ left: `${m.position}%` }}
              title={m.evidence.text}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
