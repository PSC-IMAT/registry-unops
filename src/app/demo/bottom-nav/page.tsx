"use client";
import { BottomNavBlock, bottomNavExamples } from "@/registry/onu/blocks/bottom-nav";
import { Renderer } from "@/app/demo/[name]/renderer";

export default function Page() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center gap-8 bg-background px-4 py-10">
      <div className="relative m-auto w-full max-w-5xl">
        <Renderer>
          <BottomNavBlock {...bottomNavExamples[0]} />
        </Renderer>
      </div>
      {/* Anchors to scroll to */}
      <div id="baseline" style={{ scrollMarginTop: 80 }} />
      <div className="h-80 w-full" />
      <div id="monitoring" style={{ scrollMarginTop: 80 }} />
      <div className="h-80 w-full" />
      <div id="damage" style={{ scrollMarginTop: 80 }} />
      <div className="h-80 w-full" />
    </div>
  );
}
