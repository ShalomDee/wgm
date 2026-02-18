"use client"

import { useState } from "react"
import { Link2, Check } from "lucide-react"

export function CopyLinkBar() {
  const [copied, setCopied] = useState(false)

  const shareUrl = "https://insightcuts.app/brief/q1-invehicle-ux-2025"

  const handleCopy = () => {
    navigator.clipboard.writeText(shareUrl).catch(() => {
      /* clipboard may not be available in all contexts */
    })
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-0 border border-border rounded-lg overflow-hidden bg-[#1e1e1e]">
        {/* Link icon */}
        <div className="flex items-center gap-2 px-3 py-2.5 border-r border-border/50 shrink-0">
          <Link2 className="w-4 h-4 text-muted-foreground/60" />
        </div>

        {/* URL display */}
        <div className="flex-1 px-3 py-2.5 min-w-0">
          <span className="text-xs font-mono text-foreground/60 truncate block">
            {shareUrl}
          </span>
        </div>

        {/* Copy button */}
        <button
          onClick={handleCopy}
          className={`flex items-center gap-2 px-5 py-2.5 text-sm font-sans font-semibold transition-all shrink-0 ${
            copied
              ? "bg-lime/20 text-lime"
              : "bg-coral hover:bg-coral/90 text-white"
          }`}
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5" />
              Copied
            </>
          ) : (
            "Copy"
          )}
        </button>
      </div>
    </div>
  )
}
