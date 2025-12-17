import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const headingVariants = cva(
  "text-foreground tracking-tight",
  {
    variants: {
      size: {
        xs: "text-sm",
        sm: "text-base",
        md: "text-lg",
        lg: "text-2xl",
        xl: "text-4xl",
        "2xl": "text-5xl",
      },
      weight: {
        normal: "font-normal",
        medium: "font-medium",
        semibold: "font-semibold",
        bold: "font-bold",
      },
      level: {
        h1: "",
        h2: "",
        h3: "",
        h4: "",
        h5: "",
        h6: "",
      },
    },
    defaultVariants: {
      size: "lg",
      weight: "semibold",
      level: "h2",
    },
  }
)

export interface HeadingProps
  extends Omit<React.ComponentProps<"h1">, "level">,
    VariantProps<typeof headingVariants> {
  asChild?: boolean
}

function Heading({
  className,
  size,
  weight,
  level = "h2",
  asChild = false,
  ...props
}: HeadingProps) {
  const Comp = asChild ? Slot : level || "h2"

  return (
    <Comp
      data-slot="heading"
      className={cn(headingVariants({ size, weight, level }), className)}
      {...props}
    />
  )
}

export { Heading, headingVariants }
