import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/registry/onu/ui/tooltip";
import { Button } from "@/registry/onu/ui/button";

export const tooltip = {
  name: "tooltip",
  components: {
    TooltipDemo: (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">Hover me</Button>
          </TooltipTrigger>
          <TooltipContent>Tooltip content</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    ),
  },
};
