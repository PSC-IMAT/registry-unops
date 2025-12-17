/**
 * Impact Stats Block Component
 * 
 * KPI grid with notes and sources
 */

import React from 'react';
import { z } from 'zod';
import { Section } from '@/ui/section';
import { Heading } from '@/ui/heading';
import { Text } from '@/registry/onu/ui/text';
import { Card } from '@/ui/card';
import { cn } from '@/lib/utils';

const StatSchema = z.object({
  label: z.string(),
  value: z.string(),
  change: z.string().optional(),
  icon: z.string().optional(),
});

export const ImpactStatsBlockSchema = z.object({
  title: z.string().default('Impact Statistics'),
  stats: z.array(StatSchema).min(2),
  note: z.string().optional(),
  source: z.string().optional(),
  className: z.string().optional(),
});

export type ImpactStatsBlockProps = z.infer<typeof ImpactStatsBlockSchema>;

export const ImpactStatsBlock: React.FC<ImpactStatsBlockProps> = ({
  title,
  stats,
  note,
  source,
  className,
}) => {
  return (
    <Section spacing="lg" className={cn('bg-blue-50', className)}>
      <div className="space-y-6">
        <Heading level="h2" weight="bold" className="text-center">
          {title}
        </Heading>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center bg-white">
              <div className="space-y-2">
                {stat.icon && (
                  <Text className="block">
                    {stat.icon}
                  </Text>
                )}
                <Heading level="h3" weight="bold" className="text-blue-600">
                  {stat.value}
                </Heading>
                <Text className="text-muted-foreground">
                  {stat.label}
                </Text>
                {stat.change && (
                  <Text weight="semibold" className="text-green-600">
                    {stat.change}
                  </Text>
                )}
              </div>
            </Card>
          ))}
        </div>

        {(note || source) && (
          <div className="space-y-2 border-t pt-4">
            {note && (
              <Text className="text-muted-foreground italic">
                {note}
              </Text>
            )}
            {source && (
              <Text className="text-muted-foreground">
                <strong>Source:</strong> {source}
              </Text>
            )}
          </div>
        )}
      </div>
    </Section>
  );
};

export const impactStatsExamples = [
  {
    title: 'Global Impact 2024',
    stats: [
      { label: 'People Reached', value: '12.4M', change: '+23% YoY', icon: '👥' },
      { label: 'Countries', value: '45', icon: '🌍' },
      { label: 'Projects', value: '1,247', change: '+15%', icon: '📊' },
      { label: 'Investment', value: '$2.4B', icon: '💰' },
      { label: 'Jobs Created', value: '87K', change: '+18%', icon: '💼' },
      { label: 'CO₂ Reduced', value: '1.2M tons', icon: '🌱' },
    ],
    note: 'All figures represent cumulative impact from January to December 2024',
    source: 'UNOPS Annual Report 2024, verified by independent auditors',
  },
  {
    title: 'Emergency Response Metrics',
    stats: [
      { label: 'Affected Population', value: '450K', icon: '⚠️' },
      { label: 'Relief Centers', value: '38', icon: '🏥' },
      { label: 'Aid Packages', value: '125K', icon: '📦' },
      { label: 'Medical Teams', value: '47', icon: '👨‍⚕️' },
    ],
    note: 'Updated daily as of March 25, 2024',
    source: 'Emergency Operations Center',
  },
];
