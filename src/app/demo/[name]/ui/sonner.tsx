import {
  ActionSonner,
  ErrorSonner,
  Sonner as SonnerButton,
  SuccessfulSonner,
  WarningSonner,
} from "@/app/demo/[name]/ui/sonner-toasts";

export const sonner = {
  name: "sonner",
  components: {
    Default: <SonnerButton />,
    Success: <SuccessfulSonner />,
    Warning: <WarningSonner />,
    Error: <ErrorSonner />,
    Action: <ActionSonner />,
  },
};
