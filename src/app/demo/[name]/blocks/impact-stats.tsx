import { ImpactStatsBlock, impactStatsExamples } from "@/registry/onu/blocks/impact-stats";

export const impactStats = {
  name: "impact-stats",
  components: {
    ImpactStatsDemo: <ImpactStatsBlock {...impactStatsExamples[0]} />,
  },
};
