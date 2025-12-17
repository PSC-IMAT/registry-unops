"use client";

import { useState } from "react";
import { BoldIcon, ItalicIcon, UnderlineIcon } from "lucide-react";

import { Toggle } from "@/registry/onu/ui/toggle";

export function ToggleBasic() {
  return (
    <div className="flex gap-2">
      <Toggle aria-label="Toggle bold">
        <BoldIcon />
      </Toggle>
      <Toggle aria-label="Toggle italic">
        <ItalicIcon />
      </Toggle>
      <Toggle aria-label="Toggle underline">
        <UnderlineIcon />
      </Toggle>
    </div>
  );
}

export function ToggleWithText() {
  return (
    <div className="flex gap-2">
      <Toggle aria-label="Toggle bold">
        <BoldIcon />
        Bold
      </Toggle>
      <Toggle aria-label="Toggle italic">
        <ItalicIcon />
        Italic
      </Toggle>
    </div>
  );
}

export function ToggleOutline() {
  return (
    <div className="flex gap-2">
      <Toggle variant="outline" aria-label="Toggle bold">
        <BoldIcon />
      </Toggle>
      <Toggle variant="outline" aria-label="Toggle italic">
        <ItalicIcon />
      </Toggle>
      <Toggle variant="outline" aria-label="Toggle underline">
        <UnderlineIcon />
      </Toggle>
    </div>
  );
}

export function ToggleSizes() {
  return (
    <div className="flex items-center gap-2">
      <Toggle size="sm" aria-label="Small toggle">
        <BoldIcon />
      </Toggle>
      <Toggle size="default" aria-label="Default toggle">
        <BoldIcon />
      </Toggle>
      <Toggle size="lg" aria-label="Large toggle">
        <BoldIcon />
      </Toggle>
    </div>
  );
}

export function ToggleDisabled() {
  return (
    <div className="flex gap-2">
      <Toggle aria-label="Toggle bold">
        <BoldIcon />
      </Toggle>
      <Toggle disabled aria-label="Toggle italic (disabled)">
        <ItalicIcon />
      </Toggle>
    </div>
  );
}

export function ToggleControlled() {
  const [pressed, setPressed] = useState(false);

  return (
    <div className="space-y-2">
      <Toggle pressed={pressed} onPressedChange={setPressed} aria-label="Toggle bold">
        <BoldIcon />
        Bold
      </Toggle>
      <div className="text-xs text-muted-foreground">
        State: {pressed ? "pressed" : "unpressed"}
      </div>
    </div>
  );
}
