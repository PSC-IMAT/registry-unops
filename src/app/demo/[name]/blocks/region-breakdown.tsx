import { RegionBreakdownBlock, regionBreakdownExamples } from "@/registry/onu/blocks/region-breakdown";

export const regionBreakdown = {
  name: "region-breakdown",
  components: {
    RegionBreakdownDemo: <RegionBreakdownBlock {...regionBreakdownExamples?.[0]} />,
  },
};
