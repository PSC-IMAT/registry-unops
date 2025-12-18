import { DamageHeroBlock, damageHeroExamples } from "@/registry/onu/blocks/damage-hero";

export const damageHero = {
  name: "damage-hero",
  components: {
    Default: <DamageHeroBlock {...damageHeroExamples[0]} />,
    Background: <DamageHeroBlock {...damageHeroExamples[1]} />,
  },
};
