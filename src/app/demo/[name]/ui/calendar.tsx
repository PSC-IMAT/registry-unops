"use client";

import { Calendar } from "@/registry/onu/ui/calendar";

export const calendar = {
  name: "calendar",
  components: {
    CalendarDemo: (
      <Calendar
        mode="single"
        selected={new Date()}
        disabled={(date) => date > new Date()}
        className="rounded-md border"
      />
    ),
  },
};
