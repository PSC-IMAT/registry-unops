/**
 * Credits Block
 */

import React from 'react';
import { z } from 'zod';
import { Section } from '@/components/ui/section';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

const TeamMemberSchema = z.object({
  name: z.string(),
  role: z.string(),
});

const PartnerSchema = z.object({
  name: z.string(),
  contribution: z.string().optional(),
});

export const CreditsBlockSchema = z.object({
  title: z.string().default('Credits'),
  team: z.array(TeamMemberSchema).optional(),
  partners: z.array(PartnerSchema).optional(),
  acknowledgements: z.string().optional(),
  funding: z.string().optional(),
  className: z.string().optional(),
});

export type CreditsBlockProps = z.infer<typeof CreditsBlockSchema>;

export const CreditsBlock: React.FC<CreditsBlockProps> = ({
  title,
  team,
  partners,
  acknowledgements,
  funding,
  className,
}) => {
  return (
    <Section
      spacing="lg"
    >
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -top-40 -right-40 h-80 w-80 rounded-full bg-purple-300 opacity-10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-pink-300 opacity-10 blur-3xl" />

      <div className="relative z-10 space-y-8">
        <Heading level="h2" weight="bold" className="text-3xl text-slate-900">
          {title}
        </Heading>

        <div className="grid gap-6 md:grid-cols-2">
          {team && team.length > 0 && (
            <Card className="rounded-xl border border-blue-100/60 bg-linear-to-br from-blue-50 to-cyan-50/40 shadow-md">
              <div className="space-y-4 p-6">
                <Heading level="h3" weight="semibold" className="flex items-center gap-2 text-slate-900">
                  Project Team
                </Heading>
                <div className="space-y-3">
                  {team.map((member, index) => (
                    <div key={index} className="border-l-2 border-blue-200 pl-3">
                      <Text weight="semibold" className="text-slate-900">
                        {member.name}
                      </Text>
                      <Text className="text-slate-600">
                        {member.role}
                      </Text>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          )}

          {partners && partners.length > 0 && (
            <Card className="rounded-xl border border-emerald-100/60 bg-linear-to-br from-emerald-50 to-green-50/40 shadow-md">
              <div className="space-y-4 p-6">
                <Heading level="h3" weight="semibold" className="flex items-center gap-2 text-slate-900">
                  Partners
                </Heading>
                <div className="space-y-3">
                  {partners.map((partner, index) => (
                    <div key={index} className="border-l-2 border-emerald-200 pl-3">
                      <Text weight="semibold" className="text-slate-900">
                        {partner.name}
                      </Text>
                      {partner.contribution && (
                        <Text className="text-slate-600">
                          {partner.contribution}
                        </Text>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          )}
        </div>

        {acknowledgements && (
          <Card className="rounded-xl border border-slate-200/60 bg-white shadow-md">
            <div className="space-y-3 p-6">
              <Heading level="h3" weight="semibold" className="text-slate-900">
                Acknowledgements
              </Heading>
              <Text className="text-slate-700 leading-relaxed">{acknowledgements}</Text>
            </div>
          </Card>
        )}

        {funding && (
          <Card className="rounded-xl border border-amber-200/60 bg-linear-to-br from-amber-50 to-yellow-50/40 shadow-md">
            <div className="space-y-3 p-6">
              <Heading level="h3" weight="semibold" className="text-slate-900">
                Funding
              </Heading>
              <Text className="text-slate-700 leading-relaxed">{funding}</Text>
            </div>
          </Card>
        )}
      </div>
    </Section>
  );
};

export const creditsExamples = [
  {
    title: 'Credits & Acknowledgements',
    team: [
      { name: 'Dr. Sarah Johnson', role: 'Lead Researcher & Project Manager' },
      { name: 'Michael Chen', role: 'Data Analysis & GIS Specialist' },
      { name: 'Aisha Patel', role: 'Field Coordinator' },
      { name: 'Carlos Rodriguez', role: 'Statistical Analysis' },
    ],
    partners: [
      { name: 'World Bank', contribution: 'Data sharing and technical expertise' },
      { name: 'UNDP', contribution: 'Field support and logistics' },
      { name: 'Local NGO Coalition', contribution: 'Community engagement' },
    ],
    acknowledgements: 'We extend our gratitude to the 3,420 survey respondents who generously shared their time and insights. Special thanks to regional governments for facilitating data access and field operations. This work benefited from peer review by Prof. Elena Volkov (MIT) and Dr. James Okonkwo (University of Lagos).',
    funding: 'This project was funded by the United Nations Multi-Partner Trust Fund with additional support from the European Union Development Fund (Grant #EU-DEV-2023-447).',
  },
];
