import { BottomNavBlock, BottomNavBlockProps } from "@/registry/onu/blocks/bottom-nav";
const bottomNavExamples: BottomNavBlockProps[] = [
  {
    items: [
      { id: "baseline", label: "Establishing the baseline" },
      { id: "monitoring", label: "Monitoring the situation" },
      { id: "damage", label: "Assessing the damage" },
    ],
    offset: 80,
  },
];

export const damageBottomNav = {
  name: "damage-bottom-nav",
  components: {
    Default: <BottomNavBlock {...bottomNavExamples[0]} />,
  },
};
