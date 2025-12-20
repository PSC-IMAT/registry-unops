'use client';

/**
 * Map Block Component
 * 
 * Placeholder map container with legend, filters, and feature panel
 */

import React, { useState } from 'react';
import { z } from 'zod';
import { Section } from '@/components/ui/section';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

const LegendItemSchema = z.object({
  label: z.string(),
  color: z.string(),
});

const FilterSchema = z.object({
  label: z.string(),
  options: z.array(z.string()),
});

export const MapBlockSchema = z.object({
  title: z.string().default('Map View'),
  subtitle: z.string().optional(),
  legend: z.array(LegendItemSchema).optional(),
  filters: z.array(FilterSchema).optional(),
  height: z.string().default('500px'),
  className: z.string().optional(),
});

export type MapBlockProps = z.infer<typeof MapBlockSchema>;

export const MapBlock: React.FC<MapBlockProps> = ({
  title,
  subtitle,
  legend,
  filters,
  height,
  className,
}) => {
  const [selectedFeature, setSelectedFeature] = useState<string | null>(null);

  return (
    <Section
      spacing="lg"
      className={cn('relative overflow-hidden bg-linear-to-br from-slate-50 via-white to-blue-50/30', className)}
    >
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -top-40 -right-40 h-80 w-80 rounded-full bg-blue-300 opacity-10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-cyan-300 opacity-10 blur-3xl" />

      <div className="relative z-10 space-y-6">
        <div className="space-y-2">
          <Heading level="h2" weight="bold" className="text-3xl text-slate-900">
            {title}
          </Heading>
          {subtitle && (
            <Text className="text-slate-600">
              {subtitle}
            </Text>
          )}
        </div>

        <div className="grid gap-6 lg:grid-cols-4">
          {/* Filters */}
          {filters && filters.length > 0 && (
            <div className="space-y-4">
              <Heading level="h3" weight="semibold" className="text-slate-900">
                Filters
              </Heading>
              {filters.map((filter, index) => (
                <Card key={index} className="rounded-xl border border-slate-200/60 bg-white shadow-sm">
                  <div className="space-y-2 p-4">
                    <Text weight="semibold" className="text-slate-900">
                      {filter.label}
                    </Text>
                    <select className="w-full rounded border border-slate-200 bg-white p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option>All</option>
                      {filter.options.map((opt, i) => (
                        <option key={i}>{opt}</option>
                      ))}
                    </select>
                  </div>
                </Card>
              ))}
            </div>
          )}

          {/* Map Container */}
          <div className="lg:col-span-3 space-y-4">
            <div className="relative overflow-hidden rounded-xl border border-blue-100/60 bg-linear-to-br from-blue-50 to-cyan-50/40 shadow-md" style={{ height }}>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="space-y-3 text-center">
                  <Text className="text-slate-600">
                    🗺️ Map Placeholder
                  </Text>
                  <Text className="text-slate-600">
                    Integrate Mapbox, Leaflet, or other mapping library here
                  </Text>
                  <button
                    onClick={() => setSelectedFeature('Sample Location')}
                    className="mt-4 rounded-md bg-blue-600 px-4 py-2 text-sm text-white shadow hover:bg-blue-700"
                  >
                    Click to Select Feature
                  </button>
                </div>
              </div>
            </div>

            {/* Legend */}
            {legend && legend.length > 0 && (
              <Card className="rounded-xl border border-slate-200/60 bg-white shadow-sm">
                <div className="flex flex-wrap gap-4 p-4">
                  {legend.map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div
                        className="w-4 h-4 rounded"
                        style={{ backgroundColor: item.color }}
                      />
                      <Text className="text-slate-700">{item.label}</Text>
                    </div>
                  ))}
                </div>
              </Card>
            )}

            {/* Selected Feature Panel */}
            {selectedFeature && (
              <Card className="rounded-xl border border-emerald-200/60 bg-linear-to-br from-emerald-50 to-green-50/40 shadow-sm">
                <div className="space-y-2 p-4">
                  <Heading level="h3" weight="semibold" className="text-slate-900">
                    Selected: {selectedFeature}
                  </Heading>
                  <Text className="text-slate-700">
                    Feature details, statistics, and metadata would appear here.
                  </Text>
                  <button
                    onClick={() => setSelectedFeature(null)}
                    className="text-sm text-blue-600 hover:underline"
                  >
                    Clear selection
                  </button>
                </div>
              </Card>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
};

export const mapBlockExamples = [
  {
    title: 'Project Locations',
    subtitle: 'Infrastructure projects across the region',
    legend: [
      { label: 'Completed', color: '#10b981' },
      { label: 'In Progress', color: '#f59e0b' },
      { label: 'Planned', color: '#3b82f6' },
    ],
    filters: [
      { label: 'Status', options: ['Completed', 'In Progress', 'Planned'] },
      { label: 'Sector', options: ['Transport', 'Water', 'Energy', 'Health'] },
    ],
    height: '600px',
  },
];
