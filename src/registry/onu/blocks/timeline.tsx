/**
 * Timeline Block
 */

import React from 'react';
import { z } from 'zod';
import { Section } from '@/ui/section';
import { Heading } from '@/ui/heading';
import { Text } from '@/registry/onu/ui/text';
import { Badge } from '@/ui/badge';

const TimelineEventSchema = z.object({
  date: z.string(),
  title: z.string(),
  description: z.string(),
  tag: z.string().optional(),
});

export const TimelineBlockSchema = z.object({
  title: z.string().default('Timeline'),
  events: z.array(TimelineEventSchema).min(2),
  className: z.string().optional(),
});

export type TimelineBlockProps = z.infer<typeof TimelineBlockSchema>;

export const TimelineBlock: React.FC<TimelineBlockProps> = ({
  title,
  events,
  className,
}) => {
  return (
    <Section spacing="lg" className={className}>
      <div className="space-y-6">
        <Heading level="h2" weight="bold">
          {title}
        </Heading>

        <div className="relative space-y-8">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-300" />

          {events.map((event, index) => (
            <div key={index} className="relative flex gap-6">
              <div className="flex flex-col items-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-white font-bold z-10">
                  {index + 1}
                </div>
              </div>

              <div className="flex-1 pb-8">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <Text weight="bold" className="text-blue-600">
                      {event.date}
                    </Text>
                    {event.tag && (
                      <Badge >
                        {event.tag}
                      </Badge>
                    )}
                  </div>
                  <Heading level="h3" weight="semibold">
                    {event.title}
                  </Heading>
                  <Text className="text-muted-foreground">
                    {event.description}
                  </Text>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export const timelineExamples = [
  {
    title: 'Project Timeline',
    events: [
      {
        date: '2023-01-10',
        title: 'Project Initiation',
        description: 'Feasibility study completed, funding secured',
        tag: 'Planning',
      },
      {
        date: '2023-06-15',
        title: 'Phase 1 Completion',
        description: '12 communities connected to clean water supply',
        tag: 'Milestone',
      },
      {
        date: '2024-01-05',
        title: 'Phase 2 Launch',
        description: 'Expansion to additional 25 communities',
        tag: 'Implementation',
      },
      {
        date: '2024-12-31',
        title: 'Project Completion',
        description: 'Full coverage achieved, handover to local authorities',
        tag: 'Completion',
      },
    ],
  },
];
