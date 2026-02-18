"use client"

import { Check, Play } from "lucide-react"

interface Tag {
  label: string
  color: string
}

interface VideoCardProps {
  participant: string
  name: string
  duration: string
  tags: Tag[]
  selected: boolean
  onToggle: () => void
  gradientFrom: string
  gradientTo: string
  thumbnailUrl?: string
}

export function VideoCard({
  participant,
  name,
  duration,
  tags,
  selected,
  onToggle,
  gradientFrom,
  gradientTo,
  thumbnailUrl,
}: VideoCardProps) {
  return (
    <div
      className={`group relative rounded-xl overflow-hidden transition-all duration-200 ${
        selected
          ? "ring-2 ring-lime shadow-[0_0_20px_rgba(170,220,50,0.15)]"
          : "ring-1 ring-border hover:ring-muted-foreground/30"
      }`}
    >
      {/* Thumbnail area */}
      <div
        className="relative aspect-video"
        style={
          !thumbnailUrl
            ? { background: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})` }
            : undefined
        }
      >
        {thumbnailUrl && (
          <img
            src={thumbnailUrl}
            alt={`Clip thumbnail for ${participant}`}
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}

        {/* Subtle film grain overlay */}
        <div className="absolute inset-0 opacity-20 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,0,0,0.03)_2px,rgba(0,0,0,0.03)_4px)]" />

        {/* Play icon center */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-11 h-11 rounded-full bg-[#1a1a1a]/60 backdrop-blur-sm flex items-center justify-center group-hover:bg-[#1a1a1a]/80 transition-colors">
            <Play className="w-5 h-5 text-foreground fill-foreground ml-0.5" />
          </div>
        </div>

        {/* Duration badge — bottom left */}
        <div className="absolute bottom-2 left-2">
          <span className="inline-flex items-center px-2 py-0.5 rounded bg-[#1a1a1a]/80 backdrop-blur-sm text-amber text-[11px] font-mono font-medium">
            {duration}
          </span>
        </div>

        {/* Checkbox — top right */}
        <button
          onClick={(e) => {
            e.stopPropagation()
            onToggle()
          }}
          aria-label={selected ? `Deselect ${name}` : `Select ${name}`}
          className={`absolute top-2 right-2 w-6 h-6 rounded-md flex items-center justify-center transition-all ${
            selected
              ? "bg-lime text-[#1a1a1a]"
              : "bg-[#1a1a1a]/50 backdrop-blur-sm text-foreground/50 hover:text-foreground border border-foreground/20"
          }`}
        >
          {selected && <Check className="w-4 h-4 stroke-[3]" />}
        </button>
      </div>

      {/* Info area */}
      <div className="bg-surface p-3 flex flex-col gap-2">
        <div>
          <p className="text-sm font-sans font-medium text-foreground leading-tight">
            {participant}
          </p>
          <p className="text-xs font-mono text-muted-foreground mt-0.5 truncate">
            {name}
          </p>
        </div>

        {/* Tags */}
        <div className="flex items-center gap-1.5 flex-wrap">
          {tags.map((tag) => (
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
  )
}
