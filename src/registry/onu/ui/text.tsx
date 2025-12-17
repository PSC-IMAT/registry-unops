import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const textVariants = cva(
  "text-foreground",
  {
    variants: {
      size: {
        xs: "text-xs",
        sm: "text-sm",
        md: "text-base",
        lg: "text-lg",
        xl: "text-xl",
      },
      weight: {
        normal: "font-normal",
        medium: "font-medium",
        semibold: "font-semibold",
        bold: "font-bold",
      },
      muted: {
        true: "text-muted-foreground",
        false: "",
      },
    },
    defaultVariants: {
      size: "md",
      weight: "normal",
      muted: false,
    },
  }
)

export interface TextProps
  extends React.ComponentProps<"p">,
    VariantProps<typeof textVariants> {
  asChild?: boolean
}

function Text({
  className,
  size,
  weight,
  muted,
  asChild = false,
  ...props
}: TextProps) {
  const Comp = asChild ? Slot : "p"

  return (
    <Comp
      data-slot="text"
      className={cn(textVariants({ size, weight, muted }), className)}
      {...props}
    />
  )
}

export { Text, textVariants }
