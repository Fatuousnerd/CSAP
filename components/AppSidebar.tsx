"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./ui/sidebar";
import { Item, ItemTitle } from "./ui/item";
import Link from "next/link";
import { SquareAsterisk } from "lucide-react";
import { usePathname } from "next/navigation";

const AppSidebar = () => {
  const pathname = usePathname();

  return (
    <>
      <Sidebar variant="floating" collapsible="icon">
        <SidebarHeader>
          <Item variant={"outline"}>
            <ItemTitle className="font-bold text-lg">
              Cryptography, Steganography & Protocols
            </ItemTitle>
          </Item>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu className="px-3">
            <SidebarMenuItem>
              <SidebarMenuButton
                className={
                  pathname.split("/")[1] === "ciphers" ? "bg-primary" : ""
                }
                asChild
              >
                <Link href={"/ciphers"}>
                  <SquareAsterisk /> Ciphers
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarContent>
      </Sidebar>
    </>
  );
};

export default AppSidebar;
