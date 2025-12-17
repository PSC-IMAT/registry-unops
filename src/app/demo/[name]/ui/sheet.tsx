import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/registry/onu/ui/sheet";
import { Button } from "@/registry/onu/ui/button";

export const sheet = {
  name: "sheet",
  components: {
    SheetDemo: (
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">Open sheet</Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Sheet Title</SheetTitle>
            <SheetDescription>Sheet description</SheetDescription>
          </SheetHeader>
          <div className="py-4">Sheet content</div>
        </SheetContent>
      </Sheet>
    ),
  },
};
