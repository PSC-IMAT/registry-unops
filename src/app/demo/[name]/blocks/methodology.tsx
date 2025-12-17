import { MethodologyBlock, methodologyExamples } from "@/registry/onu/blocks/methodology";

export const methodology = {
  name: "methodology",
  components: {
    MethodologyDemo: <MethodologyBlock {...methodologyExamples?.[0]} />,
  },
};
