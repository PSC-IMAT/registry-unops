/**
 * Region Breakdown Block
 */

import React from 'react';
import { z } from 'zod';
import { Section } from '@/ui/section';
import { Heading } from '@/ui/heading';
import { Text } from '@/registry/onu/ui/text';
import { Card } from '@/ui/card';
import { Link } from '@/ui/link';

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
    <Section spacing="lg" className={className}>
      <div className="space-y-6">
        <Heading level="h2" weight="bold">
          {title}
        </Heading>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {regions.map((region, index) => (
            <Card key={index} >
              <div className="space-y-4">
                <Heading level="h3" weight="semibold">
                  {region.name}
                </Heading>

                <div className="grid grid-cols-2 gap-3">
                  {region.kpis.map((kpi, kpiIndex) => (
                    <div key={kpiIndex} className="space-y-1">
                      <Text weight="bold" className="text-blue-600">
                        {kpi.value}
                      </Text>
                      <Text className="text-muted-foreground">
                        {kpi.label}
                      </Text>
                    </div>
                  ))}
                </div>

                {region.drilldownUrl && (
                  <Link href={region.drilldownUrl} className="text-blue-600">
                    View Details →
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
