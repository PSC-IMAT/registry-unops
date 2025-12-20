/**
 * Recommendations Block Component
 * 
 * Prioritized recommendations with owner, timeframe, and actions
 */

import React from 'react';
import { z } from 'zod';
import { Section } from '@/components/ui/section';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

const RecommendationSchema = z.object({
  priority: z.enum(['P1', 'P2', 'P3']),
  action: z.string(),
  owner: z.string(),
  timeframe: z.string(),
  impact: z.string().optional(),
});

export const RecommendationsBlockSchema = z.object({
  title: z.string().default('Recommendations'),
  subtitle: z.string().optional(),
  recommendations: z.array(RecommendationSchema).min(1),
  className: z.string().optional(),
});

export type RecommendationsBlockProps = z.infer<typeof RecommendationsBlockSchema>;

const priorityColors = {
  P1: 'danger',
  P2: 'warning',
  P3: 'primary',
} as const;

export const RecommendationsBlock: React.FC<RecommendationsBlockProps> = ({
  title,
  subtitle,
  recommendations,
  className,
}) => {
  const groupedRecs = {
    P1: recommendations.filter((r) => r.priority === 'P1'),
    P2: recommendations.filter((r) => r.priority === 'P2'),
    P3: recommendations.filter((r) => r.priority === 'P3'),
  };

  return (
    <Section
      spacing="lg"
      className={cn('relative overflow-hidden bg-linear-to-br from-slate-50 via-white to-blue-50/30', className)}
    >
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -top-40 -right-40 h-80 w-80 rounded-full bg-blue-300 opacity-10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-cyan-300 opacity-10 blur-3xl" />

      <div className="relative z-10 space-y-6">
        <div className="space-y-2">
          <Heading level="h2" weight="bold" className="text-3xl text-slate-900">
            {title}
          </Heading>
          {subtitle && (
            <Text className="text-slate-600">
              {subtitle}
            </Text>
          )}
        </div>

        {(['P1', 'P2', 'P3'] as const).map((priority) => {
          const recs = groupedRecs[priority];
          if (recs.length === 0) return null;

          return (
            <div key={priority} className="space-y-3">
              <div className="flex items-center gap-3">
                <Badge className={
                  priority === 'P1'
                    ? 'bg-red-600 text-white hover:bg-red-700'
                    : priority === 'P2'
                    ? 'bg-yellow-400 text-yellow-900 hover:bg-yellow-500'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }>
                  {priority}
                </Badge>
                <Text weight="semibold" className="text-slate-600">
                  {priority === 'P1' ? 'Critical' : priority === 'P2' ? 'High Priority' : 'Standard Priority'}
                </Text>
              </div>

              <div className="space-y-3">
                {recs.map((rec, index) => (
                  <Card
                    key={index}
                    className={
                      priority === 'P1'
                        ? 'rounded-xl border border-red-200/60 bg-linear-to-br from-red-50 to-rose-50/40 shadow-md'
                        : priority === 'P2'
                        ? 'rounded-xl border border-amber-200/60 bg-linear-to-br from-amber-50 to-yellow-50/40 shadow-md'
                        : 'rounded-xl border border-blue-200/60 bg-linear-to-br from-blue-50 to-cyan-50/40 shadow-md'
                    }
                  >
                    <div className="space-y-3 p-5">
                      <Text weight="semibold" className="text-slate-900">
                        {rec.action}
                      </Text>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <Text className="text-slate-600">
                            Owner
                          </Text>
                          <Text weight="semibold" className="text-slate-900">
                            {rec.owner}
                          </Text>
                        </div>
                        <div>
                          <Text className="text-slate-600">
                            Timeframe
                          </Text>
                          <Text weight="semibold" className="text-slate-900">
                            {rec.timeframe}
                          </Text>
                        </div>
                      </div>
                      {rec.impact && (
                        <div className="border-t pt-2">
                          <Text className="text-slate-700 italic">
                            Expected Impact: {rec.impact}
                          </Text>
                        </div>
                      )}
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export const recommendationsExamples = [
  {
    title: 'Strategic Recommendations',
    subtitle: 'Prioritized actions for 2024-2025',
    recommendations: [
      {
        priority: 'P1' as const,
        action: 'Establish emergency flood warning system with SMS alerts',
        owner: 'Ministry of Emergency Management',
        timeframe: 'Q1 2024',
        impact: 'Reduce emergency response time by 60%, potentially saving hundreds of lives',
      },
      {
        priority: 'P1' as const,
        action: 'Upgrade critical water infrastructure in high-risk zones',
        owner: 'UNOPS Infrastructure Division',
        timeframe: 'Q2-Q3 2024',
        impact: 'Improve water security for 450,000 residents',
      },
      {
        priority: 'P2' as const,
        action: 'Implement sustainable agriculture training program',
        owner: 'FAO Regional Office',
        timeframe: 'Q2 2024',
        impact: 'Increase crop resilience and farmer incomes by 25%',
      },
      {
        priority: 'P2' as const,
        action: 'Expand mobile health clinics to underserved areas',
        owner: 'WHO Country Office',
        timeframe: 'Q3 2024',
        impact: 'Improve healthcare access for 80,000 people',
      },
      {
        priority: 'P3' as const,
        action: 'Conduct baseline survey for rural electrification project',
        owner: 'Energy Ministry',
        timeframe: 'Q4 2024',
        impact: 'Inform design of $50M electrification program',
      },
      {
        priority: 'P3' as const,
        action: 'Establish digital literacy program in 50 schools',
        owner: 'Ministry of Education',
        timeframe: 'Q1 2025',
        impact: 'Prepare 15,000 students for digital economy',
      },
    ],
  },
  {
    title: 'Policy Recommendations',
    recommendations: [
      {
        priority: 'P1' as const,
        action: 'Revise building codes to incorporate climate resilience standards',
        owner: 'Ministry of Construction',
        timeframe: 'Immediate',
      },
      {
        priority: 'P2' as const,
        action: 'Develop national data governance framework',
        owner: 'Data Protection Authority',
        timeframe: '6 months',
      },
    ],
  },
];
