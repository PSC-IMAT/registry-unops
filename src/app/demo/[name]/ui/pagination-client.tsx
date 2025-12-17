"use client";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/registry/onu/ui/pagination";

export function PaginationBasic() {
  return (
    <Pagination className="flex! mx-auto justify-center items-center">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        {[1, 2, 3, 4, 5].map((page) => (
          <PaginationItem key={page}>
            <PaginationLink href="#" isActive={page === 2}>
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

export function PaginationWithEllipsis() {
  return (
    <Pagination className="flex! mx-auto justify-center items-center">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        {[1, 2, 3, 4].map((page) => (
          <PaginationItem key={page}>
            <PaginationLink href="#" isActive={page === 3}>
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        {[9, 10].map((page) => (
          <PaginationItem key={page}>
            <PaginationLink href="#">{page}</PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

export function PaginationFirstPageDisabled() {
  return (
    <Pagination className="flex! mx-auto justify-center items-center">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" className="pointer-events-none opacity-50" />
        </PaginationItem>
        {[1, 2, 3].map((page) => (
          <PaginationItem key={page}>
            <PaginationLink href="#" isActive={page === 1}>
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

export function PaginationDense() {
  return (
    <Pagination className="flex! mx-auto justify-center items-center">
      <PaginationContent className="gap-0.5">
        <PaginationItem>
          <PaginationPrevious href="#" className="h-8 px-2" />
        </PaginationItem>
        {[1, 2, 3, 4, 5, 6].map((page) => (
          <PaginationItem key={page}>
            <PaginationLink href="#" className="h-8" isActive={page === 4}>
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext href="#" className="h-8 px-2" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
