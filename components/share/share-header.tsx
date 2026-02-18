"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export function ShareHeader() {
  return (
    <header className="flex items-center justify-between px-5 py-3 border-b border-border bg-[#141414]">
      <div className="flex items-center gap-3">
        <Link
          href="/preview"
          className="flex items-center gap-2 text-sm font-sans text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Preview
        </Link>
        <div className="w-px h-5 bg-border" />
        <h1 className="text-sm font-sans font-semibold text-foreground tracking-tight">
          Share Brief
        </h1>
      </div>

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
      </div>
    </header>
  )
}
