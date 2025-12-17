"use client";

import { useState } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/onu/ui/accordion";

export function AccordionSingle() {
  return (
    <Accordion type="single" collapsible className="w-ful mx-auto max-w-md">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles matching the UI aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It's animated by default, but can be disabled.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export function AccordionMultiple() {
  return (
    <Accordion type="multiple" className="mx-auto w-full max-w-md">
      <AccordionItem value="item-1">
        <AccordionTrigger>Project Overview</AccordionTrigger>
        <AccordionContent>
          This project aims to deliver a comprehensive solution for managing data flows.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Team Members</AccordionTrigger>
        <AccordionContent>
          Alice, Bob, Carol, and Dave are contributing to this initiative.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Timeline</AccordionTrigger>
        <AccordionContent>
          The project is scheduled to complete by Q2 2026.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export function AccordionDefaultOpen() {
  return (
    <Accordion type="single" collapsible defaultValue="item-2" className="mx-auto w-full max-w-md">
      <AccordionItem value="item-1">
        <AccordionTrigger>What is UNOPS?</AccordionTrigger>
        <AccordionContent>
          UNOPS is a United Nations entity that helps deliver projects around the world.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Mission Statement</AccordionTrigger>
        <AccordionContent>
          Our mission is to expand the capacity of the UN system and its partners to implement peacebuilding, humanitarian, and development operations.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Global Reach</AccordionTrigger>
        <AccordionContent>
          UNOPS operates in over 80 countries worldwide.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export function AccordionDisabled() {
  return (
    <Accordion type="single" collapsible className="mx-auto w-full max-w-md">
      <AccordionItem value="item-1">
        <AccordionTrigger>Active Item</AccordionTrigger>
        <AccordionContent>
          This item can be expanded and collapsed.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" disabled>
        <AccordionTrigger disabled>Disabled Item</AccordionTrigger>
        <AccordionContent>
          This content is not accessible.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Another Active Item</AccordionTrigger>
        <AccordionContent>
          This item is also interactive.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export function AccordionControlled() {
  const [value, setValue] = useState("item-1");

  return (
    <div className="w-full max-w-md space-y-2 mx-auto">
      <Accordion type="single" value={value} onValueChange={setValue}>
        <AccordionItem value="item-1">
          <AccordionTrigger>Section One</AccordionTrigger>
          <AccordionContent>
            Content for the first section.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Section Two</AccordionTrigger>
          <AccordionContent>
            Content for the second section.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Section Three</AccordionTrigger>
          <AccordionContent>
            Content for the third section.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <div className="text-xs text-muted-foreground">
        Current: {value || "none"}
      </div>
    </div>
  );
}

export function AccordionNested() {
  return (
    <Accordion type="single" collapsible className="w-full max-w-md mx-auto">
      <AccordionItem value="item-1">
        <AccordionTrigger>Parent Section</AccordionTrigger>
        <AccordionContent>
          <div className="space-y-2">
            <p className="text-sm">This section contains nested content.</p>
            <Accordion type="single" collapsible className="border-l-2 pl-3">
              <AccordionItem value="nested-1">
                <AccordionTrigger>Nested Item 1</AccordionTrigger>
                <AccordionContent>
                  Nested content for the first item.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="nested-2">
                <AccordionTrigger>Nested Item 2</AccordionTrigger>
                <AccordionContent>
                  Nested content for the second item.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Regular Section</AccordionTrigger>
        <AccordionContent>
          Standard content without nesting.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
