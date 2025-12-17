import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/registry/onu/ui/alert-dialog";
import { Button } from "@/registry/onu/ui/button";

export const alertDialog = {
  name: "alert-dialog",
  components: {
    AlertDialogDemo: (
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="outline">Delete account</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your account and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div className="flex gap-2 justify-end">
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Delete</AlertDialogAction>
          </div>
        </AlertDialogContent>
      </AlertDialog>
    ),
  },
};
