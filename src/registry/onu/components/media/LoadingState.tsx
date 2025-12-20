import React from "react";
import { Card } from "@/components/ui/card";
import { Spinner } from "@/components/ui/spinner";
import { Text } from "@/components/ui/text";

export function LoadingState({ label = "Loading..." }: { label?: string }) {
  return (
    <Card className="flex items-center gap-2 p-4">
      <Spinner />
      <Text className="text-muted-foreground">{label}</Text>
    </Card>
  );
}
