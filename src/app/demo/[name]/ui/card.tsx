import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/registry/onu/ui/card";
import { Button } from "@/registry/onu/ui/button";

export const card = {
  name: "card",
  components: {
    CardDemo: (
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Project Status</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">All systems operational.</p>
        </CardContent>
        <CardFooter>
          <Button>View details</Button>
        </CardFooter>
      </Card>
    ),
  },
};
