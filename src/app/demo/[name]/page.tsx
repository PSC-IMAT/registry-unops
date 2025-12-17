import { notFound } from "next/navigation";

import { demos } from "@/app/demo/[name]/index";

import { Renderer } from "@/app/demo/[name]/renderer";
import { getRegistryItem } from "@/lib/registry";

export async function generateStaticParams() {
  return Object.keys(demos).map((name) => ({
    name,
  }));
}

export default async function DemoPage({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;

  const component = getRegistryItem(name);

  if (!component) {
    notFound();
  }

  const { components } = demos[name];

  return (
    <div className="flex min-h-screen w-full flex-col items-center gap-8 bg-background px-4 py-10">
      {components &&
        Object.entries(components).map(([key, node]) => (
          <div className="relative m-auto w-full max-w-5xl" key={key}>
              <Renderer>{node}</Renderer>
          </div>
        ))}
    </div>
  );
}
