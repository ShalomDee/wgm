"use client"

import { ChevronDown, ChevronRight, Folder, FolderOpen, Film } from "lucide-react"

interface VideoFile {
  name: string
  duration: string
}

interface SessionFolder {
  label: string
  expanded?: boolean
  files?: VideoFile[]
}

const sessions: SessionFolder[] = [
  { label: "Session 01" },
  { label: "Session 02" },
  {
    label: "Session 03",
    expanded: true,
    files: [
      { name: "S03_discovery_task.mp4", duration: "08:17" },
      { name: "S03_drive_session1.mp4", duration: "14:03" },
      { name: "S03_debrief.mp4", duration: "06:51" },
      { name: "S03_drive_session2.mp4", duration: "11:29" },
    ],
  },
  { label: "Session 04" },
  { label: "Session 05" },
  { label: "Session 06" },
  { label: "Session 07" },
  { label: "Session 08" },
]

export function FolderSidebar() {
  return (
    <aside className="w-64 shrink-0 border-r border-border bg-[#141414] flex flex-col overflow-hidden">
      <div className="px-4 py-3 border-b border-border">
        <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
          Project
        </p>
        <p className="text-sm font-sans font-medium text-foreground mt-1">
          In-Vehicle UX Study
        </p>
      </div>

      <div className="px-4 py-3 border-b border-border">
        <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
          Sprint
        </p>
        <p className="text-sm font-sans font-medium text-foreground mt-1">
          Q1 2025 / Sessions
        </p>
      </div>

      <nav className="flex-1 overflow-y-auto px-2 py-3" aria-label="Session folders">
        <ul className="flex flex-col gap-0.5">
          {sessions.map((session) => (
            <li key={session.label}>
              <button
                className={`w-full flex items-center gap-2 px-2 py-1.5 rounded-md text-sm font-sans transition-colors ${
                  session.expanded
                    ? "bg-secondary text-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                }`}
              >
                {session.expanded ? (
                  <ChevronDown className="w-3.5 h-3.5 shrink-0 text-muted-foreground" />
                ) : (
                  <ChevronRight className="w-3.5 h-3.5 shrink-0 text-muted-foreground" />
                )}
                {session.expanded ? (
                  <FolderOpen className="w-4 h-4 shrink-0 text-amber" />
                ) : (
                  <Folder className="w-4 h-4 shrink-0 text-muted-foreground" />
                )}
                <span className="truncate">{session.label}</span>
              </button>

              {session.expanded && session.files && (
                <ul className="ml-5 mt-0.5 flex flex-col gap-0.5 border-l border-border pl-3">
                  {session.files.map((file) => (
                    <li key={file.name}>
                      <button className="w-full flex items-center gap-2 px-2 py-1.5 rounded-md text-xs text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors group">
                        <Film className="w-3.5 h-3.5 shrink-0 text-coral/70 group-hover:text-coral" />
                        <span className="truncate font-mono">{file.name}</span>
                        <span className="ml-auto text-[10px] font-mono text-amber shrink-0">
                          {file.duration}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>

      <div className="px-4 py-3 border-t border-border">
        <p className="text-[10px] font-mono text-muted-foreground">
          8 sessions &middot; 24 clips
        </p>
      </div>
    </aside>
  )
}
