import { cn } from "@/lib/utils"

interface CodeInputProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  className?: string
}

export function CodeInput({
  value,
  onChange,
  placeholder = "paste your code here...",
  className
}: CodeInputProps) {
  return (
    <div
      className={cn(
        "border border-border-primary rounded overflow-hidden bg-bg-input",
        className
      )}
    >
      <div className="flex items-center gap-3 h-10 px-4 border-b border-border-primary">
        <span className="w-2.5 h-2.5 rounded-full bg-accent-red" />
        <span className="w-2.5 h-2.5 rounded-full bg-accent-amber" />
        <span className="w-2.5 h-2.5 rounded-full bg-accent-green" />
      </div>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full h-[360px] p-4 bg-transparent font-mono text-sm text-text-primary placeholder:text-text-tertiary resize-none focus:outline-none"
        spellCheck={false}
      />
    </div>
  )
}
