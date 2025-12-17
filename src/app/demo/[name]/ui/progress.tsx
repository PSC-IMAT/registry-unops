import { Progress } from "@/registry/onu/ui/progress";

export const progress = {
  name: "progress",
  components: {
    ProgressDemo: (
      <div className="space-y-4 w-full max-w-sm">
        <Progress value={33} />
        <Progress value={66} />
        <Progress value={99} />
      </div>
    ),
  },
};
