"use client";

import * as React from "react";

import { Input } from "@/registry/onu/ui/input";

export function InputDefault() {
  return <Input placeholder="Your name" />;
}

export function InputDisabled() {
  return <Input placeholder="Disabled" disabled />;
}

export function InputInvalid() {
  return <Input placeholder="Required" aria-invalid={true} />;
}

export function InputEmail() {
  return <Input type="email" placeholder="you@example.org" />;
}

export function InputPassword() {
  return <Input type="password" placeholder="••••••••" />;
}

export function InputFile() {
  return <Input type="file" />;
}

export function InputControlled() {
  const [value, setValue] = React.useState("");
  return (
    <Input
      placeholder="Controlled input"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}

export function InputLarge() {
  return <Input className="h-10" placeholder="Large height (h-10)" />;
}
