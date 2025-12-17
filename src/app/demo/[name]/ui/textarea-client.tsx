"use client";

import { useState } from "react";

import { Label } from "@/registry/onu/ui/label";
import { Textarea } from "@/registry/onu/ui/textarea";

export function TextareaBasic() {
  return (
    <div className="w-full max-w-md">
      <Textarea placeholder="Enter your message..." className="min-h-24" />
    </div>
  );
}

export function TextareaWithLabel() {
  return (
    <div className="w-full max-w-md space-y-2">
      <Label htmlFor="message">Message</Label>
      <Textarea id="message" placeholder="Type your message here..." className="min-h-24" />
    </div>
  );
}

export function TextareaDisabled() {
  return (
    <div className="w-full max-w-md space-y-2">
      <Label htmlFor="disabled-textarea" className="opacity-50">
        Disabled textarea
      </Label>
      <Textarea
        id="disabled-textarea"
        placeholder="This textarea is disabled"
        disabled
        className="min-h-24"
      />
    </div>
  );
}

export function TextareaWithDescription() {
  return (
    <div className="w-full max-w-md space-y-2">
      <Label htmlFor="bio">Bio</Label>
      <Textarea id="bio" placeholder="Tell us about yourself..." className="min-h-32" />
      <p className="text-xs text-muted-foreground">
        A brief description for your profile.
      </p>
    </div>
  );
}

export function TextareaCharacterCount() {
  const [value, setValue] = useState("");
  const maxLength = 200;

  return (
    <div className="w-full max-w-md space-y-2">
      <Label htmlFor="feedback">Feedback</Label>
      <Textarea
        id="feedback"
        placeholder="Share your feedback..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        maxLength={maxLength}
        className="min-h-24"
      />
      <div className="flex justify-between text-xs text-muted-foreground">
        <span>Your feedback helps us improve.</span>
        <span>
          {value.length}/{maxLength}
        </span>
      </div>
    </div>
  );
}

export function TextareaControlled() {
  const [text, setText] = useState("");

  return (
    <div className="w-full max-w-md space-y-2">
      <Label htmlFor="controlled-textarea">Notes</Label>
      <Textarea
        id="controlled-textarea"
        placeholder="Start typing..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="min-h-24"
      />
      <div className="text-xs text-muted-foreground">
        {text.length === 0 ? "No text entered" : `${text.split(" ").filter(Boolean).length} words`}
      </div>
    </div>
  );
}
