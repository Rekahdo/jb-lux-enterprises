import { ordersValidator } from "@/convex/schema";
import { Infer } from "convex/values";
import { findStatusById, StatusProps, StatusType } from "./stats";
import { IdProp, HrefFile } from "./reset";
import { AddressProps, findAddressById } from "./address";
import { findPhoneById, PhoneProps } from "./phone";
import { ItemType } from "./cart";
import { findColorById } from "./colors";
import { findSizeById } from "./sizes";
import { findProductById } from "./products";

type ValidatorType = Infer<typeof ordersValidator>;

export type OrderType = Omit<
  ValidatorType,
  "bankReceipt" | "items" | "addressId" | "phoneId" | "statusId"
> &
  IdProp &
  AddressProps &
  PhoneProps &
  StatusProps & {
    bankReceipt: HrefFile;
    items: ItemType[];
  };

export type OrderProps = {
  orderId: string;
  order: OrderType;
};

export const ordersData: Promise<OrderType[]> = (async () => {
  return [
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
          productId: "prod_001",
          product: await findProductById("prod_001"),
          discountPercentage: 18,
          sizeId: "sz-l",
          size: await findSizeById("sz-l"),
          colorId: "col-jet-black",
          color: await findColorById("col-jet-black"),
          quantity: 5,
          priceAtPurchase: 69700,
        },
      ],
      totalAmount: 348500,
      notes: "Please pack in a single luxury box if possible.",
      statusId: "stat-pending",
      status: await findStatusById("stat-pending"),
    },
  ];
})();
