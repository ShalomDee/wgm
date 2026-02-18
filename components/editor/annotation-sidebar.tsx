"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Pencil, Trash2, Plus, ArrowRight } from "lucide-react"

interface AnnotationTag {
  label: string
  color: string
}

interface Annotation {
  id: number
  timestamp: string
  excerpt: string
  color: string
  tags: AnnotationTag[]
}

const annotations: Annotation[] = [
  {
    id: 1,
    timestamp: "00:42",
    excerpt: "Control discovery failure \u2014 3.1s eyes off road",
    color: "#FF5C3A",
    tags: [
      { label: "Safety Signal", color: "#FF5C3A" },
    ],
  },
  {
    id: 2,
    timestamp: "01:14",
    excerpt: "42% struggled to locate core controls in <5s",
    color: "#F5A623",
    tags: [
      { label: "Glance Duration", color: "#F5A623" },
    ],
  },
  {
    id: 3,
    timestamp: "01:37",
    excerpt: "\u2018I just want a knob\u2019 \u2014 physical control preference",
    color: "#AADC32",
    tags: [
      { label: "Physical Pref", color: "#AADC32" },
    ],
  },
  {
    id: 4,
    timestamp: "02:08",
    excerpt: "Physical: 0.9s vs Touchscreen: 4.2s \u2014 78% faster",
    color: "#A855F7",
    tags: [
      { label: "Comparative", color: "#A855F7" },
    ],
  },
]

export function AnnotationSidebar() {
  const router = useRouter()
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <aside className="flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-border">
        <div className="flex items-center gap-2.5">
          <h2 className="text-sm font-sans font-semibold text-foreground">
            Flagged Moments
          </h2>
          <span className="inline-flex items-center justify-center w-5 h-5 rounded-md bg-coral/15 text-coral text-[10px] font-mono font-bold">
            {annotations.length}
          </span>
        </div>
      </div>

      {/* Annotation list */}
      <div className="flex-1 overflow-y-auto px-4 py-3">
        <div className="flex flex-col gap-2.5">
          {annotations.map((ann) => (
            <div
              key={ann.id}
              className="relative group rounded-lg bg-surface border border-border hover:border-muted-foreground/20 transition-all overflow-hidden"
              onMouseEnter={() => setHoveredCard(ann.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Colored left border */}
              <div
                className="absolute left-0 top-0 bottom-0 w-[3px]"
                style={{ backgroundColor: ann.color }}
              />

              <div className="pl-4 pr-3 py-3">
                {/* Timestamp */}
                <div className="flex items-center justify-between mb-1.5">
                  <span
                    className="text-[10px] font-mono font-medium px-1.5 py-0.5 rounded"
                    style={{
                      backgroundColor: `${ann.color}12`,
                      color: ann.color,
                    }}
                  >
                    {ann.timestamp}
                  </span>

                  {/* Hover actions */}
                  <div
                    className={`flex items-center gap-1 transition-opacity ${
                      hoveredCard === ann.id ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <button
                      className="w-6 h-6 flex items-center justify-center rounded text-muted-foreground hover:text-foreground hover:bg-surface-hover transition-colors"
                      aria-label="Edit annotation"
                    >
                      <Pencil className="w-3 h-3" />
                    </button>
                    <button
                      className="w-6 h-6 flex items-center justify-center rounded text-muted-foreground hover:text-coral hover:bg-coral/10 transition-colors"
                      aria-label="Delete annotation"
                    >
                      <Trash2 className="w-3 h-3" />
                    </button>
                  </div>
                </div>

                {/* Excerpt */}
                <p className="text-[13px] font-sans text-foreground/90 leading-relaxed mb-2">
                  {ann.excerpt}
                </p>

                {/* Tags */}
                <div className="flex items-center gap-1.5 flex-wrap">
                  {ann.tags.map((tag) => (
                    <span
                      key={tag.label}
                      className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-sans font-medium"
                      style={{
                        backgroundColor: `${tag.color}18`,
                        color: tag.color,
                      }}
                    >
                      {tag.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Add annotation button */}
        <button className="flex items-center gap-2 mt-3 px-3 py-2 w-full rounded-lg border border-dashed border-border hover:border-muted-foreground/40 text-muted-foreground hover:text-foreground transition-colors group">
          <Plus className="w-3.5 h-3.5" />
          <span className="text-xs font-sans">Add annotation</span>
        </button>
      </div>

      {/* Bottom CTA */}
      <div className="p-4 border-t border-border">
        <button
          onClick={() => router.push("/assembly")}
          className="flex items-center justify-center gap-2 w-full bg-coral hover:bg-coral/90 text-primary-foreground px-5 py-3 rounded-xl text-sm font-sans font-semibold transition-colors"
        >
          Generate Brief
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </aside>
  )
}
