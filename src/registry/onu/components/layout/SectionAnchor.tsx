import React from "react";

export interface SectionAnchorProps {
  id: string;
  scrollMarginTop?: number; // px offset
}

export function SectionAnchor({ id, scrollMarginTop = 80 }: SectionAnchorProps) {
  return (
    <div id={id} style={{ scrollMarginTop }} />
  );
}
