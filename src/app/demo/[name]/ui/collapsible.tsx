import {
  CollapsibleBasic,
  CollapsibleWithIcon,
  CollapsibleControlled,
  CollapsibleList,
  CollapsibleWithAction,
} from "./collapsible-client";

export const collapsible = {
  name: "collapsible",
  components: {
    Basic: <CollapsibleBasic />,
    "With Icon": <CollapsibleWithIcon />,
    Controlled: <CollapsibleControlled />,
    "List of Items": <CollapsibleList />,
    "With Actions": <CollapsibleWithAction />,
  },
};
