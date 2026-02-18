import { FlowStepBar } from "@/components/flow-step-bar"
import { EditorHeader } from "@/components/editor/editor-header"
import { VideoPlayer } from "@/components/editor/video-player"
import { TranscriptPanel } from "@/components/editor/transcript-panel"
import { AnnotationSidebar } from "@/components/editor/annotation-sidebar"

const markers = [
  { position: 7.6, color: "#FF5C3A", label: "Control failure" },
  { position: 22, color: "#F5A623", label: "Glance 2.4s" },
  { position: 38, color: "#AADC32", label: "Physical pref" },
  { position: 61, color: "#A855F7", label: "Task comparison" },
]

export default function EditorPage() {
  return (
    <div className="flex flex-col h-screen overflow-hidden bg-background text-foreground">
      <EditorHeader />
      <FlowStepBar currentStep={2} />

      <div className="flex flex-1 overflow-hidden">
        {/* Left column — player + transcript */}
        <main className="flex-[6] overflow-y-auto p-6 pr-3">
          <VideoPlayer
            markers={markers}
            currentTime="01:44"
            totalTime="09:14"
          />
          <TranscriptPanel />
        </main>

        {/* Right column — flagged moments */}
        <div className="flex-[4] border-l border-border overflow-hidden">
          <AnnotationSidebar />
        </div>
      </div>
    </div>
  )
}
