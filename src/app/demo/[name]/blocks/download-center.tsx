import { DownloadCenterBlock, downloadCenterExamples } from "@/registry/onu/blocks/download-center";

export const downloadCenter = {
  name: "download-center",
  components: {
    DownloadCenterDemo: <DownloadCenterBlock {...downloadCenterExamples?.[0]} />,
  },
};
