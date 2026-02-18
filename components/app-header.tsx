"use client"

import { Plus } from "lucide-react"

export function AppHeader() {
  return (
    <header className="flex items-center justify-between px-5 py-3 border-b border-border bg-[#141414]">
      <div className="flex items-center gap-2">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className="text-coral"
          aria-hidden="true"
        >
          <path
            d="M4 4h7v7H4V4Z"
            fill="currentColor"
            opacity="0.9"
          />
          <path
            d="M13 4h7v7h-7V4Z"
            fill="currentColor"
            opacity="0.6"
          />
          <path
            d="M4 13h7v7H4v-7Z"
            fill="currentColor"
            opacity="0.6"
          />
          <path
            d="M13 13h7v7h-7v-7Z"
            fill="currentColor"
            opacity="0.3"
          />
        </svg>
        <span className="text-foreground font-sans text-lg font-bold tracking-tight">
          InsightCuts
        </span>
      </div>

      <div className="flex items-center gap-4">
        <nav className="hidden md:flex items-center gap-6 mr-4">
          <button className="text-muted-foreground hover:text-foreground text-sm font-sans transition-colors">
            Library
          </button>
          <button className="text-muted-foreground hover:text-foreground text-sm font-sans transition-colors">
            Briefs
          </button>
          <button className="text-muted-foreground hover:text-foreground text-sm font-sans transition-colors">
            Tags
          </button>
        </nav>

        <button
          className="flex items-center gap-2 bg-coral hover:bg-coral/90 text-primary-foreground px-4 py-2 rounded-lg text-sm font-sans font-medium transition-colors"
          aria-label="Create new brief"
        >
          <Plus className="w-4 h-4" />
          New Brief
        </button>

        <div
          className="w-8 h-8 rounded-full bg-gradient-to-br from-coral/80 to-amber/80 flex items-center justify-center text-xs font-bold text-[#1a1a1a] font-sans"
          aria-label="User avatar"
        >
          JK
        </div>
      </div>
    </header>
  )
}
