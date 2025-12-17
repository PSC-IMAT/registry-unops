import {
  TextareaBasic,
  TextareaCharacterCount,
  TextareaControlled,
  TextareaDisabled,
  TextareaWithDescription,
  TextareaWithLabel,
} from "@/app/demo/[name]/ui/textarea-client";

export const textarea = {
  name: "textarea",
  components: {
    Basic: <TextareaBasic />,
    WithLabel: <TextareaWithLabel />,
    Disabled: <TextareaDisabled />,
    WithDescription: <TextareaWithDescription />,
    CharacterCount: <TextareaCharacterCount />,
    Controlled: <TextareaControlled />,
  },
};
