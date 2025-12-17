"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/registry/onu/ui/navigation-menu";

const gettingStartedLinks = [
  { title: "Introduction", href: "/docs" },
  { title: "Installation", href: "/docs/installation" },
  { title: "Configuration", href: "/docs/configuration" },
  { title: "Theming", href: "/docs/theming" },
  { title: "Deploy", href: "/docs/deploy" },
];

const componentsLinks = [
  { title: "Buttons", href: "/docs/components/button" },
  { title: "Forms", href: "/docs/components/form" },
  { title: "Charts", href: "/docs/components/chart" },
  { title: "Data display", href: "/docs/components/table" },
  { title: "Navigation", href: "/docs/components/navigation" },
];

function LinkList({ links }: { links: { title: string; href: string }[] }) {
  return (
    <div className="grid gap-2 p-4 md:w-70">
      {links.map((link) => (
        <NavigationMenuLink key={link.title} asChild>
          <Link
            className="rounded-md p-2 hover:bg-accent hover:text-accent-foreground"
            href={link.href}
          >
            <div className="text-sm font-medium leading-tight">{link.title}</div>
          </Link>
        </NavigationMenuLink>
      ))}
    </div>
  );
}

function FeaturedCard() {
  return (
    <NavigationMenuLink asChild>
      <Link
        className="group grid gap-3 rounded-md border p-4 hover:border-primary/40 hover:shadow-sm"
        href="/docs/guide"
      >
        <div className="space-y-1">
          <div className="text-sm font-semibold">Build a registry</div>
          <p className="text-sm text-muted-foreground">
            Learn how to publish and consume components across projects.
          </p>
        </div>
        <div className="text-xs font-medium text-primary group-hover:underline">
          Read the guide →
        </div>
      </Link>
    </NavigationMenuLink>
  );
}

export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="md:w-135 lg:w-170 grid gap-4 md:grid-cols-[1fr_1fr]">
              <FeaturedCard />
              <LinkList links={gettingStartedLinks} />
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Components</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="md:w-135 lg:w-170 grid gap-4 md:grid-cols-[1fr_1fr]">
              <LinkList links={componentsLinks} />
              <div className="grid gap-2 p-4 rounded-md bg-muted/40">
                <div className="text-sm font-semibold">Featured</div>
                <div className="text-sm text-muted-foreground">
                  Explore the UI kit: buttons, forms, navigation, charts.
                </div>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="p-4 grid gap-2 md:w-[320px]">
              <NavigationMenuLink asChild>
                <Link className="rounded-md p-2 hover:bg-accent" href="/blog">
                  Blog
                </Link>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <Link className="rounded-md p-2 hover:bg-accent" href="/changelog">
                  Changelog
                </Link>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <Link className="rounded-md p-2 hover:bg-accent" href="/support">
                  Support
                </Link>
              </NavigationMenuLink>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>

      <NavigationMenuIndicator />
    </NavigationMenu>
  );
}
