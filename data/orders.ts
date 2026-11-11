import { ordersValidator } from "@/convex/schema";
import { Infer } from "convex/values";

export type HrefFile = {
  href: string;
  name: string;
  type: string;
};

type ValidatorType = Infer<typeof ordersValidator>;
type OrderItemType = ValidatorType["orderItems"][number];

type PromiseType = Omit<ValidatorType, "bankReceipt" | "orderItems"> & {
  id: string;
  bankReceipt: HrefFile;
  orderItems: (Omit<OrderItemType, "productId"> & { productId: string })[];
};

export const ordersData: Promise<PromiseType[]> = Promise.resolve([
  // --- RICHARD'S ORDERS ---
  {
    id: "order-001",
    userId: "user_richard_okafor",
    firstName: "Richard",
    lastName: "Okafor",
    email: "okaforrichard76@gmail.com",
    phone: { code: "+234", number: "9059405621" },
    address: {
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
    orderItems: [
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
    status: "pending",
  },
  {
    id: "order-002",
    userId: "user_richard_okafor",
    firstName: "Richard",
    lastName: "Okafor",
    email: "okaforrichard76@gmail.com",
    phone: { code: "+234", number: "9059405621" },
    address: {
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
      name: "transfer_screenshot.jpg",
      type: "bank-receipt",
    },
    orderItems: [
      {
        productId: "prod-002",
        discountPercentage: 0,
        size: "M",
        color: "Obsidian Black",
        quantity: 1,
        priceAtPurchase: 52000,
      },
      {
        productId: "prod-004",
        discountPercentage: 0,
        size: "S",
        color: "Midnight Black",
        quantity: 1,
        priceAtPurchase: 155000,
      },
    ],
    totalAmount: 207000,
    status: "verified",
  },
  {
    id: "order-003",
    userId: "user_richard_okafor",
    firstName: "Richard",
    lastName: "Okafor",
    email: "okaforrichard76@gmail.com",
    phone: { code: "+234", number: "9059405621" },
    address: {
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
      name: "bulk_order_receipt.png",
      type: "bank-receipt",
    },
    orderItems: [
      {
        productId: "prod-005",
        discountPercentage: 45,
        size: "XL",
        color: "Vintage Black",
        quantity: 100,
        priceAtPurchase: 19250,
      },
    ],
    totalAmount: 1925000,
    notes: "Bulk order for my boutique. Call me when it's ready.",
    status: "processing",
  },
  {
    id: "order-004",
    userId: "user_richard_okafor",
    firstName: "Richard",
    lastName: "Okafor",
    email: "okaforrichard76@gmail.com",
    phone: { code: "+234", number: "9059405621" },
    address: {
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
      name: "opay_transfer.pdf",
      type: "bank-receipt",
    },
    orderItems: [
      {
        productId: "prod-003",
        discountPercentage: 10,
        size: "L",
        color: "Royal Navy",
        quantity: 5,
        priceAtPurchase: 108000,
      },
    ],
    totalAmount: 540000,
    status: "shipped",
  },
  {
    id: "order-005",
    userId: "user_richard_okafor",
    firstName: "Richard",
    lastName: "Okafor",
    email: "okaforrichard76@gmail.com",
    phone: { code: "+234", number: "9059405621" },
    address: {
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
      name: "fake_receipt.jpg",
      type: "bank-receipt",
    },
    orderItems: [
      {
        productId: "prod-002",
        discountPercentage: 0,
        size: "3XL",
        color: "Charcoal Heather",
        quantity: 2,
        priceAtPurchase: 52000,
      },
    ],
    totalAmount: 104000,
    notes: "Please deliver before Friday.",
    status: "rejected",
  },
  {
    id: "order-006",
    userId: "user_richard_okafor",
    firstName: "Richard",
    lastName: "Okafor",
    email: "okaforrichard76@gmail.com",
    phone: { code: "+234", number: "9059405621" },
    address: {
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
      name: "gtb_transfer.jpg",
      type: "bank-receipt",
    },
    orderItems: [
      {
        productId: "prod-001",
        discountPercentage: 0,
        size: "M",
        color: "Jet Black with Gold Hardware",
        quantity: 1,
        priceAtPurchase: 85000,
      },
    ],
    totalAmount: 85000,
    status: "delivered",
  },

  // --- AMAKA'S ORDERS ---
  {
    id: "order-007",
    userId: "user_amaka_chukwuma",
    firstName: "Amaka",
    lastName: "Chukwuma",
    email: "amaka.c@gmail.com",
    phone: { code: "+234", number: "8031112233" },
    address: {
      houseNumber: "Plot 12",
      street: "Banana Island Estate",
      city: "Ikoyi",
      state: "Lagos",
      country: "Nigeria",
      closestBusStop: "Banana Island Gate",
    },
    bankReceipt: {
      href: "/doc/Bank Transfer Receipt.pdf",
      name: "amaka_transfer.pdf",
      type: "bank-receipt",
    },
    orderItems: [
      {
        productId: "prod-004",
        discountPercentage: 0,
        size: "M",
        color: "Midnight Black",
        quantity: 1,
        priceAtPurchase: 155000,
      },
      {
        productId: "prod-003",
        discountPercentage: 0,
        size: "M",
        color: "Royal Navy",
        quantity: 1,
        priceAtPurchase: 120000,
      },
    ],
    totalAmount: 275000,
    status: "verified",
  },
  {
    id: "order-008",
    userId: "user_amaka_chukwuma",
    firstName: "Amaka",
    lastName: "Chukwuma",
    email: "amaka.c@gmail.com",
    phone: { code: "+234", number: "8031112233" },
    address: {
      houseNumber: "Plot 12",
      street: "Banana Island Estate",
      city: "Ikoyi",
      state: "Lagos",
      country: "Nigeria",
      closestBusStop: "Banana Island Gate",
    },
    bankReceipt: {
      href: "/doc/Bank Transfer Receipt.pdf",
      name: "amaka_bulk.pdf",
      type: "bank-receipt",
    },
    orderItems: [
      {
        productId: "prod-002",
        discountPercentage: 20,
        size: "L",
        color: "Obsidian Black",
        quantity: 15,
        priceAtPurchase: 41600,
      },
    ],
    totalAmount: 624000,
    notes: "Corporate gifts for my team.",
    status: "processing",
  },

  // --- TUNDE'S ORDERS ---
  {
    id: "order-009",
    userId: "user_tunde_bakare",
    firstName: "Tunde",
    lastName: "Bakare",
    email: "tunde@reseller.com",
    phone: { code: "+234", number: "7012345678" },
    address: {
      houseNumber: "45",
      street: "Allen Avenue, Ikeja",
      city: "Ikeja",
      state: "Lagos",
      country: "Nigeria",
    },
    bankReceipt: {
      href: "/doc/Bank Transfer Receipt.pdf",
      name: "tunde_bulk.jpg",
      type: "bank-receipt",
    },
    orderItems: [
      {
        productId: "prod-001",
        discountPercentage: 40,
        size: "XL",
        color: "Jet Black with Gold Hardware",
        quantity: 50,
        priceAtPurchase: 51000,
      },
      {
        productId: "prod-005",
        discountPercentage: 45,
        size: "L",
        color: "Vintage Black",
        quantity: 100,
        priceAtPurchase: 19250,
      },
    ],
    totalAmount: 4475000,
    notes: "Wholesale restock for Q4.",
    status: "shipped",
  },

  // --- CHIOMA'S ORDERS ---
  {
    id: "order-010",
    userId: "user_chioma_adeyemi",
    firstName: "Chioma",
    lastName: "Adeyemi",
    email: "chioma.a@outlook.com",
    phone: { code: "+234", number: "9098765432" },
    address: {
      houseNumber: "2",
      street: "Gbode Ventures Plaza",
      city: "Lagos Island",
      state: "Lagos",
      country: "Nigeria",
      closestBusStop: "Idumota",
    },
    bankReceipt: {
      href: "/doc/Bank Transfer Receipt.pdf",
      name: "chioma_receipt.png",
      type: "bank-receipt",
    },
    orderItems: [
      {
        productId: "prod-004",
        discountPercentage: 0,
        size: "S",
        color: "Midnight Black",
        quantity: 1,
        priceAtPurchase: 155000,
      },
    ],
    totalAmount: 155000,
    status: "delivered",
  },

  // --- SAMUEL'S ORDERS ---
  {
    id: "order-011",
    userId: "user_samuel_eze",
    firstName: "Samuel",
    lastName: "Eze",
    email: "samuel.eze@gmail.com",
    phone: { code: "+234", number: "8123456789" },
    address: {
      houseNumber: "8",
      street: "Abuja Expressway",
      city: "Abuja",
      state: "FCT",
      country: "Nigeria",
    },
    bankReceipt: {
      href: "/doc/Bank Transfer Receipt.pdf",
      name: "samuel_transfer.pdf",
      type: "bank-receipt",
    },
    orderItems: [
      {
        productId: "prod-002",
        discountPercentage: 0,
        size: "L",
        color: "Charcoal Heather",
        quantity: 1,
        priceAtPurchase: 52000,
      },
      {
        productId: "prod-003",
        discountPercentage: 0,
        size: "L",
        color: "Royal Navy",
        quantity: 1,
        priceAtPurchase: 120000,
      },
    ],
    totalAmount: 172000,
    status: "rejected",
  },

  // --- BISI'S ORDERS ---
  {
    id: "order-012",
    userId: "user_bisi_oladipo",
    firstName: "Bisi",
    lastName: "Oladipo",
    email: "bisi.oladipo@yahoo.com",
    phone: { code: "+234", number: "8055554444" },
    address: {
      houseNumber: "22",
      street: "Bodija Market Road",
      city: "Ibadan",
      state: "Oyo",
      country: "Nigeria",
    },
    bankReceipt: {
      href: "/doc/Bank Transfer Receipt.pdf",
      name: "bisi_receipt.jpg",
      type: "bank-receipt",
    },
    orderItems: [
      {
        productId: "prod-005",
        discountPercentage: 35,
        size: "M",
        color: "Off-White",
        quantity: 50,
        priceAtPurchase: 22750,
      },
    ],
    totalAmount: 1137500,
    notes: "Please use faster courier.",
    status: "pending",
  },
]);
