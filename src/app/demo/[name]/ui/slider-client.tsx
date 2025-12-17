"use client";

import { useState } from "react";

import { Slider } from "@/registry/onu/ui/slider";

export function SliderBasic() {
  const [value, setValue] = useState([33]);
  return (
    <div className="w-full max-w-xs space-y-2 mx-auto">
      <Slider defaultValue={[33]} max={100} step={1} onValueChange={setValue} />
      <div className="text-xs text-muted-foreground">Value: {value[0]}</div>
    </div>
  );
}

export function SliderRange() {
  const [value, setValue] = useState<[number, number]>([25, 75]);
  return (
    <div className="w-full max-w-xs space-y-2 mx-auto">
      <Slider defaultValue={[25, 75]} max={100} step={1} onValueChange={(v) => setValue(v as [number, number])} />
      <div className="text-xs text-muted-foreground">Range: {value[0]} – {value[1]}</div>
    </div>
  );
}

export function SliderSteps() {
  const [value, setValue] = useState([50]);
  return (
    <div className="w-full max-w-xs space-y-2 mx-auto">
      <Slider defaultValue={[50]} max={100} step={10} onValueChange={setValue} />
      <div className="text-xs text-muted-foreground">Step: {value[0]} (step 10)</div>
    </div>
  );
}

export function SliderDisabled() {
  return (
    <div className="w-full max-w-xs mx-auto">
      <Slider defaultValue={[40]} max={100} step={5} disabled />
    </div>
  );
}

export function SliderVertical() {
  const [value, setValue] = useState([40]);
  return (
    <div className="flex h-44 items-center justify-center gap-4 mx-auto">
      <Slider orientation="vertical" defaultValue={[40]} max={100} step={5} onValueChange={setValue} />
      <div className="text-xs text-muted-foreground">{value[0]}</div>
    </div>
  );
}

export function SliderControlled() {
  const [value, setValue] = useState([20]);
  return (
    <div className="w-full max-w-xs space-y-2">
      <Slider value={value} onValueChange={setValue} max={100} step={1} />
      <div className="text-xs text-muted-foreground">Controlled: {value[0]}</div>
    </div>
  );
}
