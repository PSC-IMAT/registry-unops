'use client';
/**
 * Before/After Compare Block
 */

import React, { useState } from 'react';
import { z } from 'zod';
import { Section } from '@/ui/section';
import { Heading } from '@/ui/heading';
import { Text } from '@/ui/text';
import { Image } from '@/ui/image';

export const BeforeAfterCompareBlockSchema = z.object({
  title: z.string(),
  before: z.object({ src: z.string(), caption: z.string(), source: z.string().optional() }),
  after: z.object({ src: z.string(), caption: z.string(), source: z.string().optional() }),
  className: z.string().optional(),
});

export type BeforeAfterCompareBlockProps = z.infer<typeof BeforeAfterCompareBlockSchema>;

export const BeforeAfterCompareBlock: React.FC<BeforeAfterCompareBlockProps> = ({
  title,
  before,
  after,
  className,
}) => {
  const [sliderPos, setSliderPos] = useState(50);

  return (
    <Section spacing="lg" className={className}>
      <div className="space-y-6">
        <Heading level="h2" weight="bold">
          {title}
        </Heading>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-3">
            <div className="relative aspect-video bg-gray-200 rounded-lg overflow-hidden">
              <Image src={before.src} alt={before.caption} className="w-full h-full object-cover" />
            </div>
            <div>
              <Text weight="semibold">
                Before
              </Text>
              <Text className="text-muted-foreground">
                {before.caption}
              </Text>
              {before.source && (
                <Text className="text-muted-foreground italic">
                  Source: {before.source}
                </Text>
              )}
            </div>
          </div>

          <div className="space-y-3">
            <div className="relative aspect-video bg-gray-200 rounded-lg overflow-hidden">
              <Image src={after.src} alt={after.caption} className="w-full h-full object-cover" />
            </div>
            <div>
              <Text weight="semibold">
                After
              </Text>
              <Text className="text-muted-foreground">
                {after.caption}
              </Text>
              {after.source && (
                <Text className="text-muted-foreground italic">
                  Source: {after.source}
                </Text>
              )}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export const beforeAfterCompareExamples = [
  {
    title: 'Infrastructure Development: 2020 vs 2024',
    before: {
      src: '/images/before-2020.jpg',
      caption: 'Rural road conditions before rehabilitation project',
      source: 'Field survey, January 2020',
    },
    after: {
      src: '/images/after-2024.jpg',
      caption: 'Paved road with drainage systems completed',
      source: 'Drone survey, March 2024',
    },
  },
];
