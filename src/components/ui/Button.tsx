import { forwardRef, cloneElement, isValidElement } from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost"
  size?: "sm" | "md" | "lg"
  asChild?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", asChild = false, children, ...props }, ref) => {
    // Accessibility: added focus-visible styling for keyboard navigation, reduced motion support via Tailwind
    const baseStyles = "inline-flex items-center justify-center font-sans font-medium tracking-wider transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-velora-accent focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98] hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:hover:transform-none cursor-pointer"
    
    // Premium feel: clean proportions, architectural borders, subtle luxury tones
    const variants = {
      primary: "bg-velora-primary text-velora-accent hover:bg-velora-primary-hover shadow-sm hover:shadow-md border border-velora-primary hover:border-velora-accent/40",
      secondary: "bg-velora-secondary text-velora-bg hover:bg-velora-secondary-hover shadow-sm hover:shadow-md border border-velora-secondary hover:border-velora-accent/40",
      outline: "bg-transparent border border-velora-primary/30 text-velora-primary hover:bg-velora-primary hover:text-velora-accent",
      ghost: "text-velora-primary hover:bg-velora-primary/5",
    }
    
    const sizes = {
      sm: "h-9 px-5 text-xs uppercase",
      md: "h-11 px-7 text-xs uppercase",
      lg: "h-13 px-9 text-sm uppercase",
    }

    const computedClassName = cn(baseStyles, variants[variant], sizes[size], className)

    if (asChild && isValidElement(children)) {
      return cloneElement(children as React.ReactElement<{ className?: string }>, {
        className: cn(computedClassName, (children.props as { className?: string }).className),
        ...props,
      })
    }
    
    return (
      <button
        ref={ref}
        className={computedClassName}
        {...props}
      >
        {children}
      </button>
    )
  }
)
Button.displayName = "Button"

export { Button }
