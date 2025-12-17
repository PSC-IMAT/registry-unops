import { Image } from "@/registry/onu/ui/image";

export const image = {
  name: "image",
  components: {
    ImageDemo: (
      <Image
        src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=800&auto=format&fit=crop"
        alt="Landscape"
        className="rounded-md w-full max-w-md h-auto"
      />
    ),
  },
};
