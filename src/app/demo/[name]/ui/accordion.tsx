import {
  AccordionControlled,
  AccordionDefaultOpen,
  AccordionDisabled,
  AccordionMultiple,
  AccordionNested,
  AccordionSingle,
} from "@/app/demo/[name]/ui/accordion-client";

export const accordion = {
  name: "accordion",
  components: {
    Single: <AccordionSingle />,
    Multiple: <AccordionMultiple />,
    DefaultOpen: <AccordionDefaultOpen />,
    Disabled: <AccordionDisabled />,
    Controlled: <AccordionControlled />,
    Nested: <AccordionNested />,
  },
};
