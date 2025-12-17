"use client";

import { Video } from "@/registry/onu/ui/video";

export function VideoBasic() {
  return (
    <Video
      src="https://www.w3schools.com/html/mov_bbb.mp4"
      poster="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=800&auto=format&fit=crop"
      className="w-full max-w-md rounded-md mx-auto"
    />
  );
}

export function VideoAutoplay() {
  return (
    <Video
      src="https://www.w3schools.com/html/mov_bbb.mp4"
      poster="https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=800&auto=format&fit=crop"
      autoPlay
      muted
      loop
      className="w-full max-w-md rounded-md mx-auto"
    />
  );
}

export function VideoNoControls() {
  return (
    <Video
      src="https://www.w3schools.com/html/mov_bbb.mp4"
      poster="https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=800&auto=format&fit=crop"
      controls={false}
      className="w-full max-w-md rounded-md mx-auto"
    />
  );
}

export function VideoMuted() {
  return (
    <Video
      src="https://www.w3schools.com/html/mov_bbb.mp4"
      poster="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=800&auto=format&fit=crop"
      muted
      className="w-full max-w-md rounded-md mx-auto"
    />
  );
}

export function VideoResponsive() {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="relative aspect-video">
        <Video
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          poster="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop"
          className="absolute inset-0 size-full rounded-md object-cover mx-auto" 
        />
      </div>
    </div>
  );
}

export function VideoWithCaption() {
  return (
    <div className="w-full max-w-md space-y-2 mx-auto">
      <Video
        src="https://www.w3schools.com/html/mov_bbb.mp4"
        poster="https://images.unsplash.com/photo-1505686994434-e3cc5abf1330?q=80&w=800&auto=format&fit=crop"
        className="w-full rounded-md"
      />
      <p className="text-xs text-muted-foreground">
        Sample video demonstration with custom poster and controls.
      </p>
    </div>
  );
}
