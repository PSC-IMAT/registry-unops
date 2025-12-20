"use client";

/**
 * Hero Block Component
 *
 * Hero section with title, subtitle, media, KPI cards, and CTAs
 */

import React from "react";
import { z } from "zod";
import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Image } from "@/components/ui/image";
import { Video } from "@/components/ui/video";
import { cn } from "@/lib/utils";

const KPISchema = z.object({
  label: z.string(),
  value: z.string(),
  change: z.string().optional(),
  icon: z.string().optional(),
});

const CTASchema = z.object({
  label: z.string(),
  href: z.string(),
  variant: z.enum(["primary", "secondary"]).optional(),
});

const MediaSchema = z.discriminatedUnion("type", [
  z.object({ type: z.literal("image"), src: z.string(), alt: z.string() }),
  z.object({
    type: z.literal("video"),
    src: z.string(),
    poster: z.string().optional(),
  }),
  z.object({ type: z.literal("none") }),
]);

export const HeroBlockSchema = z.object({
  title: z.string(),
  subtitle: z.string().optional(),
  media: MediaSchema.optional(),
  kpis: z.array(KPISchema).min(2).max(4).optional(),
  primaryCTA: CTASchema.optional(),
  secondaryCTA: CTASchema.optional(),
  className: z.string().optional(),
});

export type HeroBlockProps = z.infer<typeof HeroBlockSchema>;

export const HeroBlock: React.FC<HeroBlockProps> = ({
  title,
  subtitle,
  media,
  kpis,
  primaryCTA,
  secondaryCTA,
  className,
}) => {
  return (
    <Section
      spacing="xl"
      className={cn(
        "bg-linear-to-br from-blue-50 via-slate-50 to-cyan-50",
        "relative overflow-hidden",
        className
      )}
    >
      {/* Decorative blobs */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full blur-3xl opacity-20" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-200 rounded-full blur-3xl opacity-20" />
      
      <div className="relative z-10 grid gap-8 lg:grid-cols-2 lg:gap-12">
        {/* Content */}
        <div className="flex flex-col justify-center space-y-6">
          <div className="space-y-4">
            <Heading level="h1" weight="bold">
              {title}
            </Heading>
            {subtitle && (
              <Text className="text-muted-foreground">{subtitle}</Text>
            )}
          </div>

          {/* CTAs */}
          {(primaryCTA || secondaryCTA) && (
            <div className="flex flex-wrap gap-4">
              {primaryCTA && (
                <Button
                  onClick={() => (window.location.href = primaryCTA.href)}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  {primaryCTA.label} →
                </Button>
              )}
              {secondaryCTA && (
                <Button
                  onClick={() => (window.location.href = secondaryCTA.href)}
                  className="border-2 border-blue-300 text-blue-600 hover:bg-blue-50 font-semibold px-8 py-3 rounded-lg transition-all duration-300"
                >
                  {secondaryCTA.label}
                </Button>
              )}
            </div>
          )}

          {/* KPI Cards */}
          {kpis && kpis.length > 0 && (
            <div className="grid grid-cols-2 gap-4 pt-4">
              {kpis.map((kpi, index) => (
                <Card 
                  key={index} 
                  className="rounded-xl shadow-md hover:shadow-lg bg-linear-to-br from-white to-blue-50/50 border border-blue-100/50 hover:border-blue-200 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="space-y-3 p-4">
                    {kpi.icon && (
                      <Text className="text-3xl block">{kpi.icon}</Text>
                    )}
                    <Heading level="h3" weight="bold" className="text-blue-600">
                      {kpi.value}
                    </Heading>
                    <Text className="text-slate-600 font-medium">{kpi.label}</Text>
                    {kpi.change && (
                      <Text className="text-emerald-600 font-medium text-sm">
                        ↗ {kpi.change}
                      </Text>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>

        {/* Media */}
        {media && media.type !== "none" && (
          <div className="flex items-center justify-center">
            {media.type === "image" && (
              <Image
                src={media.src}
                alt={media.alt}
                className="rounded-lg shadow-xl w-full h-auto max-h-96 object-cover"
              />
            )}
            {media.type === "video" && (
              <Video
                src={media.src}
                poster={media.poster}
                className="rounded-lg shadow-xl w-full"
              />
            )}
          </div>
        )}
      </div>
    </Section>
  );
};
