import { DownloadCenterBlock } from "@/registry/onu/blocks/download-center";
const downloadCenterExamples = [
  {
    title: "Download Resources",
    subtitle: "Access data, reports, and technical documentation",
    items: [
      {
        label: "Full Report",
        format: "pdf",
        size: "12.4 MB",
        checksum: "sha256:a1b2c3d4e5f6...",
        url: "/downloads/report.pdf",
      },
      {
        label: "Dataset (GeoJSON)",
        format: "geojson",
        size: "3.2 MB",
        checksum: "sha256:1a2b3c4d5e6f...",
        url: "/downloads/data.geojson",
      },
      {
        label: "Raw Survey Data",
        format: "csv",
        size: "8.7 MB",
        url: "/downloads/survey.csv",
      },
      {
        label: "Map Tiles",
        format: "mbtiles",
        size: "45.3 MB",
        url: "/downloads/tiles.mbtiles",
      },
      {
        label: "Analysis Code",
        format: "zip",
        size: "2.1 MB",
        url: "https://github.com/unops/analysis",
      },
      {
        label: "Technical Documentation",
        format: "pdf",
        size: "5.8 MB",
        url: "/downloads/tech-doc.pdf",
      },
    ],
  },
];
export const downloadCenter = {
  name: "download-center",
  components: {
    DownloadCenterDemo: (
      <DownloadCenterBlock {...downloadCenterExamples?.[0]} />
    ),
  },
};
