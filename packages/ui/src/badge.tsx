import * as React from "react"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Badge({ className = "", ...props }: BadgeProps) {
  return (
    <div
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 dark:border-slate-800 dark:focus:ring-slate-300 ${className}`}
      {...props}
    />
  )
}
