import * as React from "react"

const Button = React.forwardRef(
  ({ className = "", variant = "default", size = "default", asChild = false, children, ...props }, ref) => {
    // Base styles
    const baseStyles = "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
    
    // Variant styles
    const variantStyles = {
      default: "bg-primary text-primary-foreground hover:bg-primary/90",
      destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
      outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
      ghost: "hover:bg-accent hover:text-accent-foreground",
      link: "text-primary underline-offset-4 hover:underline",
    }
    
    // Size styles
    const sizeStyles = {
      default: "h-10 px-4 py-2",
      sm: "h-9 rounded-md px-3",
      lg: "h-11 rounded-md px-8",
      icon: "h-10 w-10",
    }
    
    // Combine all styles
    const buttonClasses = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`
    
    // If asChild is true, clone the child element and add the button props
    if (asChild && React.isValidElement(children)) {
      return React.cloneElement(children, {
        ...props,
        className: buttonClasses,
        ref,
      })
    }
    
    return (
      <button className={buttonClasses} ref={ref} {...props}>
        {children}
      </button>
    )
  }
)

Button.displayName = "Button"

export { Button }
