import { forwardRef, cloneElement, isValidElement } from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost"
  size?: "sm" | "md" | "lg"
  asChild?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", asChild = false, children, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center font-sans font-medium tracking-[0.18em] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aquora-gold focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98] hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:hover:transform-none cursor-pointer rounded-sm"
    
    // Luxury Charcoal & Champagne Gold Palette
    const variants = {
      primary: "bg-aquora-gold text-aquora-black hover:bg-aquora-gold-light hover:shadow-[0_0_20px_rgba(212,175,55,0.35)] shadow-md border border-aquora-gold font-semibold uppercase",
      secondary: "bg-aquora-surface text-aquora-gold-light hover:bg-aquora-surface-hover hover:text-white shadow-md border border-aquora-gold/40 hover:border-aquora-gold font-medium uppercase",
      outline: "bg-transparent border border-aquora-gold/60 text-aquora-gold hover:bg-aquora-gold/10 hover:border-aquora-gold hover:text-aquora-gold-light shadow-sm font-medium uppercase",
      ghost: "text-aquora-gold/90 hover:text-aquora-gold-light hover:bg-aquora-gold/10 uppercase",
    }
    
    const sizes = {
      sm: "h-9 px-5 text-[11px]",
      md: "h-11 px-7 text-xs",
      lg: "h-13 px-9 text-xs md:text-sm",
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
