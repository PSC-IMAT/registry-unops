"use client";

import { Skeleton } from "@/registry/onu/ui/skeleton";

export function SkeletonBasic() {
  return (
    <div className="space-y-3">
      <Skeleton className="h-4 w-full" bg-primary />
      <Skeleton className="h-4 w-5/6 bg-primary" />
      <Skeleton className="h-4 w-2/3 bg-primary"  />
    </div>
  );
}

export function SkeletonAvatarText() {
  return (
    <div className="flex items-center gap-3">
      <Skeleton className="h-10 w-10 rounded-ful bg-primary" />
      <div className="flex-1 space-y-2">
        <Skeleton className="h-4 w-2/3 bg-primary" />
        <Skeleton className="h-4 w-1/3 bg-primary" />
      </div>
    </div>
  );
}

export function SkeletonCard() {
  return (
    <div className="rounded-md border p-4">
      <Skeleton className="mb-3 h-32 w-full bg-primary" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-3/4 bg-primary" />
        <Skeleton className="h-4 w-2/3 bg-primary" />
        <Skeleton className="h-4 w-1/2 bg-primary" />
      </div>
    </div>
  );
}

export function SkeletonList() {
  return (
    <div className="space-y-3">
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className="flex items-center gap-3">
          <Skeleton className="h-8 w-8 rounded-full bg-primary" />
          <div className="flex-1 space-y-2">
            <Skeleton className="h-4 w-1/2 bg-primary" />
            <Skeleton className="h-4 w-1/3 bg-primary" />
          </div>
        </div>
      ))}
    </div>
  );
}

export function SkeletonTable() {
  return (
    <div className="overflow-hidden rounded-md border">
      <div className="grid grid-cols-4 gap-0 border-b p-3">
        <Skeleton className="h-4 w-2/3 bg-primary" />
        <Skeleton className="h-4 w-1/2 bg-primary" />
        <Skeleton className="h-4 w-1/3 bg-primary" />
        <Skeleton className="h-4 w-1/4 bg-primary" />
      </div>
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="grid grid-cols-4 gap-0 border-b p-3">
          <Skeleton className="h-4 w-2/3 bg-primary" />
          <Skeleton className="h-4 w-1/2 bg-primary" />
          <Skeleton className="h-4 w-1/3 bg-primary" />
          <Skeleton className="h-4 w-1/4 bg-primary" />
        </div>
      ))}
    </div>
  );
}
