"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { SegmentedArc } from "@/components/assembly/segmented-arc"
import { AssemblyChecklist } from "@/components/assembly/assembly-checklist"
import { ClipStrip } from "@/components/assembly/clip-strip"

export default function AssemblyPage() {
  const router = useRouter()
  const [percentage, setPercentage] = useState(0)
  const [step, setStep] = useState(0)

  useEffect(() => {
    // Simulate progress animation through all steps then redirect
    const t1 = setTimeout(() => { setPercentage(28); setStep(1) }, 1000)
    const t2 = setTimeout(() => { setPercentage(52); setStep(2) }, 1800)
    const t3 = setTimeout(() => { setPercentage(78); setStep(3) }, 3200)
    const t4 = setTimeout(() => { setPercentage(100); setStep(4) }, 4800)
    const t5 = setTimeout(() => { router.push("/preview") }, 6000)

    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); clearTimeout(t5) }
  }, [router])

  const checklistItems = [
    {
      text: "Sequencing 4 flagged moments",
      status: step >= 1 ? "done" as const : "pending" as const,
    },
    {
      text: "Generating captions & annotations",
      status: step >= 2 ? "done" as const : step >= 1 ? "loading" as const : "pending" as const,
    },
    {
      text: "Applying narrative structure",
      status: step >= 4 ? "done" as const : step >= 3 ? "loading" as const : "pending" as const,
    },
  ]

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Top-left logo */}
      <div className="px-6 py-5">
        <div className="flex items-center gap-2">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            className="text-coral"
            aria-hidden="true"
          >
            <path d="M4 4h7v7H4V4Z" fill="currentColor" opacity="0.9" />
            <path d="M13 4h7v7h-7V4Z" fill="currentColor" opacity="0.6" />
            <path d="M4 13h7v7H4v-7Z" fill="currentColor" opacity="0.6" />
            <path d="M13 13h7v7h-7v-7Z" fill="currentColor" opacity="0.3" />
          </svg>
          <span className="text-foreground/60 font-sans text-sm font-semibold tracking-tight">
            InsightCuts
          </span>
        </div>
      </div>

      {/* Center content */}
      <main className="flex-1 flex flex-col items-center justify-center -mt-16 px-4">
        {/* Arc progress */}
        <SegmentedArc percentage={percentage} label="assembling" />

        {/* Title */}
        <h1
          className="text-[28px] font-bold text-foreground mt-6 text-center text-balance leading-tight"
          style={{ fontFamily: "var(--font-bricolage), sans-serif" }}
        >
          Assembling your brief
        </h1>

        {/* Checklist */}
        <div className="mt-8">
          <AssemblyChecklist items={checklistItems} />
        </div>

        {/* Clip strip */}
        <div className="mt-10">
          <ClipStrip />
        </div>
      </main>

      {/* Bottom text */}
      <div className="pb-8 flex justify-center">
        <p className="text-xs font-mono text-muted-foreground/50 tracking-wide">
          {'This usually takes 15\u201330 seconds'}
        </p>
      </div>
    </div>
  )
}
