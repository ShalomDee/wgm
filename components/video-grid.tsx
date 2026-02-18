"use client"

import { useState } from "react"
import { VideoCard } from "./video-card"
import { SelectionBar } from "./selection-bar"
import { LayoutGrid, List } from "lucide-react"

interface VideoData {
  id: string
  participant: string
  fileLabel: string
  duration: string
  tags: { label: string; color: string }[]
  gradientFrom: string
  gradientTo: string
  thumbnailUrl?: string
}

const videos: VideoData[] = [
  {
    id: "1",
    participant: "Participant 03 \u00b7 Male, 34",
    fileLabel: "S03_discovery_task.mp4",
    duration: "08:17",
    tags: [
      { label: "Control Discovery", color: "#FF5C3A" },
      { label: "Glance Duration", color: "#F5A623" },
    ],
    gradientFrom: "#2a1f1f",
    gradientTo: "#1f2a27",
    thumbnailUrl: "/image6.png",
  },
  {
    id: "2",
    participant: "Participant 07 \u00b7 Female, 28",
    fileLabel: "S03_drive_session1.mp4",
    duration: "14:03",
    tags: [
      { label: "Safety Signal", color: "#AADC32" },
      { label: "Physical Pref", color: "#7B93DB" },
    ],
    gradientFrom: "#1f1f2a",
    gradientTo: "#2a261f",
    thumbnailUrl: "/image8.jpg",
  },
  {
    id: "3",
    participant: "Participant 05 \u00b7 Male, 41",
    fileLabel: "S03_debrief.mp4",
    duration: "06:51",
    tags: [
      { label: "Control Discovery", color: "#FF5C3A" },
      { label: "Physical Pref", color: "#7B93DB" },
    ],
    gradientFrom: "#261f2a",
    gradientTo: "#1f2a22",
    thumbnailUrl: "/image1.jpg",
  },
  {
    id: "4",
    participant: "Participant 12 \u00b7 Female, 55",
    fileLabel: "S03_drive_session2.mp4",
    duration: "11:29",
    tags: [
      { label: "Glance Duration", color: "#F5A623" },
      { label: "Safety Signal", color: "#AADC32" },
    ],
    gradientFrom: "#1f2a2a",
    gradientTo: "#2a1f22",
    thumbnailUrl: "/image3.png", 
  },
]

export function VideoGrid() {
  const [selected, setSelected] = useState<Set<string>>(new Set())

  const toggleSelect = (id: string) => {
    setSelected((prev) => {
      const next = new Set(prev)
      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }
      return next
    })
  }

  return (
    <div className="flex flex-col flex-1 overflow-hidden">
      {/* Toolbar */}
      <div className="flex items-center justify-between px-6 py-3 border-b border-border bg-background">
        <div className="flex items-center gap-3">
          <h2 className="text-sm font-sans font-medium text-foreground">
            Session 03
          </h2>
          <span className="text-xs font-mono text-muted-foreground">
            4 clips
          </span>
        </div>
        <div className="flex items-center gap-1">
          <button
            className="p-1.5 rounded-md bg-secondary text-foreground"
            aria-label="Grid view"
          >
            <LayoutGrid className="w-4 h-4" />
          </button>
          <button
            className="p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
            aria-label="List view"
          >
            <List className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Grid */}
      <div className="flex-1 overflow-y-auto p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl">
          {videos.map((video) => (
            <VideoCard
              key={video.id}
              participant={video.participant}
              name={video.fileLabel}
              duration={video.duration}
              tags={video.tags}
              selected={selected.has(video.id)}
              onToggle={() => toggleSelect(video.id)}
              gradientFrom={video.gradientFrom}
              gradientTo={video.gradientTo}
              thumbnailUrl={video.thumbnailUrl}
            />
          ))}
        </div>
      </div>

      {/* Bottom selection bar */}
      <SelectionBar count={selected.size} />
    </div>
  )
}
