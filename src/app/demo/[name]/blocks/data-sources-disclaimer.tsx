import { DataSourcesDisclaimerBlock, dataSourcesDisclaimerExamples } from "@/registry/onu/blocks/data-sources-disclaimer";

export const dataSourcesDisclaimer = {
  name: "data-sources-disclaimer",
  components: {
    DataSourcesDisclaimerDemo: <DataSourcesDisclaimerBlock {...dataSourcesDisclaimerExamples?.[0]} />,
  },
};
