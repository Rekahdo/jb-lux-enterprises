import { phoneNumber } from "better-auth/plugins";
import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export const imageValidator = v.object({
  storageId: v.id("_storage"),
  alt: v.string(),
});

export const fileValidator = v.object({
  storageId: v.id("_storage"),
  name: v.string(),
  type: v.union(v.literal("bank-receipt"), v.literal("order-receipt")),
});

export const tagValidator = v.object({
  title: v.string(),
  description: v.optional(v.string()),
});

export const addressValidator = v.object({
  name: v.string().optional(),
  buildingName: v.string().optional(),
  houseNumber: v.string(),
  street: v.string(),
  city: v.string(),
  state: v.string(),
  country: v.string(),
  postalCode: v.optional(v.string()),
  closestBusStop: v.optional(v.string()),
});

export const phoneValidator = v.object({
  code: v.string(),
  number: v.string(),
});

export const roleTable = {
  userId: v.string(),
  role: v.union(v.literal("admin"), v.literal("sales"), v.literal("manager")),
};

export const roleValidator = v.object(roleTable);

export const profileTable = {
  userId: v.string(),
  firstname: v.string(),
  lastname: v.string(),
  email: v.string(),
  phone: v.optional(phoneValidator),
  address: v.optional(addressValidator),
};

export const profileValidator = v.object(profileTable);

export const headerTable = {
  logo: imageValidator,
};

export const announcementsTable = {
  messages: v.array(
    v.object({
      startTime: v.number(),
      endTime: v.number(),
      text: v.string(),
    }),
  ),
};

export const announcementsValidator = v.object(announcementsTable);

export const headerValidator = v.object(headerTable);

export const heroTable = {
  badge: v.string(),
  headline: v.string(),
  description: v.string(),
  images: v.array(imageValidator),
  tags: v.optional(v.array(tagValidator)),
};

export const heroValidator = v.object(heroTable);

export const storeFeatureValidator = v.object({
  title: v.string(),
  description: v.string(),
});

export const storeFeaturesTable = {
  discount: storeFeatureValidator,
  trust: storeFeatureValidator,
  logistics: storeFeatureValidator,
  bespoke: storeFeatureValidator,
  wholesale: storeFeatureValidator,
};

export const storeFeaturesValidator = v.object(storeFeaturesTable);

export const visitStoreTable = {
  badge: v.string(),
  images: v.array(imageValidator),
  overline: v.string(),
  headline: v.string(),
  description: v.string(),
  address: addressValidator,
  addressNote: v.string(),
  phoneNumber: v.string(),
  phoneNote: v.string(),
};

export const visitStoreValidator = v.object(visitStoreTable);

export const productsTable = {
  name: v.string(),
  slug: v.string(),
  badge: v.string(),
  tagline: v.string(),
  category: v.string(),
  subCategory: v.optional(v.string()),
  gender: v.union(v.literal("male"), v.literal("female"), v.literal("unisex")),
  description: v.string(),
  fullDescription: v.string(),
  unitPrice: v.number(),
  isSale: v.optional(v.boolean()),
  stock: v.number(),
  isActive: v.boolean(),
  sizes: v.array(v.string()),
  colors: v.array(
    v.object({
      name: v.string(),
      hex: v.optional(v.string()),
      image: imageValidator,
    }),
  ),
  wholesaleTiers: v.optional(
    v.array(
      v.object({
        minQuantity: v.number(),
        discountPercentage: v.number(),
      }),
    ),
  ),
  details: v.object({
    fabric: v.string(),
    provenance: v.string(),
  }),
  isFeatured: v.boolean(),
  isCategory: v.boolean(),
  isPopular: v.boolean(),
  rating: v.number(),
};

export const productsValidator = v.object(productsTable);

export const reviewTable = {
  userId: v.string(),
  productId: v.string(),
  verifiedPurchase: v.boolean(),
  rating: v.number(),
  title: v.string(),
  comment: v.string(),
  fit: v.union(
    v.literal("runs small"),
    v.literal("true to size"),
    v.literal("runs large"),
  ),
  helpfulCount: v.number(),
};

export const reviewsValidator = v.object(reviewTable);

export const ordersTable = {
  userId: v.string(),
  firstName: v.string(),
  lastName: v.string(),
  email: v.string(),
  phone: phoneValidator,
  address: addressValidator,
  bankReceipt: fileValidator,
  orderItems: v.array(
    v.object({
      productId: v.id("products"),
      discountPercentage: v.number(),
      size: v.string(),
      color: v.string(),
      quantity: v.number(),
      priceAtPurchase: v.number(),
    }),
  ),
  totalAmount: v.number(),
  notes: v.optional(v.string()),
  status: v.union(
    v.literal("pending"),
    v.literal("verified"),
    v.literal("processing"),
    v.literal("shipped"),
    v.literal("delivered"),
    v.literal("rejected"),
  ),
};
export const ordersValidator = v.object(ordersTable);

const dayValidator = v.union(
  v.literal("mon"),
  v.literal("tues"),
  v.literal("wed"),
  v.literal("thurs"),
  v.literal("fri"),
  v.literal("sat"),
  v.literal("sun"),
);

export const storeSettingsTable = {
  brandName: v.string(),
  year: v.string(),
  bankName: v.string(),
  accountName: v.string(),
  accountNumber: v.string(),
  email: v.string(),
  phoneNumber: phoneValidator,
  address: addressValidator,
  retail: v.boolean(),
  retailDiscount: v.number(),
  wholesale: v.boolean(),
  wholesaleDiscount: v.number(),
  facebook: v.optional(v.string()),
  whatsapp: v.optional(v.string()),
  instagram: v.optional(v.string()),
  tiktok: v.optional(v.string()),
  x: v.optional(v.string()),
  services: v.array(
    v.object({
      service: v.string(),
      href: v.string(),
    }),
  ),
  days: v.array(
    v.object({
      from: dayValidator,
      to: dayValidator,
      openHour: v.string(),
      closeHour: v.string(),
    }),
  ),
};

export const storeSettingsValidator = v.object(storeSettingsTable);

export const footerTable = {
  description: v.string(),
};

export const footerValidator = v.object(footerTable);

// --- Schema Definition ---
export default defineSchema({
  role: defineTable(roleTable).index("by_userId", ["userId"]),

  profiles: defineTable(profileTable)
    .index("by_email", ["email"])
    .index("by_userId", ["userId"]),

  announcements: defineTable(announcementsTable),

  header: defineTable(headerTable),

  hero: defineTable(heroTable),

  storeFeatures: defineTable(storeFeaturesTable),

  visitStore: defineTable(visitStoreTable),

  products: defineTable(productsTable)
    .index("by_slug", ["slug"])
    .index("by_category", ["category"]),

  reviews: defineTable(reviewTable),

  orders: defineTable(ordersTable)
    .index("by_userId", ["userId"])
    .index("by_status", ["status"])
    .index("by_email", ["email"]),

  storeSettings: defineTable(storeSettingsTable),

  footer: defineTable(footerTable),
});
