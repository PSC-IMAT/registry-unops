"use client";

import { Text } from "@/registry/onu/ui/text";

export function TextBasic() {
  return (
    <div className="space-y-2">
      <Text>This is a default paragraph text.</Text>
      <Text muted>This is muted text with lower contrast.</Text>
    </div>
  );
}

export function TextSizes() {
  return (
    <div className="space-y-2">
      <Text size="xs">Extra small text (xs)</Text>
      <Text size="sm">Small text (sm)</Text>
      <Text size="md">Medium text (md)</Text>
      <Text size="lg">Large text (lg)</Text>
      <Text size="xl">Extra large text (xl)</Text>
    </div>
  );
}

export function TextWeights() {
  return (
    <div className="space-y-2">
      <Text weight="normal">Normal weight text</Text>
      <Text weight="medium">Medium weight text</Text>
      <Text weight="semibold">Semibold weight text</Text>
      <Text weight="bold">Bold weight text</Text>
    </div>
  );
}

export function TextColors() {
  return (
    <div className="space-y-2">
      <Text>Default foreground color</Text>
      <Text className="text-primary">Primary color text</Text>
      <Text className="text-destructive">Destructive color text</Text>
      <Text muted>Muted foreground color</Text>
    </div>
  );
}

export function TextTruncate() {
  return (
    <div className="space-y-3">
      <div className="w-64">
        <Text className="truncate">
          This is a very long text that will be truncated with an ellipsis when it exceeds the container width.
        </Text>
      </div>
      <div className="w-64">
        <Text className="line-clamp-2">
          This text spans multiple lines and will be clamped to exactly two lines with an ellipsis at the end if the content is longer than that.
        </Text>
      </div>
    </div>
  );
}

export function TextCombinations() {
  return (
    <div className="space-y-2">
      <Text size="lg" weight="bold">
        Large and bold heading-style text
      </Text>
      <Text size="sm" muted>
        Small muted helper text
      </Text>
      <Text weight="medium" className="text-primary">
        Medium weight primary colored text
      </Text>
    </div>
  );
}
