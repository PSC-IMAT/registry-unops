/**
 * Key Findings Block Component
 * 
 * Display key findings with icons, tags, and confidence levels
 */

import React from 'react';
import { z } from 'zod';
import { Section } from '@/components/ui/section';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

const FindingSchema = z.object({
  icon: z.string(),
  tag: z.string(),
  finding: z.string(),
  confidence: z.enum(['low', 'medium', 'high']),
});

export const KeyFindingsBlockSchema = z.object({
  title: z.string().default('Key Findings'),
  subtitle: z.string().optional(),
  findings: z.array(FindingSchema).min(1).max(8),
  className: z.string().optional(),
});

export type KeyFindingsBlockProps = z.infer<typeof KeyFindingsBlockSchema>;

const confidenceColors = {
  low: 'warning',
  medium: 'primary',
  high: 'success',
} as const;

export const KeyFindingsBlock: React.FC<KeyFindingsBlockProps> = ({
  title,
  subtitle,
  findings,
  className,
}) => {
  return (
    <Section spacing="lg" className={cn('bg-linear-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden', className)}>
      {/* Decorative elements */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-200 rounded-full blur-3xl opacity-10" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-200 rounded-full blur-3xl opacity-10" />
      
      <div className="relative z-10 space-y-8">
        <div className="space-y-3">
          <Heading level="h2" weight="bold" className="text-3xl text-slate-900">
            {title}
          </Heading>
          {subtitle && (
            <Text className="text-slate-600 text-lg">
              {subtitle}
            </Text>
          )}
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {findings.map((finding, index) => (
            <Card 
              key={index} 
              className="h-full rounded-xl shadow-md hover:shadow-lg bg-white border border-slate-200/50 hover:border-blue-200 transition-all duration-300 transform hover:scale-105 overflow-hidden hover:-translate-y-1"
            >
              <div className="flex flex-col h-full space-y-4 p-5">
                <div className="flex items-start justify-between gap-2">
                  <Text className="text-3xl">{finding.icon}</Text>
                  <Badge 
                    variant={finding.confidence === 'high' ? 'default' : finding.confidence === 'medium' ? 'secondary' : 'outline'}
                    className="ml-auto text-xs font-semibold"
                  >
                    {finding.confidence === 'high' && '★★★'}
                    {finding.confidence === 'medium' && '★★'}
                    {finding.confidence === 'low' && '★'}
                  </Badge>
                </div>
                <Badge className="self-start bg-blue-100 text-blue-700 hover:bg-blue-200">
                  {finding.tag}
                </Badge>
                <Text className="flex-1 text-slate-700 leading-relaxed">
                  {finding.finding}
                </Text>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
};

export const keyFindingsExamples = [
  {
    title: 'Key Findings',
    subtitle: 'Critical insights from data analysis and field assessments',
    findings: [
      {
        icon: '📈',
        tag: 'Economic Impact',
        finding: 'Regional GDP growth accelerated by 2.3% following infrastructure investments',
        confidence: 'high' as const,
      },
      {
        icon: '🏥',
        tag: 'Healthcare Access',
        finding: 'Emergency response time reduced by 40% in rural communities',
        confidence: 'high' as const,
      },
      {
        icon: '🌊',
        tag: 'Water Resources',
        finding: 'Groundwater levels declining at 0.8m per year in affected regions',
        confidence: 'medium' as const,
      },
      {
        icon: '👥',
        tag: 'Population',
        finding: 'Urban migration increased 15% annually, straining existing infrastructure',
        confidence: 'high' as const,
      },
      {
        icon: '🌾',
        tag: 'Agriculture',
        finding: 'Crop yields improved by 35% with drip irrigation implementation',
        confidence: 'high' as const,
      },
      {
        icon: '⚡',
        tag: 'Energy',
        finding: 'Solar adoption potential remains underutilized in 60% of suitable areas',
        confidence: 'medium' as const,
      },
    ],
  },
  {
    title: 'Research Outcomes',
    findings: [
      {
        icon: '🔬',
        tag: 'Methodology',
        finding: 'Sample size limitations may affect generalizability to other regions',
        confidence: 'low' as const,
      },
      {
        icon: '📊',
        tag: 'Data Quality',
        finding: 'Survey response rate of 78% exceeds industry standards',
        confidence: 'high' as const,
      },
      {
        icon: '🎯',
        tag: 'Targeting',
        finding: 'Program reached 92% of intended beneficiaries within first year',
        confidence: 'high' as const,
      },
      {
        icon: '💡',
        tag: 'Innovation',
        finding: 'Digital payment systems reduced transaction costs by 65%',
        confidence: 'high' as const,
      },
    ],
  },
];
