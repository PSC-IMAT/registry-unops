import { Field, FieldLabel,  FieldError } from "@/registry/onu/ui/field";
import { Input } from "@/registry/onu/ui/input";

export const field = {
  name: "field",
  components: {
    FieldDemo: (
      <Field>
        <FieldLabel>Email</FieldLabel>
        <Input type="email" placeholder="your@email.com" />
      </Field>
    ),
  },
};
