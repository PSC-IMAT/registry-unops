"use client";

import { useState } from "react";
import { ChevronDownIcon, PlusIcon } from "lucide-react";

import { Button } from "@/registry/onu/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/registry/onu/ui/collapsible";

export function CollapsibleBasic() {
  return (
    <Collapsible className="w-full mx-auto max-w-sm space-y-2 rounded-md border p-4">
      <CollapsibleTrigger asChild>
        <Button variant="ghost" className="w-full justify-start p-0">
          Toggle content
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="mt-2">
        <p className="text-sm text-muted-foreground">
          This content is hidden until you click the trigger.
        </p>
      </CollapsibleContent>
    </Collapsible>
  );
}

export function CollapsibleWithIcon() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-full mx-auto max-w-sm space-y-2 rounded-md border p-4">
      <div className="flex items-center justify-between">
        <h4 className="text-sm font-semibold">Project Details</h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm">
            <ChevronDownIcon
              className={`size-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
            />
          </Button>
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent className="space-y-2">
        <div className="rounded-md border px-4 py-2 text-sm">
          Project Alpha - Phase 1
        </div>
        <div className="rounded-md border px-4 py-2 text-sm">
          Project Beta - Phase 2
        </div>
        <div className="rounded-md border px-4 py-2 text-sm">
          Project Gamma - Phase 3
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}

export function CollapsibleControlled() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full max-w-sm space-y-2 mx-auto">
      <Collapsible open={isOpen} onOpenChange={setIsOpen} className="rounded-md border p-4">
        <div className="flex items-center justify-between">
          <h4 className="text-sm font-semibold">Settings</h4>
          <CollapsibleTrigger asChild>
            <Button variant="outline" size="sm">
              {isOpen ? "Hide" : "Show"}
            </Button>
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent className="mt-4 space-y-2">
          <p className="text-sm text-muted-foreground">
            Configure your preferences here.
          </p>
          <div className="rounded-md bg-muted p-3 text-xs">
            Setting 1: Enabled
          </div>
          <div className="rounded-md bg-muted p-3 text-xs">
            Setting 2: Disabled
          </div>
        </CollapsibleContent>
      </Collapsible>
      <div className="text-xs text-muted-foreground">
        Status: {isOpen ? "expanded" : "collapsed"}
      </div>
    </div>
  );
}

export function CollapsibleList() {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const items = [
    { id: "1", title: "Overview", content: "General project overview and summary." },
    { id: "2", title: "Team", content: "List of team members and their roles." },
    { id: "3", title: "Timeline", content: "Milestones and delivery schedule." },
  ];

  return (
    <div className="w-full max-w-sm space-y-2 mx-auto">
      {items.map((item) => (
        <Collapsible
          key={item.id}
          open={openItems.includes(item.id)}
          onOpenChange={() => toggleItem(item.id)}
          className="rounded-md border p-4"
        >
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-semibold">{item.title}</h4>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="sm">
                <ChevronDownIcon
                  className={`size-4 transition-transform ${
                    openItems.includes(item.id) ? "rotate-180" : ""
                  }`}
                />
              </Button>
            </CollapsibleTrigger>
          </div>
          <CollapsibleContent className="mt-2">
            <p className="text-sm text-muted-foreground">{item.content}</p>
          </CollapsibleContent>
        </Collapsible>
      ))}
    </div>
  );
}

export function CollapsibleWithAction() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-full max-w-sm rounded-md border p-4 mx-auto">
      <div className="flex items-center justify-between">
        <h4 className="text-sm font-semibold">Quick Actions</h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm">
            <PlusIcon className={`size-4 transition-transform ${isOpen ? "rotate-45" : ""}`} />
          </Button>
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent className="mt-4 space-y-2">
        <Button variant="outline" size="sm" className="w-full justify-start">
          Create new document
        </Button>
        <Button variant="outline" size="sm" className="w-full justify-start">
          Upload file
        </Button>
        <Button variant="outline" size="sm" className="w-full justify-start">
          Share link
        </Button>
      </CollapsibleContent>
    </Collapsible>
  );
}
