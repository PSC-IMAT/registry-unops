"use client";

/**
 * Hero Block Component
 *
 * Hero section with title, subtitle, media, KPI cards, and CTAs
 */

import React from "react";
import { z } from "zod";
import { Section } from "@/ui/section";
import { Heading } from "@/ui/heading";
import { Text } from "@/registry/onu/ui/text";
import { Button } from "@/ui/button";
import { Card } from "@/ui/card";
import { Image } from "@/ui/image";
import { Video } from "@/ui/video";
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
      className={cn("bg-linear-to-b from-blue-50 to-white", className)}
    >
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
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
                  variant={
                    primaryCTA.variant === "secondary" ? "secondary" : "default"
                  }
                  onClick={() => (window.location.href = primaryCTA.href)}
                >
                  {primaryCTA.label}
                </Button>
              )}
              {secondaryCTA && (
                <Button
                  onClick={() => (window.location.href = secondaryCTA.href)}
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
                <Card key={index}>
                  <div className="space-y-1">
                    {kpi.icon && (
                      <Text className="text-muted-foreground">{kpi.icon}</Text>
                    )}
                    <Heading level="h3" weight="bold">
                      {kpi.value}
                    </Heading>
                    <Text className="text-muted-foreground">{kpi.label}</Text>
                    {kpi.change && (
                      <Text className="text-green-600 font-medium">
                        {kpi.change}
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

// Example configurations
export const heroExamples = [
  {
    title: "Global Infrastructure Impact Report 2024",
    subtitle:
      "Comprehensive analysis of sustainable development projects across 45 countries",
    media: {
      type: "image" as const,
      src: "/images/hero-map.jpg",
      alt: "Global project map",
    },
    kpis: [
      {
        label: "Projects Completed",
        value: "1,247",
        change: "+23% YoY",
        icon: "📊",
      },
      { label: "Countries Served", value: "45", icon: "🌍" },
      { label: "Investment Value", value: "$2.4B", change: "+15%", icon: "💰" },
      { label: "Beneficiaries", value: "12M", icon: "👥" },
    ],
    primaryCTA: {
      label: "Read Full Report",
      href: "#report",
      variant: "primary" as const,
    },
    secondaryCTA: {
      label: "View Data",
      href: "#data",
      variant: "secondary" as const,
    },
  },
  {
    title: "Emergency Response: Flood Relief Operations",
    subtitle: "Real-time monitoring and impact assessment",
    media: { type: "none" as const },
    kpis: [
      { label: "Affected Population", value: "450K", icon: "⚠️" },
      { label: "Relief Centers", value: "38", icon: "🏥" },
    ],
    primaryCTA: { label: "Emergency Updates", href: "#updates" },
  },
  {
    title: "Renewable Energy Transition Study",
    subtitle: "Pathway to carbon neutrality in developing regions",
    media: {
      type: "video" as const,
      src: "/videos/energy-transition.mp4",
      poster: "/images/energy-poster.jpg",
    },
    kpis: [
      { label: "Solar Capacity", value: "2.3 GW", change: "+45%", icon: "☀️" },
      { label: "CO₂ Reduced", value: "1.2M tons", icon: "🌱" },
      { label: "Rural Access", value: "78%", change: "+12%", icon: "🔌" },
    ],
    primaryCTA: { label: "Explore Methodology", href: "#methodology" },
  },
];
