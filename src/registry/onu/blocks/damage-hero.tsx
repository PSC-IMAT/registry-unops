"use client";

import React from "react";
import { z } from "zod";
import { Section } from "@/ui/section";
import { Heading } from "@/ui/heading";
import { Text } from "@/registry/onu/ui/text";
import { Button } from "@/ui/button";
import { cn } from "@/lib/utils";

export const DamageHeroSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  buttonText: z.string().optional(),
  buttonLink: z.string().optional(),
  backgroundImage: z.string().optional(),
  overlay: z.boolean().default(true),
  className: z.string().optional(),
});

export type DamageHeroProps = z.infer<typeof DamageHeroSchema>;

export const DamageHeroBlock: React.FC<DamageHeroProps> = ({
  title,
  description,
  buttonText = "Learn More",
  buttonLink = "#",
  backgroundImage,
  overlay = true,
  className,
}) => {
  return (
    <Section spacing="xl" className={cn("relative", className)}>
      <div
        className={cn("relative overflow-hidden rounded-xl", backgroundImage && "min-h-70")}
        style={backgroundImage ? { backgroundImage: `url(${backgroundImage})`, backgroundSize: "cover", backgroundPosition: "center" } : undefined}
      >
        {overlay && backgroundImage && (
          <div className="absolute inset-0 bg-black/35" />
        )}
        <div className={cn("relative z-10 p-8", backgroundImage ? "text-white" : "")}>
          <div className="space-y-4">
            <Heading level="h1" weight="bold">{title}</Heading>
            {description && (
              <Text className={backgroundImage ? "text-white/90" : "text-muted-foreground"}>{description}</Text>
            )}
          </div>
          {buttonText && buttonLink && (
            <div className="pt-6">
              <Button onClick={() => (window.location.href = buttonLink)}>{buttonText}</Button>
            </div>
          )}
        </div>
      </div>
    </Section>
  );
};

export const damageHeroExamples: DamageHeroProps[] = [
  {
    title: "Damage Assessment in Conflict Environments",
    description: "Rapid situational awareness, baseline establishment, and targeted monitoring for critical infrastructure.",
    buttonText: "Get Started",
    buttonLink: "#baseline",
    overlay: true,
  },
  {
    title: "Urban Hospital Impact Analysis",
    description: "Assess damage and prioritize response actions across sectors.",
    buttonText: "View Dashboard",
    buttonLink: "#dashboard",
    backgroundImage: "/images/hospital.jpg",
    overlay: true,
  },
];
