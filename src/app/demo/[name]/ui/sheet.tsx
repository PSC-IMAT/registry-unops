import {
  SheetBasic,
  SheetControlled,
  SheetLeft,
  SheetTop,
  SheetWithActions,
} from "@/app/demo/[name]/ui/sheet-client";

export const sheet = {
  name: "sheet",
  components: {
    Basic: <SheetBasic />,
    Left: <SheetLeft />,
    Top: <SheetTop />,
    Actions: <SheetWithActions />,
    Controlled: <SheetControlled />,
  },
};
