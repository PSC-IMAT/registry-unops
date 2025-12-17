import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import NextLink, { type LinkProps as NextLinkProps } from "next/link"

const linkVariants = cva(
  "inline-flex items-center gap-1 underline-offset-4 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
  {
    variants: {
      variant: {
        default: "text-primary underline hover:text-primary/80",
        muted: "text-muted-foreground hover:text-foreground",
        ghost: "hover:underline",
      },
      size: {
        sm: "text-sm",
        md: "text-base",
        lg: "text-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
)

export interface LinkProps
  extends Omit<React.ComponentProps<typeof NextLink>, "href">,
    VariantProps<typeof linkVariants> {
  href: string
}

function Link({
  className,
  variant,
  size,
  href,
  ...props
}: LinkProps) {
  // External links
  if (href.startsWith('http')) {
    return (
      <a
        data-slot="link"
        href={href}
        className={cn(linkVariants({ variant, size }), className)}
        target="_blank"
        rel="noopener noreferrer"
        {...props as any}
      />
    )
  }

  // Internal links
  return (
    <NextLink
      data-slot="link"
      href={href}
      className={cn(linkVariants({ variant, size }), className)}
      {...props}
    />
  )
}

export { Link, linkVariants }
