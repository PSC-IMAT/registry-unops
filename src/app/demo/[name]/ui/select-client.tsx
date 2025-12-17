"use client";

import { useState } from "react";
import { Globe2Icon, PaletteIcon, ShieldIcon } from "lucide-react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/registry/onu/ui/select";

export function SelectBasic() {
  return (
    <Select defaultValue="apple" >
      <SelectTrigger className="w-56 mx-auto" >
        <SelectValue placeholder="Choose a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="apple">Apple</SelectItem>
        <SelectItem value="banana">Banana</SelectItem>
        <SelectItem value="orange">Orange</SelectItem>
      </SelectContent>
    </Select>
  );
}

export function SelectWithGroups() {
  return (
    <Select defaultValue="paris">
      <SelectTrigger className="w-64 mx-auto">
        <SelectValue placeholder="Select a destination" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Europe</SelectLabel>
          <SelectItem value="paris">Paris</SelectItem>
          <SelectItem value="rome">Rome</SelectItem>
          <SelectItem value="lisbon">Lisbon</SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>Americas</SelectLabel>
          <SelectItem value="new-york">New York</SelectItem>
          <SelectItem value="mexico-city">Mexico City</SelectItem>
          <SelectItem value="buenos-aires">Buenos Aires</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export function SelectWithIcons() {
  return (
    <Select defaultValue="globe">
      <SelectTrigger className="w-64 mx-auto">
        <SelectValue placeholder="Select a theme" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="globe" className="flex items-center gap-2">
          <Globe2Icon className="size-4 text-muted-foreground" />
          Global view
        </SelectItem>
        <SelectItem value="shield" className="flex items-center gap-2">
          <ShieldIcon className="size-4 text-muted-foreground" />
          Security
        </SelectItem>
        <SelectItem value="palette" className="flex items-center gap-2">
          <PaletteIcon className="size-4 text-muted-foreground" />
          Design system
        </SelectItem>
      </SelectContent>
    </Select>
  );
}

export function SelectDisabledOptions() {
  return (
    <Select defaultValue="standard">
      <SelectTrigger className="w-64 mx-auto">
        <SelectValue placeholder="Select a plan" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="standard">Standard</SelectItem>
        <SelectItem value="pro">Pro</SelectItem>
        <SelectItem value="enterprise" disabled>
          Enterprise (contact sales)
        </SelectItem>
      </SelectContent>
    </Select>
  );
}

export function SelectControlled() {
  const [value, setValue] = useState("daily");

  return (
    <Select value={value} onValueChange={setValue}>
      <SelectTrigger className="w-64 mx-auto">
        <SelectValue placeholder="Select frequency" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="daily">Daily updates</SelectItem>
        <SelectItem value="weekly">Weekly digest</SelectItem>
        <SelectItem value="monthly">Monthly summary</SelectItem>
      </SelectContent>
    </Select>
  );
}
