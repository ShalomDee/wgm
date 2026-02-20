"use client"

import { useCallback, useState } from "react"
import { useRouter } from "next/navigation"
import {
  DndContext,
  DragEndEvent,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core"
import { AppHeader } from "@/components/app-header"
import { FlowStepBar } from "@/components/flow-step-bar"
import { InsightsSidebar } from "@/components/editor/insights-sidebar"
import { SceneHeader } from "@/components/editor/scene-header"
import { SceneVideoPlayer, TIMELINE_DROPPABLE_ID, type TimelineMarker } from "@/components/editor/scene-video-player"
import { SceneProgressStrip } from "@/components/editor/scene-progress-strip"
import { AiSuggestionPanel } from "@/components/editor/ai-suggestion-panel"
import type { AiSuggestionCardData } from "@/components/editor/ai-suggestion-card"

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value))
}

export default function EditorPage() {
  const router = useRouter()
  const [acceptedIds, setAcceptedIds] = useState<Set<string>>(new Set())
  const [timelineMarkers, setTimelineMarkers] = useState<TimelineMarker[]>([])

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 8 } })
  )

  const handleAccept = useCallback((id: string) => {
    setAcceptedIds((prev) => new Set(prev).add(id))
  }, [])

  const handleEdit = useCallback((_id: string) => {
    // Placeholder: could open edit modal
  }, [])

  const handleReject = useCallback((id: string) => {
    setAcceptedIds((prev) => {
      const next = new Set(prev)
      next.delete(id)
      return next
    })
  }, [])

  const handleDragEnd = useCallback((event: DragEndEvent) => {
    const { active, over, delta } = event
    if (!over || over.id !== TIMELINE_DROPPABLE_ID) return

    const data = active.data.current as AiSuggestionCardData | undefined
    if (!data) return

    const activeRect = active.rect.current?.translated
    const overRect = over.rect
    if (!activeRect || !overRect) return

    const finalCenterX = activeRect.left + activeRect.width / 2
    const percent = clamp(
      ((finalCenterX - overRect.left) / overRect.width) * 100,
      0,
      100
    )

    setTimelineMarkers((prev) =>
      prev.concat({
        id: `marker-${data.id}-${Date.now()}`,
        position: percent,
        evidence: data,
      })
    )
  }, [])

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-background text-foreground">
      <AppHeader />
      <FlowStepBar currentStep={2} />

      <DndContext
        sensors={sensors}
        onDragEnd={handleDragEnd}
      >
        <div className="flex flex-1 overflow-hidden">
          <InsightsSidebar />

          <main className="flex-1 overflow-y-auto flex flex-col p-6">
            <SceneHeader />

            <div className="flex flex-col gap-4">
              <SceneVideoPlayer markers={timelineMarkers} />
              <SceneProgressStrip />
              <AiSuggestionPanel
                acceptedIds={acceptedIds}
                onAccept={handleAccept}
                onEdit={handleEdit}
                onReject={handleReject}
              />
            </div>

            <div className="mt-8 flex justify-end">
              <button
                type="button"
                onClick={() => router.push("/assembly")}
                className="bg-coral hover:bg-coral/90 text-primary-foreground px-6 py-3 rounded-lg text-sm font-sans font-semibold transition-colors"
              >
                Continue
              </button>
            </div>
          </main>
        </div>
      </DndContext>
    </div>
  )
}
