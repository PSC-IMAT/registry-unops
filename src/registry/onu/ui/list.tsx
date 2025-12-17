import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const listVariants = cva(
  "space-y-2",
  {
    variants: {
      variant: {
        unordered: "list-disc list-inside",
        ordered: "list-decimal list-inside",
        none: "list-none",
      },
      spacing: {
        sm: "space-y-1",
        md: "space-y-2",
        lg: "space-y-3",
      },
    },
    defaultVariants: {
      variant: "unordered",
      spacing: "md",
    },
  }
)

export interface ListProps
  extends Omit<React.ComponentProps<"ul">, "ref">,
    VariantProps<typeof listVariants> {
  ordered?: boolean
}

function List({
  className,
  variant,
  spacing,
  ordered = false,
  ...props
}: ListProps) {
  const listVariant = ordered ? "ordered" : variant

  if (ordered || variant === "ordered") {
    return (
      <ol
        data-slot="list"
        className={cn(listVariants({ variant: listVariant, spacing }), className)}
        {...props as React.ComponentProps<"ol">}
      />
    )
  }

  return (
    <ul
      data-slot="list"
      className={cn(listVariants({ variant: listVariant, spacing }), className)}
      {...props}
    />
  )
}

function ListItem({
  className,
  ...props
}: React.ComponentProps<"li">) {
  return (
    <li
      data-slot="list-item"
      className={cn("text-foreground", className)}
      {...props}
    />
  )
}

export { List, ListItem, listVariants }
