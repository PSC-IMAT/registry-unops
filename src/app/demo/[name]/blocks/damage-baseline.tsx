import { BaselineBlock, BaselineBlockProps } from "@/registry/onu/blocks/baseline";

const baselineExamples: BaselineBlockProps[] = [
  {
    header: {
      title: "Establishing the baseline",
      subtitle: "Pre-conflict infrastructure and services",
      lead: "We document the status quo to inform subsequent monitoring and assessment phases.",
    },
    videoSrc: "/videos/baseline.mp4",
    categories: [{ label: "Hospitals" }, { label: "Schools" }, { label: "Water" }, { label: "Power" }],
    storySteps: [
      { title: "Data collection", text: "Gather satellite imagery, official datasets, and field reports." },
      { title: "Normalization", text: "Standardize formats and align spatial references." },
      { title: "Baseline synthesis", text: "Create baseline layers for key assets and services." },
    ],
    partners: [{ name: "WHO" }, { name: "UNICEF" }, { name: "Local NGO" }],
  },
];

export const damageBaseline = {
  name: "damage-baseline",
  components: {
    Default: <BaselineBlock {...baselineExamples[0]} />,
  },
};
