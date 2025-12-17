import { Alert, AlertTitle, AlertDescription } from "@/registry/onu/ui/alert";

export const alert = {
  name: "alert",
  components: {
    AlertDemo: (
      <Alert variant="default">
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can use alerts to notify users of important information.
        </AlertDescription>
      </Alert>
    ),
  },
};
