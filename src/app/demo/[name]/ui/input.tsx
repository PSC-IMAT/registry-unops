import {
  InputControlled,
  InputDefault,
  InputDisabled,
  InputEmail,
  InputFile,
  InputInvalid,
  InputLarge,
  InputPassword,
} from "@/app/demo/[name]/ui/input-client";

export const input = {
  name: "input",
  components: {
    Default: <InputDefault />,
    Disabled: <InputDisabled />,
    Invalid: <InputInvalid />,
    Email: <InputEmail />,
    Password: <InputPassword />,
    File: <InputFile />,
    Controlled: <InputControlled />,
    Large: <InputLarge />,
  },
};
