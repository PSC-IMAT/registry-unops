import { notFound } from "next/navigation";

import { demos } from "@/app/demo/[name]/index";

import { Renderer } from "@/app/demo/[name]/renderer";
import { getRegistryItem } from "@/lib/registry";

export const dynamic = "force-dynamic";

export default async function DemoPage({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;

  let component;
  try {
    component = getRegistryItem(name);
  } catch (error) {
    notFound();
  }

  console.log("", name);
  const demo = demos[name];

  if (!component || !demo) {
    notFound();
  }

  const { components } = demo;

  return (
    <div className="flex h-screen w-full flex-col gap-4 bg-background">
      {components &&
        Object.entries(components).map(([key, node]) => (
          <div className="relative w-full" key={key}>
            <Renderer>{node}</Renderer>
          </div>
        ))}
    </div>
  );
}