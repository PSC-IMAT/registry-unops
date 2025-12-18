import React from "react";
import { Text } from "@/registry/onu/ui/text";

export interface RichTextProps {
  paragraphs: string[] | string;
}

export function RichText({ paragraphs }: RichTextProps) {
  const list = Array.isArray(paragraphs) ? paragraphs : [paragraphs];
  return (
    <div className="space-y-3">
      {list.map((p, i) => (
        <Text key={i}>
          {p}
        </Text>
      ))}
    </div>
  );
}
