"use client"

import { AiSuggestionCard, type EvidenceType } from "./ai-suggestion-card"

const SUGGESTIONS: { id: string; type: EvidenceType; text: string; source: string }[] = [
  {
    id: "1",
    type: "METRIC",
    text: "42% of users dropped off at Step 3",
    source: "drive_session.pdf",
  },
  {
    id: "2",
    type: "QUOTE",
    text: '"I didn\'t know what to click here."',
    source: "drive_session.pdf",
  },
]

interface AiSuggestionPanelProps {
  acceptedIds: Set<string>
  onAccept: (id: string) => void
  onEdit: (id: string) => void
  onReject: (id: string) => void
}

export function AiSuggestionPanel({
  acceptedIds,
  onAccept,
  onEdit,
  onReject,
}: AiSuggestionPanelProps) {
  return (
    <div className="rounded-xl border border-border bg-[#1a1a1a] p-5 flex flex-col gap-4">
      <div>
        <h3 className="flex items-center gap-2 text-sm font-sans font-semibold text-foreground">
          <span className="text-coral">✦</span>
          AI Suggestion
        </h3>
        <p className="text-xs font-sans text-muted-foreground mt-1">
          We found supporting evidence for this scene based on your uploaded materials.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {SUGGESTIONS.map((s) => (
          <AiSuggestionCard
            key={s.id}
            id={s.id}
            type={s.type}
            text={s.text}
            source={s.source}
            accepted={acceptedIds.has(s.id)}
            onAccept={() => onAccept(s.id)}
            onEdit={() => onEdit(s.id)}
            onReject={() => onReject(s.id)}
          />
        ))}
      </div>
    </div>
  )
}
