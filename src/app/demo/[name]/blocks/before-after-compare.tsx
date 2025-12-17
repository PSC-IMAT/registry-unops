import { BeforeAfterCompareBlock, beforeAfterCompareExamples } from "@/registry/onu/blocks/before-after-compare";

export const beforeAfterCompare = {
  name: "before-after-compare",
  components: {
    BeforeAfterCompareDemo: (
      <BeforeAfterCompareBlock
        {...(beforeAfterCompareExamples && beforeAfterCompareExamples[0]
          ? beforeAfterCompareExamples[0]
          : {
              title: "Infrastructure Development: 2020 vs 2024",
              before: {
                src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&q=80&auto=format&fit=crop",
                caption: "Rural road conditions before rehabilitation project",
                source: "Field survey, January 2020",
              },
              after: {
                src: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800&q=80&auto=format&fit=crop",
                caption: "Paved road with drainage systems completed",
                source: "Drone survey, March 2024",
              },
            })}
      />
    ),
  },
};
