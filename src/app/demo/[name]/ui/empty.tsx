import {
  EmptyBasic,
  EmptyMuted,
  EmptyWithActions,
  EmptyWithIcon,
  EmptyWithPreview,
} from "@/app/demo/[name]/ui/empty-client";

export const empty = {
  name: "empty",
  components: {
    Basic: <EmptyBasic />,
    Icon: <EmptyWithIcon />,
    Actions: <EmptyWithActions />,
    Info: <EmptyWithPreview />,
    Muted: <EmptyMuted />,
  },
};
