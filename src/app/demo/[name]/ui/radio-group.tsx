import { RadioGroup, RadioGroupItem } from "@/registry/onu/ui/radio-group";
import { Label } from "@/registry/onu/ui/label";

export const radioGroup = {
  name: "radio-group",
  components: {
    RadioGroupDemo: (
      <RadioGroup
        defaultValue="option-one"
        className="mx-auto flex! flex-col justify-center items-start space-y-2"
      >
        <div className="flex items-center justify-center space-x-2 mx-auto">
          <RadioGroupItem value="option-one" id="option-one" />
          <Label htmlFor="option-one">Option One</Label>
        </div>
        <div className="flex items-center justify-center space-x-2 mx-auto">
          <RadioGroupItem value="option-two" id="option-two" />
          <Label htmlFor="option-two">Option Two</Label>
        </div>
      </RadioGroup>
    ),
  },
};
