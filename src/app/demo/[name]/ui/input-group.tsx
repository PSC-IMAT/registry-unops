import {
  InputGroupDefault,
  InputGroupHelperBelow,
  InputGroupLabelAbove,
  InputGroupPrefixText,
  InputGroupSuffixText,
  InputGroupTextareaExample,
  InputGroupWithButton,
  InputGroupWithIcon,
} from "@/app/demo/[name]/ui/input-group-client";

export const inputGroup = {
  name: "input-group",
  components: {
    Default: <InputGroupDefault />,
    PrefixText: <InputGroupPrefixText />,
    SuffixText: <InputGroupSuffixText />,
    WithIcon: <InputGroupWithIcon />,
    WithButtons: <InputGroupWithButton />,
    LabelAbove: <InputGroupLabelAbove />,
    HelperBelow: <InputGroupHelperBelow />,
    Textarea: <InputGroupTextareaExample />,
  },
};
