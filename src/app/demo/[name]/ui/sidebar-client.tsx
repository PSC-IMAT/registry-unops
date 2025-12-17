"use client";

import { useState } from "react";
import { BarChart3Icon, HomeIcon, LayersIcon, Settings2Icon, UsersIcon } from "lucide-react";

import { Button } from "@/registry/onu/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarSeparator,
  SidebarTrigger,
} from "@/registry/onu/ui/sidebar";

function SidebarNav() {
  return (
    <>
      <SidebarHeader>
        <Button variant="ghost" size="sm" className="justify-start">
          <HomeIcon className="mr-2 size-4" />
          Home
        </Button>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>General</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <UsersIcon />
                  <span>Team</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <BarChart3Icon />
                  <span>Reports</span>
                </SidebarMenuButton>
                <SidebarMenuSub>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton>Daily</SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton>Weekly</SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                </SidebarMenuSub>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <LayersIcon />
                  <span>Projects</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator />

        <SidebarGroup>
          <SidebarGroupLabel>Settings</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <Settings2Icon />
                  <span>Preferences</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <Button size="sm" variant="outline" className="justify-start">
          Logout
        </Button>
      </SidebarFooter>
    </>
  );
}

export function SidebarBasic() {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarNav />
      </Sidebar>
      <SidebarInset>
        <div className="flex h-12 items-center gap-2 border-b px-4">
          <SidebarTrigger />
          <h1 className="text-base font-medium">Dashboard</h1>
        </div>
        <div className="flex-1 p-4">Main content goes here.</div>
      </SidebarInset>
    </SidebarProvider>
  );
}

export function SidebarFloating() {
  return (
    <SidebarProvider>
      <Sidebar variant="floating">
        <SidebarNav />
      </Sidebar>
      <SidebarInset>
        <div className="flex h-12 items-center gap-2 border-b px-4">
          <SidebarTrigger />
          <h1 className="text-base font-medium">Floating sidebar</h1>
        </div>
        <div className="flex-1 p-4">Content with floating sidebar inset.</div>
      </SidebarInset>
    </SidebarProvider>
  );
}

export function SidebarRight() {
  return (
    <SidebarProvider>
      <Sidebar side="right">
        <SidebarNav />
      </Sidebar>
      <SidebarInset>
        <div className="flex h-5 items-center gap-2 border-b px-4">
          <SidebarTrigger />
          <h1 className="text-base font-medium">Right sidebar</h1>
        </div>
        <div className="flex-1 p-4">Main content with right sidebar.</div>
      </SidebarInset>
    </SidebarProvider>
  );
}

export function SidebarControlled() {
  const [open, setOpen] = useState(false);

  return (
    <SidebarProvider open={open} onOpenChange={setOpen}>
      <Sidebar>
        <SidebarNav />
      </Sidebar>
      <SidebarInset>
        <div className="flex h-5 items-center gap-2 border-b px-4">
          <SidebarTrigger />
          <h1 className="text-base font-medium">Controlled open state</h1>
          <div className="ml-auto flex items-center gap-2">
            <Button size="sm" variant="outline" onClick={() => setOpen((v) => !v)}>
              Toggle sidebar
            </Button>
          </div>
        </div>
        <div className="flex-1 p-4">
          The SidebarProvider receives `open` and `onOpenChange`.
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
