import {
  SidebarBasic,
  SidebarControlled,
  SidebarFloating,
  SidebarRight,
} from "@/app/demo/[name]/ui/sidebar-client";

export const sidebar = {
  name: "sidebar",
  components: {
    SideBarDemo: (
      <>
        <SidebarBasic />
        <SidebarFloating />
        <SidebarRight />
        <SidebarControlled />
      </>
    ),
  },
};
