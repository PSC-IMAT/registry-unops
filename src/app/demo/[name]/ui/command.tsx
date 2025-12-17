import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/registry/onu/ui/command";

export const command = {
  name: "command",
  components: {
    CommandDemo: (
      <Command className="mx-auto rounded-lg border max-w-sm">
        <CommandInput placeholder="Type a command..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>Calendar</CommandItem>
            <CommandItem>Search Emoji</CommandItem>
            <CommandItem>Calculator</CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    ),
  },
};
