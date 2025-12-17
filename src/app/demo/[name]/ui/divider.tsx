import { Divider } from "@/registry/onu/ui/divider";

export const divider = {
  name: "divider",
  components: {
    DividerDemo: (
      <div className="w-full max-w-md space-y-4">
        <div>Above content</div>
        <Divider />
        <div>Below content</div>
      </div>
    ),
  },
};
