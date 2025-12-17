import { AspectRatio } from "@/registry/onu/ui/aspect-ratio";
import { Image } from "@/registry/onu/ui/image";

export const aspectRatio = {
  name: "aspect-ratio",
  components: {
    AspectRatioDemo: (
      <AspectRatio ratio={16 / 9} className="bg-muted rounded-md overflow-hidden w-full max-w-sm">
        <Image
          src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=400&auto=format&fit=crop"
          alt="Landscape"
          className="w-full h-full object-cover"
        />
      </AspectRatio>
    ),
  },
};
