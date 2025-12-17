import { Spinner } from "@/registry/onu/ui/spinner";

export const spinner = {
  name: "spinner",
  components: {
    SpinnerDemo: (
      <div className="flex gap-4">
        <Spinner />
      </div>
    ),
  },
};
