import {
  SliderBasic,
  SliderControlled,
  SliderDisabled,
  SliderRange,
  SliderSteps,
  SliderVertical,
} from "@/app/demo/[name]/ui/slider-client";

export const slider = {
  name: "slider",
  components: {
    Basic: <SliderBasic />,
    Range: <SliderRange />,
    Steps: <SliderSteps />,
    Disabled: <SliderDisabled />,
    Vertical: <SliderVertical />,
    Controlled: <SliderControlled />,
  },
};
