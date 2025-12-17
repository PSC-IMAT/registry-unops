import { Slider } from "@/registry/onu/ui/slider";

export const slider = {
  name: "slider",
  components: {
    SliderDemo: (
      <div className="w-full max-w-xs space-y-4">
        <Slider defaultValue={[33]} max={100} step={1} />
        <Slider defaultValue={[25, 75]} max={100} step={1} />
      </div>
    ),
  },
};
