import { AppHeader } from "@/components/app-header"
import { FlowStepBar } from "@/components/flow-step-bar"
import { FolderSidebar } from "@/components/folder-sidebar"
import { VideoGrid } from "@/components/video-grid"

export default function Page() {
  return (
    <div className="flex flex-col h-screen overflow-hidden bg-background text-foreground">
      <AppHeader />
      <FlowStepBar currentStep={1} />

      <div className="flex flex-1 overflow-hidden">
        <FolderSidebar />
        <main className="flex flex-1 overflow-hidden">
          <VideoGrid />
        </main>
      </div>
    </div>
  )
}
