/**
 * Impact Stats Block Component
 * 
 * KPI grid with notes and sources
 */

import React from 'react';
import { z } from 'zod';
import { Section } from '@/components/ui/section';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import { Card } from '@/components/ui/card';
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
    <Section spacing="lg" className={cn('bg-linear-to-br from-blue-50 via-slate-50 to-cyan-50/30 relative overflow-hidden', className)}>
      {/* Decorative elements */}
      <div className="absolute -top-32 -right-32 w-64 h-64 bg-blue-200 rounded-full blur-3xl opacity-10" />
      <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-cyan-200 rounded-full blur-3xl opacity-10" />
      
      <div className="relative z-10 space-y-8">
        <div className="text-center space-y-2">
          <Heading level="h2" weight="bold" className="text-3xl text-slate-900">
            {title}
          </Heading>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <Card 
              key={index} 
              className="text-center bg-white rounded-xl shadow-md hover:shadow-xl border border-blue-100/50 hover:border-blue-200 transition-all duration-300 transform hover:scale-105 overflow-hidden"
            >
              <div className="space-y-3 p-6">
                {stat.icon && (
                  <Text className="text-4xl block">
                    {stat.icon}
                  </Text>
                )}
                <Heading level="h3" weight="bold" className="text-blue-600 text-2xl">
                  {stat.value}
                </Heading>
                <Text className="text-slate-600 font-medium">
                  {stat.label}
                </Text>
                {stat.change && (
                  <Text weight="semibold" className="text-emerald-600 text-sm">
                    ↗ {stat.change}
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
