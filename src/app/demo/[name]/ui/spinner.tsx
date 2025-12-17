import {
  SpinnerAccent,
  SpinnerBasic,
  SpinnerInverse,
  SpinnerOverlay,
  SpinnerSizes,
  SpinnerWithLabel,
} from "@/app/demo/[name]/ui/spinner-client";

export const spinner = {
  name: "spinner",
  components: {
    Basic: <SpinnerBasic />,
    Sizes: <SpinnerSizes />,
    WithLabel: <SpinnerWithLabel />,
    Overlay: <SpinnerOverlay />,
    Accent: <SpinnerAccent />,
    Inverse: <SpinnerInverse />,
  },
};
