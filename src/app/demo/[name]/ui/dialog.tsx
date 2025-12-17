import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/registry/onu/ui/dialog";
import { Button } from "@/registry/onu/ui/button";

export const dialog = {
  name: "dialog",
  components: {
    DialogDemo: (
      <Dialog>
        <DialogTrigger asChild>
          <Button>Open dialog</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Dialog Title</DialogTitle>
            <DialogDescription>
              This is a dialog description
            </DialogDescription>
          </DialogHeader>
          <p>Dialog content goes here</p>
        </DialogContent>
      </Dialog>
    ),
  },
};
