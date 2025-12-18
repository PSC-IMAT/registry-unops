"use client";

import React from "react";
import { Card } from "@/ui/card";
import { NavPillButton } from "./NavPillButton";
import { useSmoothScrollTo } from "../hooks/use-smooth-scroll-to";

export interface BottomNavItem {
  id: string;
  label: string;
}

export interface BottomNavProps {
  items: BottomNavItem[];
  activeId?: string | null;
  offset?: number;
}

export function BottomNav({ items, activeId, offset = 80 }: BottomNavProps) {
  const { scrollToId } = useSmoothScrollTo(offset);

  return (
    <Card className="fixed inset-x-0 bottom-4 mx-auto w-fit max-w-full p-2">
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <NavPillButton
            key={item.id}
            label={item.label}
            active={activeId === item.id}
            onClick={() => scrollToId(item.id)}
          />
        ))}
      </div>
    </Card>
  );
}
