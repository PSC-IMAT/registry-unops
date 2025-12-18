import { DamageDashboardBlock, damageDashboardExamples } from "@/registry/onu/blocks/damage-dashboard";

export const damageDashboard = {
  name: "damage-dashboard",
  components: {
    Default: <DamageDashboardBlock {...damageDashboardExamples[0]} />,
  },
};
