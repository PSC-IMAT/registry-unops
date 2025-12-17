'use client';

/**
 * Section Tabs Block
 */

import React, { useState } from 'react';
import { z } from 'zod';
import { Section } from '@/ui/section';
import { Heading } from '@/ui/heading';
import { Text } from '@/registry/onu/ui/text';

const TabSchema = z.object({
  id: z.string(),
  title: z.string(),
  content: z.string(),
});

export const SectionTabsBlockSchema = z.object({
  title: z.string(),
  tabs: z.array(TabSchema).min(2).max(6),
  className: z.string().optional(),
});

export type SectionTabsBlockProps = z.infer<typeof SectionTabsBlockSchema>;

export const SectionTabsBlock: React.FC<SectionTabsBlockProps> = ({
  title,
  tabs,
  className,
}) => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <Section spacing="lg" className={className}>
      <div className="space-y-6">
        <Heading level="h2" weight="bold">
          {title}
        </Heading>

        <div className="border-b border-gray-200">
          <nav className="flex gap-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? 'border-blue-600 text-blue-600 font-semibold'
                    : 'border-transparent text-gray-600 hover:text-blue-600'
                }`}
              >
                {tab.title}
              </button>
            ))}
          </nav>
        </div>

        <div className="py-6">
          {tabs.map((tab) =>
            activeTab === tab.id ? (
              <div key={tab.id} className="prose max-w-none">
                <Text >{tab.content}</Text>
              </div>
            ) : null
          )}
        </div>
      </div>
    </Section>
  );
};

export const sectionTabsExamples = [
  {
    title: 'Project Impact',
    tabs: [
      {
        id: 'economic',
        title: 'Economic',
        content: 'Infrastructure investments generated $2.4B in economic activity, created 87,000 jobs, and increased regional GDP by 2.3%. Local procurement policies ensured 65% of spending benefited domestic suppliers.',
      },
      {
        id: 'social',
        title: 'Social',
        content: 'Improved access to essential services for 12.4M people. Healthcare response times reduced by 40% in rural areas. Educational facilities upgraded in 230 communities.',
      },
      {
        id: 'environmental',
        title: 'Environmental',
        content: 'Carbon emissions reduced by 1.2M tons annually through renewable energy projects. Protected 45,000 hectares of critical habitat through sustainable development practices.',
      },
    ],
  },
];
