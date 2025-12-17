import {
  ProgressAnimated,
  ProgressBasic,
  ProgressIndeterminate,
  ProgressWithLabel,
} from "@/app/demo/[name]/ui/progress-client";

export const progress = {
  name: "progress",
  components: {
    Basic: <ProgressBasic />,
    Indeterminate: <ProgressIndeterminate />,
    WithLabel: <ProgressWithLabel />,
    Animated: <ProgressAnimated />,
  },
};
