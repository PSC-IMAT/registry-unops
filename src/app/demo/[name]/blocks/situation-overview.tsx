import { SituationOverviewBlock, situationOverviewExamples } from "@/registry/onu/blocks/situation-overview";

export const situationOverview = {
  name: "situation-overview",
  components: {
    SituationOverviewDemo: <SituationOverviewBlock {...situationOverviewExamples[0]} />,
  },
};
