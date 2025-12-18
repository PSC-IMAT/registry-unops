"use client";
import { DamageDashboardBlock, damageDashboardExamples } from "@/registry/onu/blocks/damage-dashboard";
import { Renderer } from "@/app/demo/[name]/renderer";

export default function Page() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center gap-8 bg-background px-4 py-10">
      <div className="relative m-auto w-full max-w-5xl">
        <Renderer>
          <DamageDashboardBlock {...damageDashboardExamples[0]} />
        </Renderer>
      </div>
    </div>
  );
}
