import { Input } from "@/registry/onu/ui/input";

export const input = {
  name: "input",
  components: {
    InputDemo: (
      <div className="flex flex-col gap-3 w-full max-w-sm">
        <Input placeholder="Your name" />
        <Input placeholder="Disabled" disabled />
      </div>
    ),
  },
};
