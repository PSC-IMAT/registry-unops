import React from "react";
import { Card } from "@/ui/card";
import { Text } from "@/registry/onu/ui/text";

export function ErrorState({ message = "Something went wrong" }: { message?: string }) {
  return (
    <Card className="p-4">
      <Text className="text-destructive">{message}</Text>
    </Card>
  );
}
