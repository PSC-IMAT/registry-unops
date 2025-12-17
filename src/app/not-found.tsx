import Link from "next/link";
import { Toaster } from "@/ui/sonner";

export default function NotFound() {
  return (
    <>
      <main className="flex min-h-screen w-full flex-col items-center justify-center text-center">
        <div className="space-y-4">
          <h1 className="text-6xl font-bold tracking-tight text-muted-foreground md:text-8xl">
            404
          </h1>
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Page Not Found
          </h2>
          <div className="mt-8 flex gap-3 justify-center">
            <Link
              href="/"
              className="rounded bg-primary px-4 py-2 font-medium text-primary-foreground hover:opacity-90"
            >
              Go Home
            </Link>
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
