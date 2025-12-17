"use client";

import { useState } from "react";
import { InfoIcon, PlusIcon } from "lucide-react";

import { Button } from "@/registry/onu/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/registry/onu/ui/tooltip";

export function TooltipBasic() {
  return (
    <Tooltip>
      <TooltipTrigger className="flex! mx-auto justify-center items-center" asChild>
        <Button variant="outline">Hover me</Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>This is a tooltip</p>
      </TooltipContent>
    </Tooltip>
  );
}

export function TooltipSides() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Top</Button>
        </TooltipTrigger>
        <TooltipContent side="top">
          <p>Tooltip on top</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger  asChild>
          <Button variant="outline">Right</Button>
        </TooltipTrigger>
        <TooltipContent side="right">
          <p>Tooltip on right</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Bottom</Button>
        </TooltipTrigger>
        <TooltipContent side="bottom">
          <p>Tooltip on bottom</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Left</Button>
        </TooltipTrigger>
        <TooltipContent side="left">
          <p>Tooltip on left</p>
        </TooltipContent>
      </Tooltip>
    </div>
  );
}

export function TooltipWithIcon() {
  return (
    <div className="flex justify-center items-center gap-2">
      <span className="text-sm">Need help?</span>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="ghost" size="icon" className="size-5">
            <InfoIcon className="size-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Click to learn more about this feature.</p>
        </TooltipContent>
      </Tooltip>
    </div>
  );
}

export function TooltipWithDelay() {
  return (
    <TooltipProvider delayDuration={5000}>
      <Tooltip>
        <TooltipTrigger  className="flex! mx-auto justify-center items-center"  asChild>
          <Button variant="outline">Hover (5000ms delay)</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>This tooltip has a delay</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

export function TooltipRichContent() {
  return (
    <Tooltip>
      <TooltipTrigger  className="flex! mx-auto justify-center items-center"  asChild>
        <Button variant="outline">
          <PlusIcon />
          Add item
        </Button>
      </TooltipTrigger>
      <TooltipContent className="max-w-xs">
        <div className="space-y-1">
          <p className="font-semibold">Add a new item</p>
          <p className="text-xs opacity-80">
            Click to create a new item in your collection.
          </p>
        </div>
      </TooltipContent>
    </Tooltip>
  );
}

export function TooltipControlled() {
  const [open, setOpen] = useState(false);

  return (
    <div className="space-y-2 flex flex-col items-center justify-center">
      <Tooltip open={open} onOpenChange={setOpen}>
        <TooltipTrigger asChild>
          <Button variant="outline">Controlled tooltip</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>This tooltip is controlled externally</p>
        </TooltipContent>
      </Tooltip>
      <div className="text-xs text-muted-foreground">
        State: {open ? "open" : "closed"}
      </div>
    </div>
  );
}
