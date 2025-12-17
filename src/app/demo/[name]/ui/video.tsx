import {
  VideoAutoplay,
  VideoBasic,
  VideoMuted,
  VideoNoControls,
  VideoResponsive,
  VideoWithCaption,
} from "@/app/demo/[name]/ui/video-client";

export const video = {
  name: "video",
  components: {
    Basic: <VideoBasic />,
    Autoplay: <VideoAutoplay />,
    NoControls: <VideoNoControls />,
    Muted: <VideoMuted />,
    Responsive: <VideoResponsive />,
    WithCaption: <VideoWithCaption />,
  },
};
