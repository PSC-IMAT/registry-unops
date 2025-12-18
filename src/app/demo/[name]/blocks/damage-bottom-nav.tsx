import { BottomNavBlock, bottomNavExamples } from "@/registry/onu/blocks/bottom-nav";

export const damageBottomNav = {
  name: "damage-bottom-nav",
  components: {
    Default: <BottomNavBlock {...bottomNavExamples[0]} />,
  },
};
