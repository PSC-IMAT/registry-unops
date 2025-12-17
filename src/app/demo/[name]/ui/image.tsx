import { Image } from "@/registry/onu/ui/image";

export const image = {
  name: "image",
  components: {
    ImageDemo: (
      <Image
        src="/assets/images/demo/placeholder.png"
        alt="Placeholder"
        className="rounded-md w-full max-w-md h-auto mx-auto"
      />
    ),
  },
};
