import { Video } from "@/registry/onu/ui/video";

export const video = {
  name: "video",
  components: {
    VideoDemo: (
      <Video
        src="https://www.w3schools.com/html/mov_bbb.mp4"
        poster="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=800&auto=format&fit=crop"
        className="w-full max-w-md rounded-md"
      />
    ),
  },
};
