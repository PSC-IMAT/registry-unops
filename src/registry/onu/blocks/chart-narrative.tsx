/**
 * Chart Narrative Block - placeholder for charts with narrative
 */

import React from 'react';
import { z } from 'zod';
import { Section } from '@/components/ui/section';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

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
    <Section spacing="lg" className={cn('bg-linear-to-br from-slate-50 via-white to-purple-50/20 relative overflow-hidden', className)}>
      {/* Decorative elements */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full blur-3xl opacity-10" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 rounded-full blur-3xl opacity-10" />
      
      <div className="relative z-10 space-y-8">
        <Heading level="h2" weight="bold" className="text-3xl text-slate-900">
          {title}
        </Heading>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="h-96 border-2 border-slate-300 rounded-xl flex items-center justify-center bg-linear-to-br from-blue-50 to-purple-50/30 shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="text-center space-y-3">
              <div className="text-5xl">📊</div>
              <Text className="text-slate-600 font-semibold">{chartType.toUpperCase()} Chart</Text>
              <Text className="text-slate-500 text-sm">
                Integrate chart library here
              </Text>
            </div>
          </div>

          <div className="space-y-5">
            <Card className="rounded-xl shadow-md hover:shadow-lg bg-white border border-blue-100/50 hover:border-blue-200 transition-all duration-300 overflow-hidden">
              <div className="space-y-4 p-6">
                <Heading level="h3" weight="semibold" className="text-slate-900 flex items-center gap-2">
                  💡 Analysis
                </Heading>
                <Text className="text-slate-700 leading-relaxed">{narrative}</Text>
              </div>
            </Card>

            {methodology && (
              <Card className="rounded-xl shadow-md hover:shadow-lg bg-linear-to-br from-slate-50 to-blue-50/50 border border-slate-200/50 hover:border-blue-200 transition-all duration-300 overflow-hidden">
                <div className="space-y-3 p-6">
                  <Heading level="h4" weight="semibold" className="text-slate-900 flex items-center gap-2">
                    🔬 Methodology
                  </Heading>
                  <Text className="text-slate-700 text-sm leading-relaxed">
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
