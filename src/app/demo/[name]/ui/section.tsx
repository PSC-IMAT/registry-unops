import { Section } from "@/registry/onu/ui/section";
import { Text } from "@/registry/onu/ui/text";

export const section = {
  name: "section",
  components: {
    SectionDemo: (
      <Section spacing="lg" className="bg-muted/50 rounded-md">
        <Text>
          Section content with consistent max-width and vertical spacing.
        </Text>
      </Section>
    ),
  },
};
