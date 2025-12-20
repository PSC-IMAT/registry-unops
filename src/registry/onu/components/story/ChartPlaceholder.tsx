import React from "react";
import { Text } from "@/components/ui/text";

export function ChartPlaceholder({ label = "Chart" }: { label?: string }) {
  return (
    <div className="flex h-64 items-center justify-center rounded border bg-muted/30">
      <div className="text-center">
        <Text>📊 {label} Placeholder</Text>
        <Text className="text-muted-foreground">Integrate charts later</Text>
      </div>
    </div>
  );
}
