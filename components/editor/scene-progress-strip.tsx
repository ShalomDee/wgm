"use client"

import { Check } from "lucide-react"

const SCENES = [
  { label: "Intro", duration: "0:12", active: false, done: false },
  { label: "Theme 1: Navigation", duration: "1:24", active: false, done: true },
  { label: "Theme 2: Onboarding", duration: "2:08", active: true, done: false },
  { label: "Theme 3: Visual Design", duration: "1:45", active: false, done: false },
  { label: "Theme 4", duration: "1:30", active: false, done: false },
]

export function SceneProgressStrip() {
  return (
    <div className="flex flex-col gap-3 pt-3">
      <p className="text-xs font-sans text-muted-foreground">
        Scene 3 of 10
      </p>
      <div className="flex items-center gap-2 overflow-x-auto pb-1">
        {SCENES.map((scene) => (
          <button
            key={scene.label}
            type="button"
            className={`
              shrink-0 flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-sans transition-colors
              ${scene.active ? "bg-coral text-primary-foreground" : "bg-[#2a2a2a] text-foreground hover:bg-surface"}
            `}
          >
            <span>{scene.label}</span>
            <span className="font-mono text-[10px] opacity-80">({scene.duration})</span>
            {scene.done && !scene.active && (
              <span className="text-coral">
                <Check className="w-3 h-3" />
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  )
}
