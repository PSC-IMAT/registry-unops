"use client";

/**
 * FAQ Block
 */

import React, { useState } from "react";
import { z } from "zod";
import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { cn } from "@/lib/utils";

const FAQItemSchema = z.object({
  question: z.string(),
  answer: z.string(),
});

export const FaqBlockSchema = z.object({
  title: z.string().default("Frequently Asked Questions"),
  items: z.array(FAQItemSchema).min(2),
  className: z.string().optional(),
});

export type FaqBlockProps = z.infer<typeof FaqBlockSchema>;

export const FaqBlock: React.FC<FaqBlockProps> = ({
  title,
  items,
  className,
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <Section spacing="lg" className={cn('bg-linear-to-br from-slate-50 via-white to-cyan-50/30 relative overflow-hidden', className)}>
      {/* Decorative elements */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-300 rounded-full blur-3xl opacity-10" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 rounded-full blur-3xl opacity-10" />
      
      <div className="relative z-10 space-y-8">
        <Heading level="h2" weight="bold" className="text-3xl text-slate-900">
          {title}
        </Heading>

        <div className="space-y-4">
          {items.map((item, index) => (
            <div 
              key={index} 
              className="rounded-xl border border-slate-200/50 overflow-hidden shadow-md hover:shadow-lg bg-white transition-all duration-300 hover:border-blue-200"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-blue-50/50 transition-colors duration-200"
              >
                <Heading level="h3" weight="semibold" className="text-slate-900 flex items-center gap-3">
                  <span className="text-lg">❓</span>
                  {item.question}
                </Heading>
                <span className={cn(
                  "text-2xl text-blue-600 transition-transform duration-300 shrink-0",
                  openIndex === index && "rotate-180"
                )}>
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-5 border-t border-slate-100 bg-linear-to-b from-blue-50/50 to-transparent pt-4">
                  <Text className="text-slate-700 leading-relaxed">
                    {item.answer}
                  </Text>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};


