import {
  TextBasic,
  TextColors,
  TextCombinations,
  TextSizes,
  TextTruncate,
  TextWeights,
} from "@/app/demo/[name]/ui/text-client";

export const text = {
  name: "text",
  components: {
    Basic: <TextBasic />,
    Sizes: <TextSizes />,
    Weights: <TextWeights />,
    Colors: <TextColors />,
    Truncate: <TextTruncate />,
    Combinations: <TextCombinations />,
  },
};
