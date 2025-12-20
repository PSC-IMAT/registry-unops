/**
 * Timeline Block
 */

import React from 'react';
import { z } from 'zod';
import { Section } from '@/components/ui/section';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

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
    <Section spacing="lg" className={cn('bg-linear-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden', className)}>
      {/* Decorative elements */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-300 rounded-full blur-3xl opacity-10" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-300 rounded-full blur-3xl opacity-10" />
      
      <div className="relative z-10 space-y-8">
        <Heading level="h2" weight="bold" className="text-3xl text-slate-900">
          {title}
        </Heading>

        <div className="relative space-y-6">
          <div className="absolute left-6 top-0 bottom-0 w-1 bg-linear-to-b from-blue-500 to-blue-200" />

          {events.map((event, index) => (
            <div key={index} className="relative flex gap-8 pl-20">
              <div className="absolute left-0 flex flex-col items-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-linear-to-br from-blue-600 to-blue-700 text-white font-bold z-10 shadow-lg">
                  {index + 1}
                </div>
              </div>

              <div className="flex-1 pb-8 bg-white rounded-xl shadow-md hover:shadow-lg p-6 border border-blue-100/50 hover:border-blue-200 transition-all duration-300 transform hover:scale-105">
                <div className="space-y-3">
                  <div className="flex items-center gap-3 flex-wrap">
                    <Text weight="bold" className="text-blue-600 text-lg">
                      📅 {event.date}
                    </Text>
                    {event.tag && (
                      <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200">
                        {event.tag}
                      </Badge>
                    )}
                  </div>
                  <Heading level="h3" weight="semibold" className="text-slate-900">
                    {event.title}
                  </Heading>
                  <Text className="text-slate-700 leading-relaxed">
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
