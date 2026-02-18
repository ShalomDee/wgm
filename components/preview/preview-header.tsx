"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { ArrowRight, Pencil } from "lucide-react"

export function PreviewHeader() {
  const router = useRouter()

  return (
    <header className="flex items-center justify-between px-5 py-3 border-b border-border bg-[#141414]">
      {/* Left: Title */}
      <div className="flex items-center gap-3">
        <Link href="/assembly" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
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
        </Link>
        <div className="w-px h-5 bg-border" />
        <h1 className="text-sm font-sans font-semibold text-foreground tracking-tight">
          Preview Brief
        </h1>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-3">
        <button className="flex items-center gap-2 px-3.5 py-2 rounded-lg text-sm font-sans font-medium text-muted-foreground hover:text-foreground border border-border hover:border-foreground/20 transition-colors">
          <Pencil className="w-3.5 h-3.5" />
          Edit
        </button>
        <button
          onClick={() => router.push("/share")}
          className="flex items-center gap-2 bg-coral hover:bg-coral/90 text-primary-foreground px-4 py-2 rounded-lg text-sm font-sans font-medium transition-colors"
        >
          Share
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </header>
  )
}
