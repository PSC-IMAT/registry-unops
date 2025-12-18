"use client";

import React, { useState } from "react";
import { z } from "zod";
import { Section } from "@/ui/section";
import { SectionHeader } from "@/registry/onu/components/content/SectionHeader";
import { ResponsiveIframe } from "@/registry/onu/components/media/ResponsiveIframe";
import { EmbedToolbar } from "@/registry/onu/components/media/EmbedToolbar";
import { Button } from "@/ui/button";

export const MonitoringBlockSchema = z.object({
  header: z.object({ title: z.string(), subtitle: z.string().optional(), lead: z.string().optional() }),
  embedUrl: z.string(),
});

export type MonitoringBlockProps = z.infer<typeof MonitoringBlockSchema>;

export const MonitoringBlock: React.FC<MonitoringBlockProps> = ({ header, embedUrl }) => {
  const [url, setUrl] = useState(embedUrl);

  return (
    <Section spacing="lg">
      <div className="space-y-4">
        <SectionHeader {...header} />

        <EmbedToolbar url={url} onReload={() => setUrl((u) => `${u}`)} />
        <ResponsiveIframe src={url} title="Monitoring Webapp" />

        <div>
          <Button variant="secondary" onClick={() => {
            // Mock action: either scroll to an anchor or update embed params
            const anchor = document.getElementById("hospital-anchor");
            if (anchor) anchor.scrollIntoView({ behavior: "smooth" });
            // Demonstration: append a query param to simulate zoom
            try {
              const newUrl = new URL(url);
              newUrl.searchParams.set("focus", "hospital");
              setUrl(newUrl.toString());
            } catch {
              // noop
            }
          }}>Zoom to Hospital</Button>
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
