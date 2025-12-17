import {
  ToggleBasic,
  ToggleControlled,
  ToggleDisabled,
  ToggleOutline,
  ToggleSizes,
  ToggleWithText,
} from "@/app/demo/[name]/ui/toggle-client";

export const toggle = {
  name: "toggle",
  components: {
    Basic: <ToggleBasic />,
    WithText: <ToggleWithText />,
    Outline: <ToggleOutline />,
    Sizes: <ToggleSizes />,
    Disabled: <ToggleDisabled />,
    Controlled: <ToggleControlled />,
  },
};
