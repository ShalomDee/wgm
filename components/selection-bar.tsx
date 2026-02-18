"use client"

import { useRouter } from "next/navigation"
import { ArrowRight } from "lucide-react"

interface SelectionBarProps {
  count: number
}

export function SelectionBar({ count }: SelectionBarProps) {
  const router = useRouter()

  if (count === 0) return null

  return (
    <div className="border-t border-border bg-[#141414] px-6 py-3 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-2 h-2 rounded-full bg-lime animate-pulse" />
        <span className="text-sm font-sans text-foreground">
          <span className="font-mono text-lime font-medium">{count}</span>{" "}
          {count === 1 ? "clip" : "clips"} selected
        </span>
      </div>

      <button
        onClick={() => router.push("/editor")}
        className="flex items-center gap-2 bg-coral hover:bg-coral/90 text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-sans font-medium transition-colors"
      >
        Open in InsightCuts
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  )
}
