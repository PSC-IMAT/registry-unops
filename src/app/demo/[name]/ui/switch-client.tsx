"use client";

import { useState } from "react";

import { Label } from "@/registry/onu/ui/label";
import { Switch } from "@/registry/onu/ui/switch";

export function SwitchBasic() {
  return (
    <div className="flex items-center space-x-2">
      <Switch id="basic-switch" />
      <Label htmlFor="basic-switch">Enable notifications</Label>
    </div>
  );
}

export function SwitchDisabled() {
  return (
    <div className="flex items-center space-x-2">
      <Switch id="disabled-switch" disabled />
      <Label htmlFor="disabled-switch" className="opacity-50">
        Disabled switch
      </Label>
    </div>
  );
}

export function SwitchWithDescription() {
  return (
    <div className="flex items-center justify-between rounded-md border p-3">
      <div className="space-y-0.5">
        <Label htmlFor="desc-switch" className="text-sm font-medium">
          Marketing emails
        </Label>
        <p className="text-xs text-muted-foreground">
          Receive emails about new features and updates.
        </p>
      </div>
      <Switch id="desc-switch" />
    </div>
  );
}

export function SwitchControlled() {
  const [checked, setChecked] = useState(false);

  return (
    <div className="space-y-2">
      <div className="flex items-center space-x-2">
        <Switch
          id="controlled-switch"
          checked={checked}
          onCheckedChange={setChecked}
        />
        <Label htmlFor="controlled-switch">Airplane mode</Label>
      </div>
      <div className="text-xs text-muted-foreground">
        Status: {checked ? "On" : "Off"}
      </div>
    </div>
  );
}

export function SwitchForm() {
  const [settings, setSettings] = useState({
    newsletter: true,
    updates: false,
    reminders: false,
  });

  return (
    <div className="space-y-3 rounded-md border p-4">
      <div className="flex items-center justify-between">
        <Label htmlFor="newsletter" className="cursor-pointer">
          Newsletter
        </Label>
        <Switch
          id="newsletter"
          checked={settings.newsletter}
          onCheckedChange={(v) => setSettings((s) => ({ ...s, newsletter: v }))}
        />
      </div>
      <div className="flex items-center justify-between">
        <Label htmlFor="updates" className="cursor-pointer">
          Product updates
        </Label>
        <Switch
          id="updates"
          checked={settings.updates}
          onCheckedChange={(v) => setSettings((s) => ({ ...s, updates: v }))}
        />
      </div>
      <div className="flex items-center justify-between">
        <Label htmlFor="reminders" className="cursor-pointer">
          Reminders
        </Label>
        <Switch
          id="reminders"
          checked={settings.reminders}
          onCheckedChange={(v) => setSettings((s) => ({ ...s, reminders: v }))}
        />
      </div>
    </div>
  );
}
