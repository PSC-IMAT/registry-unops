import { CreditsBlock, creditsExamples } from "@/registry/onu/blocks/credits";

export const credits = {
  name: "credits",
  components: {
    CreditsDemo: <CreditsBlock {...creditsExamples?.[0]} />,
  },
};
