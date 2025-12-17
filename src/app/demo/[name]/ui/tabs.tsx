import {
  TabsBasic,
  TabsControlled,
  TabsDisabled,
  TabsWithCards,
  TabsWithIcons,
} from "@/app/demo/[name]/ui/tabs-client";

export const tabs = {
  name: "tabs",
  components: {
    Basic: <TabsBasic />,
    WithIcons: <TabsWithIcons />,
    WithCards: <TabsWithCards />,
    Disabled: <TabsDisabled />,
    Controlled: <TabsControlled />,
  },
};
