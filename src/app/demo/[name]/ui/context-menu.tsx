import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger } from "@/registry/onu/ui/context-menu";

export const contextMenu = {
  name: "context-menu",
  components: {
    ContextMenuDemo: (
      <ContextMenu>
        <ContextMenuTrigger className="flex h-32 w-32 items-center justify-center rounded-md border border-dashed">
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
