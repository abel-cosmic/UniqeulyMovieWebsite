"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import SearchBar from "../searchBar/searchBar";
import { ModeToggle } from "../toogle/theme";
import { Button } from "../ui/button";
import { HamburgerMenu } from "../sheet/sheet";
import Image from "next/image";

export function NavMenu() {
  return (
    <NavigationMenu className=" flex flex-row gap-4 justify-center items-center sticky top-0 right-0 left-0  w-screen py-4 backdrop-blur-xl bg-slate-200/50">
      <div className="flex flex-row justify-between px-10 w-screen py-4 ">
        <Image
          src={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDAljIJJRFhG7zYppzhEfI7FSBJ8ZZhVSISIkXP0vMQw&s"
          }
          alt={"Logo"}
          width={100}
          height={100}
        />
        <HamburgerMenu />
      </div>

      <NavigationMenuList className="max-md:hidden flex flex-row gap-4 justify-center items-center sticky top-0 right-0 left-0  w-screen py-4 ">
        <Image
          src={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDAljIJJRFhG7zYppzhEfI7FSBJ8ZZhVSISIkXP0vMQw&s"
          }
          alt={"Logo"}
          width={100}
          height={100}
        />
        <SearchBar />

        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/collections" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Collections
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/top-airing" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Top Airing
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <ModeToggle />
        <NavigationMenuItem>
          <Link href="/auth/signup" legacyBehavior passHref>
            <Button>Sign Up</Button>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/auth/signin" legacyBehavior passHref>
            <Button variant="outline">Sign In</Button>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
