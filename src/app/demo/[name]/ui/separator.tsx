import { Separator } from "@/registry/onu/ui/separator";

export const separator = {
  name: "separator",
  components: {
    SeparatorDemo: (
      <div className="space-y-4">
        <div>Above separator</div>
        <Separator />
        <div>Below separator</div>
      </div>
    ),
  },
};
