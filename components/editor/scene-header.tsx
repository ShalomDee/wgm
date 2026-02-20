"use client"

import { CheckCircle2 } from "lucide-react"

export function SceneHeader() {
  return (
    <div className="flex items-center justify-between px-1 pb-3">
      <h1 className="text-base font-sans font-bold text-foreground tracking-tight">
        Scene 3 — Onboarding
      </h1>
      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#2a2a2a] text-foreground text-[10px] font-mono">
        <CheckCircle2 className="w-3.5 h-3.5 text-coral" />
        Evidence Added
      </span>
    </div>
  )
}
