import {
  PaginationBasic,
  PaginationDense,
  PaginationFirstPageDisabled,
  PaginationWithEllipsis,
} from "@/app/demo/[name]/ui/pagination-client";

export const pagination = {
  name: "pagination",
  components: {
    Basic: <PaginationBasic />,
    Ellipsis: <PaginationWithEllipsis />,
    FirstPageDisabled: <PaginationFirstPageDisabled />,
    Dense: <PaginationDense />,
  },
};
