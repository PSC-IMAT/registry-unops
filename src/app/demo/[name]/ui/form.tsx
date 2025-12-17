import { Button } from "@/registry/onu/ui/button";
import { Input } from "@/registry/onu/ui/input";

export const form = {
  name: "form",
  components: {
    FormDemo: (
      <form className="space-y-4 max-w-sm">
        <div className="space-y-2">
          <label className="text-sm font-medium">Name</label>
          <Input placeholder="Enter your name" />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Email</label>
          <Input type="email" placeholder="Enter your email" />
        </div>
        <Button type="submit">Submit</Button>
      </form>
    ),
  },
};
