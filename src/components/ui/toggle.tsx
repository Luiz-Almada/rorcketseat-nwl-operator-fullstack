"use client"

import { Switch } from "@base-ui/react/switch"
import { useId } from "react"
import { cn } from "@/lib/utils"

export interface ToggleProps {
  checked: boolean
  onCheckedChange: (checked: boolean) => void
  label: string
  className?: string
}

export function Toggle({
  checked,
  onCheckedChange,
  label,
  className
}: ToggleProps) {
  const id = useId()

  return (
    <label
      htmlFor={id}
      className={cn("inline-flex items-center gap-3 cursor-pointer", className)}
    >
      <Switch.Root
        id={id}
        checked={checked}
        onCheckedChange={onCheckedChange}
        className={cn(
          "relative inline-flex h-[22px] w-[40px] items-center rounded-full p-[3px] transition-colors duration-200",
          checked ? "bg-accent-green" : "bg-border-primary"
        )}
      >
        <Switch.Thumb
          className={cn(
            "block h-4 w-4 rounded-full bg-black transition-transform duration-200",
            checked ? "translate-x-[18px]" : "translate-x-0"
          )}
        />
      </Switch.Root>
      <span
        className={cn(
          "font-mono text-xs leading-none",
          checked ? "text-accent-green" : "text-text-secondary"
        )}
      >
        {label}
      </span>
    </label>
  )
}
