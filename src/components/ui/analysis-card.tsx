import { createContext, useContext } from "react"
import { cn } from "@/lib/utils"

interface AnalysisCardContextValue {
  variant: "critical" | "warning" | "good"
}

const AnalysisCardContext = createContext<AnalysisCardContextValue>({
  variant: "good"
})

interface AnalysisCardRootProps {
  variant?: "critical" | "warning" | "good"
  className?: string
  children?: React.ReactNode
}

export function AnalysisCardRoot({
  variant = "good",
  className,
  children
}: AnalysisCardRootProps) {
  return (
    <AnalysisCardContext.Provider value={{ variant }}>
      <div
        className={cn("border border-border-primary rounded p-5", className)}
      >
        {children}
      </div>
    </AnalysisCardContext.Provider>
  )
}

export function AnalysisCardHeader({
  className,
  children
}: {
  className?: string
  children?: React.ReactNode
}) {
  const { variant } = useContext(AnalysisCardContext)

  const label =
    variant === "critical"
      ? "critical"
      : variant === "warning"
        ? "warning"
        : "good"

  return (
    <div className={cn("flex items-center gap-2 mb-3", className)}>
      {children || (
        <span
          className={cn(
            "inline-flex items-center gap-2 font-mono text-xs",
            variant === "critical" && "text-accent-red",
            variant === "warning" && "text-accent-amber",
            variant === "good" && "text-accent-green"
          )}
        >
          <span
            className={cn(
              "w-2 h-2 rounded-full",
              variant === "critical" && "bg-accent-red",
              variant === "warning" && "bg-accent-amber",
              variant === "good" && "bg-accent-green"
            )}
          />
          {label}
        </span>
      )}
    </div>
  )
}

export function AnalysisCardTitle({
  className,
  children
}: {
  className?: string
  children?: React.ReactNode
}) {
  return (
    <h3 className={cn("font-mono text-sm text-text-primary mb-2", className)}>
      {children}
    </h3>
  )
}

export function AnalysisCardDescription({
  className,
  children
}: {
  className?: string
  children?: React.ReactNode
}) {
  return (
    <p
      className={cn(
        "font-mono text-xs text-text-secondary leading-relaxed",
        className
      )}
    >
      {children}
    </p>
  )
}
