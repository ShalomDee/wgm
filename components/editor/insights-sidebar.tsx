"use client"

import { Plus, FileText } from "lucide-react"

const FILES = [
  "01.csv",
  "drive_session.pdf",
  "interview_notes.pdf",
  "survey_results.csv",
  "user_feedback.pdf",
]

export function InsightsSidebar() {
  return (
    <aside className="w-[260px] shrink-0 border-r border-border bg-[#141414] flex flex-col overflow-hidden">
      <div className="px-4 py-3 border-b border-border">
        <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
          INSIGHTS
        </p>
      </div>
      <div className="p-3 border-b border-border">
        <button
          type="button"
          className="w-full flex items-center justify-center gap-2 bg-coral hover:bg-coral/90 text-primary-foreground py-2.5 rounded-lg text-sm font-sans font-medium transition-colors"
        >
          <Plus className="w-4 h-4" />
          Add files
        </button>
      </div>
      <nav className="flex-1 overflow-y-auto px-3 py-2" aria-label="Uploaded files">
        <ul className="flex flex-col gap-0.5">
          {FILES.map((name) => (
            <li key={name}>
              <button
                type="button"
                className="w-full flex items-center gap-2 px-2 py-2 rounded-md text-sm font-sans text-foreground hover:bg-surface transition-colors text-left"
              >
                <FileText className="w-4 h-4 shrink-0 text-coral" />
                <span className="truncate">{name}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}
