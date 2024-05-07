"use client";
import * as React from "react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import SearchBar from "../searchBar/searchBar";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { ModeToggle } from "../toogle/theme";
import { Button } from "../ui/button";
import {Menu} from "lucide-react";
export function HamburgerMenu() {
  return (
    <Sheet >
       <SheetTrigger asChild className="lg:hidden">
        <Button className="flex p-4 px-2 bg-secondary hover:text-white ">
          <Menu className="w-6 text-primary hover:text-white dark:text-white" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="flex flex-row justify-between items-center py-10">
          <SearchBar />
          <ModeToggle />
        </SheetHeader>
        <NavigationMenu>
          <NavigationMenuList className="flex flex-col gap-10 items-start">
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                Home
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/collections" legacyBehavior passHref>
                Collections
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/top-airing" legacyBehavior passHref>
                Top Airing
              </Link>
            </NavigationMenuItem>

            <SheetFooter className="flex flex-col w-60 gap-6">
              <NavigationMenuItem className="w-full">
                <Link href="/auth" legacyBehavior passHref className="w-full">
                  <Button variant="outline" className="w-full">
                    Sign In
                  </Button>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem className="w-full">
                <Link href="/auth" legacyBehavior passHref className="w-full">
                  <Button className="w-full">Sign Up</Button>
                </Link>
              </NavigationMenuItem>
            </SheetFooter>
          </NavigationMenuList>
        </NavigationMenu>
      </SheetContent>
    </Sheet>
  );
}
