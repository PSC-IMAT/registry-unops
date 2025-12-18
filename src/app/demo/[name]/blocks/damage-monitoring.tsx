import { MonitoringBlock, monitoringExamples } from "@/registry/onu/blocks/monitoring";

export const damageMonitoring = {
  name: "damage-monitoring",
  components: {
    Default: <MonitoringBlock {...monitoringExamples[0]} />,
  },
};
