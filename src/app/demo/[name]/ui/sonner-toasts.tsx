"use client";

import { toast } from "sonner";

import { Button } from "@/registry/onu/ui/button";

export function Sonner() {
  return (
    <Button
      className="flex! mx-auto justify-center items-center"
      onClick={() => toast("Toast")}
    >
      Normal Toast
    </Button>
  );
}

export function SuccessfulSonner() {
  return (
    <Button
      variant="secondary"
      className="flex! mx-auto justify-center items-center"
      onClick={() => toast.success("Successful")}
    >
      Successful Toast
    </Button>
  );
}

export function WarningSonner() {
  return (
    <Button
      className="flex! mx-auto justify-center items-center"
      variant="outline"
      onClick={() => toast.warning("This is a warning")}
    >
      Warning Toast
    </Button>
  );
}

export function ErrorSonner() {
  return (
    <Button
      className="flex! mx-auto justify-center items-center"
      variant="destructive"
      onClick={() => toast.error("There was an error")}
    >
      Error Toast
    </Button>
  );
}

export function ActionSonner() {
  return (
    <Button
      className="flex! mx-auto justify-center items-center"
      variant="ghost"
      onClick={() =>
        toast("Toast with an Action", {
          description: "A description with some more information",
          action: {
            label: "Action",
            onClick: () => console.log("Action!"),
          },
        })
      }
    >
      Action Toast
    </Button>
  );
}
