import {
  SelectBasic,
  SelectControlled,
  SelectDisabledOptions,
  SelectWithGroups,
  SelectWithIcons,
} from "@/app/demo/[name]/ui/select-client";

export const select = {
  name: "select",
  components: {
    Basic: <SelectBasic />,
    Groups: <SelectWithGroups />,
    Icons: <SelectWithIcons />,
    Disabled: <SelectDisabledOptions />,
    Controlled: <SelectControlled />,
  },
};
