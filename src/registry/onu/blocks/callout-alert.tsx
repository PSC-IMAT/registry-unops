"use client";
/**
 * Callout Alert Block
 */

import React from 'react';
import { z } from 'zod';
import { Section } from '@/components/ui/section';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import { Button } from '@/components/ui/button';
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
  info: 'bg-linear-to-r from-blue-50 to-cyan-50 border-blue-300 text-blue-900',
  warn: 'bg-linear-to-r from-yellow-50 to-orange-50 border-yellow-300 text-yellow-900',
  danger: 'bg-linear-to-r from-red-50 to-rose-50 border-red-300 text-red-900',
  success: 'bg-linear-to-r from-green-50 to-emerald-50 border-green-300 text-green-900',
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
      <div className={cn('border-l-4 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300', variantStyles[variant])}>
        <div className="flex gap-4">
          <div className="text-4xl shrink-0">{variantIcons[variant]}</div>
          <div className="flex-1 space-y-3">
            <Heading level="h3" weight="bold" className="text-lg">
              {title}
            </Heading>
            <Text className="leading-relaxed">{message}</Text>

            {actions && actions.length > 0 && (
              <div className="flex flex-wrap gap-3 pt-4">
                {actions.map((action, index) => (
                  <Button
                    key={index}
                    onClick={() => window.location.href = action.href}
                    className={cn(
                      'font-semibold transition-all duration-300',
                      variant === 'danger' 
                        ? 'bg-red-600 hover:bg-red-700 text-white' 
                        : variant === 'warn'
                        ? 'bg-yellow-600 hover:bg-yellow-700 text-white'
                        : variant === 'success'
                        ? 'bg-green-600 hover:bg-green-700 text-white'
                        : 'bg-blue-600 hover:bg-blue-700 text-white'
                    )}
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
