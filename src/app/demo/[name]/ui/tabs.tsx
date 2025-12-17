import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/registry/onu/ui/tabs";

export const tabs = {
  name: "tabs",
  components: {
    TabsDemo: (
      <Tabs defaultValue="tab1" className="w-full max-w-sm">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="tab1">Tab 1</TabsTrigger>
          <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">Content for tab 1</TabsContent>
        <TabsContent value="tab2">Content for tab 2</TabsContent>
      </Tabs>
    ),
  },
};
