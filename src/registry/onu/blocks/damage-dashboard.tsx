"use client";

import React, { useState } from "react";
import { z } from "zod";
import { Section } from "@/ui/section";
import { SectionHeader } from "@/registry/onu/components/content/SectionHeader";
import { ResponsiveIframe } from "@/registry/onu/components/media/ResponsiveIframe";
import { EmbedToolbar } from "@/registry/onu/components/media/EmbedToolbar";
import { ErrorState } from "@/registry/onu/components/media/ErrorState";
import { LoadingState } from "@/registry/onu/components/media/LoadingState";

export const DamageDashboardBlockSchema = z.object({
  header: z.object({ title: z.string(), subtitle: z.string().optional(), lead: z.string().optional() }),
  dashboardUrl: z.string(),
});

export type DamageDashboardBlockProps = z.infer<typeof DamageDashboardBlockSchema>;

export const DamageDashboardBlock: React.FC<DamageDashboardBlockProps> = ({ header, dashboardUrl }) => {
  const [url, setUrl] = useState(dashboardUrl);
  const [simulateError, setSimulateError] = useState(false);

  return (
    <Section spacing="lg">
      <div className="space-y-4">
        <SectionHeader {...header} />
        <EmbedToolbar url={url} onReload={() => setUrl((u) => `${u}`)} />

        {simulateError ? (
          <ErrorState message="Failed to load dashboard" />
        ) : (
          <ResponsiveIframe src={url} title="Damage Dashboard" />
        )}

        <div>
          <button className="text-sm text-blue-600 hover:underline" onClick={() => setSimulateError((v) => !v)}>
            Toggle error simulation
          </button>
        </div>
      </div>
    </Section>
  );
};

export const damageDashboardExamples: DamageDashboardBlockProps[] = [
  {
    header: {
      title: "Assessing the damage",
      subtitle: "Impact on assets and services",
      lead: "Aggregate indicators and qualitative assessments to prioritize response.",
    },
    dashboardUrl: "https://example.com/dashboard",
  },
];
