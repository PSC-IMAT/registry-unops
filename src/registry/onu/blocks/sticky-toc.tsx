/**
 * Sticky TOC Block
 */

import React from 'react';
import { z } from 'zod';
import { Heading } from '@/ui/heading';
import { Text } from '@/registry/onu/ui/text';
import { Link } from '@/ui/link';
import { Card } from '@/ui/card';

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
      <Card className="sticky top-4">
        <div className="space-y-4">
          <Heading level="h3" weight="semibold">
            Contents
          </Heading>

          <nav className="space-y-2">
            {headings.map((heading) => (
              <Link
                key={heading.id}
                href={`#${heading.id}`}
                                className={`block hover:text-blue-600 ${
                  heading.level === 2 ? 'pl-4' : heading.level === 3 ? 'pl-8' : ''
                }`}
              >
                {heading.title}
              </Link>
            ))}
          </nav>

          {lastUpdated && (
            <div className="border-t pt-4">
              <Text className="text-muted-foreground">
                Last updated: {lastUpdated}
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
