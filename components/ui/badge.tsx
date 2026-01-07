import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center justify-center rounded-full border px-3 py-1 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3.5 gap-1.5 [&>svg]:pointer-events-none focus-visible:ring-4 focus-visible:ring-primary/20 transition-all duration-200 overflow-hidden',
  {
    variants: {
      variant: {
        default:
          'border-transparent bg-primary text-primary-foreground shadow-sm [a&]:hover:brightness-110',
        secondary:
          'border-transparent bg-primary/10 text-primary [a&]:hover:bg-primary/20',
        destructive:
          'border-transparent bg-destructive/10 text-destructive [a&]:hover:bg-destructive/20',
        outline:
          'border-border bg-background text-foreground [a&]:hover:bg-muted [a&]:hover:border-primary/30',
        success:
          'border-transparent bg-primary/10 text-primary [a&]:hover:bg-primary/20',
        warning:
          'border-transparent bg-amber-100 text-amber-700 [a&]:hover:bg-amber-200',
        info:
          'border-transparent bg-secondary/10 text-secondary [a&]:hover:bg-secondary/20',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<'span'> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : 'span'

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
