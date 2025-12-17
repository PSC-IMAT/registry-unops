"use client";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/registry/onu/ui/resizable";

export function ResizableHorizontal() {
  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="h-64 w-full rounded-md border"
    >
      <ResizablePanel defaultSize={50}>
        <div className="h-full p-4">Left panel</div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={50}>
        <div className="h-full p-4">Right panel</div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}

export function ResizableVertical() {
  return (
    <ResizablePanelGroup
      direction="vertical"
      className="h-80 w-full rounded-md border"
    >
      <ResizablePanel defaultSize={40} minSize={20}>
        <div className="h-full p-4">Top panel</div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={60} minSize={20}>
        <div className="h-full p-4">Bottom panel</div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}

export function ResizableNested() {
  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="h-80 w-full rounded-md border"
    >
      <ResizablePanel defaultSize={35} minSize={20}>
        <div className="h-full p-4">Nav</div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={65} minSize={30}>
        <ResizablePanelGroup direction="vertical">
          <ResizablePanel defaultSize={60} minSize={30}>
            <div className="h-full p-4">Content area</div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={40} minSize={20}>
            <div className="h-full p-4">Details / Logs</div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
