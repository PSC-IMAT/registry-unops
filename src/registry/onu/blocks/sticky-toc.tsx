/**
 * Sticky TOC Block
 */

import React from 'react';
import { z } from 'zod';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import { Link } from '@/components/ui/link';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

const HeadingSchema = z.object({
  id: z.string(),
  title: z.string(),
  level: z.number().min(1).max(3),
});

export const StickyTocBlockSchema = z.object({
  headings: z.array(HeadingSchema).min(1),
  lastUpdated: z.string().optional(),
  className: z.string().optional(),
});

export type StickyTocBlockProps = z.infer<typeof StickyTocBlockSchema>;

export const StickyTocBlock: React.FC<StickyTocBlockProps> = ({
  headings,
  lastUpdated,
  className,
}) => {
  return (
    <div className={className}>
      <Card className="sticky top-4 rounded-xl shadow-lg bg-linear-to-br from-blue-50 to-cyan-50/30 border border-blue-100/50 hover:border-blue-200 transition-all duration-300">
        <div className="space-y-5 p-6">
          <Heading level="h3" weight="semibold" className="text-slate-900 flex items-center gap-2">
            📑 Contents
          </Heading>

          <nav className="space-y-3">
            {headings.map((heading) => (
              <Link
                key={heading.id}
                href={`#${heading.id}`}
                className={cn(
                  'block text-slate-700 hover:text-blue-600 font-medium transition-colors duration-200 hover:pl-1',
                  heading.level === 2 ? 'pl-4' : heading.level === 3 ? 'pl-8' : ''
                )}
              >
                {heading.title}
              </Link>
            ))}
          </nav>

          {lastUpdated && (
            <div className="border-t border-blue-100 pt-4">
              <Text className="text-slate-600 text-sm">
                🕐 Last updated: {lastUpdated}
              </Text>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};

export const stickyTocExamples = [
  {
    headings: [
      { id: 'executive-summary', title: 'Executive Summary', level: 1 },
      { id: 'situation', title: 'Situation Overview', level: 1 },
      { id: 'findings', title: 'Key Findings', level: 1 },
      { id: 'methodology', title: 'Methodology', level: 1 },
      { id: 'recommendations', title: 'Recommendations', level: 1 },
      { id: 'data-sources', title: 'Data Sources', level: 1 },
    ],
    lastUpdated: 'March 25, 2024',
  },
];
