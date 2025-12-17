import { Link } from "@/registry/onu/ui/link";

export const link = {
  name: "link",
  components: {
    LinkDemo: (
      <div className="space-y-2">
        <Link href="#">Internal link</Link>
        <Link href="https://unops.org" >
          External link
        </Link>
      </div>
    ),
  },
};
