/**
 * Recommendations Block Component
 * 
 * Prioritized recommendations with owner, timeframe, and actions
 */

import React from 'react';
import { z } from 'zod';
import { Section } from '@/ui/section';
import { Heading } from '@/ui/heading';
import { Text } from '@/registry/onu/ui/text';
import { Card } from '@/ui/card';
import { Badge } from '@/ui/badge';
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
    <Section spacing="lg" className={className}>
      <div className="space-y-6">
        <div className="space-y-2">
          <Heading level="h2" weight="bold">
            {title}
          </Heading>
          {subtitle && (
            <Text className="text-muted-foreground">
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
                <Badge variant={priority === 'P1' ? 'destructive' : priority === 'P2' ? 'default' : 'outline'}>
                  {priority}
                </Badge>
                <Text weight="semibold" className="text-muted-foreground">
                  {priority === 'P1' ? 'Critical' : priority === 'P2' ? 'High Priority' : 'Standard Priority'}
                </Text>
              </div>

              <div className="space-y-3">
                {recs.map((rec, index) => (
                  <Card key={index} >
                    <div className="space-y-3">
                      <Text weight="semibold">
                        {rec.action}
                      </Text>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <Text className="text-muted-foreground">
                            Owner
                          </Text>
                          <Text weight="semibold">
                            {rec.owner}
                          </Text>
                        </div>
                        <div>
                          <Text className="text-muted-foreground">
                            Timeframe
                          </Text>
                          <Text weight="semibold">
                            {rec.timeframe}
                          </Text>
                        </div>
                      </div>
                      {rec.impact && (
                        <div className="border-t pt-2">
                          <Text className="text-muted-foreground italic">
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
