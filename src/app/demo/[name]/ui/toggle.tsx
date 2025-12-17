import { Toggle } from "@/registry/onu/ui/toggle";

export const toggle = {
  name: "toggle",
  components: {
    ToggleDemo: (
      <div className="flex gap-2">
        <Toggle>Bold</Toggle>
        <Toggle>Italic</Toggle>
        <Toggle>Underline</Toggle>
      </div>
    ),
  },
};
