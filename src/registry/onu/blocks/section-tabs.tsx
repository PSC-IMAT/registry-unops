'use client';

/**
 * Section Tabs Block
 */

import React, { useState } from 'react';
import { z } from 'zod';
import { Section } from '@/components/ui/section';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import { cn } from '@/lib/utils';

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
    <Section spacing="lg" className={cn('bg-linear-to-br from-slate-50 via-white to-blue-50/20 relative overflow-hidden', className)}>
      {/* Decorative elements */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-300 rounded-full blur-3xl opacity-10" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-300 rounded-full blur-3xl opacity-10" />
      
      <div className="relative z-10 space-y-8">
        <Heading level="h2" weight="bold" className="text-3xl text-slate-900">
          {title}
        </Heading>

        <div className="rounded-xl border border-slate-200/50 shadow-md overflow-hidden bg-white">
          <div className="border-b border-slate-200 bg-linear-to-r from-slate-50 to-blue-50/50">
            <nav className="flex gap-1 p-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    'px-6 py-3 rounded-lg font-semibold transition-all duration-300',
                    activeTab === tab.id
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'text-slate-600 hover:text-blue-600 hover:bg-blue-50'
                  )}
                >
                  {tab.title}
                </button>
              ))}
            </nav>
          </div>

          <div className="p-8">
            {tabs.map((tab) =>
              activeTab === tab.id ? (
                <div key={tab.id} className="animate-in fade-in-50 duration-300">
                  <Text className="text-slate-700 leading-relaxed">{tab.content}</Text>
                </div>
              ) : null
            )}
          </div>
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
