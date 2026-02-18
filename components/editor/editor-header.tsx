"use client"

import { ChevronRight, Plus } from "lucide-react"
import Link from "next/link"

export function EditorHeader() {
  return (
    <header className="flex items-center justify-between px-5 py-3 border-b border-border bg-[#141414]">
      {/* Left: Logo */}
      <div className="flex items-center gap-2">
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <svg
            width="24"
            height="24"
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
          <span className="text-foreground font-sans text-lg font-bold tracking-tight">
            InsightCuts
          </span>
        </Link>
      </div>

      {/* Center: Breadcrumb */}
      <nav aria-label="Breadcrumb" className="hidden md:flex items-center gap-1.5">
        <Link href="/" className="text-xs font-mono text-muted-foreground hover:text-foreground transition-colors">
          In-Vehicle UX
        </Link>
        <ChevronRight className="w-3 h-3 text-muted-foreground/40" />
        <span className="text-xs font-mono text-muted-foreground">
          Q1 2025
        </span>
        <ChevronRight className="w-3 h-3 text-muted-foreground/40" />
        <span className="text-xs font-mono text-muted-foreground">
          Session 03
        </span>
        <ChevronRight className="w-3 h-3 text-muted-foreground/40" />
        <span className="text-xs font-mono text-foreground font-medium">
          Participant 07
        </span>
      </nav>

      {/* Right: Actions */}
      <div className="flex items-center gap-4">
        <button className="flex items-center gap-2 bg-coral hover:bg-coral/90 text-primary-foreground px-4 py-2 rounded-lg text-sm font-sans font-medium transition-colors">
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
