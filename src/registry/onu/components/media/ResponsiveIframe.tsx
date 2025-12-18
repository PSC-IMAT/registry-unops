"use client";

import React, { useState } from "react";
import { AspectRatio } from "@/registry/onu/ui/aspect-ratio";
import { Card } from "@/ui/card";
import { Text } from "@/registry/onu/ui/text";
import { Spinner } from "@/registry/onu/ui/spinner";
import { cn } from "@/lib/utils";

export interface ResponsiveIframeProps {
  src: string;
  title: string;
  className?: string;
  height?: number; // fallback height if aspect ratio not used
}

export function ResponsiveIframe({ src, title, className, height = 480 }: ResponsiveIframeProps) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  return (
    <div className={cn("space-y-2", className)}>
      <Card>
        <AspectRatio ratio={16 / 9}>
          {loading && !error && (
            <div className="flex h-full w-full items-center justify-center">
              <div className="flex items-center gap-2">
                <Spinner />
                <Text className="text-muted-foreground">Loading...</Text>
              </div>
            </div>
          )}
          {!error && (
            <iframe
              src={src}
              title={title}
              className="h-full w-full rounded"
              onLoad={() => setLoading(false)}
              onError={() => setError("Failed to load embed")}
            />
          )}
        </AspectRatio>
      </Card>
      {error && (
        <Card className="p-4">
          <Text className="text-destructive">{error}</Text>
        </Card>
      )}
    </div>
  );
}
