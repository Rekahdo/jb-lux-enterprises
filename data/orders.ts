import { ordersValidator } from "@/convex/schema";
import { Infer } from "convex/values";
import { statusData, StatusType } from "./stats";
import { AddressType, HrefFile, PhoneNumberType } from "./reset";

type ValidatorType = Infer<typeof ordersValidator>;

type ItemsType = ValidatorType["items"][number];

type PromiseType = Omit<
  ValidatorType,
  "bankReceipt" | "items" | "addressId" | "phoneId" | "statusId"
> & {
  id: string;
  bankReceipt: HrefFile;
  items: (Omit<ItemsType, "productId"> & { productId: string })[];
  addressId: AddressType;
  phoneId: PhoneNumberType;
  statusId: StatusType;
};

const statsData = await statusData;

export const ordersData: Promise<PromiseType[]> = Promise.resolve([
  // --- RICHARD'S ORDERS ---
  {
    id: "order-001",
    userId: "user_richard_okafor",
    firstName: "Richard",
    lastName: "Okafor",
    email: "okaforrichard76@gmail.com",
    phoneId: { code: "+234", number: "9059405621" },
    addressId: {
      houseNumber: "14",
      street: "Admiralty Way, Lekki Phase 1",
      city: "Lekki",
      state: "Lagos",
      country: "Nigeria",
      postalCode: "106104",
      closestBusStop: "Admiralty Roundabout",
    },
    bankReceipt: {
      href: "/doc/Bank Transfer Receipt.pdf",
      name: "bank_receipt_oct_24.pdf",
      type: "bank-receipt",
    },
    items: [
      {
        productId: "prod-001",
        discountPercentage: 18,
        size: "L",
        color: "Jet Black with Gold Hardware",
        quantity: 5,
        priceAtPurchase: 69700,
      },
    ],
    totalAmount: 348500,
    notes: "Please pack in a single luxury box if possible.",
    statusId: statsData.pending,
  },
]);
