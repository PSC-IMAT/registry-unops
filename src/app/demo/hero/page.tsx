"use client";
import { DamageHeroBlock, damageHeroExamples } from "@/registry/onu/blocks/damage-hero";
import { Renderer } from "@/app/demo/[name]/renderer";

export default function Page() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center gap-8 bg-background px-4 py-10">
      <div className="relative m-auto w-full max-w-5xl">
        <Renderer>
          <DamageHeroBlock {...damageHeroExamples[0]} />
        </Renderer>
      </div>
    </div>
  );
}
