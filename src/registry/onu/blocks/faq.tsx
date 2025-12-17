'use client';

/**
 * FAQ Block
 */

import React, { useState } from 'react';
import { z } from 'zod';
import { Section } from '@/ui/section';
import { Heading } from '@/ui/heading';
import { Text } from '@/registry/onu/ui/text';

const FAQItemSchema = z.object({
  question: z.string(),
  answer: z.string(),
});

export const FaqBlockSchema = z.object({
  title: z.string().default('Frequently Asked Questions'),
  items: z.array(FAQItemSchema).min(2),
  className: z.string().optional(),
});

export type FaqBlockProps = z.infer<typeof FaqBlockSchema>;

export const FaqBlock: React.FC<FaqBlockProps> = ({
  title,
  items,
  className,
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <Section spacing="lg" className={className}>
      <div className="space-y-6">
        <Heading level="h2" weight="bold">
          {title}
        </Heading>

        <div className="space-y-3">
          {items.map((item, index) => (
            <div
              key={index}
              className="border rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50"
              >
                <Heading level="h3" weight="semibold">
                  {item.question}
                </Heading>
                <span className="text-2xl text-blue-600">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-4 border-t bg-gray-50">
                  <Text className="pt-4 text-muted-foreground">
                    {item.answer}
                  </Text>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export const faqExamples = [
  {
    title: 'Frequently Asked Questions',
    items: [
      {
        question: 'How is the data collected and validated?',
        answer: 'Data is collected through multiple sources including field surveys (n=3,420), satellite imagery analysis, government databases, and partner organization reports. All data points are cross-verified using at least two independent sources and undergo peer review by subject matter experts before publication.',
      },
      {
        question: 'What geographic areas does this report cover?',
        answer: 'The report covers 45 countries across Sub-Saharan Africa, with primary focus on infrastructure projects in 12 priority countries. Detailed regional breakdowns are available in the methodology section.',
      },
      {
        question: 'How can I access the underlying data?',
        answer: 'Raw datasets, methodology documentation, and analysis code are available through our data portal. Most datasets are published under Creative Commons licenses. For restricted datasets, contact our data team for access procedures.',
      },
      {
        question: 'Who should I contact for questions about this report?',
        answer: 'For general inquiries, contact info@unops.org. For technical questions about methodology or data, reach out to our research team at research@unops.org. Media inquiries should be directed to press@unops.org.',
      },
    ],
  },
];
