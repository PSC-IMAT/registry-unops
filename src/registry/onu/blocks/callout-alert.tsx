"use client";
/**
 * Callout Alert Block
 */

import React from 'react';
import { z } from 'zod';
import { Section } from '@/ui/section';
import { Heading } from '@/ui/heading';
import { Text } from '@/registry/onu/ui/text';
import { Button } from '@/ui/button';
import { cn } from '@/lib/utils';

const ActionSchema = z.object({
  label: z.string(),
  href: z.string(),
});

export const CalloutAlertBlockSchema = z.object({
  title: z.string(),
  message: z.string(),
  variant: z.enum(['info', 'warn', 'danger', 'success']).default('info'),
  actions: z.array(ActionSchema).optional(),
  className: z.string().optional(),
});

export type CalloutAlertBlockProps = z.infer<typeof CalloutAlertBlockSchema>;

const variantStyles = {
  info: 'bg-blue-50 border-blue-500 text-blue-900',
  warn: 'bg-yellow-50 border-yellow-500 text-yellow-900',
  danger: 'bg-red-50 border-red-500 text-red-900',
  success: 'bg-green-50 border-green-500 text-green-900',
};

const variantIcons = {
  info: 'ℹ️',
  warn: '⚠️',
  danger: '🚨',
  success: '✅',
};

export const CalloutAlertBlock: React.FC<CalloutAlertBlockProps> = ({
  title,
  message,
  variant,
  actions,
  className,
}) => {
  return (
    <Section spacing="md" className={className}>
      <div className={cn('border-l-4 rounded-lg p-6', variantStyles[variant])}>
        <div className="flex gap-4">
          <div className="text-3xl">{variantIcons[variant]}</div>
          <div className="flex-1 space-y-3">
            <Heading level="h3" weight="bold">
              {title}
            </Heading>
            <Text >{message}</Text>

            {actions && actions.length > 0 && (
              <div className="flex gap-3 pt-2">
                {actions.map((action, index) => (
                  <Button
                    key={index}
                    variant={variant === 'danger' ? 'destructive' : 'default'}
                    onClick={() => window.location.href = action.href}
                  >
                    {action.label}
                  </Button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
};

export const calloutAlertExamples = [
  {
    title: 'Emergency Update',
    message: 'This report reflects rapidly evolving conditions. Information is subject to change as new data becomes available. Last updated: March 25, 2024 14:30 UTC.',
    variant: 'warn' as const,
    actions: [
      { label: 'View Updates', href: '/updates' },
      { label: 'Subscribe to Alerts', href: '/subscribe' },
    ],
  },
  {
    title: 'Data Quality Note',
    message: 'Survey data for regions 4-7 is preliminary and undergoing validation. Final figures may vary by up to 15%.',
    variant: 'info' as const,
  },
  {
    title: 'Critical Infrastructure Alert',
    message: 'Power supply disruption affecting monitoring systems. Real-time data may be delayed by 6-12 hours.',
    variant: 'danger' as const,
    actions: [
      { label: 'View Status', href: '/status' },
    ],
  },
  {
    title: 'Milestone Achieved',
    message: 'All Phase 1 targets successfully completed ahead of schedule. Thank you to all partners and stakeholders.',
    variant: 'success' as const,
  },
];
