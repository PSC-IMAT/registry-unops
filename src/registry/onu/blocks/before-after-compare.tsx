'use client';
/**
 * Before/After Compare Block
 */

import React, { useState } from 'react';
import { z } from 'zod';
import { Section } from '@/components/ui/section';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import Image from 'next/image';

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
    <Section spacing="lg" className={`bg-linear-to-br from-slate-50 via-white to-slate-50/30 relative overflow-hidden ${className || ''}`}>
      {/* Decorative elements */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-slate-300 rounded-full blur-3xl opacity-10" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-slate-300 rounded-full blur-3xl opacity-10" />
      
      <div className="relative z-10 space-y-8">
        <Heading level="h2" weight="bold" className="text-3xl text-slate-900">
          {title}
        </Heading>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <div className="relative aspect-video bg-linear-to-br from-slate-200 to-slate-300 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-slate-200">
              <Image src={before.src} alt={before.caption} className="w-full h-full object-cover" />
              <div className="absolute top-3 left-3 bg-blue-600 text-white px-3 py-1 rounded-lg font-semibold text-sm">
                Before
              </div>
            </div>
            <div className="space-y-2 p-4 bg-linear-to-br from-slate-50 to-blue-50/30 rounded-xl border border-slate-200/50">
              <Text weight="semibold" className="text-slate-900">
                {before.caption}
              </Text>
              {before.source && (
                <Text className="text-slate-600 text-sm italic">
                  📍 {before.source}
                </Text>
              )}
            </div>
          </div>

          <div className="space-y-4">
            <div className="relative aspect-video bg-linear-to-br from-emerald-200 to-green-300 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-slate-200">
              <Image src={after.src} alt={after.caption} className="w-full h-full object-cover" />
              <div className="absolute top-3 left-3 bg-green-600 text-white px-3 py-1 rounded-lg font-semibold text-sm">
                After
              </div>
            </div>
            <div className="space-y-2 p-4 bg-linear-to-br from-green-50 to-emerald-50/30 rounded-xl border border-green-200/50">
              <Text weight="semibold" className="text-slate-900">
                {after.caption}
              </Text>
              {after.source && (
                <Text className="text-slate-600 text-sm italic">
                  📍 {after.source}
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
