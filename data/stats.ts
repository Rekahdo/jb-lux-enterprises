import { statusValidator } from "@/convex/schema";
import { Infer } from "convex/values";

export type StatusType = Infer<typeof statusValidator>;

export type StatusRecordType = Record<string, StatusType>;

export const statusData: Promise<StatusRecordType> = Promise.resolve({
  pending: {
    name: "Pending Verification",
    slug: "pending",
    description:
      "Order has been placed and the bank receipt is awaiting admin review.",
    color: "yellow",
    order: 1,
  },
  verified: {
    name: "Verified",
    slug: "verified",
    description: "Bank receipt has been verified and payment is confirmed.",
    color: "green",
    order: 2,
  },
  processing: {
    name: "Processing",
    slug: "processing",
    description: "Order is being packed and prepared for dispatch.",
    color: "blue",
    order: 3,
  },
  shipped: {
    name: "Shipped",
    slug: "shipped",
    description: "Order has been handed over to the courier for delivery.",
    color: "indigo",
    order: 4,
  },
  delivered: {
    name: "Delivered",
    slug: "delivered",
    description: "Order has been successfully received by the customer.",
    color: "emerald",
    order: 5,
  },
  rejected: {
    name: "Rejected",
    slug: "rejected",
    description: "Order was cancelled or the payment receipt was invalid.",
    color: "red",
    order: 6,
  },
});
