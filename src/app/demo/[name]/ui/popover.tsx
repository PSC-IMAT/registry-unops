import { Popover, PopoverContent, PopoverTrigger } from "@/registry/onu/ui/popover";
import { Button } from "@/registry/onu/ui/button";

export const popover = {
  name: "popover",
  components: {
    PopoverDemo: (
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Open popover</Button>
        </PopoverTrigger>
        <PopoverContent className="w-64">
          This is a popover with some contextual content.
        </PopoverContent>
      </Popover>
    ),
  },
};
