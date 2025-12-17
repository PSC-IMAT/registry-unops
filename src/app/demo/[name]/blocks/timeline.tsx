import { TimelineBlock, timelineExamples } from "@/registry/onu/blocks/timeline";

export const timeline = {
  name: "timeline",
  components: {
    TimelineDemo: <TimelineBlock {...timelineExamples[0]} />,
  },
};
