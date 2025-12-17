import { Item } from "@/registry/onu/ui/item";

export const item = {
  name: "item",
  components: {
    ItemDemo: (
      <div className="space-y-2 border rounded-md overflow-hidden">
        <Item>Item one</Item>
        <Item>Item two</Item>
        <Item>Item three</Item>
      </div>
    ),
  },
};
