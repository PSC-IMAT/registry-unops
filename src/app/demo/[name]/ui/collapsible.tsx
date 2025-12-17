import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/registry/onu/ui/collapsible";
import { Button } from "@/registry/onu/ui/button";

export const collapsible = {
  name: "collapsible",
  components: {
    CollapsibleDemo: (
      <Collapsible className="w-full max-w-sm border rounded-md p-4">
        <CollapsibleTrigger asChild>
          <Button variant="ghost" className="p-0">Toggle content</Button>
        </CollapsibleTrigger>
        <CollapsibleContent className="mt-4">
          Hidden content revealed on click
        </CollapsibleContent>
      </Collapsible>
    ),
  },
};
