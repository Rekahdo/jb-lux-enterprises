import { announcementsValidator } from "@/convex/schema";
import { Infer } from "convex/values";

export const announcementData: Promise<Infer<typeof announcementsValidator>> =
  Promise.resolve({
    messages: [
      {
        startTime: new Date("2024-01-01T00:00:00Z").getTime(),
        endTime: new Date("2030-12-31T23:59:59Z").getTime(),
        text: "Wholesale Tiers & Retail Luxury",
      },
      {
        startTime: new Date("2024-01-01T00:00:00Z").getTime(),
        endTime: new Date("2030-12-31T23:59:59Z").getTime(),
        text: "Manual Bank Transfer with Instant Receipt Verification",
      },
    ],
  });
