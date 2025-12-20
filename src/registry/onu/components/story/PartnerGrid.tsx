import React from "react";
import { Card } from "@/components/ui/card";
import { Text } from "@/components/ui/text";

export interface Partner {
  name: string;
  logo?: string; // image url
}

export interface PartnerGridProps {
  partners: Partner[];
}

export function PartnerGrid({ partners }: PartnerGridProps) {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
      {partners.map((p, i) => (
        <Card key={i}>
          <div className="flex items-center gap-3 p-3">
            {p.logo ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={p.logo} alt={p.name} className="h-8 w-8 rounded object-cover" />
            ) : (
              <div className="h-8 w-8 rounded bg-muted" />
            )}
            <Text>{p.name}</Text>
          </div>
        </Card>
      ))}
    </div>
  );
}
