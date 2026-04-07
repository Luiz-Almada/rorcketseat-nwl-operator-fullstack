import { type ButtonHTMLAttributes, forwardRef } from "react"
import { tv, type VariantProps } from "tailwind-variants"

const button = tv({
  base: "inline-flex items-center justify-center font-mono text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
  variants: {
    variant: {
      primary: "bg-green-primary text-black enabled:hover:bg-green-primary/90",
      secondary:
        "bg-secondary text-secondary-foreground enabled:hover:bg-secondary/80",
      outline:
        "border border-input bg-background enabled:hover:bg-accent enabled:hover:text-accent-foreground",
      ghost: "enabled:hover:bg-accent enabled:hover:text-accent-foreground",
      destructive:
        "bg-destructive text-destructive-foreground enabled:hover:bg-destructive/80"
    },
    size: {
      sm: "h-8 px-3 text-xs",
      md: "h-10 px-6 text-sm",
      lg: "h-12 px-8 text-base"
    }
  },
  defaultVariants: {
    variant: "primary",
    size: "md"
  }
})

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={button({ variant, size, className })}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = "Button"
