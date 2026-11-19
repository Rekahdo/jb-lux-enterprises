import { statusValidator } from "@/convex/schema";
import { Infer } from "convex/values";
import { IdProp } from "./reset";

type ValidatorType = Infer<typeof statusValidator>;

export type StatusType = ValidatorType & IdProp;

export type StatusProps = {
  statusId: string;
  status: StatusType | undefined;
};

export const statusData: Promise<StatusType[]> = Promise.resolve([
  {
    id: "stat-pending",
    name: "Pending Verification",
    slug: "pending",
    description:
      "Order has been placed and the bank receipt is awaiting admin review.",
    color: "yellow",
    order: 1,
  },
  {
    id: "stat-verified",
    name: "Verified",
    slug: "verified",
    description: "Bank receipt has been verified and payment is confirmed.",
    color: "green",
    order: 2,
  },
  {
    id: "stat-processing",
    name: "Processing",
    slug: "processing",
    description: "Order is being packed and prepared for dispatch.",
    color: "blue",
    order: 3,
  },
  {
    id: "stat-shipped",
    name: "Shipped",
    slug: "shipped",
    description: "Order has been handed over to the courier for delivery.",
    color: "indigo",
    order: 4,
  },
  {
    id: "stat-delivered",
    name: "Delivered",
    slug: "delivered",
    description: "Order has been successfully received by the customer.",
    color: "emerald",
    order: 5,
  },
  {
    id: "stat-rejected",
    name: "Rejected",
    slug: "rejected",
    description: "Order was cancelled or the payment receipt was invalid.",
    color: "red",
    order: 6,
  },
]);

export async function findStatusById(
  id: string,
): Promise<StatusType | undefined> {
  return (await statusData).find((each) => each.id === id);
}

export async function findStatusBySlug(
  slug: ValidatorType["slug"],
): Promise<StatusType | undefined> {
  return (await statusData).find((each) => each.slug === slug);
}
