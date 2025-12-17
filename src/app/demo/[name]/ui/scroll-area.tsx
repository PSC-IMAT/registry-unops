import { ScrollArea } from "@/registry/onu/ui/scroll-area";

export const scrollArea = {
  name: "scroll-area",
  components: {
    ScrollAreaDemo: (
      <ScrollArea className="h-64 w-48 mx-auto rounded-md border p-4">
        <div className="space-y-4">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i}>Item {i + 1}</div>
          ))}
        </div>
      </ScrollArea>
    ),
  },
};
