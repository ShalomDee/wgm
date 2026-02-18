"use client"

import { Send, FileImage, Mail, Hash, Play } from "lucide-react"

/* ──────────── Slack Card ──────────── */
function SlackCard() {
  return (
    <div className="flex flex-col bg-card border border-border rounded-xl overflow-hidden group hover:border-violet/40 transition-colors">
      {/* Header */}
      <div className="flex items-center gap-3 px-4 pt-4 pb-3">
        <div className="w-9 h-9 rounded-lg bg-violet/15 flex items-center justify-center shrink-0">
          <svg viewBox="0 0 24 24" className="w-5 h-5 text-violet" fill="currentColor" aria-hidden="true">
            <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" />
          </svg>
        </div>
        <div>
          <h3 className="text-sm font-sans font-semibold text-foreground">Send to Slack</h3>
          <p className="text-[11px] font-mono text-muted-foreground">Post to a channel</p>
        </div>
      </div>

      {/* Slack preview mockup */}
      <div className="mx-4 mb-4 flex flex-col gap-0 rounded-lg border border-border/60 bg-[#1e1e1e] overflow-hidden">
        {/* Channel bar */}
        <div className="flex items-center gap-2 px-3 py-2 border-b border-border/40">
          <Hash className="w-3.5 h-3.5 text-muted-foreground/60" />
          <span className="text-[11px] font-mono text-foreground/80">ux-research</span>
        </div>
        {/* Message content */}
        <div className="flex flex-col gap-2.5 px-3 py-3">
          <div className="flex items-start gap-2.5">
            <div className="w-6 h-6 rounded bg-coral/20 flex items-center justify-center shrink-0 mt-0.5">
              <span className="text-[9px] font-mono font-bold text-coral">IC</span>
            </div>
            <div className="flex flex-col gap-1.5 min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-sans font-semibold text-foreground">InsightCuts</span>
                <span className="text-[10px] font-mono text-muted-foreground/50">2:34 PM</span>
              </div>
              <p className="text-[11px] font-sans text-foreground/70 leading-relaxed">
                Q1 In-Vehicle Brief is ready — 42% control failure rate, 2.4s avg glance duration, 4 flagged moments.
              </p>
              {/* Embedded card thumbnail */}
              <div className="flex items-center gap-2.5 mt-1 p-2 rounded-md bg-[#151515] border border-border/40">
                <div className="relative w-14 h-9 rounded overflow-hidden shrink-0">
                  <img
                    src="/image2.jpg"
                    alt="Brief thumbnail"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <Play className="w-3 h-3 text-coral fill-coral" />
                  </div>
                </div>
                <div className="flex flex-col gap-0.5 min-w-0">
                  <span className="text-[10px] font-sans font-medium text-foreground/80 truncate">
                    In-Vehicle UX Friction Map
                  </span>
                  <span className="text-[9px] font-mono text-muted-foreground/50">1m 42s</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Send button */}
      <div className="px-4 pb-4">
        <button className="w-full flex items-center justify-center gap-2 bg-violet hover:bg-violet/90 text-white px-4 py-2.5 rounded-lg text-sm font-sans font-semibold transition-colors">
          <Send className="w-3.5 h-3.5" />
          Send
        </button>
      </div>
    </div>
  )
}

/* ──────────── Presentation Card ──────────── */
function PresentationCard() {
  return (
    <div className="flex flex-col bg-card border border-border rounded-xl overflow-hidden group hover:border-amber/40 transition-colors">
      {/* Header */}
      <div className="flex items-center gap-3 px-4 pt-4 pb-3">
        <div className="w-9 h-9 rounded-lg bg-amber/15 flex items-center justify-center shrink-0">
          <FileImage className="w-5 h-5 text-amber" />
        </div>
        <div>
          <h3 className="text-sm font-sans font-semibold text-foreground">Add to Deck</h3>
          <p className="text-[11px] font-mono text-muted-foreground">Export as slide</p>
        </div>
      </div>

      {/* Slide preview mockup */}
      <div className="mx-4 mb-4 rounded-lg border border-border/60 overflow-hidden">
        <div className="relative aspect-[16/9] bg-[#0e0e0e] overflow-hidden">
          <img
            src="/image2.jpg"
            alt="Brief thumbnail"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />

          {/* Coral accent line top */}
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-coral" />

          {/* Slide content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6">
            <h4
              className="text-[13px] font-sans font-bold text-foreground text-center leading-tight tracking-tight"
              style={{ fontFamily: "var(--font-bricolage), sans-serif" }}
            >
              In-Vehicle UX Friction Map Q1
            </h4>
            <div className="flex items-center gap-3">
              <span className="text-[9px] font-mono font-bold text-coral bg-coral/10 px-1.5 py-0.5 rounded">42% fail</span>
              <span className="text-[9px] font-mono font-bold text-amber bg-amber/10 px-1.5 py-0.5 rounded">2.4s glance</span>
              <span className="text-[9px] font-mono font-bold text-lime bg-lime/10 px-1.5 py-0.5 rounded">58% phys</span>
            </div>
          </div>

          <div className="absolute bottom-3 left-6 right-6 h-px bg-border/40" />
          <span className="absolute bottom-1.5 right-6 text-[7px] font-mono text-muted-foreground/30">INSIGHTCUTS</span>
        </div>
      </div>

      {/* Export button */}
      <div className="px-4 pb-4">
        <button className="w-full flex items-center justify-center gap-2 bg-amber hover:bg-amber/90 text-[#1a1a1a] px-4 py-2.5 rounded-lg text-sm font-sans font-semibold transition-colors">
          <FileImage className="w-3.5 h-3.5" />
          Export Slide
        </button>
      </div>
    </div>
  )
}

/* ──────────── Email Card ──────────── */
function EmailCard() {
  return (
    <div className="flex flex-col bg-card border border-border rounded-xl overflow-hidden group hover:border-lime/40 transition-colors">
      {/* Header */}
      <div className="flex items-center gap-3 px-4 pt-4 pb-3">
        <div className="w-9 h-9 rounded-lg bg-lime/15 flex items-center justify-center shrink-0">
          <Mail className="w-5 h-5 text-lime" />
        </div>
        <div>
          <h3 className="text-sm font-sans font-semibold text-foreground">Draft Email</h3>
          <p className="text-[11px] font-mono text-muted-foreground">Compose with brief</p>
        </div>
      </div>

      {/* Email preview mockup */}
      <div className="mx-4 mb-4 flex flex-col gap-0 rounded-lg border border-border/60 bg-[#1e1e1e] overflow-hidden">
        {/* Subject line */}
        <div className="flex items-center gap-2 px-3 py-2.5 border-b border-border/40">
          <span className="text-[10px] font-mono text-muted-foreground/50 shrink-0">Subject:</span>
          <span className="text-[11px] font-sans font-medium text-foreground/80 truncate">
            Q1 In-Vehicle UX Brief — Control Friction & Safety Signals
          </span>
        </div>

        {/* To line */}
        <div className="flex items-center gap-2 px-3 py-2 border-b border-border/40">
          <span className="text-[10px] font-mono text-muted-foreground/50 shrink-0">To:</span>
          <div className="flex items-center gap-1.5">
            <span className="text-[10px] font-mono text-muted-foreground/40 bg-[#2a2a2a] px-2 py-0.5 rounded">team@company.com</span>
          </div>
        </div>

        {/* Body preview */}
        <div className="px-3 py-3">
          <p className="text-[11px] font-sans text-foreground/60 leading-relaxed">
            Hi team — attached is a 1m 42s brief from Q1 sessions. Key finding: 42% of drivers failed to locate core controls within 5 seconds...
          </p>
          <div className="flex items-center gap-2 mt-2.5 pt-2.5 border-t border-border/30">
            <div className="w-4 h-4 rounded bg-coral/20 flex items-center justify-center">
              <Play className="w-2 h-2 text-coral fill-coral" />
            </div>
            <span className="text-[10px] font-mono text-muted-foreground/50">
              Brief attached (1m 42s)
            </span>
          </div>
        </div>
      </div>

      {/* Draft button */}
      <div className="px-4 pb-4">
        <button className="w-full flex items-center justify-center gap-2 bg-lime hover:bg-lime/90 text-[#1a1a1a] px-4 py-2.5 rounded-lg text-sm font-sans font-semibold transition-colors">
          <Mail className="w-3.5 h-3.5" />
          Draft
        </button>
      </div>
    </div>
  )
}

/* ──────────── Combined Export ──────────── */
export function ExportCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <SlackCard />
      <PresentationCard />
      <EmailCard />
    </div>
  )
}
