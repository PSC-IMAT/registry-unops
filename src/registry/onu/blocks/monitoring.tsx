"use client";

import React, { useState } from "react";
import { z } from "zod";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/registry/onu/components/content/SectionHeader";
import { ResponsiveIframe } from "@/registry/onu/components/media/ResponsiveIframe";
import { EmbedToolbar } from "@/registry/onu/components/media/EmbedToolbar";
import { Button } from "@/components/ui/button";

export const MonitoringBlockSchema = z.object({
  header: z.object({ title: z.string(), subtitle: z.string().optional(), lead: z.string().optional() }),
  embedUrl: z.string(),
});

export type MonitoringBlockProps = z.infer<typeof MonitoringBlockSchema>;

export const MonitoringBlock: React.FC<MonitoringBlockProps> = ({ header, embedUrl }) => {
  const [url, setUrl] = useState(embedUrl);

  return (
    <Section spacing="lg">
      <div className="space-y-6">
        <SectionHeader {...header} />

        <div className="bg-linear-to-br from-slate-50 to-blue-50 rounded-xl border border-slate-200/50 p-6 shadow-md">
          <EmbedToolbar url={url} onReload={() => setUrl((u) => `${u}`)} />
          
          <div className="mt-4 rounded-lg overflow-hidden border border-slate-200 shadow-sm">
            <ResponsiveIframe src={url} title="Monitoring Webapp" />
          </div>
        </div>

        <div className="flex gap-3">
          <Button 
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all duration-300"
            onClick={() => {
              const anchor = document.getElementById("hospital-anchor");
              if (anchor) anchor.scrollIntoView({ behavior: "smooth" });
              try {
                const newUrl = new URL(url);
                newUrl.searchParams.set("focus", "hospital");
                setUrl(newUrl.toString());
              } catch {
                // noop
              }
            }}
          >
            📍 Zoom to Hospital
          </Button>
        </div>
      </div>
    </Section>
  );
};

export const monitoringExamples: MonitoringBlockProps[] = [
  {
    header: {
      title: "Monitoring the situation",
      subtitle: "Near real-time updates",
      lead: "Track changes to critical infrastructure and services as events unfold.",
    },
    embedUrl: "https://example.com/monitoring",
  },
];
