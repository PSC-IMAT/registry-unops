import { Code } from "@/registry/onu/ui/code";

export const code = {
  name: "code",
  components: {
    CodeDemo: (
      <div className="space-y-2">
        <p>Inline code: <Code>const x = 42</Code></p>
        <Code className="block p-4 bg-muted rounded-md">
          {`function hello() {\n  console.log("Hello, world!");\n}`}
        </Code>
      </div>
    ),
  },
};
