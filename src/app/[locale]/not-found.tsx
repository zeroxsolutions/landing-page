import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="font-sans bg-background text-foreground min-h-dvh flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-semibold">404</h1>
        <p className="mt-2 text-muted-foreground">Page not found</p>
        <Button asChild className="mt-6">
          <Link href="/">Go home</Link>
        </Button>
      </div>
    </div>
  );
}
