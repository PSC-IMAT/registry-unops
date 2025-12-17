import { Skeleton } from "@/registry/onu/ui/skeleton";

export const skeleton = {
  name: "skeleton",
  components: {
    SkeletonDemo: (
      <div className="space-y-4">
        <div className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-1/2" />
        </div>
      </div>
    ),
  },
};
