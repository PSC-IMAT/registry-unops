import {
  SwitchBasic,
  SwitchControlled,
  SwitchDisabled,
  SwitchForm,
  SwitchWithDescription,
} from "@/app/demo/[name]/ui/switch-client";

export const switchComponent = {
  name: "switch",
  components: {
    Basic: <SwitchBasic />,
    Disabled: <SwitchDisabled />,
    WithDescription: <SwitchWithDescription />,
    Controlled: <SwitchControlled />,
    Form: <SwitchForm />,
  },
};
