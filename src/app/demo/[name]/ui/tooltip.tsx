import {
  TooltipBasic,
  TooltipControlled,
  TooltipRichContent,
  TooltipSides,
  TooltipWithDelay,
  TooltipWithIcon,
} from "@/app/demo/[name]/ui/tooltip-client";

export const tooltip = {
  name: "tooltip",
  components: {
    Basic: <TooltipBasic />,
    Sides: <TooltipSides />,
    WithIcon: <TooltipWithIcon />,
    WithDelay: <TooltipWithDelay />,
    RichContent: <TooltipRichContent />,
    Controlled: <TooltipControlled />,
  },
};
