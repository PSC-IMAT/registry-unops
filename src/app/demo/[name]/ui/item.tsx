import {
  ItemCompactMuted,
  ItemListBasic,
  ItemWithHeaderFooter,
  ItemWithIcon,
  ItemWithImage,
} from "@/app/demo/[name]/ui/item-client";

export const item = {
  name: "item",
  components: {
    BasicList: <ItemListBasic />,
    WithIcon: <ItemWithIcon />,
    WithImage: <ItemWithImage />,
    CompactMuted: <ItemCompactMuted />,
    HeaderFooter: <ItemWithHeaderFooter />,
  },
};
