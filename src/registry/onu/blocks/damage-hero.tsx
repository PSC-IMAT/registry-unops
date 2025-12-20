"use client";

import React from "react";
import { z } from "zod";
import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Button } from "@/components/ui/button";
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
        className={cn(
          "relative overflow-hidden rounded-2xl",
          "bg-linear-to-br from-slate-900 via-slate-800 to-slate-900",
          "border border-slate-700/50",
          "shadow-2xl",
          backgroundImage && "min-h-96"
        )}
        style={backgroundImage ? { backgroundImage: `url(${backgroundImage})`, backgroundSize: "cover", backgroundPosition: "center" } : undefined}
      >
        {/* Gradient overlay */}
        {overlay && (
          <div className={cn(
            "absolute inset-0",
            backgroundImage 
              ? "bg-linear-to-b from-black/40 to-black/60" 
              : "bg-linear-to-r from-slate-900 to-slate-800"
          )} />
        )}
        
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full blur-3xl" />
        </div>
        
        <div className="relative z-10 p-12 lg:p-16 flex flex-col justify-center h-full">
          <div className="max-w-2xl space-y-6">
            <Heading 
              level="h1" 
              weight="bold"
              className="text-white text-4xl lg:text-5xl leading-tight"
            >
              {title}
            </Heading>
            {description && (
              <Text className="text-slate-200 text-lg leading-relaxed max-w-xl">
                {description}
              </Text>
            )}
          </div>
          {buttonText && buttonLink && (
            <div className="pt-8">
              <Button 
                onClick={() => (window.location.href = buttonLink)}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                {buttonText}
              </Button>
            </div>
          )}
        </div>
      </div>
    </Section>
  );
};

