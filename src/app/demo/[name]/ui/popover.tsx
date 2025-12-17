import {
  PopoverBasic,
  PopoverControlled,
  PopoverWithForm,
  PopoverWithIcons,
} from "@/app/demo/[name]/ui/popover-client";

export const popover = {
  name: "popover",
  components: {
    Basic: <PopoverBasic />,
    Form: <PopoverWithForm />,
    Icons: <PopoverWithIcons />,
    Controlled: <PopoverControlled />,
  },
};
