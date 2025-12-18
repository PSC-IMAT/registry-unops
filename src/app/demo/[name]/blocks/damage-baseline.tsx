import { BaselineBlock, baselineExamples } from "@/registry/onu/blocks/baseline";

export const damageBaseline = {
  name: "damage-baseline",
  components: {
    Default: <BaselineBlock {...baselineExamples[0]} />,
  },
};
