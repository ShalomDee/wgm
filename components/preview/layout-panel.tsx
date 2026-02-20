"use client"

import { useState } from "react"
import { MoreVertical, User, ZoomIn, Monitor, Image, LayoutGrid, Film, Check } from "lucide-react"

const LAYOUT_OPTIONS = [
  { id: "Camera", label: "Camera", icon: User },
  { id: "Zoom", label: "Zoom", icon: ZoomIn },
  { id: "Screen", label: "Screen", icon: Monitor },
  { id: "Media", label: "Media", icon: Image },
  { id: "Multicam", label: "Multicam", icon: LayoutGrid },
  { id: "Default Intro", label: "Default Intro", icon: Film },
] as const

export type LayoutId = (typeof LAYOUT_OPTIONS)[number]["id"]

export function LayoutPanel() {
  const [selectedLayout, setSelectedLayout] = useState<LayoutId>("Screen")

  return (
    <aside className="w-[320px] shrink-0 flex flex-col overflow-hidden rounded-t-xl bg-[#1a1a1a] border-l border-t border-border">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-border">
        <h2 className="text-sm font-sans font-semibold text-foreground">
          Layout
        </h2>
        <button
          type="button"
          className="p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-surface transition-colors"
          aria-label="Layout options menu"
        >
          <MoreVertical className="w-4 h-4" />
        </button>
      </div>

      {/* Layout options grid */}
      <div className="flex-1 overflow-y-auto p-4">
        <div className="grid grid-cols-2 gap-3">
          {LAYOUT_OPTIONS.map(({ id, label, icon: Icon }) => {
            const isSelected = selectedLayout === id
            return (
              <button
                key={id}
                type="button"
                onClick={() => setSelectedLayout(id)}
                className={`
                  relative flex flex-col items-center justify-center gap-2 p-4 rounded-xl border transition-all
                  min-h-[88px] text-center
                  ${isSelected
                    ? "ring-2 ring-coral border-coral/40 bg-surface"
                    : "border-border bg-[#242424] hover:border-muted-foreground/30 hover:bg-surface/50"
                  }
                `}
              >
                {isSelected && (
                  <span className="absolute top-2 right-2 w-5 h-5 rounded-md bg-coral flex items-center justify-center">
                    <Check className="w-3 h-3 text-primary-foreground stroke-[3]" />
                  </span>
                )}
                <div className={isSelected ? "text-coral" : "text-muted-foreground"}>
                  <Icon className="w-6 h-6 mx-auto" />
                </div>
                <span className="text-xs font-sans font-medium text-foreground">
                  {label}
                </span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Change layout pack */}
      <div className="p-4 border-t border-border">
        <button
          type="button"
          className="w-full py-2.5 rounded-lg border border-border text-sm font-sans font-medium text-muted-foreground hover:text-foreground hover:border-muted-foreground/40 transition-colors"
        >
          Change layout pack
        </button>
      </div>
    </aside>
  )
}
