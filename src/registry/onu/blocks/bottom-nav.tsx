"use client";

import React from "react";
import { z } from "zod";
import { BottomNav } from "@/registry/onu/components/navigation/BottomNav";
import { useScrollSpy } from "@/registry/onu/components/hooks/use-scroll-spy";

export const BottomNavBlockSchema = z.object({
  items: z.array(z.object({ id: z.string(), label: z.string() })).min(1),
  offset: z.number().optional(),
});

export type BottomNavBlockProps = z.infer<typeof BottomNavBlockSchema>;

export const BottomNavBlock: React.FC<BottomNavBlockProps> = ({ items, offset = 80 }) => {
  const activeId = useScrollSpy(items.map((i) => i.id));
  return <BottomNav items={items} activeId={activeId} offset={offset} />;
};

export const bottomNavExamples: BottomNavBlockProps[] = [
  {
    items: [
      { id: "baseline", label: "Establishing the baseline" },
      { id: "monitoring", label: "Monitoring the situation" },
      { id: "damage", label: "Assessing the damage" },
    ],
    offset: 80,
  },
];
