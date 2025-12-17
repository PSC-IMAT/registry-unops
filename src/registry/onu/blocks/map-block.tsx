'use client';

/**
 * Map Block Component
 * 
 * Placeholder map container with legend, filters, and feature panel
 */

import React, { useState } from 'react';
import { z } from 'zod';
import { Section } from '@/ui/section';
import { Heading } from '@/ui/heading';
import { Text } from '@/registry/onu/ui/text';
import { Card } from '@/ui/card';
import { Badge } from '@/ui/badge';
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
    <Section spacing="lg" className={className}>
      <div className="space-y-4">
        <div className="space-y-2">
          <Heading level="h2" weight="bold">
            {title}
          </Heading>
          {subtitle && (
            <Text className="text-muted-foreground">
              {subtitle}
            </Text>
          )}
        </div>

        <div className="grid gap-4 lg:grid-cols-4">
          {/* Filters */}
          {filters && filters.length > 0 && (
            <div className="space-y-4">
              <Heading level="h3" weight="semibold">
                Filters
              </Heading>
              {filters.map((filter, index) => (
                <Card key={index} >
                  <div className="space-y-2">
                    <Text weight="semibold">
                      {filter.label}
                    </Text>
                    <select className="w-full text-sm border rounded p-1">
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
            <div className="relative border rounded-lg" style={{ height }}>
              <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded">
                <div className="text-center space-y-2">
                  <Text className="text-muted-foreground">
                    🗺️ Map Placeholder
                  </Text>
                  <Text className="text-muted-foreground">
                    Integrate Mapbox, Leaflet, or other mapping library here
                  </Text>
                  <button
                    onClick={() => setSelectedFeature('Sample Location')}
                    className="mt-4 px-4 py-2 bg-blue-600 text-white rounded text-sm"
                  >
                    Click to Select Feature
                  </button>
                </div>
              </div>
            </div>

            {/* Legend */}
            {legend && legend.length > 0 && (
              <Card >
                <div className="flex flex-wrap gap-4">
                  {legend.map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div
                        className="w-4 h-4 rounded"
                        style={{ backgroundColor: item.color }}
                      />
                      <Text >{item.label}</Text>
                    </div>
                  ))}
                </div>
              </Card>
            )}

            {/* Selected Feature Panel */}
            {selectedFeature && (
              <Card >
                <div className="space-y-2">
                  <Heading level="h3" weight="semibold">
                    Selected: {selectedFeature}
                  </Heading>
                  <Text >
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
