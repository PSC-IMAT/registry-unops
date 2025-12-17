import { Textarea } from "@/registry/onu/ui/textarea";

export const textarea = {
  name: "textarea",
  components: {
    TextareaDemo: (
      <Textarea placeholder="Enter your message..." className="min-h-24" />
    ),
  },
};
