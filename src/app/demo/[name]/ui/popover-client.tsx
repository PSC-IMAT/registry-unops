"use client";

import { useState } from "react";
import { BellIcon, CalendarIcon, MailIcon } from "lucide-react";

import { Button } from "@/registry/onu/ui/button";
import { Input } from "@/registry/onu/ui/input";
import { Label } from "@/registry/onu/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/registry/onu/ui/popover";

export function PopoverBasic() {
  return (
    <Popover>
      <PopoverTrigger className="flex! mx-auto justify-center items-center" asChild>
        <Button variant="outline">Open popover</Button>
      </PopoverTrigger>
      <PopoverContent className="w-64">
        This is a popover with some contextual content.
      </PopoverContent>
    </Popover>
  );
}

export function PopoverWithForm() {
  return (
    <Popover >
      <PopoverTrigger className="flex! mx-auto justify-center items-center" asChild>
        <Button variant="outline">Subscribe</Button>
      </PopoverTrigger>
      <PopoverContent className="w-72 space-y-3">
        <div className="space-y-1">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="you@example.com" />
        </div>
        <Button className="w-full">Send</Button>
      </PopoverContent>
    </Popover>
  );
}

export function PopoverWithIcons() {
  return (
    <Popover>
      <PopoverTrigger className="flex! mx-auto justify-center items-center" asChild>
        <Button variant="outline" className="flex items-center gap-2">
          <BellIcon className="size-4" /> Notifications
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-64 space-y-2">
        <div className="flex items-center gap-2 rounded-md border p-2">
          <MailIcon className="size-4 text-muted-foreground" />
          <div className="text-sm">Email alerts</div>
        </div>
        <div className="flex items-center gap-2 rounded-md border p-2">
          <CalendarIcon className="size-4 text-muted-foreground" />
          <div className="text-sm">Calendar reminders</div>
        </div>
      </PopoverContent>
    </Popover>
  );
}

export function PopoverControlled() {
  const [open, setOpen] = useState(false);
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger className="flex! mx-auto justify-center items-center" asChild>
        <Button variant="outline">{open ? "Close" : "Open"} popover</Button>
      </PopoverTrigger>
      <PopoverContent className="w-56 text-sm">
        This popover is controlled. Click the button to toggle.
      </PopoverContent>
    </Popover>
  );
}
