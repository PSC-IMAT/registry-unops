import { Label } from "@/registry/onu/ui/label";
import { Input } from "@/registry/onu/ui/input";

export const label = {
  name: "label",
  components: {
    LabelDemo: (
      <div className="space-y-2">
        <Label htmlFor="email">Email address</Label>
        <Input id="email" type="email" placeholder="Enter your email" />
      </div>
    ),
  },
};
