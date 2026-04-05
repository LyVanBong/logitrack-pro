import { ReactNode, ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "danger" | "ghost" | "outline";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: "sm" | "md" | "lg" | "icon";
  fullWidth?: boolean;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  className = "",
  ...props
}: ButtonProps) {
  
  // Base classes for all variants
  const baseClasses = "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tt-primary disabled:pointer-events-none disabled:opacity-50";
  
  const variantClasses: Record<ButtonVariant, string> = {
    primary: "bg-tt-primary text-white hover:bg-slate-800",
    secondary: "bg-tt-secondary text-white hover:bg-emerald-700",
    danger: "bg-tt-danger text-white hover:bg-red-700",
    ghost: "bg-transparent text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800",
    outline: "border border-slate-200 bg-transparent hover:bg-slate-100 text-slate-900 dark:border-slate-800 dark:hover:bg-slate-800 dark:text-slate-50",
  };
  
  // Sizes
  const sizeClasses = {
    sm: "h-9 px-3",
    md: "h-10 py-2 px-4",
    lg: "h-14 px-8 text-lg font-bold",
    icon: "h-10 w-10 shrink-0",
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${
        fullWidth ? "w-full" : ""
      } ${className}`.trim()}
      {...props}
    >
      {children}
    </button>
  );
}
