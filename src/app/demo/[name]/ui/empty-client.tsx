"use client";

import { ArchiveIcon, FolderOpenIcon, ImageIcon, InboxIcon } from "lucide-react";

import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/registry/onu/ui/empty";
import { Button } from "@/registry/onu/ui/button";

export function EmptyBasic() {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyTitle>No items found</EmptyTitle>
        <EmptyDescription>Add a new item to get started.</EmptyDescription>
      </EmptyHeader>
    </Empty>
  );
}

export function EmptyWithIcon() {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <InboxIcon />
        </EmptyMedia>
        <EmptyTitle>Inbox zero</EmptyTitle>
        <EmptyDescription>Your inbox is clear. Enjoy the calm.</EmptyDescription>
      </EmptyHeader>
    </Empty>
  );
}

export function EmptyWithActions() {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <FolderOpenIcon />
        </EmptyMedia>
        <EmptyTitle>Create your first folder</EmptyTitle>
        <EmptyDescription>
          Organize your files into folders. You can always move them later.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button>Create folder</Button>
        <Button variant="ghost">Learn more</Button>
      </EmptyContent>
    </Empty>
  );
}

export function EmptyWithPreview() {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <ImageIcon />
        </EmptyMedia>
        <EmptyTitle>No images yet</EmptyTitle>
        <EmptyDescription>
          Drag and drop images here or click upload to add assets.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent className="text-center text-sm text-muted-foreground">
        Supported formats: JPG, PNG, SVG. Max size 10MB.
      </EmptyContent>
    </Empty>
  );
}

export function EmptyMuted() {
  return (
    <Empty className="border-dashed border-muted/70 bg-muted/30">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <ArchiveIcon />
        </EmptyMedia>
        <EmptyTitle>No archived items</EmptyTitle>
        <EmptyDescription>
          Archive items to keep your workspace tidy.
        </EmptyDescription>
      </EmptyHeader>
    </Empty>
  );
}
