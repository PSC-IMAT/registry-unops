/**
 * Data Sources & Disclaimer Block Component
 */

import React from 'react';
import { z } from 'zod';
import { Section } from '@/ui/section';
import { Heading } from '@/ui/heading';
import { Text } from '@/registry/onu/ui/text';
import { Card } from '@/ui/card';
import { Badge } from '@/ui/badge';
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
    <Section spacing="md" className={cn('bg-gray-50', className)}>
      <div className="space-y-6">
        <Heading level="h2" weight="bold">
          {title}
        </Heading>

        <div className="grid gap-4 md:grid-cols-2">
          <Card >
            <div className="space-y-3">
              <Heading level="h3" weight="semibold">
                Data Sources
              </Heading>
              <div className="space-y-2">
                {sources.map((source, index) => (
                  <div key={index} className="text-sm">
                    <Text weight="semibold">
                      {source.name}
                    </Text>
                    {source.license && (
                      <Text className="text-muted-foreground">
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
            <Card >
              <div className="space-y-2">
                <Heading level="h3" weight="semibold">
                  Last Updated
                </Heading>
                <Text >{lastUpdated}</Text>
              </div>
            </Card>

            {limitations && limitations.length > 0 && (
              <Card >
                <div className="space-y-2">
                  <Heading level="h3" weight="semibold">
                    Data Limitations
                  </Heading>
                  <ul className="text-sm space-y-1 list-disc pl-4">
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
          <Card >
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Badge >
                  DISCLAIMER
                </Badge>
              </div>
              <Text className="text-muted-foreground">
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
