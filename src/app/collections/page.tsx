"use client";

import { toast } from "@/components/ui/use-toast";
import CollectionList from "@/layouts/collections/collectionList";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-24">
      <CollectionList/>
    </main>
  );
}
