import { forwardRef } from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost"
  size?: "sm" | "md" | "lg"
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    // Accessibility: added focus-visible styling for keyboard navigation, reduced motion support via Tailwind
    const baseStyles = "inline-flex items-center justify-center rounded-none font-sans font-medium tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-velora-accent focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98] hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:hover:transform-none"
    
    // Premium feel: removed heavy border radius, added subtle shadows and border interplay
    const variants = {
      primary: "bg-velora-primary text-velora-accent hover:bg-velora-primary-hover shadow-sm hover:shadow-md border border-velora-primary hover:border-velora-accent/30",
      secondary: "bg-velora-secondary text-velora-bg hover:bg-velora-secondary-hover shadow-sm hover:shadow-md border border-velora-secondary hover:border-velora-accent/30",
      outline: "bg-transparent border border-velora-primary text-velora-primary hover:bg-velora-primary hover:text-velora-accent",
      ghost: "text-velora-primary hover:bg-velora-primary/5",
    }
    
    const sizes = {
      sm: "h-9 px-5 text-xs uppercase",
      md: "h-12 px-8 text-sm uppercase",
      lg: "h-14 px-10 text-base uppercase",
    }
    
    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
