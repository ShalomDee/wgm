import { FlowStepBar } from "@/components/flow-step-bar"
import { PreviewHeader } from "@/components/preview/preview-header"
import { BriefPlayer } from "@/components/preview/brief-player"
import { PreviewClipStrip } from "@/components/preview/preview-clip-strip"

export default function PreviewPage() {
  return (
    <div className="flex flex-col h-screen bg-background">
      {/* Header */}
      <PreviewHeader />
      <FlowStepBar currentStep={4} />

      {/* Breadcrumb bar */}
      <div className="flex items-center justify-center px-5 py-2.5 border-b border-border/50 bg-[#141414]">
        <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
          <span>In-Vehicle UX</span>
          <span className="text-muted-foreground/30">{'\u00B7'}</span>
          <span>Q1 2025</span>
          <span className="text-muted-foreground/30">{'\u00B7'}</span>
          <span className="text-foreground/70 tabular-nums">1m 42s</span>
          <span className="text-muted-foreground/30">{'\u00B7'}</span>
          <span className="text-foreground/70">4 moments</span>
        </div>
      </div>

      {/* Main content area */}
      <main className="flex-1 flex flex-col items-center justify-center gap-8 px-6 py-8 overflow-y-auto">
        {/* Video player */}
        <BriefPlayer />

        {/* Clip thumbnails strip */}
        <PreviewClipStrip />
      </main>
    </div>
  )
}
