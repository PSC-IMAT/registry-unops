import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/registry/onu/ui/hover-card";

export const hoverCard = {
  name: "hover-card",
  components: {
    HoverCardDemo: (
      <HoverCard>
        <HoverCardTrigger asChild>
          <span className="underline cursor-pointer">Hover over me</span>
        </HoverCardTrigger>
        <HoverCardContent>
          <div className="space-y-2">
            <h4 className="text-sm font-semibold">@username</h4>
            <p className="text-sm">This is a hover card preview</p>
          </div>
        </HoverCardContent>
      </HoverCard>
    ),
  },
};
