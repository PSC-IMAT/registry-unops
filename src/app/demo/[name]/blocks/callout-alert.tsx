import { CalloutAlertBlock, calloutAlertExamples } from "@/registry/onu/blocks/callout-alert";

export const calloutAlert = {
  name: "callout-alert",
  components: {
    CalloutAlertDemo: <CalloutAlertBlock {...calloutAlertExamples?.[0]} />,
  },
};
