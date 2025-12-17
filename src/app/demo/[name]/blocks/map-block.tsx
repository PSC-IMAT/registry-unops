import { MapBlock, mapBlockExamples } from "@/registry/onu/blocks/map-block";

export const mapBlock = {
  name: "map-block",
  components: {
    MapBlockDemo: <MapBlock {...mapBlockExamples?.[0]} />,
  },
};
