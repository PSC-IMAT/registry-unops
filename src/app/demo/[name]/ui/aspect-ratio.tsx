import { AspectRatio } from "@/registry/onu/ui/aspect-ratio";
import { Image } from "@/registry/onu/ui/image";

export const aspectRatio = {
  name: "aspect-ratio",
  components: {
    AspectRatioDemo: (
      <AspectRatio ratio={16 / 9} className="bg-muted rounded-md overflow-hidden w-full">
        <Image
          src="/assets/images/demo/placeholder.png"
          alt="Placeholder"
          className="w-full h-full object-cover"
        />
      </AspectRatio>
    ),
  },
};
