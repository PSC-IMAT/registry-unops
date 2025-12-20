import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface NavPillButtonProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
}

export function NavPillButton({ label, active, onClick }: NavPillButtonProps) {
  return (
    <Button
      variant={active ? "default" : "secondary"}
      className={cn("rounded-full", active && "shadow")}
      onClick={onClick}
    >
      {label}
    </Button>
  );
}
