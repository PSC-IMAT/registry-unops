"use client";

import { useEffect, useState } from "react";

import { Progress } from "@/registry/onu/ui/progress";

export function ProgressBasic() {
  return (
    <div className="w-full max-w-sm space-y-2 mx-auto">
      <Progress value={33} />
      <Progress value={66} />
      <Progress value={99} />
    </div>
  );
}

export function ProgressIndeterminate() {
  return (
    <div className="w-full max-w-sm space-y-2 mx-auto">
      <Progress value={undefined} className="animate-pulse" />
    </div>
  );
}

export function ProgressWithLabel() {
  const value = 72;
  return (
    <div className="w-full max-w-sm space-y-1 mx-auto">
      <div className="text-sm font-medium">Uploading... {value}%</div>
      <Progress value={value} />
    </div>
  );
}

export function ProgressAnimated() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setValue((v) => (v >= 100 ? 0 : v + 10));
    }, 600);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="w-full max-w-sm space-y-1 mx-auto">
      <div className="text-sm font-medium">Progress: {value}%</div>
      <Progress value={value} />
    </div>
  );
}
