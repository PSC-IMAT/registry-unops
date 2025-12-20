/**
 * Methodology Block Component
 * 
 * Research methodology with steps, limitations, and data sources
 */

import React from 'react';
import { z } from 'zod';
import { Section } from '@/components/ui/section';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import { Card } from '@/components/ui/card';
import { List } from '@/components/ui/list';
import { cn } from '@/lib/utils';

const StepSchema = z.object({
  title: z.string(),
  description: z.string(),
});

export const MethodologyBlockSchema = z.object({
  title: z.string().default('Methodology'),
  steps: z.array(StepSchema).min(2),
  limitations: z.array(z.string()).optional(),
  interpretation: z.string().optional(),
  dataSources: z.array(z.string()).optional(),
  className: z.string().optional(),
});

export type MethodologyBlockProps = z.infer<typeof MethodologyBlockSchema>;

export const MethodologyBlock: React.FC<MethodologyBlockProps> = ({
  title,
  steps,
  limitations,
  interpretation,
  dataSources,
  className,
}) => {
  return (
    <Section spacing="lg" className={cn('bg-linear-to-br from-blue-50 via-slate-50 to-cyan-50/30 relative overflow-hidden', className)}>
      {/* Decorative elements */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-300 rounded-full blur-3xl opacity-10" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-300 rounded-full blur-3xl opacity-10" />
      
      <div className="relative z-10 space-y-8">
        <Heading level="h2" weight="bold" className="text-3xl text-slate-900">
          {title}
        </Heading>

        {/* Steps Pipeline */}
        <div className="space-y-8">
          <div className="flex items-center gap-2 mb-6">
            <div className="text-2xl">🔬</div>
            <Heading level="h3" weight="semibold" className="text-slate-900">
              Research Steps
            </Heading>
          </div>
          <div className="relative space-y-6">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-linear-to-br from-blue-600 to-blue-700 text-white font-bold shadow-lg">
                    {index + 1}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-1 flex-1 bg-linear-to-b from-blue-400 to-blue-200 mt-2 min-h-16" />
                  )}
                </div>
                <Card className="flex-1 rounded-xl shadow-md hover:shadow-lg bg-white border border-blue-100/50 hover:border-blue-200 transition-all duration-300 transform hover:scale-105 overflow-hidden">
                  <div className="space-y-3 p-5">
                    <Heading level="h4" weight="semibold" className="text-blue-600">
                      {step.title}
                    </Heading>
                    <Text className="text-slate-700 leading-relaxed">
                      {step.description}
                    </Text>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Limitations */}
        {limitations && limitations.length > 0 && (
          <Card className="rounded-xl shadow-md hover:shadow-lg bg-linear-to-br from-yellow-50 to-orange-50/30 border border-yellow-100/50 hover:border-yellow-200 transition-all duration-300 overflow-hidden">
            <div className="space-y-3 p-6">
              <Heading level="h3" weight="semibold" className="text-orange-700 flex items-center gap-2">
                ⚠️ Limitations
              </Heading>
              <List variant="unordered" className="text-slate-700">
                {limitations.map((item, index) => (
                  <li key={index} className="text-sm leading-relaxed">{item}</li>
                ))}
              </List>
            </div>
          </Card>
        )}

        {/* Interpretation Notes */}
        {interpretation && (
          <Card className="rounded-xl shadow-md hover:shadow-lg bg-linear-to-br from-blue-50 to-cyan-50/30 border border-blue-100/50 hover:border-blue-200 transition-all duration-300 overflow-hidden">
            <div className="space-y-3 p-6">
              <Heading level="h3" weight="semibold" className="text-slate-900 flex items-center gap-2">
                💭 Interpretation Notes
              </Heading>
              <Text className="text-slate-700 leading-relaxed">{interpretation}</Text>
            </div>
          </Card>
        )}

        {/* Data Sources */}
        {dataSources && dataSources.length > 0 && (
          <Card className="rounded-xl shadow-md hover:shadow-lg bg-linear-to-br from-green-50 to-emerald-50/30 border border-green-100/50 hover:border-green-200 transition-all duration-300 overflow-hidden">
            <div className="space-y-3 p-6">
              <Heading level="h3" weight="semibold" className="text-emerald-700 flex items-center gap-2">
                📊 Data Sources
              </Heading>
              <List variant="unordered" className="text-slate-700">
                {dataSources.map((item, index) => (
                  <li key={index} className="text-sm leading-relaxed">{item}</li>
                ))}
              </List>
            </div>
          </Card>
        )}
      </div>
    </Section>
  );
};

export const methodologyExamples = [
  {
    title: 'Research Methodology',
    steps: [
      {
        title: 'Data Collection',
        description: 'Conducted household surveys across 450 randomly selected villages using stratified sampling methodology. Response rate: 78%.',
      },
      {
        title: 'Satellite Analysis',
        description: 'Processed 12 months of Sentinel-2 imagery at 10m resolution to identify land cover changes and infrastructure development.',
      },
      {
        title: 'Field Verification',
        description: 'Ground-truthing conducted in 15% of surveyed locations to validate remote sensing findings.',
      },
      {
        title: 'Statistical Analysis',
        description: 'Applied regression models controlling for socioeconomic factors, climate variables, and regional differences.',
      },
      {
        title: 'Peer Review',
        description: 'Findings validated by independent academic review panel and regional subject matter experts.',
      },
    ],
    limitations: [
      'Survey data limited to accessible regions; conflict-affected areas underrepresented',
      'Cloud cover reduced satellite imagery availability in tropical zones by 30%',
      'Self-reported income data may contain measurement error',
      'Cross-sectional design limits causal inference',
    ],
    interpretation: 'Results should be interpreted as associations rather than causal relationships. Regional variations suggest context-specific factors play significant roles. Findings are most applicable to similar low-to-middle-income agricultural contexts.',
    dataSources: [
      'National Statistical Office (NSO) household surveys 2022-2024',
      'ESA Sentinel-2 satellite imagery, processed through Google Earth Engine',
      'World Bank Development Indicators',
      'FAO agricultural statistics',
      'Field surveys conducted by research team (n=3,420)',
    ],
  },
  {
    title: 'Impact Assessment Methodology',
    steps: [
      {
        title: 'Baseline Establishment',
        description: 'Pre-project data collection to establish comparison metrics.',
      },
      {
        title: 'Intervention Mapping',
        description: 'Detailed documentation of all project activities and beneficiaries.',
      },
      {
        title: 'Monitoring',
        description: 'Continuous data collection throughout project implementation.',
      },
      {
        title: 'Endline Assessment',
        description: 'Post-project evaluation using same instruments as baseline.',
      },
    ],
    limitations: [
      'Control group matching not possible due to project scale',
      'Attribution challenges in multi-stakeholder environment',
    ],
    interpretation: 'Changes observed may result from multiple factors including project interventions, broader economic trends, and external events.',
    dataSources: [
      'Project monitoring and evaluation database',
      'Beneficiary feedback surveys',
      'Partner organization reports',
    ],
  },
];
