import React from "react";
import { Heading } from "@/ui/heading";
import { Text } from "@/registry/onu/ui/text";
import { cn } from "@/lib/utils";

export interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  lead?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({ title, subtitle, lead, align = "left", className }: SectionHeaderProps) {
  return (
    <div className={cn("space-y-3", align === "center" && "text-center", className)}>
      <Heading level="h2" weight="bold">{title}</Heading>
      {subtitle && (
        <Text className="text-muted-foreground">{subtitle}</Text>
      )}
      {lead && (
        <Text>{lead}</Text>
      )}
    </div>
  );
}
