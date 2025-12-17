import { InputGroup, InputGroupText } from "@/registry/onu/ui/input-group";
import { Input } from "@/registry/onu/ui/input";
import { Button } from "@/registry/onu/ui/button";

export const inputGroup = {
  name: "input-group",
  components: {
    InputGroupDemo: (
      <InputGroup>
        <Input placeholder="0.00" />
        <InputGroupText>$</InputGroupText>
      </InputGroup>
    ),
  },
};
