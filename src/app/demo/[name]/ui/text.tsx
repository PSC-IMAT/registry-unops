import { Text } from "@/registry/onu/ui/text";

export const text = {
  name: "text",
  components: {
    TextDemo: (
      <div className="space-y-2">
        <Text>Default body text</Text>
        <Text className="text-muted-foreground">Muted foreground text</Text>
        <Text weight="semibold">Semibold text</Text>
        <Text size="sm">Small text</Text>
      </div>
    ),
  },
};
