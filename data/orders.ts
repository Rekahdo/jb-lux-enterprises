import { ordersValidator } from "@/convex/schema";
import { Infer } from "convex/values";
import { statusData, StatusType } from "./stats";
import { AddressPropType, HrefFile, PhonePropType } from "./reset";
import { AddressType, findAddressById } from "./address";
import { findPhoneById, PhoneType } from "./phone";

type ValidatorType = Infer<typeof ordersValidator>;

type ItemsType = ValidatorType["items"][number];

type PromiseType = Omit<
  ValidatorType,
  "bankReceipt" | "items" | "addressId" | "phoneId" | "statusId"
> &
  AddressPropType &
  PhonePropType & {
    id: string;
    bankReceipt: HrefFile;
    items: (Omit<ItemsType, "productId"> & { productId: string })[];
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
    phoneId: "phn-02",
    phone: await findPhoneById("phn-02"),
    addressId: "add-02",
    address: await findAddressById("add-02"),
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
