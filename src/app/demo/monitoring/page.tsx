"use client";
import { MonitoringBlock, monitoringExamples } from "@/registry/onu/blocks/monitoring";
import { Renderer } from "@/app/demo/[name]/renderer";

export default function Page() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center gap-8 bg-background px-4 py-10">
      <div className="relative m-auto w-full max-w-5xl">
        <Renderer>
          <MonitoringBlock {...monitoringExamples[0]} />
        </Renderer>
      </div>
      <div id="hospital-anchor" style={{ scrollMarginTop: 80 }} />
      <div className="h-80 w-full" />
    </div>
  );
}
