"use client"

import dynamic from "next/dynamic"
import { Skeleton } from "@/components/ui/skeleton"

// Disable SSR for the timeline to prevent date hydration mismatches and prerender errors
const TimelineContent = dynamic(() => import("./timeline-content"), { 
  ssr: false,
  loading: () => (
    <div className="space-y-6 h-full flex flex-col pt-4">
      <Skeleton className="h-10 w-[400px]" />
      <Skeleton className="flex-1 rounded-xl w-full" />
    </div>
  )
})

export default function FleetTimelinePage() {
  return <TimelineContent />
}
