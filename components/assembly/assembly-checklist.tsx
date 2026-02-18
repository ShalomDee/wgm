"use client"

import { Check, Loader2 } from "lucide-react"

interface ChecklistItem {
  text: string
  status: "done" | "loading" | "pending"
}

interface AssemblyChecklistProps {
  items: ChecklistItem[]
}

export function AssemblyChecklist({ items }: AssemblyChecklistProps) {
  return (
    <div className="flex flex-col gap-3">
      {items.map((item, i) => (
        <div key={i} className="flex items-center gap-3">
          {item.status === "done" && (
            <div className="w-5 h-5 rounded-full bg-lime/15 border border-lime/40 flex items-center justify-center flex-shrink-0">
              <Check className="w-3 h-3 text-lime" strokeWidth={3} />
            </div>
          )}
          {item.status === "loading" && (
            <div className="w-5 h-5 rounded-full bg-amber/10 border border-amber/30 flex items-center justify-center flex-shrink-0">
              <Loader2 className="w-3 h-3 text-amber animate-spin" strokeWidth={3} />
            </div>
          )}
          {item.status === "pending" && (
            <div className="w-5 h-5 rounded-full border border-border flex-shrink-0" />
          )}
          <span
            className={`text-sm font-sans ${
              item.status === "done"
                ? "text-foreground/70"
                : item.status === "loading"
                ? "text-foreground"
                : "text-muted-foreground"
            }`}
          >
            {item.text}
          </span>
        </div>
      ))}
    </div>
  )
}
