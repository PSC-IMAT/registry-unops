import { FooterOnuBlock, footerOnuExamples } from "@/registry/onu/blocks/footer-onu";

export const footerOnu = {
  name: "footer-onu",
  components: {
    FooterOnuDemo: <FooterOnuBlock {...footerOnuExamples?.[0]} />,
  },
};
