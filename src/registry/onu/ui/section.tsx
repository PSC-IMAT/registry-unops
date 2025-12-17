import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const sectionVariants = cva(
  "w-full",
  {
    variants: {
      spacing: {
        none: "",
        sm: "py-6",
        md: "py-12",
        lg: "py-16",
        xl: "py-24",
      },
      width: {
        full: "",
        contained: "container mx-auto px-4 sm:px-6 lg:px-8",
      },
    },
    defaultVariants: {
      spacing: "md",
      width: "contained",
    },
  }
)

export interface SectionProps
  extends React.ComponentProps<"section">,
    VariantProps<typeof sectionVariants> {}

function Section({
  className,
  spacing,
  width,
  ...props
}: SectionProps) {
  return (
    <section
      data-slot="section"
      className={cn(sectionVariants({ spacing, width }), className)}
      {...props}
    />
  )
}

export { Section, sectionVariants }
