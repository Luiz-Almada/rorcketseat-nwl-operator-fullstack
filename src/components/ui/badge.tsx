import { tv, type VariantProps } from "tailwind-variants"
import { cn } from "@/lib/utils"

const badge = tv({
  base: "inline-flex items-center gap-2 font-mono text-xs",
  variants: {
    variant: {
      critical: "text-accent-red",
      warning: "text-accent-amber",
      good: "text-accent-green",
      verdict: "text-accent-red text-sm"
    }
  },
  defaultVariants: {
    variant: "good"
  }
})

interface BadgeProps extends VariantProps<typeof badge> {
  className?: string
}

export function Badge({
  variant,
  className,
  children
}: BadgeProps & { children: React.ReactNode }) {
  return (
    <span className={badge({ variant, className })}>
      <span
        className={cn(
          "w-2 h-2 rounded-full",
          variant === "critical" && "bg-accent-red",
          variant === "warning" && "bg-accent-amber",
          variant === "good" && "bg-accent-green",
          variant === "verdict" && "bg-accent-red"
        )}
      />
      {children}
    </span>
  )
}
