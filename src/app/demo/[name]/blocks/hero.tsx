import { HeroBlock } from "@/registry/onu/blocks/hero";

const heroExamples = [
  {
    title: "Global Infrastructure Impact Report 2024",
    subtitle:
      "Comprehensive analysis of sustainable development projects across 45 countries",
    media: {
      type: "image" as const,
      src: "/assets/images/demo/placeholder.png",
      alt: "Global project map",
    },
    kpis: [
      {
        label: "Projects Completed",
        value: "1,247",
        change: "+23% YoY",
        icon: "📊",
      },
      { label: "Countries Served", value: "45", icon: "🌍" },
      { label: "Investment Value", value: "$2.4B", change: "+15%", icon: "💰" },
      { label: "Beneficiaries", value: "12M", icon: "👥" },
    ],
    primaryCTA: {
      label: "Read Full Report",
      href: "#report",
      variant: "primary" as const,
    },
    secondaryCTA: {
      label: "View Data",
      href: "#data",
      variant: "secondary" as const,
    },
  },
  {
    title: "Emergency Response: Flood Relief Operations",
    subtitle: "Real-time monitoring and impact assessment",
    media: { type: "none" as const },
    kpis: [
      { label: "Affected Population", value: "450K", icon: "⚠️" },
      { label: "Relief Centers", value: "38", icon: "🏥" },
    ],
    primaryCTA: { label: "Emergency Updates", href: "#updates" },
  },
  {
    title: "Renewable Energy Transition Study",
    subtitle: "Pathway to carbon neutrality in developing regions",
    media: {
      type: "video" as const,
      src: "/videos/energy-transition.mp4",
      poster: "/images/energy-poster.jpg",
    },
    kpis: [
      { label: "Solar Capacity", value: "2.3 GW", change: "+45%", icon: "☀️" },
      { label: "CO₂ Reduced", value: "1.2M tons", icon: "🌱" },
      { label: "Rural Access", value: "78%", change: "+12%", icon: "🔌" },
    ],
    primaryCTA: { label: "Explore Methodology", href: "#methodology" },
  },
];

export const hero = {
  name: "hero",
  components: {
    HeroDemo: <HeroBlock {...heroExamples[0]} />,
  },
};
