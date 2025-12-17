import {
  ToggleGroupControlled,
  ToggleGroupDisabled,
  ToggleGroupMultiple,
  ToggleGroupOutline,
  ToggleGroupSingle,
  ToggleGroupWithSpacing,
} from "@/app/demo/[name]/ui/toggle-group-client";

export const toggleGroup = {
  name: "toggle-group",
  components: {
    Single: <ToggleGroupSingle />,
    Multiple: <ToggleGroupMultiple />,
    Outline: <ToggleGroupOutline />,
    WithSpacing: <ToggleGroupWithSpacing />,
    Disabled: <ToggleGroupDisabled />,
    Controlled: <ToggleGroupControlled />,
  },
};
