"use client";

import { useState } from "react";
import { AlignCenterIcon, AlignLeftIcon, AlignRightIcon, BoldIcon, ItalicIcon, UnderlineIcon } from "lucide-react";

import { ToggleGroup, ToggleGroupItem } from "@/registry/onu/ui/toggle-group";

export function ToggleGroupSingle() {
  const [value, setValue] = useState("left");

  return (
    <div className="space-y-2">
      <ToggleGroup type="single" value={value} onValueChange={(v) => v && setValue(v)}>
        <ToggleGroupItem value="left" aria-label="Align left">
          <AlignLeftIcon />
        </ToggleGroupItem>
        <ToggleGroupItem value="center" aria-label="Align center">
          <AlignCenterIcon />
        </ToggleGroupItem>
        <ToggleGroupItem value="right" aria-label="Align right">
          <AlignRightIcon />
        </ToggleGroupItem>
      </ToggleGroup>
      <div className="text-xs text-muted-foreground">Selected: {value}</div>
    </div>
  );
}

export function ToggleGroupMultiple() {
  return (
    <ToggleGroup type="multiple" defaultValue={["bold"]}>
      <ToggleGroupItem value="bold" aria-label="Toggle bold">
        <BoldIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic">
        <ItalicIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Toggle underline">
        <UnderlineIcon />
      </ToggleGroupItem>
    </ToggleGroup>
  );
}

export function ToggleGroupOutline() {
  return (
    <ToggleGroup type="single" variant="outline" defaultValue="center">
      <ToggleGroupItem value="left">
        <AlignLeftIcon />
        Left
      </ToggleGroupItem>
      <ToggleGroupItem value="center">
        <AlignCenterIcon />
        Center
      </ToggleGroupItem>
      <ToggleGroupItem value="right">
        <AlignRightIcon />
        Right
      </ToggleGroupItem>
    </ToggleGroup>
  );
}

export function ToggleGroupWithSpacing() {
  return (
    <ToggleGroup type="multiple" spacing={2} defaultValue={["bold"]}>
      <ToggleGroupItem value="bold">
        <BoldIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic">
        <ItalicIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value="underline">
        <UnderlineIcon />
      </ToggleGroupItem>
    </ToggleGroup>
  );
}

export function ToggleGroupDisabled() {
  return (
    <ToggleGroup type="single" defaultValue="bold">
      <ToggleGroupItem value="bold">Bold</ToggleGroupItem>
      <ToggleGroupItem value="italic" disabled>
        Italic
      </ToggleGroupItem>
      <ToggleGroupItem value="underline">Underline</ToggleGroupItem>
    </ToggleGroup>
  );
}

export function ToggleGroupControlled() {
  const [formats, setFormats] = useState<string[]>(["bold"]);

  return (
    <div className="space-y-2">
      <ToggleGroup type="multiple" value={formats} onValueChange={setFormats}>
        <ToggleGroupItem value="bold">
          <BoldIcon />
        </ToggleGroupItem>
        <ToggleGroupItem value="italic">
          <ItalicIcon />
        </ToggleGroupItem>
        <ToggleGroupItem value="underline">
          <UnderlineIcon />
        </ToggleGroupItem>
      </ToggleGroup>
      <div className="text-xs text-muted-foreground">
        Active: {formats.length > 0 ? formats.join(", ") : "none"}
      </div>
    </div>
  );
}
