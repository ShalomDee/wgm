"use client"

import { useDraggable } from "@dnd-kit/core"
import { FileText, BarChart2, Quote } from "lucide-react"

export type EvidenceType = "METRIC" | "QUOTE"

export interface AiSuggestionCardData {
  id: string
  type: EvidenceType
  text: string
  source: string
}

interface AiSuggestionCardProps {
  id: string
  type: EvidenceType
  text: string
  source: string
  accepted: boolean
  onAccept: () => void
  onEdit: () => void
  onReject: () => void
}

function CardContent({
  type,
  text,
  source,
  accepted,
  onAccept,
  onEdit,
  onReject,
}: Omit<AiSuggestionCardProps, "id">) {
  const isMetric = type === "METRIC"
  return (
    <div className="rounded-xl border border-border bg-[#1e1e1e] p-4 flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-coral/15 text-coral text-[10px] font-mono font-semibold uppercase tracking-wider">
          {isMetric ? (
            <BarChart2 className="w-3 h-3" />
          ) : (
            <Quote className="w-3 h-3" />
          )}
          {type}
        </span>
      </div>
      <p className="text-sm font-sans text-foreground leading-snug">{text}</p>
      <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
        <FileText className="w-3.5 h-3.5 text-coral shrink-0" />
        <span className="truncate">{source}</span>
      </div>
      {!accepted && (
        <div className="flex items-center gap-2 pt-1">
          <button
            onClick={onAccept}
            className="flex-1 py-2 rounded-lg bg-coral hover:bg-coral/90 text-primary-foreground text-xs font-sans font-medium transition-colors"
          >
            Accept
          </button>
          <button
            onClick={onEdit}
            className="flex-1 py-2 rounded-lg border border-border text-foreground hover:bg-surface text-xs font-sans font-medium transition-colors"
          >
            Edit
          </button>
          <button
            onClick={onReject}
            className="flex-1 py-2 rounded-lg border border-border text-foreground hover:bg-surface text-xs font-sans font-medium transition-colors"
          >
            Reject
          </button>
        </div>
      )}
      {accepted && (
        <p className="text-[10px] font-mono text-lime pt-1">Drag to timeline</p>
      )}
    </div>
  )
}

export function AiSuggestionCard({
  id,
  type,
  text,
  source,
  accepted,
  onAccept,
  onEdit,
  onReject,
}: AiSuggestionCardProps) {
  const data: AiSuggestionCardData = { id, type, text, source }
  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
    id: `evidence-${id}`,
    data,
    disabled: !accepted,
  })

  return (
    <div
      ref={setNodeRef}
      {...(accepted ? { ...attributes, ...listeners } : {})}
      className={`relative ${accepted ? "cursor-grab active:cursor-grabbing" : ""}`}
    >
      <CardContent
        type={type}
        text={text}
        source={source}
        accepted={accepted}
        onAccept={onAccept}
        onEdit={onEdit}
        onReject={onReject}
      />
      {isDragging && (
        <div className="absolute inset-0 rounded-xl border-2 border-dashed border-coral bg-coral/10 pointer-events-none" />
      )}
    </div>
  )
}
