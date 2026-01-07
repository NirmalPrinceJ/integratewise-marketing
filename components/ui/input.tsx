import * as React from 'react'

import { cn } from '@/lib/utils'

function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        'file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground',
        'h-11 w-full min-w-0 rounded-xl border-2 border-border/50 bg-background px-4 py-2.5 text-base transition-all duration-200 outline-none',
        'hover:border-border',
        'focus:border-primary focus:ring-4 focus:ring-primary/10',
        'file:inline-flex file:h-8 file:border-0 file:bg-primary/10 file:text-primary file:text-sm file:font-medium file:rounded-lg file:px-3 file:mr-3',
        'disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-muted/50',
        'aria-invalid:ring-destructive/20 aria-invalid:border-destructive aria-invalid:focus:ring-destructive/10',
        'md:text-sm',
        className,
      )}
      {...props}
    />
  )
}

export { Input }
