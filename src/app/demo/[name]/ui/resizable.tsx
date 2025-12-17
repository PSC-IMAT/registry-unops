import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/registry/onu/ui/resizable";

export const resizable = {
  name: "resizable",
  components: {
    ResizableDemo: (
      <ResizablePanelGroup direction="horizontal" className="h-64 w-full rounded-md border">
        <ResizablePanel defaultSize={50}>
          <div className="h-full p-4">Left panel</div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={50}>
          <div className="h-full p-4">Right panel</div>
        </ResizablePanel>
      </ResizablePanelGroup>
    ),
  },
};
