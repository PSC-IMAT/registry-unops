/**
 * Footer ONU Block Component
 */

import React from 'react';
import { z } from 'zod';
import { Section } from '@/components/ui/section';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import { Link } from '@/components/ui/link';
import { Image } from '@/components/ui/image';
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
    <Section
      spacing="lg"
      className={cn('relative overflow-hidden bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 text-white border-t-4 border-blue-500', className)}
    >
      {/* Decorative gradient */}
      <div className="pointer-events-none absolute -top-40 -right-40 h-80 w-80 rounded-full bg-blue-500 opacity-10 blur-3xl" />

      <div className="relative z-10 space-y-10">
        {partners && partners.length > 0 && (
          <div className="space-y-5 border-b border-slate-700 pb-8">
            <Heading level="h3" weight="semibold" className="flex items-center gap-2 text-white">
              🤝 Partners
            </Heading>
            <div className="flex flex-wrap items-center gap-8">
              {partners.map((partner, index) => (
                <div key={index} className="transition-opacity duration-300 hover:opacity-80">
                  {partner.url ? (
                    <a href={partner.url} target="_blank" rel="noopener noreferrer">
                      <Image src={partner.logo} alt={partner.name} className="h-12 w-auto invert" />
                    </a>
                  ) : (
                    <Image src={partner.logo} alt={partner.name} className="h-12 w-auto invert" />
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="grid gap-8 md:grid-cols-3">
          {contacts && contacts.length > 0 && (
            <div className="space-y-4">
              <Heading level="h3" weight="semibold" className="text-white">
                Contact
              </Heading>
              <div className="space-y-3">
                {contacts.map((contact, index) => (
                  <div key={index} className="transition-transform duration-200 hover:translate-x-1">
                    <Text className="text-blue-200 text-sm uppercase tracking-wider">
                      {contact.label}
                    </Text>
                    <Text className="font-medium text-white">{contact.value}</Text>
                  </div>
                ))}
              </div>
            </div>
          )}

          {legalLinks && legalLinks.length > 0 && (
            <div className="space-y-4">
              <Heading level="h3" weight="semibold" className="text-white">
                Legal
              </Heading>
              <div className="space-y-2">
                {legalLinks.map((link, index) => (
                  <Link key={index} href={link.href} className="block text-blue-200 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div className="space-y-4">
            <Heading level="h3" weight="semibold" className="text-white">
              Report Information
            </Heading>
            <div className="space-y-2">
              <Text className="font-medium text-white">
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
          <Text className="text-center text-blue-200">
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
