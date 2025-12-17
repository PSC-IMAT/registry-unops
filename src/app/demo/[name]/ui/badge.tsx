import { Badge } from "@/registry/onu/ui/badge";

export const badge = {
  name: "badge",
  components: {
    BadgeDemo: (
      <div className="flex gap-2">
        <Badge>Default</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="default">Default</Badge>
        <Badge variant="outline">Outline</Badge>
        <Badge variant="destructive">Destructive</Badge>
      </div>
    ),
  },
};
