import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/registry/onu/ui/drawer";
import { Button } from "@/registry/onu/ui/button";

export const drawer = {
  name: "drawer",
  components: {
    DrawerDemo: (
      <Drawer>
        <DrawerTrigger className="flex! mx-auto justify-center items-center" asChild>
          <Button variant="outline">Open drawer</Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Drawer Title</DrawerTitle>
            <DrawerDescription>Drawer description</DrawerDescription>
          </DrawerHeader>
          <div className="p-4 space-y-4">
            <p>Drawer content</p>
            <DrawerClose asChild>
              <Button>Close</Button>
            </DrawerClose>
          </div>
        </DrawerContent>
      </Drawer>
    ),
  },
};
