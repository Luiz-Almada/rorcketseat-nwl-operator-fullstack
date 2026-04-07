import { cn } from "@/lib/utils"

type DiffType = "removed" | "added" | "context"

interface DiffLineProps {
  type: DiffType
  content: string
}

export function DiffLine({ type, content }: DiffLineProps) {
  const prefix = type === "removed" ? "-" : type === "added" ? "+" : " "

  return (
    <div
      className={cn(
        "flex gap-2 px-4 py-2 font-mono text-sm w-full",
        type === "removed" && "bg-[#1A0A0A] text-text-secondary",
        type === "added" && "bg-[#0A1A0F]",
        type === "context" && "bg-transparent"
      )}
    >
      <span
        className={cn(
          "w-4 text-right",
          type === "removed" && "text-accent-red",
          type === "added" && "text-accent-green",
          type === "context" && "text-text-tertiary"
        )}
      >
        {prefix}
      </span>
      <span className={cn(type === "added" && "text-text-primary")}>
        {content}
      </span>
    </div>
  )
}
