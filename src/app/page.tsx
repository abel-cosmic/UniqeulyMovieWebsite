"use client";

import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import {useRouter} from "next/navigation";

export default function Home() {
  // Function to handle button click
  const handleClick = () => {
    // Display a toast notification
    toast({
      title: "Action Needed",
      description: "This is a sample action from Uniquely Movie Store.",
    });
  };
  const navigate = useRouter();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gray-100">
      <header className="text-center">
        <h1 className="text-4xl font-bold text-gray-800">Welcome to Uniquely Movie Store</h1>
        <p className="mt-4 text-lg text-gray-600 max-w-96 self-center mx-auto">Explore an expansive world of cinematic treasures, conveniently accessible at your fingertips, and embark on unforgettable adventures through the art of film..</p>
      </header>
      <section className="mt-8">
        <Button className=" rounded" onClick={
          ()=>{
            navigate.push("/collections");
          }
        }>
          Discover More
        </Button>
      </section>

      <footer className="w-full text-center mt-10">
        <p className="text-sm text-gray-500">© 2024 Uniquely Movie Store. All rights reserved.</p>
      </footer>
    </main>
  );
}
