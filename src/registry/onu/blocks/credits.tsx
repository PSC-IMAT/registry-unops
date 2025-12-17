/**
 * Credits Block
 */

import React from 'react';
import { z } from 'zod';
import { Section } from '@/ui/section';
import { Heading } from '@/ui/heading';
import { Text } from '@/registry/onu/ui/text';
import { Card } from '@/ui/card';

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
    <Section spacing="lg" className={className}>
      <div className="space-y-8">
        <Heading level="h2" weight="bold">
          {title}
        </Heading>

        <div className="grid gap-6 md:grid-cols-2">
          {team && team.length > 0 && (
            <Card >
              <div className="space-y-4">
                <Heading level="h3" weight="semibold">
                  Project Team
                </Heading>
                <div className="space-y-3">
                  {team.map((member, index) => (
                    <div key={index}>
                      <Text weight="semibold">
                        {member.name}
                      </Text>
                      <Text className="text-muted-foreground">
                        {member.role}
                      </Text>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          )}

          {partners && partners.length > 0 && (
            <Card >
              <div className="space-y-4">
                <Heading level="h3" weight="semibold">
                  Partners
                </Heading>
                <div className="space-y-3">
                  {partners.map((partner, index) => (
                    <div key={index}>
                      <Text weight="semibold">
                        {partner.name}
                      </Text>
                      {partner.contribution && (
                        <Text className="text-muted-foreground">
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
          <Card >
            <div className="space-y-3">
              <Heading level="h3" weight="semibold">
                Acknowledgements
              </Heading>
              <Text >{acknowledgements}</Text>
            </div>
          </Card>
        )}

        {funding && (
          <Card >
            <div className="space-y-3">
              <Heading level="h3" weight="semibold">
                Funding
              </Heading>
              <Text >{funding}</Text>
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
