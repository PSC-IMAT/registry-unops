import { List, ListItem } from "@/registry/onu/ui/list";

export const list = {
  name: "list",
  components: {
    ListDemo: (
      <div className="flex flex-col gap-4 justify-center items-center mx-auto">
        <List variant="unordered">
          <ListItem>Item one</ListItem>
          <ListItem>Item two</ListItem>
          <ListItem>Item three</ListItem>
        </List>
        <List variant="ordered">
          <ListItem>Step one</ListItem>
          <ListItem>Step two</ListItem>
          <ListItem>Step three</ListItem>
        </List>
      </div>
    ),
  },
};
