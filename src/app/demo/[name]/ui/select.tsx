import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/registry/onu/ui/select";

export const select = {
  name: "select",
  components: {
    SelectDemo: (
      <Select defaultValue="apple">
        <SelectTrigger className="w-52">
          <SelectValue placeholder="Choose a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="orange">Orange</SelectItem>
        </SelectContent>
      </Select>
    ),
  },
};
