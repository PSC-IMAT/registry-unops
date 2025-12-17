import { HeroBlock, heroExamples } from "@/registry/onu/blocks/hero";

export const hero = {
  name: "hero",
  components: {
    HeroDemo: <HeroBlock {...heroExamples[0]} />,
  },
};
