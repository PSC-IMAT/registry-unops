import { Avatar, AvatarFallback, AvatarImage } from "@/registry/onu/ui/avatar";

export const avatar = {
  name: "avatar",
  components: {
    AvatarDemo: (
      <div className="flex gap-4">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
      </div>
    ),
  },
};
