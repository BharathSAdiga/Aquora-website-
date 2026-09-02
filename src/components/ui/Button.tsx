import { forwardRef } from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost"
  size?: "sm" | "md" | "lg"
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-velora-primary disabled:opacity-50 disabled:pointer-events-none"
    
    const variants = {
      primary: "bg-velora-primary text-white hover:bg-velora-primary-hover",
      secondary: "bg-velora-secondary text-white hover:bg-velora-secondary-hover",
      outline: "border border-velora-primary text-velora-primary hover:bg-velora-primary/10",
      ghost: "text-velora-primary hover:bg-velora-primary/10",
    }
    
    const sizes = {
      sm: "h-9 px-4 text-sm",
      md: "h-11 px-8 text-base",
      lg: "h-14 px-10 text-lg",
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
