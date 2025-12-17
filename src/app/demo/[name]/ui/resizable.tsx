import {
  ResizableHorizontal,
  ResizableNested,
  ResizableVertical,
} from "@/app/demo/[name]/ui/resizable-client";

export const resizable = {
  name: "resizable",
  components: {
    Horizontal: <ResizableHorizontal />,
    Vertical: <ResizableVertical />,
    Nested: <ResizableNested />,
  },
};
