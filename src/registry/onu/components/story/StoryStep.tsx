import React from "react";
import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";

export interface StoryStepProps {
  title: string;
  text: string;
  rightMedia?: React.ReactNode;
}

export function StoryStep({ title, text, rightMedia }: StoryStepProps) {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <div className="space-y-2">
        <Heading level="h3" weight="semibold">{title}</Heading>
        <Text>{text}</Text>
      </div>
      <div>
        {rightMedia && (
          <Card>
            <div className="p-4">{rightMedia}</div>
          </Card>
        )}
      </div>
    </div>
  );
}
