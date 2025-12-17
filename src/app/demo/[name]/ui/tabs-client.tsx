"use client";

import { useState } from "react";
import { CodeIcon, FileTextIcon, SettingsIcon, UserIcon } from "lucide-react";

import { Button } from "@/registry/onu/ui/button";
import { Card } from "@/registry/onu/ui/card";
import { Input } from "@/registry/onu/ui/input";
import { Label } from "@/registry/onu/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/registry/onu/ui/tabs";

export function TabsBasic() {
  return (
    <Tabs defaultValue="overview" className="w-full mx-auto max-w-md">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="details">Details</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>
      <TabsContent value="overview" className="mt-4">
        <p className="text-sm text-muted-foreground">Overview content goes here.</p>
      </TabsContent>
      <TabsContent value="details" className="mt-4">
        <p className="text-sm text-muted-foreground">Detailed information and data.</p>
      </TabsContent>
      <TabsContent value="settings" className="mt-4">
        <p className="text-sm text-muted-foreground">Configure your preferences.</p>
      </TabsContent>
    </Tabs>
  );
}

export function TabsWithIcons() {
  return (
    <Tabs defaultValue="profile" className="mx-auto w-full max-w-md">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="profile">
          <UserIcon />
          Profile
        </TabsTrigger>
        <TabsTrigger value="documents">
          <FileTextIcon />
          Docs
        </TabsTrigger>
        <TabsTrigger value="code">
          <CodeIcon />
          Code
        </TabsTrigger>
      </TabsList>
      <TabsContent value="profile" className="mt-4">
        <p className="text-sm text-muted-foreground">Your profile information.</p>
      </TabsContent>
      <TabsContent value="documents" className="mt-4">
        <p className="text-sm text-muted-foreground">Access your documents here.</p>
      </TabsContent>
      <TabsContent value="code" className="mt-4">
        <p className="text-sm text-muted-foreground">Code snippets and examples.</p>
      </TabsContent>
    </Tabs>
  );
}

export function TabsWithCards() {
  return (
    <Tabs defaultValue="account" className="mx-auto w-full max-w-md">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account" className="mt-4">
        <Card className="p-4">
          <div className="space-y-3">
            <div className="space-y-1">
              <Label htmlFor="name">Name</Label>
              <Input id="name" defaultValue="Pedro Duarte" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" defaultValue="pedro@example.com" />
            </div>
            <Button className="w-full">Save changes</Button>
          </div>
        </Card>
      </TabsContent>
      <TabsContent value="password" className="mt-4">
        <Card className="p-4">
          <div className="space-y-3">
            <div className="space-y-1">
              <Label htmlFor="current">Current password</Label>
              <Input id="current" type="password" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">New password</Label>
              <Input id="new" type="password" />
            </div>
            <Button className="w-full">Update password</Button>
          </div>
        </Card>
      </TabsContent>
    </Tabs>
  );
}

export function TabsDisabled() {
  return (
    <Tabs defaultValue="active" className="mx-auto w-full max-w-md">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="active">Active</TabsTrigger>
        <TabsTrigger value="disabled" disabled>
          Disabled
        </TabsTrigger>
        <TabsTrigger value="enabled">Enabled</TabsTrigger>
      </TabsList>
      <TabsContent value="active" className="mt-4">
        <p className="text-sm text-muted-foreground">This tab is active.</p>
      </TabsContent>
      <TabsContent value="disabled" className="mt-4">
        <p className="text-sm text-muted-foreground">You cannot access this.</p>
      </TabsContent>
      <TabsContent value="enabled" className="mt-4">
        <p className="text-sm text-muted-foreground">Another enabled tab.</p>
      </TabsContent>
    </Tabs>
  );
}

export function TabsControlled() {
  const [activeTab, setActiveTab] = useState("general");

  return (
    <div className="w-full mx-auto max-w-md space-y-2">
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="general">
            <SettingsIcon />
            General
          </TabsTrigger>
          <TabsTrigger value="advanced">Advanced</TabsTrigger>
        </TabsList>
        <TabsContent value="general" className="mt-4">
          <p className="text-sm text-muted-foreground">General settings panel.</p>
        </TabsContent>
        <TabsContent value="advanced" className="mt-4">
          <p className="text-sm text-muted-foreground">Advanced configuration options.</p>
        </TabsContent>
      </Tabs>
      <div className="text-xs text-muted-foreground">Current tab: {activeTab}</div>
    </div>
  );
}
