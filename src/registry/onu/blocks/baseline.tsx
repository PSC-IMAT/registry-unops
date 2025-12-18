"use client";

import React from "react";
import { z } from "zod";
import { Section } from "@/ui/section";
import { SectionHeader } from "@/registry/onu/components/content/SectionHeader";
import { Card } from "@/ui/card";
import { Text } from "@/registry/onu/ui/text";
import { ChartPlaceholder } from "@/registry/onu/components/story/ChartPlaceholder";
import { ScrollStory } from "@/registry/onu/components/story/ScrollStory";
import { PartnerGrid } from "@/registry/onu/components/story/PartnerGrid";
import { Video } from "@/ui/video";

const CategorySchema = z.object({ label: z.string() });

export const BaselineBlockSchema = z.object({
  header: z.object({ title: z.string(), subtitle: z.string().optional(), lead: z.string().optional() }),
  videoSrc: z.string().optional(),
  categories: z.array(CategorySchema).optional(),
  storySteps: z.array(z.object({ title: z.string(), text: z.string() })).min(1),
  partners: z.array(z.object({ name: z.string(), logo: z.string().optional() })).optional(),
});

export type BaselineBlockProps = z.infer<typeof BaselineBlockSchema>;

export const BaselineBlock: React.FC<BaselineBlockProps> = ({ header, videoSrc, categories, storySteps, partners }) => {
  return (
    <Section spacing="lg">
      <div className="space-y-6">
        <SectionHeader {...header} />

        {/* Video / Categories */}
        <div className="grid gap-6 lg:grid-cols-2">
          <div>
            {videoSrc ? (
              <Video src={videoSrc} className="w-full rounded" />
            ) : (
              <Card>
                <div className="p-4">
                  <Text className="text-muted-foreground">Video placeholder</Text>
                </div>
              </Card>
            )}
          </div>
          <div className="grid grid-cols-2 gap-3">
            {(categories ?? []).map((c, i) => (
              <Card key={i}>
                <div className="p-3">
                  <Text>{c.label}</Text>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* ScrollStory */}
        <div className="space-y-4">
          <ScrollStory
            steps={storySteps.map((s, idx) => ({ title: s.title, text: s.text, rightMedia: <ChartPlaceholder label={`Step ${idx + 1} Chart`} /> }))}
          />
        </div>

        {/* Partners */}
        {partners && partners.length > 0 && (
          <div className="space-y-2">
            <Text className="text-muted-foreground">Partners</Text>
            <PartnerGrid partners={partners} />
          </div>
        )}
      </div>
    </Section>
  );
};

export const baselineExamples: BaselineBlockProps[] = [
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
