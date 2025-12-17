/**
 * Chart Narrative Block - placeholder for charts with narrative
 */

import React from 'react';
import { z } from 'zod';
import { Section } from '@/ui/section';
import { Heading } from '@/ui/heading';
import { Text } from '@/registry/onu/ui/text';
import { Card } from '@/ui/card';

export const ChartNarrativeBlockSchema = z.object({
  title: z.string(),
  chartType: z.enum(['bar', 'line', 'donut']),
  narrative: z.string(),
  methodology: z.string().optional(),
  className: z.string().optional(),
});

export type ChartNarrativeBlockProps = z.infer<typeof ChartNarrativeBlockSchema>;

export const ChartNarrativeBlock: React.FC<ChartNarrativeBlockProps> = ({
  title,
  chartType,
  narrative,
  methodology,
  className,
}) => {
  return (
    <Section spacing="lg" className={className}>
      <div className="space-y-6">
        <Heading level="h2" weight="bold">
          {title}
        </Heading>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="h-96 border rounded-lg flex items-center justify-center bg-gray-50">
            <div className="text-center">
              <Text >📊 {chartType.toUpperCase()} Chart</Text>
              <Text className="text-muted-foreground mt-2">
                Integrate chart library here
              </Text>
            </div>
          </div>

          <div className="space-y-4">
            <Card >
              <div className="space-y-3">
                <Heading level="h3" weight="semibold">
                  Analysis
                </Heading>
                <Text >{narrative}</Text>
              </div>
            </Card>

            {methodology && (
              <Card >
                <div className="space-y-2">
                  <Heading level="h4" weight="semibold">
                    Methodology
                  </Heading>
                  <Text className="text-muted-foreground">
                    {methodology}
                  </Text>
                </div>
              </Card>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
};

export const chartNarrativeExamples = [
  {
    title: 'GDP Growth Trends',
    chartType: 'line' as const,
    narrative: 'Regional GDP growth has accelerated from 2.1% to 4.3% over the past five years, with infrastructure investments contributing an estimated 1.2 percentage points to this growth.',
    methodology: 'World Bank GDP data (constant 2015 USD), regression analysis controlling for commodity prices and regional trade',
  },
];
