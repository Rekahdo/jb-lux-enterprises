import { cartValidator } from "@/convex/schema";
import { Infer } from "convex/values";
import { IdProp } from "./reset";
import { findProductById, ProductProps } from "./products";
import { ColorProps, findColorById } from "./colors";
import { findSizeById, SizeProps } from "./sizes";

type ValidatorType = Infer<typeof cartValidator>;

export type ItemType = ProductProps &
  ColorProps &
  SizeProps & {
    quantity: number;
    discountPercentage: number;
  };

export type CartType = Omit<ValidatorType, "item"> &
  IdProp & {
    item: ItemType;
  };

export type CartProps = {
  cartId: string;
  cart: CartType | undefined;
};

export const cartData: Promise<CartType[]> = Promise.resolve([
  // ---------- Richard — currently shopping ----------
  {
    id: "cart-001",
    userId: "user_richard_okafor",
    item: {
      productId: "prod_002",
      product: await findProductById("prod_002"),
      colorId: "col-midnight-navy",
      color: await findColorById("col-midnight-navy"),
      sizeId: "sz-m",
      size: await findSizeById("sz-m"),
      quantity: 1,
      discountPercentage: 10,
    },
  },
  {
    id: "cart-002",
    userId: "user_richard_okafor",
    item: {
      productId: "prod_007",
      product: await findProductById("prod_007"),
      colorId: "col-charcoal-slate",
      color: await findColorById("col-charcoal-slate"),
      sizeId: "sz-eu-42",
      size: await findSizeById("sz-eu-42"),
      quantity: 2,
      discountPercentage: 5,
    },
  },

  // ---------- Amaka — ready to check out ----------
  {
    id: "cart-003",
    userId: "user_amaka_chukwuma",
    item: {
      productId: "prod_005",
      product: await findProductById("prod_005"),
      colorId: "col-champagne-gold",
      color: await findColorById("col-champagne-gold"),
      sizeId: "sz-s",
      size: await findSizeById("sz-s"),
      quantity: 1,
      discountPercentage: 15,
    },
  },

  // ---------- Tunde — bulk wholesale buy ----------
  {
    id: "cart-004",
    userId: "user_tunde_bakare",
    item: {
      productId: "prod_001",
      product: await findProductById("prod_001"),
      colorId: "col-obsidian-black",
      color: await findColorById("col-obsidian-black"),
      sizeId: "sz-l",
      size: await findSizeById("sz-l"),
      quantity: 10,
      discountPercentage: 15,
    },
  },
  {
    id: "cart-005",
    userId: "user_tunde_bakare",
    item: {
      productId: "prod_003",
      product: await findProductById("prod_003"),
      colorId: "col-charcoal-slate",
      color: await findColorById("col-charcoal-slate"),
      sizeId: "sz-xl",
      size: await findSizeById("sz-xl"),
      quantity: 25,
      discountPercentage: 30,
    },
  },

  // ---------- Chioma — single luxury item ----------
  {
    id: "cart-006",
    userId: "user_chioma_adeyemi",
    item: {
      productId: "prod_009",
      product: await findProductById("prod_009"),
      colorId: "col-onyx-black",
      color: await findColorById("col-onyx-black"),
      sizeId: "sz-lens-54",
      size: await findSizeById("sz-lens-54"),
      quantity: 1,
      discountPercentage: 9,
    },
  },

  // ---------- Samuel — one casual piece ----------
  {
    id: "cart-007",
    userId: "user_samuel_eze",
    item: {
      productId: "prod_008",
      product: await findProductById("prod_008"),
      colorId: "col-onyx-black",
      color: await findColorById("col-onyx-black"),
      sizeId: "sz-eu-43",
      size: await findSizeById("sz-eu-43"),
      quantity: 1,
      discountPercentage: 0,
    },
  },

  // ---------- Zainab — multiple items ----------
  {
    id: "cart-008",
    userId: "user_zainab_ibrahim",
    item: {
      productId: "prod_004",
      product: await findProductById("prod_004"),
      colorId: "col-stone-gray",
      color: await findColorById("col-stone-gray"),
      sizeId: "sz-m",
      size: await findSizeById("sz-m"),
      quantity: 3,
      discountPercentage: 0,
    },
  },
  {
    id: "cart-009",
    userId: "user_zainab_ibrahim",
    item: {
      productId: "prod_010",
      product: await findProductById("prod_010"),
      colorId: "col-ivory-cream",
      color: await findColorById("col-ivory-cream"),
      sizeId: "sz-lens-56",
      size: await findSizeById("sz-lens-56"),
      quantity: 1,
      discountPercentage: 0,
    },
  },
]);

export async function findCartById(id: string): Promise<CartType | undefined> {
  return (await cartData).find((each) => each.id === id);
}

export async function findCartsByUserId(userId: string): Promise<CartType[]> {
  return (await cartData).filter((each) => each.userId === userId);
}
