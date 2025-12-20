"use client";

import React from "react";
import { z } from "zod";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/content/SectionHeader";
import { Card } from "@/components/ui/card";
import { Text } from "@/components/ui/text";
import { ChartPlaceholder } from "@/components/story/ChartPlaceholder";
import { ScrollStory } from "@/components/story/ScrollStory";
import { PartnerGrid } from "@/components/story/PartnerGrid";
import { Video } from "@/components/ui/video";

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
      <div className="space-y-8">
        <SectionHeader {...header} />

        {/* Video / Categories Section */}
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="group">
            {videoSrc ? (
              <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-slate-200">
                <Video src={videoSrc} className="w-full" />
              </div>
            ) : (
              <Card className="rounded-xl border-2 border-dashed border-slate-300 bg-linear-to-br from-slate-50 to-blue-50 hover:border-slate-400 transition-colors duration-300">
                <div className="p-8 text-center">
                  <div className="text-4xl mb-3">🎬</div>
                  <Text className="text-muted-foreground font-medium">Video placeholder</Text>
                </div>
              </Card>
            )}
          </div>
          <div className="grid grid-cols-2 gap-4">
            {(categories ?? []).map((c, i) => (
              <Card 
                key={i}
                className="rounded-lg shadow-md hover:shadow-lg transition-all duration-300 bg-linear-to-br from-white to-slate-50 border border-slate-200/50 hover:border-blue-300 cursor-pointer hover:scale-105 transform"
              >
                <div className="p-5 text-center">
                  <div className="text-lg font-semibold text-slate-900">{c.label}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* ScrollStory Section */}
        <div className="py-8 border-t border-b border-slate-200 bg-linear-to-r from-blue-50/50 to-cyan-50/50 rounded-xl p-8">
          <ScrollStory
            steps={storySteps.map((s, idx) => ({ title: s.title, text: s.text, rightMedia: <ChartPlaceholder label={`Step ${idx + 1} Chart`} /> }))}
          />
        </div>

        {/* Partners Section */}
        {partners && partners.length > 0 && (
          <div className="space-y-4 bg-linear-to-br from-slate-50 to-blue-50 rounded-xl p-8 border border-slate-200/50">
            <div className="flex items-center gap-2">
              <div className="text-2xl">🤝</div>
              <Text className="text-slate-700 font-semibold text-lg">Our Partners</Text>
            </div>
            <PartnerGrid partners={partners} />
          </div>
        )}
      </div>
    </Section>
  );
};

