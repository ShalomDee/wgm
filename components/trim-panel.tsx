"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Textarea } from "@/components/ui/textarea"
import { Sparkles } from "lucide-react"

interface TrimPanelProps {
  selectedCount: number
}

export function TrimPanel({ selectedCount }: TrimPanelProps) {
  const router = useRouter()
  const [prompt, setPrompt] = useState("")

  const canSubmit = selectedCount > 0 || prompt.trim().length > 0

  return (
    <aside className="w-[300px] shrink-0 border-l border-border bg-[#141414] flex flex-col overflow-hidden">
      {/* Header */}
      <div className="px-5 py-4 border-b border-border">
        <div className="flex items-center gap-2">
        <Sparkles className="text-coral" size={16} />
          <h2 className="text-sm font-sans font-semibold text-foreground">
            Find Moments
          </h2>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col px-5 py-6">
        <p className="text-sm font-sans text-muted-foreground leading-relaxed mb-4">
          Describe what you're looking for (a gesture, a reaction, a specific signal) and I'll locate it across your clips. The more specific you are, the better the results.
        </p>

        <div className="flex-1 flex flex-col gap-4">
          <Textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="e.g. woman holding a white paper, or moments tagged [safety signal]"
            className="flex-1 min-h-[100px] bg-background border-border resize-none text-sm font-sans"
          />

          <button
            type="button"
            onClick={() => canSubmit && router.push("/editor")}
            disabled={!canSubmit}
            className={`
              w-full px-5 py-3 rounded-lg text-sm font-sans font-medium transition-colors
              ${canSubmit
                ? "bg-coral hover:bg-coral/90 text-primary-foreground cursor-pointer"
                : "bg-coral/80 text-primary-foreground opacity-40 cursor-not-allowed"
              }
            `}
          >
            Wrap it up
          </button>
        </div>
      </div>
    </aside>
  )
}
