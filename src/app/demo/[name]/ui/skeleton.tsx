import {
  SkeletonAvatarText,
  SkeletonBasic,
  SkeletonCard,
  SkeletonList,
  SkeletonTable,
} from "@/app/demo/[name]/ui/skeleton-client";

export const skeleton = {
  name: "skeleton",
  components: {
    Basic: <SkeletonBasic />,
    AvatarText: <SkeletonAvatarText />,
    Card: <SkeletonCard />,
    List: <SkeletonList />,
    Table: <SkeletonTable />,
  },
};
