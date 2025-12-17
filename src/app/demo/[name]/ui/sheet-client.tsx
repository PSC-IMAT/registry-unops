"use client";

import { useState } from "react";

import { Button } from "@/registry/onu/ui/button";
import { Input } from "@/registry/onu/ui/input";
import { Label } from "@/registry/onu/ui/label";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/registry/onu/ui/sheet";

export function SheetBasic() {
  return (
    <Sheet>
      <SheetTrigger className="flex! mx-auto justify-center items-center" asChild>
        <Button variant="outline">Open sheet</Button>
      </SheetTrigger>
      <SheetContent className="w-105 sm:max-w-md">
        <SheetHeader>
          <SheetTitle>Project details</SheetTitle>
          <SheetDescription>Provide a quick summary for your project.</SheetDescription>
        </SheetHeader>
        <div className="space-y-3 px-4 pb-6">
          <Label htmlFor="project-name">Name</Label>
          <Input id="project-name" placeholder="UNOPS dashboard" />
          <Label htmlFor="project-desc">Description</Label>
          <Input id="project-desc" placeholder="Short summary" />
        </div>
        <SheetFooter>
          <Button>Save</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

export function SheetLeft() {
  return (
    <Sheet>
      <SheetTrigger className="flex! mx-auto justify-center items-center" asChild>
        <Button variant="outline">Open from left</Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-95 sm:max-w-sm">
        <SheetHeader>
          <SheetTitle>Navigation</SheetTitle>
          <SheetDescription>Use the sheet for secondary navigation.</SheetDescription>
        </SheetHeader>
        <div className="space-y-2 px-4 pb-6">
          <Button variant="ghost" className="w-full justify-start">
            Dashboard
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            Reports
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            Settings
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export function SheetTop() {
  return (
    <Sheet>
      <SheetTrigger className="flex! mx-auto justify-center items-center" asChild>
        <Button variant="outline">Open from top</Button>
      </SheetTrigger>
      <SheetContent side="top" className="sm:max-w-none">
        <SheetHeader>
          <SheetTitle>Inline filters</SheetTitle>
          <SheetDescription>Collect quick inputs without leaving the page.</SheetDescription>
        </SheetHeader>
        <div className="grid grid-cols-1 gap-3 px-4 pb-6 sm:grid-cols-3">
          <div className="space-y-1">
            <Label htmlFor="status">Status</Label>
            <Input id="status" placeholder="Any" />
          </div>
          <div className="space-y-1">
            <Label htmlFor="owner">Owner</Label>
            <Input id="owner" placeholder="Name" />
          </div>
          <div className="space-y-1">
            <Label htmlFor="region">Region</Label>
            <Input id="region" placeholder="Global" />
          </div>
        </div>
        <SheetFooter>
          <Button>Apply filters</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

export function SheetWithActions() {
  return (
    <Sheet>
      <SheetTrigger className="flex! mx-auto justify-center items-center" asChild>
        <Button variant="outline">Review changes</Button>
      </SheetTrigger>
      <SheetContent className="w-115 sm:max-w-md">
        <SheetHeader>
          <SheetTitle>Change summary</SheetTitle>
          <SheetDescription>Confirm the updates before publishing.</SheetDescription>
        </SheetHeader>
        <div className="space-y-2 px-4 pb-6 text-sm">
          <p>• Updated copy on the landing page.</p>
          <p>• Added new report to the analytics section.</p>
          <p>• Adjusted footer links and contact info.</p>
        </div>
        <SheetFooter className="flex-row gap-2">
          <Button variant="outline" className="flex-1">
            Cancel
          </Button>
          <Button className="flex-1">Publish</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

export function SheetControlled() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="flex! mx-auto justify-center items-center" asChild>
        <Button variant="outline">{open ? "Close" : "Open"} sheet</Button>
      </SheetTrigger>
      <SheetContent className="w-100 sm:max-w-sm">
        <SheetHeader>
          <SheetTitle>Controlled sheet</SheetTitle>
          <SheetDescription>Manage open state externally.</SheetDescription>
        </SheetHeader>
        <div className="px-4 pb-6 text-sm text-muted-foreground">
          The trigger label reflects the open state managed via React state.
        </div>
        <SheetFooter>
          <Button onClick={() => setOpen(false)}>Close</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
