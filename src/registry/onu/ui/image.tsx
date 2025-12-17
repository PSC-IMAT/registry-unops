"use client";

import * as React from "react"
import { cn } from "@/lib/utils"
import NextImage, { type ImageProps as NextImageProps } from "next/image"

export interface ImageProps extends Omit<NextImageProps, "src"> {
  src: string
  alt: string
  fallback?: React.ReactNode
}

function Image({
  className,
  src,
  alt,
  fallback,
  width,
  height,
  ...props
}: ImageProps) {
  const [error, setError] = React.useState(false)

  if (error && fallback) {
    return <>{fallback}</>
  }

  // If src is external or absolute, use Next Image with required dimensions
  if (src.startsWith('http') || src.startsWith('/')) {
    return (
      <NextImage
        data-slot="image"
        src={src}
        alt={alt}
        width={width || 800}
        height={height || 600}
        className={cn("max-w-full h-auto", className)}
        onError={() => setError(true)}
        {...props}
      />
    )
  }

  // Otherwise use standard img tag
  return (
    <img
      data-slot="image"
      src={src}
      alt={alt}
      className={cn("max-w-full h-auto", className)}
      onError={() => setError(true)}
    />
  )
}

export { Image }
