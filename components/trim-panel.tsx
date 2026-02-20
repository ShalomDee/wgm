"use client"

import { useRouter } from "next/navigation"
import { Textarea } from "@/components/ui/textarea"

export function TrimPanel() {
  const router = useRouter()

  return (
    <aside className="w-[300px] shrink-0 border-l border-border bg-[#141414] flex flex-col overflow-hidden">
      {/* Header */}
      <div className="px-5 py-4 border-b border-border">
        <div className="flex items-center gap-2">
          <span className="text-coral text-sm">✦</span>
          <h2 className="text-sm font-sans font-semibold text-foreground">
            Trim videos
          </h2>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col px-5 py-6">
        <p className="text-sm font-sans text-muted-foreground leading-relaxed mb-4">
          Tell me what you'd like to find in the video. Describe the specific moment or visual details so I can locate it accurately.
        </p>

        <div className="flex-1 flex flex-col gap-4">
          <Textarea
            placeholder="A woman holding a white piece of paper"
            className="flex-1 min-h-[100px] bg-background border-border resize-none text-sm font-sans"
          />

          <button
            onClick={() => router.push("/editor")}
            className="w-full bg-coral hover:bg-coral/90 text-primary-foreground px-5 py-3 rounded-lg text-sm font-sans font-medium transition-colors"
          >
            Wrap it up
          </button>
        </div>
      </div>
    </aside>
  )
}
