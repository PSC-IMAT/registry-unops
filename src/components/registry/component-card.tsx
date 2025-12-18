"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";

import { Button } from "@/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/ui/tooltip";
import type { Component } from "@/lib/registry";

interface ComponentCardProps {
  component: Component;
  baseUrl: string;
  token: string;
}

export function ComponentCard({
  component,
  baseUrl,
  token
}: ComponentCardProps) {
  const [copied, setCopied] = useState(false);
  const registryUrl = `'https://${baseUrl}/r/${component.name}.json?token=${token}'`;
  const npxCommand = `npx shadcn@latest add ${registryUrl}`;

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(npxCommand);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <section>
      <Card id="starting-kit" className="border-foreground/25">
        <CardHeader>
          <div className="flex flex-col gap-4">
            <CardTitle className="font-medium text-lg">Preview</CardTitle>

            <div className="flex w-full flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-16">
              <CardDescription>{component.description}</CardDescription>

              <div className="flex items-center gap-1 sm:ml-auto">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipContent className="font-mono">
                      Copy npx command
                    </TooltipContent>
                    <TooltipTrigger asChild>
                      <Button
                        onClick={copyToClipboard}
                        variant="outline"
                        className="p-4"
                        aria-label="Copy npx command to clipboard"
                      >
                        {copied ? (
                          <Check className="size-4" />
                        ) : (
                          <Copy className="size-4" />
                        )}
                      </Button>
                    </TooltipTrigger>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
          </div>
        </CardHeader>

        <CardContent className="flex flex-col items-center justify-center gap-4 rounded-md px-6">
          <div
            className={
              "h-[800px] w-full overflow-hidden rounded-md border border-border p-4"
            }
          >
            <iframe
              id="iframe"
              src={`/demo/${component.name}`}
              className="h-full w-full"
              title="Page Preview"
            />
          </div>
        </CardContent>
      </Card>
    </section>
  );
}