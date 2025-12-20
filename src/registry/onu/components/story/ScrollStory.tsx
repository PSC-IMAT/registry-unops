import React from "react";
import { Card } from "@/components/ui/card";
import { StoryStep, type StoryStepProps } from "./StoryStep";

export interface ScrollStoryProps {
  steps: StoryStepProps[];
}

export function ScrollStory({ steps }: ScrollStoryProps) {
  return (
    <div className="space-y-6">
      {steps.map((step, idx) => (
        <Card key={idx}>
          <div className="space-y-4 p-4">
            <StoryStep {...step} />
          </div>
        </Card>
      ))}
    </div>
  );
}
