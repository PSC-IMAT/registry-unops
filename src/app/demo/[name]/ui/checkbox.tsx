import { Checkbox } from "@/registry/onu/ui/checkbox";
import { Text } from "@/registry/onu/ui/text";

export const checkbox = {
  name: "checkbox",
  components: {
    CheckboxDemo: (
      <label className="flex items-center gap-2 justify-center ">
        <Checkbox defaultChecked />
        <Text>Accept terms</Text>
      </label>
    ),
  },
};
