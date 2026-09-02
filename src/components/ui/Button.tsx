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
    const baseStyles = "inline-flex items-center justify-center font-sans font-medium tracking-wider transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-velora-purple-light focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98] hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:hover:transform-none cursor-pointer"
    
    // Beige, Purple, and Black Luxury Palette
    const variants = {
      primary: "bg-velora-purple text-velora-beige hover:bg-velora-beige hover:text-velora-black shadow-lg border border-velora-beige/40 hover:border-velora-beige font-medium",
      secondary: "bg-velora-beige text-velora-black hover:bg-velora-beige-light hover:text-black shadow-md border border-velora-beige hover:border-velora-purple font-semibold",
      outline: "bg-transparent border border-velora-beige/50 text-velora-beige hover:bg-velora-purple hover:border-velora-purple hover:text-velora-beige shadow-sm font-medium",
      ghost: "text-velora-beige hover:text-white hover:bg-velora-purple/20",
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
