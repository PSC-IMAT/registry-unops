import { RecommendationsBlock, recommendationsExamples } from "@/registry/onu/blocks/recommendations";

export const recommendations = {
  name: "recommendations",
  components: {
    RecommendationsDemo: <RecommendationsBlock {...recommendationsExamples?.[0]} />,
  },
};
