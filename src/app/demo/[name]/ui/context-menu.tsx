import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger } from "@/registry/onu/ui/context-menu";

export const contextMenu = {
  name: "context-menu",
  components: {
    ContextMenuDemo: (
      <ContextMenu >
        <ContextMenuTrigger className=" h-14 flex items-center justify-center rounded-md border border-dashed">
          Right click here
        </ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuItem>Back</ContextMenuItem>
          <ContextMenuItem>Forward</ContextMenuItem>
          <ContextMenuItem>Reload</ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
    ),
  },
};
