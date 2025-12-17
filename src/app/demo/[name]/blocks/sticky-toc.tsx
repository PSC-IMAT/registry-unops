import { StickyTocBlock, stickyTocExamples } from "@/registry/onu/blocks/sticky-toc";

export const stickyToc = {
  name: "sticky-toc",
  components: {
    StickyTocDemo: <StickyTocBlock {...stickyTocExamples?.[0]} />,
  },
};
