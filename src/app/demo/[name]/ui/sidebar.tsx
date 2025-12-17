import { Sidebar, SidebarContent, SidebarHeader, SidebarProvider } from "@/registry/onu/ui/sidebar";

export const sidebar = {
  name: "sidebar",
  components: {
    SidebarDemo: (
      <SidebarProvider>
        <Sidebar>
          <SidebarHeader>Menu</SidebarHeader>
          <SidebarContent>
            <div className="space-y-2">
              <p>Item 1</p>
              <p>Item 2</p>
              <p>Item 3</p>
            </div>
          </SidebarContent>
        </Sidebar>
        <div className="flex-1 p-4">Main content</div>
      </SidebarProvider>
    ),
  },
};
