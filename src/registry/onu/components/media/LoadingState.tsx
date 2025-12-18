import React from "react";
import { Card } from "@/ui/card";
import { Spinner } from "@/registry/onu/ui/spinner";
import { Text } from "@/registry/onu/ui/text";

export function LoadingState({ label = "Loading..." }: { label?: string }) {
  return (
    <Card className="flex items-center gap-2 p-4">
      <Spinner />
      <Text className="text-muted-foreground">{label}</Text>
    </Card>
  );
}
