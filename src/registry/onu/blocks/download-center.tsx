'use client'
/**
 * Download Center Block
 */

import React from 'react';
import { z } from 'zod';
import { Section } from '@/ui/section';
import { Heading } from '@/ui/heading';
import { Text } from '@/registry/onu/ui/text';
import { Button } from '@/ui/button';
import { Card } from '@/ui/card';

const DownloadItemSchema = z.object({
  label: z.string(),
  format: z.string(),
  size: z.string().optional(),
  checksum: z.string().optional(),
  url: z.string(),
});

export const DownloadCenterBlockSchema = z.object({
  title: z.string().default('Downloads'),
  subtitle: z.string().optional(),
  items: z.array(DownloadItemSchema).min(1),
  className: z.string().optional(),
});

export type DownloadCenterBlockProps = z.infer<typeof DownloadCenterBlockSchema>;

export const DownloadCenterBlock: React.FC<DownloadCenterBlockProps> = ({
  title,
  subtitle,
  items,
  className,
}) => {
  return (
    <Section spacing="lg" className={className}>
      <div className="space-y-6">
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

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <Card key={index} >
              <div className="space-y-4">
                <div className="space-y-2">
                  <Text weight="semibold">
                    {item.label}
                  </Text>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span>{item.format.toUpperCase()}</span>
                    {item.size && <span>• {item.size}</span>}
                  </div>
                  {item.checksum && (
                    <Text className="text-muted-foreground font-mono">
                      {item.checksum.slice(0, 16)}...
                    </Text>
                  )}
                </div>

                <Button
                                                                        onClick={() => window.location.href = item.url}
                >
                  Download
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
};


