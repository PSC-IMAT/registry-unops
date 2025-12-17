import { Kbd } from "@/registry/onu/ui/kbd";

export const kbd = {
  name: "kbd",
  components: {
    KbdDemo: (
      <div className="space-y-2">
        <p>Press <Kbd>Ctrl</Kbd> + <Kbd>C</Kbd> to copy</p>
        <p>Press <Kbd>Cmd</Kbd> + <Kbd>Shift</Kbd> + <Kbd>P</Kbd> for command palette</p>
      </div>
    ),
  },
};
