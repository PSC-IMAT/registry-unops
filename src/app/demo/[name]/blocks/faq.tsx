import { FaqBlock, faqExamples } from "@/registry/onu/blocks/faq";

export const faq = {
  name: "faq",
  components: {
    FaqDemo: <FaqBlock {...faqExamples[0]} />,
  },
};
