"use client"

import { useState, useCallback } from "react"
import { AppHeader } from "@/components/app-header"
import { FlowStepBar } from "@/components/flow-step-bar"
import { FolderSidebar } from "@/components/folder-sidebar"
import { VideoGrid } from "@/components/video-grid"
import { TrimPanel } from "@/components/trim-panel"

export default function Page() {
  const [selected, setSelected] = useState<Set<string>>(new Set())

  const toggleSelect = useCallback((id: string) => {
    setSelected((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }, [])

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-background text-foreground">
      <AppHeader />
      <FlowStepBar currentStep={1} />

      <div className="flex flex-1 overflow-hidden">
        <FolderSidebar />
        <main className="flex flex-1 overflow-hidden">
          <VideoGrid selected={selected} onToggle={toggleSelect} />
        </main>
        <TrimPanel selectedCount={selected.size} />
      </div>
    </div>
  )
}
