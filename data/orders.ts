import { ordersValidator } from "@/convex/schema";
import { Infer } from "convex/values";
import { findStatusById, StatusType } from "./stats";
import { IdProp, HrefFile, PhoneProps, AddressProps } from "./reset";
import { findAddressById } from "./address";
import { findPhoneById } from "./phone";

type ValidatorType = Infer<typeof ordersValidator>;

type ItemsType = ValidatorType["items"][number];

export type OrderItemType = Omit<ItemsType, "productId" | "size" | "color"> & {
  productId: string;
  size: string;
  color: string;
};

export type OrderType = Omit<
  ValidatorType,
  "bankReceipt" | "items" | "addressId" | "phoneId" | "statusId"
> &
  IdProp &
  AddressProps &
  PhoneProps & {
    bankReceipt: HrefFile;
    items: OrderItemType[];
    statusId: string;
    status: StatusType | undefined;
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
          discountPercentage: 18,
          size: "sz-l",
          color: "col-jet-black",
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
