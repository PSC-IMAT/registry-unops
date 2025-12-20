import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export interface EmbedToolbarProps {
  url: string;
  onReload?: () => void;
}

export function EmbedToolbar({ url, onReload }: EmbedToolbarProps) {
  return (
    <Card className="flex items-center gap-2 p-2">
      <Button variant="secondary" onClick={() => window.open(url, "_blank")}>Open in new tab</Button>
      <Button variant="outline" onClick={() => onReload?.()}>Reload</Button>
    </Card>
  );
}
