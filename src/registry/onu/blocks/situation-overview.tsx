/**
 * Situation Overview Block Component
 * 
 * Structured summary with context, location, dates, and impact
 */

import React from 'react';
import { z } from 'zod';
import { Section } from '@/ui/section';
import { Heading } from '@/ui/heading';
import { Text } from '@/registry/onu/ui/text';
import { Card } from '@/ui/card';
import { Badge } from '@/ui/badge';
import { cn } from '@/lib/utils';

export const SituationOverviewBlockSchema = z.object({
  title: z.string().default('Situation Overview'),
  context: z.string(),
  location: z.string(),
  keyDates: z.array(z.object({ date: z.string(), event: z.string() })),
  whatHappened: z.string(),
  whyItMatters: z.string(),
  status: z.enum(['active', 'monitoring', 'resolved']).optional(),
  className: z.string().optional(),
});

export type SituationOverviewBlockProps = z.infer<typeof SituationOverviewBlockSchema>;

export const SituationOverviewBlock: React.FC<SituationOverviewBlockProps> = ({
  title,
  context,
  location,
  keyDates,
  whatHappened,
  whyItMatters,
  status,
  className,
}) => {
  return (
    <Section spacing="lg" className={className}>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <Heading level="h2" weight="bold">
            {title}
          </Heading>
          {status && (
            <Badge
              variant={status === 'active' ? 'default' : status === 'monitoring' ? 'secondary' : 'outline'}
                          >
              {status.toUpperCase()}
            </Badge>
          )}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card >
            <div className="space-y-3">
              <Heading level="h3" weight="semibold" className="text-blue-600">
                Context
              </Heading>
              <Text >{context}</Text>
            </div>
          </Card>

          <Card >
            <div className="space-y-3">
              <Heading level="h3" weight="semibold" className="text-blue-600">
                Location
              </Heading>
              <Text >{location}</Text>
            </div>
          </Card>

          <Card >
            <div className="space-y-3">
              <Heading level="h3" weight="semibold" className="text-blue-600">
                What Happened
              </Heading>
              <Text >{whatHappened}</Text>
            </div>
          </Card>

          <Card >
            <div className="space-y-3">
              <Heading level="h3" weight="semibold" className="text-blue-600">
                Why It Matters
              </Heading>
              <Text >{whyItMatters}</Text>
            </div>
          </Card>
        </div>

        {keyDates.length > 0 && (
          <Card >
            <div className="space-y-3">
              <Heading level="h3" weight="semibold">
                Key Dates
              </Heading>
              <div className="space-y-2">
                {keyDates.map((item, index) => (
                  <div key={index} className="flex gap-4 border-l-2 border-blue-500 pl-4">
                    <Text weight="semibold" className="text-blue-600 min-w-24">
                      {item.date}
                    </Text>
                    <Text >{item.event}</Text>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        )}
      </div>
    </Section>
  );
};

export const situationOverviewExamples = [
  {
    title: 'Situation Overview',
    context: 'Unprecedented flooding affecting multiple regions following sustained heavy rainfall and dam overflow',
    location: 'Northern Province, Districts A, B, and C',
    keyDates: [
      { date: '2024-03-15', event: 'Heavy rainfall begins' },
      { date: '2024-03-18', event: 'Dam overflow warning issued' },
      { date: '2024-03-20', event: 'Evacuation orders for low-lying areas' },
      { date: '2024-03-22', event: 'Emergency response activated' },
    ],
    whatHappened: 'Cumulative rainfall exceeded 300mm over 7 days, causing river levels to rise 4.2 meters above normal. Dam capacity reached 98%, requiring controlled releases that exacerbated downstream flooding.',
    whyItMatters: 'Over 450,000 people affected, critical infrastructure damaged, agricultural losses estimated at $240M, and ongoing risks to water supply and disease outbreak.',
    status: 'active' as const,
  },
  {
    title: 'Project Overview',
    context: 'Regional infrastructure modernization initiative across 12 countries',
    location: 'Sub-Saharan Africa',
    keyDates: [
      { date: '2023-01-10', event: 'Project initiation' },
      { date: '2023-06-15', event: 'Phase 1 completion' },
      { date: '2024-01-05', event: 'Phase 2 launch' },
    ],
    whatHappened: 'Successfully completed 45 infrastructure projects including roads, bridges, and water systems, benefiting 8.5 million people.',
    whyItMatters: 'Improved regional connectivity, reduced transportation costs by 35%, and enhanced access to essential services in rural areas.',
    status: 'monitoring' as const,
  },
  {
    title: 'Crisis Response Assessment',
    context: 'Post-earthquake recovery and reconstruction efforts',
    location: 'Central Region, Urban and Rural Areas',
    keyDates: [
      { date: '2024-02-01', event: '7.2 magnitude earthquake' },
      { date: '2024-02-02', event: 'International aid mobilized' },
      { date: '2024-02-15', event: 'Recovery phase initiated' },
    ],
    whatHappened: 'Major seismic event caused widespread structural damage, displacement of 125,000 people, and disruption of essential services.',
    whyItMatters: 'Coordinated international response essential for immediate relief, medium-term recovery, and long-term resilient reconstruction.',
    status: 'active' as const,
  },
];
