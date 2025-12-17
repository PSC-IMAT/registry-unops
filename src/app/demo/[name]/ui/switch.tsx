import { Switch } from "@/registry/onu/ui/switch";
import { Label } from "@/registry/onu/ui/label";

export const switchComponent = {
  name: "switch",
  components: {
    SwitchDemo: (
      <div className="flex items-center space-x-2">
        <Switch id="airplane-mode" />
        <Label htmlFor="airplane-mode">Airplane Mode</Label>
      </div>
    ),
  },
};
