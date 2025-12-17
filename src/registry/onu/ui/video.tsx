import * as React from "react"
import { cn } from "@/lib/utils"

export interface VideoProps extends React.ComponentProps<"video"> {
  src: string
  poster?: string
}

function Video({
  className,
  src,
  poster,
  controls = true,
  ...props
}: VideoProps) {
  return (
    <video
      data-slot="video"
      src={src}
      poster={poster}
      controls={controls}
      className={cn("w-full h-auto", className)}
      {...props}
    />
  )
}

export { Video }
