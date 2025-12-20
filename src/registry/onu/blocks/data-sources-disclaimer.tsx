/**
 * Data Sources & Disclaimer Block Component
 */

import React from 'react';
import { z } from 'zod';
import { Section } from '@/components/ui/section';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

const SourceSchema = z.object({
  name: z.string(),
  license: z.string().optional(),
  url: z.string().optional(),
});

export const DataSourcesDisclaimerBlockSchema = z.object({
  title: z.string().default('Data Sources & Disclaimer'),
  sources: z.array(SourceSchema).min(1),
  lastUpdated: z.string(),
  limitations: z.array(z.string()).optional(),
  disclaimer: z.string().optional(),
  className: z.string().optional(),
});

export type DataSourcesDisclaimerBlockProps = z.infer<typeof DataSourcesDisclaimerBlockSchema>;

export const DataSourcesDisclaimerBlock: React.FC<DataSourcesDisclaimerBlockProps> = ({
  title,
  sources,
  lastUpdated,
  limitations,
  disclaimer,
  className,
}) => {
  return (
    <Section
      spacing="md"
      className={cn(
        'relative overflow-hidden bg-linear-to-br from-slate-50 via-white to-blue-50/30',
        className,
      )}
    >
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -top-40 -right-40 h-80 w-80 rounded-full bg-blue-300 opacity-10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-cyan-300 opacity-10 blur-3xl" />

      <div className="relative z-10 space-y-6">
        <Heading level="h2" weight="bold" className="text-3xl text-slate-900">
          {title}
        </Heading>

        <div className="grid gap-4 md:grid-cols-2">
          <Card className="rounded-xl border border-blue-100/60 bg-white shadow-md transition-all hover:shadow-lg">
            <div className="space-y-3 p-5">
              <Heading level="h3" weight="semibold" className="text-slate-900">
                Data Sources
              </Heading>
              <div className="space-y-2">
                {sources.map((source, index) => (
                  <div key={index} className="text-sm">
                    <Text weight="semibold" className="text-slate-900">
                      {source.name}
                    </Text>
                    {source.license && (
                      <Text className="text-slate-600">
                        License: {source.license}
                      </Text>
                    )}
                    {source.url && (
                      <a href={source.url} className="text-blue-600 hover:underline text-sm">
                        {source.url}
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </Card>

          <div className="space-y-4">
            <Card className="rounded-xl border border-slate-200/60 bg-linear-to-br from-slate-50 to-blue-50/40 shadow-md">
              <div className="space-y-2 p-5">
                <Heading level="h3" weight="semibold" className="text-slate-900">
                  Last Updated
                </Heading>
                <Text className="text-slate-700">{lastUpdated}</Text>
              </div>
            </Card>

            {limitations && limitations.length > 0 && (
              <Card className="rounded-xl border border-yellow-200/60 bg-linear-to-br from-yellow-50 to-amber-50/40 shadow-md">
                <div className="space-y-2 p-5">
                  <Heading level="h3" weight="semibold" className="text-slate-900">
                    Data Limitations
                  </Heading>
                  <ul className="list-disc space-y-1 pl-4 text-sm text-slate-700">
                    {limitations.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </Card>
            )}
          </div>
        </div>

        {disclaimer && (
          <Card className="rounded-xl border border-red-200/60 bg-linear-to-br from-red-50 to-rose-50/40 shadow-md">
            <div className="space-y-3 p-5">
              <div className="flex items-center gap-2">
                <Badge variant="destructive">DISCLAIMER</Badge>
                <Text className="text-slate-600 text-sm">Please read carefully</Text>
              </div>
              <Text className="text-slate-700 leading-relaxed">
                {disclaimer}
              </Text>
            </div>
          </Card>
        )}
      </div>
    </Section>
  );
};

export const dataSourcesDisclaimerExamples = [
  {
    title: "Data Exemple",
    sources: [
      { name: 'World Bank Open Data', license: 'CC BY 4.0', url: 'https://data.worldbank.org' },
      { name: 'UNOPS Project Database', license: 'Internal Use' },
      { name: 'ESA Sentinel-2', license: 'Open Access' },
    ],
    lastUpdated: 'March 25, 2024',
    limitations: [
      'Satellite data availability limited by cloud cover',
      'Survey data excludes conflict-affected regions',
      'Economic indicators lag by 6 months',
    ],
    disclaimer: 'The designations employed and the presentation of material in this report do not imply the expression of any opinion whatsoever on the part of the United Nations concerning the legal status of any country, territory, city or area or of its authorities, or concerning delimitation of its frontiers or boundaries.',
  },
];
