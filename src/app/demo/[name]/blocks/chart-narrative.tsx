import { ChartNarrativeBlock, chartNarrativeExamples } from "@/registry/onu/blocks/chart-narrative";

export const chartNarrative = {
  name: "chart-narrative",
  components: {
    ChartNarrativeDemo: <ChartNarrativeBlock {...chartNarrativeExamples?.[0]} />,
  },
};
