import { KeyFindingsBlock, keyFindingsExamples } from "@/registry/onu/blocks/key-findings";

export const keyFindings = {
  name: "key-findings",
  components: {
    KeyFindingsDemo: <KeyFindingsBlock {...keyFindingsExamples[0]} />,
  },
};
