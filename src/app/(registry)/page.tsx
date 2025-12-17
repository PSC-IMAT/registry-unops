import { ArrowRight, Blocks, Component, ToyBrick } from "lucide-react";
import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/ui/card";
import { getBlocks, getComponents, getUIPrimitives } from "@/lib/registry";

const uiItems = getUIPrimitives().slice(0, 5);
const componentItems = getComponents().slice(0, 5);
const blockItems = getBlocks().slice(0, 5);
console.log(blockItems);
export default function Home() {
  return (
    <main className="container mt-4 p-5 md:mt-8 md:p-10">
      <div className="mb-8">
        <div className="space-y-2">
          <h1 className="font-bold text-3xl tracking-tight md:text-4xl">
            Registry
          </h1>
          <p className="text-muted-foreground">
            Distribute your design system tokens, custom components, hooks,
            pages, and other files to any React project.
          </p>
        </div>
      </div>

      <Card className="mb-4 shadow-none">
        <CardHeader className="space-y-1">
          <div className="flex items-center justify-between">
            <CardTitle>Blocks</CardTitle>
            <div className="rounded-md bg-primary p-1">
              <Blocks className="size-5 text-primary-foreground" />
            </div>
          </div>
          <CardDescription>
            Pre-built blocks kits for consistent, repeatable generations
          </CardDescription>
        </CardHeader>

        <CardContent>
          <div className="space-y-2">
            {blockItems.map((item) => (
              <div
                key={item.name}
                className="flex items-center justify-between"
              >
                <Link
                  href={`/registry/${item.name}`}
                  className="text-sm hover:underline"
                >
                  {item.title}
                </Link>
                <ArrowRight className="size-4 text-muted-foreground" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="mb-4 grid gap-6 md:grid-cols-2">
        <Card className="shadow-none">
          <CardHeader className="space-y-1">
            <div className="flex items-center justify-between">
              <CardTitle>UI Primitives</CardTitle>
              <div className="rounded-md bg-foreground p-1">
                <ToyBrick className="size-5 text-primary-foreground" />
              </div>
            </div>
            <CardDescription>
              Reusable UI primitives to build your components
            </CardDescription>
          </CardHeader>

          <CardContent>
            <div className="space-y-2">
              {uiItems.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center justify-between"
                >
                  <Link
                    href={`/registry/${item.name}`}
                    className="text-sm hover:underline"
                  >
                    {item.title}
                  </Link>
                  <ArrowRight className="size-4 text-muted-foreground" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-none">
          <CardHeader className="space-y-1">
            <div className="flex items-center justify-between">
              <CardTitle>Components</CardTitle>
              <div className="rounded-md bg-foreground p-1">
                <Component className="size-5 text-primary-foreground" />
              </div>
            </div>
            <CardDescription>
              Compound components using common patterns
            </CardDescription>
          </CardHeader>

          <CardContent>
            <div className="space-y-2">
              {componentItems.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center justify-between"
                >
                  <Link
                    href={`/registry/${item.name}`}
                    className="text-sm hover:underline"
                  >
                    {item.title}
                  </Link>
                  <ArrowRight className="size-4 text-muted-foreground" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}