import { ToggleGroup, ToggleGroupItem } from "@/registry/onu/ui/toggle-group";

export const toggleGroup = {
  name: "toggle-group",
  components: {
    ToggleGroupDemo: (
      <ToggleGroup type="multiple" defaultValue={["bold"]}>
        <ToggleGroupItem value="bold">Bold</ToggleGroupItem>
        <ToggleGroupItem value="italic">Italic</ToggleGroupItem>
        <ToggleGroupItem value="underline">Underline</ToggleGroupItem>
      </ToggleGroup>
    ),
  },
};
