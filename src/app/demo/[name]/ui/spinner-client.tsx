"use client";

import { Spinner } from "@/registry/onu/ui/spinner";

export function SpinnerBasic() {
  return (
    <div className="flex justify-center items-center gap-3">
      <Spinner />
    </div>
  );
}

export function SpinnerSizes() {
  return (
    <div className="flex justify-center items-center gap-4">
      <Spinner className="size-3" />
      <Spinner className="size-4" />
      <Spinner className="size-6" />
      <Spinner className="size-8" />
      <Spinner className="size-10" />
    </div>
  );
}

export function SpinnerWithLabel() {
  return (
    <div className="flex justify-center items-center gap-2 text-sm text-muted-foreground">
      <Spinner className="size-4" />
      <span>Loading…</span>
    </div>
  );
}

export function SpinnerOverlay() {
  return (
    <div className="relative justify-center h-40 w-full rounded-md border">
      <div className="absolute inset-0 flex items-center justify-center">
        <Spinner className="size-8 text-muted-foreground" />
      </div>
    </div>
  );
}

export function SpinnerAccent() {
  return (
    <div className="flex justify-center items-center gap-3">
      <Spinner className="size-6 text-primary" />
      <span className="text-sm text-muted-foreground">Processing</span>
    </div>
  );
}

export function SpinnerInverse() {
  return (
    <div className="flex  items-center justify-center rounded-md bg-foreground p-4">
      <Spinner className="size-6 text-white" />
    </div>
  );
}
