import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const dividerVariants = cva(
  "bg-border shrink-0",
  {
    variants: {
      orientation: {
        horizontal: "h-px w-full",
        vertical: "w-px h-full",
      },
      spacing: {
        none: "",
        sm: "my-2",
        md: "my-4",
        lg: "my-6",
      },
    },
    defaultVariants: {
      orientation: "horizontal",
      spacing: "md",
    },
  }
)

export interface DividerProps
  extends React.ComponentProps<"hr">,
    VariantProps<typeof dividerVariants> {}

function Divider({
  className,
  orientation,
  spacing,
  ...props
}: DividerProps) {
  return (
    <hr
      data-slot="divider"
      className={cn(dividerVariants({ orientation, spacing }), className)}
      {...props}
    />
  )
}

export { Divider, dividerVariants }
