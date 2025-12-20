"use client";

import React, { useState } from "react";
import { z } from "zod";
import { Section } from "@/components/ui/section";
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
      <div className="space-y-6">
        <SectionHeader {...header} />
        
        <div className="bg-linear-to-br from-slate-50 to-red-50/20 rounded-xl border border-slate-200/50 p-6 shadow-md">
          <EmbedToolbar url={url} onReload={() => setUrl((u) => `${u}`)} />

          <div className="mt-4">
            {simulateError ? (
              <div className="rounded-lg border-2 border-red-200 bg-red-50 p-8">
                <ErrorState message="Failed to load dashboard" />
              </div>
            ) : (
              <div className="rounded-lg overflow-hidden border border-slate-200 shadow-sm">
                <ResponsiveIframe src={url} title="Damage Dashboard" />
              </div>
            )}
          </div>
        </div>

        <div>
          <button 
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-slate-100"
            onClick={() => setSimulateError((v) => !v)}
          >
            {simulateError ? "✓" : "○"} Toggle error simulation
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
