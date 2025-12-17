/**
 * Methodology Block Component
 * 
 * Research methodology with steps, limitations, and data sources
 */

import React from 'react';
import { z } from 'zod';
import { Section } from '@/ui/section';
import { Heading } from '@/ui/heading';
import { Text } from '@/registry/onu/ui/text';
import { Card } from '@/ui/card';
import { List } from '@/ui/list';
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
    <Section spacing="lg" className={className}>
      <div className="space-y-8">
        <Heading level="h2" weight="bold">
          {title}
        </Heading>

        {/* Steps Pipeline */}
        <div className="space-y-6">
          <Heading level="h3" weight="semibold">
            Research Steps
          </Heading>
          <div className="relative space-y-6">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white font-bold">
                    {index + 1}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-0.5 flex-1 bg-blue-300 mt-2 min-h-12" />
                  )}
                </div>
                <Card className="flex-1">
                  <div className="space-y-2">
                    <Heading level="h4" weight="semibold">
                      {step.title}
                    </Heading>
                    <Text className="text-muted-foreground">
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
          <Card >
            <div className="space-y-3">
              <Heading level="h3" weight="semibold" className="text-yellow-700">
                Limitations
              </Heading>
              <List variant="unordered">
                {limitations.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </List>
            </div>
          </Card>
        )}

        {/* Interpretation Notes */}
        {interpretation && (
          <Card >
            <div className="space-y-3">
              <Heading level="h3" weight="semibold">
                Interpretation Notes
              </Heading>
              <Text >{interpretation}</Text>
            </div>
          </Card>
        )}

        {/* Data Sources */}
        {dataSources && dataSources.length > 0 && (
          <Card >
            <div className="space-y-3">
              <Heading level="h3" weight="semibold">
                Data Sources
              </Heading>
              <List variant="unordered">
                {dataSources.map((item, index) => (
                  <li key={index}>{item}</li>
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
