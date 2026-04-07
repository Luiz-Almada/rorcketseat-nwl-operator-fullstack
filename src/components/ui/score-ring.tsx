import { cn } from "@/lib/utils"

interface ScoreRingProps {
  score: number
  maxScore?: number
  size?: number
  strokeWidth?: number
  className?: string
}

export function ScoreRing({
  score,
  maxScore = 10,
  size = 180,
  strokeWidth = 4,
  className
}: ScoreRingProps) {
  const percentage = Math.min(score / maxScore, 1)
  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius
  const offset = circumference * (1 - percentage)

  const getColor = () => {
    if (percentage >= 0.7) return "var(--color-accent-green)"
    if (percentage >= 0.4) return "var(--color-accent-amber)"
    return "var(--color-accent-red)"
  }

  return (
    <div
      className={cn(
        "relative inline-flex items-center justify-center",
        className
      )}
      style={{ width: size, height: size }}
    >
      <svg width={size} height={size} className="absolute" aria-hidden="true">
        <title>Score Ring</title>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="var(--color-border-primary)"
          strokeWidth={strokeWidth}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={getColor()}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
          className="transition-all duration-500"
        />
      </svg>
      <div className="flex items-baseline gap-0.5">
        <span className="text-5xl font-mono font-bold text-text-primary leading-none">
          {score.toFixed(1)}
        </span>
        <span className="text-base font-mono text-text-tertiary leading-none">
          /{maxScore}
        </span>
      </div>
    </div>
  )
}
