"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Toaster } from "@/ui/sonner";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <>
      <main className="flex min-h-screen w-full flex-col items-center justify-center text-center">
        <div className="space-y-4">
          <h1 className="text-6xl font-bold tracking-tight text-muted-foreground md:text-8xl">
            500
          </h1>
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            Something went wrong
          </h2>
          <div className="mt-6 flex gap-3 justify-center">
            <button
              onClick={reset}
              className="rounded bg-primary px-4 py-2 font-medium text-primary-foreground hover:opacity-90"
            >
              Try Again
            </button>
            <Link
              href="/r/registry.json"
              className="rounded border px-4 py-2 font-medium hover:bg-muted"
            >
              View Registry
            </Link>
          </div>
        </div>
      </main>
      <Toaster />
    </>
  );
}
