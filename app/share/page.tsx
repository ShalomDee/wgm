import { FlowStepBar } from "@/components/flow-step-bar"
import { ShareHeader } from "@/components/share/share-header"
import { BriefSummaryCard } from "@/components/share/brief-summary-card"
import { ExportCards } from "@/components/share/export-cards"
import { CopyLinkBar } from "@/components/share/copy-link-bar"

export default function SharePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Header */}
      <ShareHeader />
      <FlowStepBar currentStep={5} />

      {/* Main content — scrollable, centered */}
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-[960px] mx-auto px-6 py-8 flex flex-col gap-8">
          {/* Brief summary */}
          <BriefSummaryCard />

          {/* Section label */}
          <div className="flex flex-col gap-1">
            <h2 className="text-sm font-sans font-semibold text-foreground">
              Export Destinations
            </h2>
            <p className="text-xs font-mono text-muted-foreground">
              Choose how to share this brief with your team
            </p>
          </div>

          {/* 3 export destination cards */}
          <ExportCards />

          {/* Copy shareable link */}
          <div className="flex flex-col gap-2">
            <h3 className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
              Copy shareable link
            </h3>
            <CopyLinkBar />
          </div>
        </div>

        {/* Bottom notice */}
        <div className="text-center pb-8">
          <p className="text-xs font-mono text-muted-foreground/50">
            Recipients can view the brief in their browser.
          </p>
        </div>
      </main>
    </div>
  )
}
