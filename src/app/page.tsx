"use client";

import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";

export default function Home() {
  const handleClick = () => {
    toast({
      title: "Clicked",
    });
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button onClick={handleClick}>Click me</Button>
    </main>
  );
}
