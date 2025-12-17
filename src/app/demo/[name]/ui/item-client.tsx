"use client";

import { FileTextIcon, FolderIcon, ImageIcon } from "lucide-react";

import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemFooter,
  ItemGroup,
  ItemHeader,
  ItemMedia,
  ItemSeparator,
  ItemTitle,
} from "@/registry/onu/ui/item";
import { Button } from "@/registry/onu/ui/button";

export function ItemListBasic() {
  return (
    <ItemGroup className="border rounded-md overflow-hidden">
      <Item>Item one</Item>
      <ItemSeparator />
      <Item>Item two</Item>
      <ItemSeparator />
      <Item>Item three</Item>
    </ItemGroup>
  );
}

export function ItemWithIcon() {
  return (
    <Item variant="outline">
      <ItemMedia variant="icon">
        <FileTextIcon />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>Quarterly Report.pdf</ItemTitle>
        <ItemDescription>Last modified 2 days ago • 1.2 MB</ItemDescription>
      </ItemContent>
      <ItemActions>
        <Button size="sm" variant="ghost">Open</Button>
        <Button size="sm" variant="outline">Download</Button>
      </ItemActions>
    </Item>
  );
}

export function ItemWithImage() {
  return (
    <Item>
      <ItemMedia variant="image">
        <img alt="Thumbnail" src="/assets/hero.png" />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>Project Hero Image</ItemTitle>
        <ItemDescription>
          High-resolution banner used on the landing page.
        </ItemDescription>
      </ItemContent>
      <ItemActions>
        <Button size="sm">Replace</Button>
        <Button size="sm" variant="ghost">Remove</Button>
      </ItemActions>
    </Item>
  );
}

export function ItemCompactMuted() {
  return (
    <Item variant="muted" size="sm">
      <ItemMedia variant="icon">
        <FolderIcon />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>Archive</ItemTitle>
        <ItemDescription>18 items • Read only</ItemDescription>
      </ItemContent>
    </Item>
  );
}

export function ItemWithHeaderFooter() {
  return (
    <Item variant="outline" className="w-full">
      <ItemHeader>
        <ItemTitle>Deployment</ItemTitle>
        <ItemActions>
          <Button size="sm" variant="outline">Restart</Button>
        </ItemActions>
      </ItemHeader>
      <ItemContent>
        <ItemDescription>
          Service running • last restart 5 minutes ago
        </ItemDescription>
      </ItemContent>
      <ItemFooter>
        <ItemDescription>region: eu-west • version: 1.3.2</ItemDescription>
        <ItemActions>
          <Button size="sm" variant="ghost">Details</Button>
        </ItemActions>
      </ItemFooter>
    </Item>
  );
}
