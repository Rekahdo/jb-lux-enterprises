import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

// UTILS

export const fileValidator = v.object({
  storageId: v.id("_storage"),
  name: v.string(),
  type: v.union(v.literal("bank-receipt"), v.literal("order-receipt")),
});

export const tagValidator = v.object({
  title: v.string(),
  description: v.optional(v.string()),
});

// APP

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

export const headerTable = {
  logoId: v.id("images"),
};
export const headerValidator = v.object(headerTable);

export const heroTable = {
  badge: v.string(),
  headline: v.string(),
  description: v.string(),
  imageIds: v.array(v.id("images")),
  tags: v.optional(v.array(tagValidator)),
};
export const heroValidator = v.object(heroTable);

export const footerTable = {
  description: v.string(),
};
export const footerValidator = v.object(footerTable);

// TABLES

export const imageTable = {
  storageId: v.id("_storage"),
  alt: v.string(),
};
export const imageValidator = v.object(imageTable);

export const addressTable = {
  name: v.string().optional(),
  buildingName: v.string().optional(),
  houseNumber: v.string(),
  street: v.string(),
  city: v.string(),
  state: v.string(),
  country: v.string(),
  postalCode: v.optional(v.string()),
  closestBusStop: v.optional(v.string()),
};
export const addressValidator = v.object(addressTable);

export const phoneTable = {
  code: v.string(),
  number: v.string(),
};
export const phoneValidator = v.object(phoneTable);

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
  phoneId: v.optional(v.id("phones")),
  addressId: v.optional(v.id("addresses")),
};
export const profileValidator = v.object(profileTable);

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
  imageIds: v.array(v.id("images")),
  overline: v.string(),
  headline: v.string(),
  description: v.string(),
  addressId: v.id("addresses"),
  addressNote: v.string(),
  phoneId: v.id("phones"),
  phoneNote: v.string(),
};

export const visitStoreValidator = v.object(visitStoreTable);

export const categoryTable = {
  badge: v.string(),
  slug: v.string(),
  title: v.string(),
  description: v.string(),
  count: v.number(),
  imageId: v.optional(v.id("images")),
};
export const categoryValidator = v.object(categoryTable);

export const featuredTable = {
  productId: v.id("products"),
};
export const featuredValidator = v.object(featuredTable);

export const popularTable = {
  productId: v.id("products"),
};
export const popularValidator = v.object(popularTable);

export const subCategoryTable = {
  categoryId: v.id("categories"),
  name: v.string(),
};
export const subCategoryValidator = v.object(subCategoryTable);

export const styleTable = {
  name: v.string(),
  isActive: v.boolean(),
};
export const styleValidator = v.object(styleTable);

export const fitTable = {
  name: v.string(),
  description: v.optional(v.string()),
};
export const fitValidator = v.object(fitTable);

export const ratingValidator = v.object({
  r2: v.number(),
  r4: v.number(),
  r6: v.number(),
  r8: v.number(),
  r10: v.number(),
});

export const productsTable = {
  name: v.string(),
  slug: v.string(),
  badge: v.string(),
  tagline: v.string(),
  subCategoryId: v.optional(v.id("subCategories")),
  styleId: v.id("styles"),
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
      hex: v.string(),
      imageId: v.id("images"),
    }),
  ),
  retailDiscount: v.number(),
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
  rating: ratingValidator,
};
export const productsValidator = v.object(productsTable);

export const reviewTable = {
  userId: v.string(),
  productId: v.string(),
  verifiedPurchase: v.boolean(),
  rating: v.union(
    v.literal("r2"),
    v.literal("r4"),
    v.literal("r6"),
    v.literal("r8"),
    v.literal("r10"),
  ),
  title: v.string(),
  comment: v.string(),
  fitId: v.id("fits"),
  helpfulCount: v.number(),
};
export const reviewsValidator = v.object(reviewTable);

export const statusTable = {
  name: v.string(),
  slug: v.union(
    v.literal("pending"),
    v.literal("verified"),
    v.literal("processing"),
    v.literal("shipped"),
    v.literal("delivered"),
    v.literal("rejected"),
  ),
  description: v.string(),
  color: v.string(),
  order: v.number(),
};

export const statusValidator = v.object(statusTable);

export const ordersTable = {
  userId: v.string(),
  firstName: v.string(),
  lastName: v.string(),
  email: v.string(),
  phoneId: v.id("phones"),
  addressId: v.id("addresses"),
  bankReceipt: fileValidator,
  items: v.array(
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
  statusId: v.id("stats"),
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
  currentUnit: v.union(v.literal("NGN"), v.literal("USD"), v.literal("EUR")),
  year: v.string(),
  bankName: v.string(),
  accountName: v.string(),
  accountNumber: v.string(),
  email: v.string(),
  phoneId: v.id("phones"),
  addressId: v.id("addresses"),
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

// --- Schema Definition ---
export default defineSchema({
  images: defineTable(imageTable),

  addresses: defineTable(addressTable),

  phones: defineTable(phoneTable),

  roles: defineTable(roleTable).index("by_userId", ["userId"]),

  profiles: defineTable(profileTable)
    .index("by_email", ["email"])
    .index("by_userId", ["userId"]),

  announcements: defineTable(announcementsTable),

  header: defineTable(headerTable),

  hero: defineTable(heroTable),

  storeFeatures: defineTable(storeFeaturesTable),

  visitStore: defineTable(visitStoreTable),

  categories: defineTable(categoryTable).index("by_slug", ["slug"]),

  popular: defineTable(popularTable).index("by_productId", ["productId"]),

  featured: defineTable(featuredTable).index("by_productId", ["productId"]),

  subCategories: defineTable(subCategoryTable).index("by_categoryId", [
    "categoryId",
  ]),

  styles: defineTable(styleTable),

  fits: defineTable(fitTable),

  products: defineTable(productsTable).index("by_subCategoryId", [
    "subCategoryId",
  ]),

  reviews: defineTable(reviewTable)
    .index("by_productId", ["productId"])
    .index("by_fitId", ["fitId"]),

  stats: defineTable(statusTable).index("by_slug", ["slug"]),

  orders: defineTable(ordersTable)
    .index("by_userId", ["userId"])
    .index("by_statusId", ["statusId"])
    .index("by_email", ["email"]),

  storeSettings: defineTable(storeSettingsTable),

  footer: defineTable(footerTable),
});
