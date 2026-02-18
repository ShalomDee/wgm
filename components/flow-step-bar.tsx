"use client"

import { useRouter } from "next/navigation"
import { Check } from "lucide-react"

const steps = [
  { label: "Select Clips", path: "/" },
  { label: "Annotate", path: "/editor" },
  { label: "Assemble", path: "/assembly" },
  { label: "Preview", path: "/preview" },
  { label: "Share", path: "/share" },
]

interface FlowStepBarProps {
  currentStep: number // 1-indexed: 1=Select, 2=Annotate, 3=Assemble, 4=Preview, 5=Share
}

export function FlowStepBar({ currentStep }: FlowStepBarProps) {
  const router = useRouter()

  return (
    <nav
      className="flex items-center justify-center gap-1 px-4 py-2 bg-[#141414] border-b border-border/50"
      aria-label="Flow steps"
    >
      {steps.map((step, i) => {
        const stepNum = i + 1
        const isDone = stepNum < currentStep
        const isActive = stepNum === currentStep
        const isInactive = stepNum > currentStep

        return (
          <div key={step.label} className="flex items-center gap-1">
            <button
              onClick={() => {
                if (isDone) router.push(step.path)
              }}
              disabled={isInactive}
              className={`
                flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-sans font-medium transition-all
                ${isActive ? "bg-coral/15 text-coral" : ""}
                ${isDone ? "text-lime hover:bg-lime/10 cursor-pointer" : ""}
                ${isInactive ? "text-[#555555] cursor-default" : ""}
              `}
              aria-current={isActive ? "step" : undefined}
            >
              {isDone ? (
                <Check className="w-3 h-3 text-lime" strokeWidth={3} />
              ) : (
                <span
                  className={`
                    flex items-center justify-center w-4 h-4 rounded-full text-[9px] font-mono font-bold border
                    ${isActive ? "border-coral text-coral" : ""}
                    ${isInactive ? "border-[#555555] text-[#555555]" : ""}
                  `}
                >
                  {stepNum}
                </span>
              )}
              {step.label}
            </button>

            {/* Connector line */}
            {i < steps.length - 1 && (
              <div
                className={`w-6 h-px ${
                  isDone ? "bg-lime/40" : "bg-[#333333]"
                }`}
              />
            )}
          </div>
        )
      })}
    </nav>
  )
}
