import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from "@/registry/onu/ui/navigation-menu";

export const navigationMenu = {
  name: "navigation-menu",
  components: {
    NavigationMenuDemo: (
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="p-4 space-y-2">
                <p>Introduction</p>
                <p>Installation</p>
                <p>Configuration</p>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    ),
  },
};
