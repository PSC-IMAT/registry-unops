"use client";

import { DollarSignIcon, SearchIcon } from "lucide-react";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "@/registry/onu/ui/input-group";

export function InputGroupDefault() {
  return (
    <InputGroup>
      <InputGroupInput placeholder="Search" />
    </InputGroup>
  );
}

export function InputGroupPrefixText() {
  return (
    <InputGroup>
      <InputGroupAddon>
        <InputGroupText>USD</InputGroupText>
      </InputGroupAddon>
      <InputGroupInput placeholder="0.00" />
    </InputGroup>
  );
}

export function InputGroupSuffixText() {
  return (
    <InputGroup>
      <InputGroupInput placeholder="Amount" />
      <InputGroupAddon align="inline-end">
        <InputGroupText>.00</InputGroupText>
      </InputGroupAddon>
    </InputGroup>
  );
}

export function InputGroupWithIcon() {
  return (
    <InputGroup>
      <InputGroupAddon>
        <DollarSignIcon className="size-4" />
      </InputGroupAddon>
      <InputGroupInput placeholder="0.00" />
    </InputGroup>
  );
}

export function InputGroupWithButton() {
  return (
    <InputGroup>
      <InputGroupAddon>
        <InputGroupButton size="sm" variant="ghost">
          <SearchIcon className="size-4" />
        </InputGroupButton>
      </InputGroupAddon>
      <InputGroupInput placeholder="Search projects" />
      <InputGroupAddon align="inline-end">
        <InputGroupButton size="sm" variant="outline" onClick={() => console.log("Clear")}>
          Clear
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  );
}

export function InputGroupLabelAbove() {
  return (
    <InputGroup>
      <InputGroupAddon align="block-start">
        <InputGroupText>Project name</InputGroupText>
      </InputGroupAddon>
      <InputGroupInput placeholder="Enter a name" />
    </InputGroup>
  );
}

export function InputGroupHelperBelow() {
  return (
    <InputGroup>
      <InputGroupInput placeholder="Email" />
      <InputGroupAddon align="block-end">
        <InputGroupText>We’ll never share your email.</InputGroupText>
      </InputGroupAddon>
    </InputGroup>
  );
}

export function InputGroupTextareaExample() {
  return (
    <InputGroup>
      <InputGroupAddon align="block-start">
        <InputGroupText>Description</InputGroupText>
      </InputGroupAddon>
      <InputGroupTextarea placeholder="Write a short description" rows={3} />
    </InputGroup>
  );
}
