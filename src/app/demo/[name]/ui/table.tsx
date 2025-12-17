import {
  TableBasic,
  TableClickableRows,
  TableCompact,
  TableSortable,
  TableWithBadges,
} from "@/app/demo/[name]/ui/table-client";

export const table = {
  name: "table",
  components: {
    Basic: <TableBasic />,
    WithBadges: <TableWithBadges />,
    Sortable: <TableSortable />,
    ClickableRows: <TableClickableRows />,
    Compact: <TableCompact />,
  },
};
