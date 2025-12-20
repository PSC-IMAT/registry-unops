/**
 * Region Breakdown Block
 */

import React from 'react';
import { z } from 'zod';
import { Section } from '@/components/ui/section';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import { Card } from '@/components/ui/card';
import { Link } from '@/components/ui/link';
import { cn } from '@/lib/utils';

const RegionKPISchema = z.object({
  label: z.string(),
  value: z.string(),
});

const RegionSchema = z.object({
  name: z.string(),
  kpis: z.array(RegionKPISchema),
  drilldownUrl: z.string().optional(),
});

export const RegionBreakdownBlockSchema = z.object({
  title: z.string().default('Regional Breakdown'),
  regions: z.array(RegionSchema).min(2),
  className: z.string().optional(),
});

export type RegionBreakdownBlockProps = z.infer<typeof RegionBreakdownBlockSchema>;

export const RegionBreakdownBlock: React.FC<RegionBreakdownBlockProps> = ({
  title,
  regions,
  className,
}) => {
  return (
    <Section spacing="lg" className={cn('relative overflow-hidden', className)}>
      {/* Decorative gradient background */}
      <div className="absolute inset-0 bg-linear-to-br from-blue-50/30 via-background to-purple-50/20 pointer-events-none" />
      <div className="absolute top-20 -right-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative space-y-8">
        <div className="flex items-center gap-3">
          <div className="shrink-0 w-1.5 h-8 bg-linear-to-b from-blue-600 to-purple-600 rounded-full" />
          <Heading level="h2" weight="bold">
            {title}
          </Heading>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {regions.map((region, index) => (
            <Card 
              key={index}
              className="group relative overflow-hidden border-2 hover:border-blue-200 hover:shadow-lg transition-all duration-300"
            >
              {/* Card gradient accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-blue-600 via-purple-600 to-blue-600" />
              
              <div className="space-y-5 p-6">
                <div className="flex items-start justify-between gap-3">
                  <Heading level="h3" weight="semibold" className="text-lg group-hover:text-blue-600 transition-colors">
                    {region.name}
                  </Heading>
                  <span className="shrink-0 text-2xl opacity-60 group-hover:scale-110 transition-transform">
                    📍
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {region.kpis.map((kpi, kpiIndex) => (
                    <div 
                      key={kpiIndex} 
                      className="space-y-1.5 p-3 rounded-lg bg-linear-to-br from-blue-50/50 to-purple-50/30 border border-blue-100/50"
                    >
                      <Text weight="bold" className="text-xl text-blue-600">
                        {kpi.value}
                      </Text>
                      <Text size="sm" className="text-muted-foreground leading-tight">
                        {kpi.label}
                      </Text>
                    </div>
                  ))}
                </div>

                {region.drilldownUrl && (
                  <Link 
                    href={region.drilldownUrl} 
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium group-hover:gap-3 transition-all"
                  >
                    View Details 
                    <span className="text-lg">→</span>
                  </Link>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
};

export const regionBreakdownExamples = [
  {
    title: 'Impact by Region',
    regions: [
      {
        name: 'Northern Province',
        kpis: [
          { label: 'Population', value: '2.4M' },
          { label: 'Projects', value: '47' },
          { label: 'Investment', value: '$320M' },
          { label: 'Jobs', value: '12K' },
        ],
        drilldownUrl: '/regions/north',
      },
      {
        name: 'Central Province',
        kpis: [
          { label: 'Population', value: '4.1M' },
          { label: 'Projects', value: '89' },
          { label: 'Investment', value: '$580M' },
          { label: 'Jobs', value: '23K' },
        ],
        drilldownUrl: '/regions/central',
      },
      {
        name: 'Southern Province',
        kpis: [
          { label: 'Population', value: '1.8M' },
          { label: 'Projects', value: '34' },
          { label: 'Investment', value: '$210M' },
          { label: 'Jobs', value: '8K' },
        ],
        drilldownUrl: '/regions/south',
      },
    ],
  },
];
