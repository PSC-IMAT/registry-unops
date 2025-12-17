import { Button } from "@/registry/onu/ui/button";

export const buttonGroup = {
  name: "button-group",
  components: {
    ButtonGroupDemo: (
      <div className="flex gap-0 border rounded-md overflow-hidden">
        <Button variant="outline" className="rounded-none border-r">Left</Button>
        <Button variant="outline" className="rounded-none border-r">Middle</Button>
        <Button variant="outline" className="rounded-none">Right</Button>
      </div>
    ),
  },
};
