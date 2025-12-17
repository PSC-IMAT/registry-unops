import { Heading } from "@/registry/onu/ui/heading";

export const heading = {
  name: "heading",
  components: {
    HeadingDemo: (
      <div className="space-y-2 mx-auto text-center">
        <Heading level="h1" weight="bold">Heading 1</Heading>
        <Heading level="h2" weight="bold">Heading 2</Heading>
        <Heading level="h3" weight="semibold">Heading 3</Heading>
        <Heading level="h4">Heading 4</Heading>
      </div>
    ),
  },
};
