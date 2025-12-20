import { DamageHeroBlock, DamageHeroProps } from "@/registry/onu/blocks/damage-hero";

const damageHeroExamples: DamageHeroProps[] = [
  {
    title: "Damage Assessment in Conflict Environments",
    description: "Rapid situational awareness, baseline establishment, and targeted monitoring for critical infrastructure.",
    buttonText: "Get Started",
    buttonLink: "#baseline",
    overlay: true,
  },
  {
    title: "Urban Hospital Impact Analysis",
    description: "Assess damage and prioritize response actions across sectors.",
    buttonText: "View Dashboard",
    buttonLink: "#dashboard",
    backgroundImage: "/images/hospital.jpg",
    overlay: true,
  },
];
export const damageHero = {
  name: "damage-hero",
  components: {
    Default: <DamageHeroBlock {...damageHeroExamples[0]} />,
    Background: <DamageHeroBlock {...damageHeroExamples[1]} />,
  },
};
