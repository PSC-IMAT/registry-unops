"use client";

import { useState } from "react";
import { ArrowUpDownIcon } from "lucide-react";

import { Badge } from "@/registry/onu/ui/badge";
import { Button } from "@/registry/onu/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/onu/ui/table";

export function TableBasic() {
  return (
    <Table>
      <TableCaption>A list of recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>INV-001</TableCell>
          <TableCell>Paid</TableCell>
          <TableCell className="text-right">$250.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>INV-002</TableCell>
          <TableCell>Pending</TableCell>
          <TableCell className="text-right">$150.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>INV-003</TableCell>
          <TableCell>Failed</TableCell>
          <TableCell className="text-right">$75.00</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}

export function TableWithBadges() {
  return (
    <Table>
      <TableCaption>Project status overview.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Project</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Budget</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">Website Redesign</TableCell>
          <TableCell>
            <Badge variant="default">Active</Badge>
          </TableCell>
          <TableCell className="text-right">$12,000</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Mobile App</TableCell>
          <TableCell>
            <Badge variant="secondary">Pending</Badge>
          </TableCell>
          <TableCell className="text-right">$8,500</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">API Integration</TableCell>
          <TableCell>
            <Badge variant="destructive">Blocked</Badge>
          </TableCell>
          <TableCell className="text-right">$5,200</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}

export function TableSortable() {
  const [data, setData] = useState([
    { id: "INV-001", status: "Paid", amount: 250 },
    { id: "INV-002", status: "Pending", amount: 150 },
    { id: "INV-003", status: "Failed", amount: 75 },
    { id: "INV-004", status: "Paid", amount: 320 },
  ]);
  const [sortDesc, setSortDesc] = useState(false);

  const handleSort = () => {
    const sorted = [...data].sort((a, b) =>
      sortDesc ? a.amount - b.amount : b.amount - a.amount
    );
    setData(sorted);
    setSortDesc(!sortDesc);
  };

  return (
    <Table>
      <TableCaption>Sortable invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleSort}
              className="h-auto p-0 hover:bg-transparent"
            >
              Amount
              <ArrowUpDownIcon className="ml-2 size-4" />
            </Button>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((row) => (
          <TableRow key={row.id}>
            <TableCell>{row.id}</TableCell>
            <TableCell>{row.status}</TableCell>
            <TableCell className="text-right">${row.amount}.00</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export function TableClickableRows() {
  const [selectedRow, setSelectedRow] = useState<string | null>(null);

  const rows = [
    { id: "1", name: "Alice Johnson", role: "Developer" },
    { id: "2", name: "Bob Smith", role: "Designer" },
    { id: "3", name: "Carol White", role: "Manager" },
  ];

  return (
    <div className="space-y-2">
      <Table>
        <TableCaption>Click a row to select.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Role</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              onClick={() => setSelectedRow(row.id)}
              data-state={selectedRow === row.id ? "selected" : undefined}
              className="cursor-pointer"
            >
              <TableCell className="font-medium">{row.name}</TableCell>
              <TableCell>{row.role}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {selectedRow && (
        <div className="text-xs text-muted-foreground">
          Selected: {rows.find((r) => r.id === selectedRow)?.name}
        </div>
      )}
    </div>
  );
}

export function TableCompact() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Name</TableHead>
          <TableHead className="text-right">Value</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="py-1">1</TableCell>
          <TableCell className="py-1">Alpha</TableCell>
          <TableCell className="py-1 text-right">42</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="py-1">2</TableCell>
          <TableCell className="py-1">Beta</TableCell>
          <TableCell className="py-1 text-right">89</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="py-1">3</TableCell>
          <TableCell className="py-1">Gamma</TableCell>
          <TableCell className="py-1 text-right">56</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
