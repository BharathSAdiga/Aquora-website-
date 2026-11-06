import { forwardRef, cloneElement, isValidElement } from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost"
  size?: "sm" | "md" | "lg"
  asChild?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", asChild = false, children, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center font-sans font-medium tracking-[0.2em] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 dark:focus-visible:ring-aquora-gold focus-visible:ring-aquora-green focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98] hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:hover:transform-none cursor-pointer rounded-full"
    
    // Luxury Palette: Luminous Gold in Dark Mode, Rich Emerald Green in Light Mode
    const variants = {
      primary: "bg-gradient-to-r dark:from-[#E8D5B5] dark:to-[#F5E6CC] from-[#1A633E] to-[#278654] dark:text-[#0B0B0B] text-white hover:dark:from-white hover:dark:to-[#E8D5B5] hover:from-[#134D30] hover:to-[#1E7044] shadow-[0_10px_30px_-8px_rgba(26,99,62,0.4)] dark:shadow-[0_10px_30px_-8px_rgba(212,175,55,0.3)] border dark:border-aquora-beige/60 border-transparent font-semibold uppercase",
      secondary: "dark:bg-[#181818]/90 bg-white/90 backdrop-blur-md dark:text-aquora-beige text-aquora-foreground hover:dark:text-white hover:text-black dark:hover:bg-[#222222] hover:bg-stone-100 shadow-[0_8px_25px_-6px_rgba(0,0,0,0.1)] dark:shadow-[0_8px_25px_-6px_rgba(0,0,0,0.6)] border dark:border-aquora-beige/20 border-black/10 hover:border-aquora-green/60 font-medium uppercase",
      outline: "bg-transparent border dark:border-aquora-beige/30 border-black/15 dark:text-aquora-beige text-aquora-foreground hover:dark:bg-aquora-green/20 hover:bg-aquora-green/10 hover:border-aquora-green dark:hover:text-white hover:text-aquora-green-light shadow-xs font-medium uppercase",
      ghost: "text-aquora-foreground/80 dark:hover:text-aquora-beige hover:text-aquora-green-light dark:hover:bg-white/5 hover:bg-black/5 uppercase",
    }
    
    const sizes = {
      sm: "h-9 px-5 text-[10px]",
      md: "h-11 px-7 text-xs",
      lg: "h-13 px-9 text-xs sm:text-sm",
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
