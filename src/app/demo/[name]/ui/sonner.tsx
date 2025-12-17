"use client";

import { Button } from "@/registry/onu/ui/button";
import { toast } from "sonner";

export const sonner = {
  name: "sonner",
  components: {
    SonnerDemo: (
      <div className="flex gap-2">
        <Button onClick={() => toast.success("Success!")}>Success</Button>
        <Button onClick={() => toast.error("Error!")}>Error</Button>
        <Button onClick={() => toast("Custom toast")}>Default</Button>
      </div>
    ),
  },
};
