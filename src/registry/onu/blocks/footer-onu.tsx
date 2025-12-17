/**
 * Footer ONU Block Component
 */

import React from 'react';
import { z } from 'zod';
import { Section } from '@/ui/section';
import { Heading } from '@/ui/heading';
import { Text } from '@/registry/onu/ui/text';
import { Link } from '@/ui/link';
import { Image } from '@/ui/image';
import { cn } from '@/lib/utils';

const PartnerSchema = z.object({
  name: z.string(),
  logo: z.string(),
  url: z.string().optional(),
});

const ContactSchema = z.object({
  label: z.string(),
  value: z.string(),
  type: z.enum(['email', 'phone', 'address']),
});

const LegalLinkSchema = z.object({
  label: z.string(),
  href: z.string(),
});

export const FooterOnuBlockSchema = z.object({
  partners: z.array(PartnerSchema).optional(),
  contacts: z.array(ContactSchema).optional(),
  legalLinks: z.array(LegalLinkSchema).optional(),
  preparedBy: z.string(),
  date: z.string(),
  version: z.string().optional(),
  className: z.string().optional(),
});

export type FooterOnuBlockProps = z.infer<typeof FooterOnuBlockSchema>;

export const FooterOnuBlock: React.FC<FooterOnuBlockProps> = ({
  partners,
  contacts,
  legalLinks,
  preparedBy,
  date,
  version,
  className,
}) => {
  return (
    <Section spacing="lg" className={cn('bg-blue-900 text-white border-t-4 border-blue-500', className)}>
      <div className="space-y-8">
        {partners && partners.length > 0 && (
          <div className="space-y-4">
            <Heading level="h3" weight="semibold" className="text-white">
              Partners
            </Heading>
            <div className="flex flex-wrap gap-6 items-center">
              {partners.map((partner, index) => (
                <div key={index}>
                  {partner.url ? (
                    <a href={partner.url} target="_blank" rel="noopener noreferrer">
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        className="h-12 w-auto filter brightness-0 invert"
                      />
                    </a>
                  ) : (
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      className="h-12 w-auto filter brightness-0 invert"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="grid gap-8 md:grid-cols-3">
          {contacts && contacts.length > 0 && (
            <div className="space-y-3">
              <Heading level="h3" weight="semibold" className="text-white">
                Contact
              </Heading>
              <div className="space-y-2">
                {contacts.map((contact, index) => (
                  <div key={index}>
                    <Text className="text-blue-200">
                      {contact.label}
                    </Text>
                    <Text className="text-white">
                      {contact.value}
                    </Text>
                  </div>
                ))}
              </div>
            </div>
          )}

          {legalLinks && legalLinks.length > 0 && (
            <div className="space-y-3">
              <Heading level="h3" weight="semibold" className="text-white">
                Legal
              </Heading>
              <div className="space-y-2">
                {legalLinks.map((link, index) => (
                  <Link key={index} href={link.href} className="text-blue-200 hover:text-white block">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div className="space-y-3">
            <Heading level="h3" weight="semibold" className="text-white">
              Report Information
            </Heading>
            <div className="space-y-2">
              <Text className="text-white">
                {preparedBy}
              </Text>
              <Text className="text-blue-200">
                {date}
              </Text>
              {version && (
                <Text className="text-blue-200">
                  Version {version}
                </Text>
              )}
            </div>
          </div>
        </div>

        <div className="border-t border-blue-700 pt-4">
          <Text className="text-blue-200 text-center">
            © {new Date().getFullYear()} United Nations Office for Project Services (UNOPS). All rights reserved.
          </Text>
        </div>
      </div>
    </Section>
  );
};

export const footerOnuExamples = [
  {
    partners: [
      { name: 'UNOPS', logo: '/logos/unops.svg', url: 'https://unops.org' },
      { name: 'UNDP', logo: '/logos/undp.svg', url: 'https://undp.org' },
      { name: 'WHO', logo: '/logos/who.svg' },
    ],
    contacts: [
      { label: 'Email', value: 'info@unops.org', type: 'email' as const },
      { label: 'Phone', value: '+45 4533 7500', type: 'phone' as const },
      { label: 'Address', value: 'Marmorvej 51, 2100 Copenhagen, Denmark', type: 'address' as const },
    ],
    legalLinks: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Use', href: '/terms' },
      { label: 'Fraud Reporting', href: '/fraud' },
    ],
    preparedBy: 'Prepared by UNOPS Infrastructure Division',
    date: 'March 2024',
    version: '1.0',
  },
];
