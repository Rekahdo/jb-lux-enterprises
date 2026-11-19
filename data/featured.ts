import { featuredValidator } from "@/convex/schema";
import { Infer } from "convex/values";
import { findProductById, ProductProps } from "./products";

type ValidatorType = Infer<typeof featuredValidator>;

export type FeaturedType = Omit<ValidatorType, "productId"> & ProductProps;

const featuredProductIds = [
  "prod_001",
  "prod_003",
  "prod_005",
  "prod_006",
  "prod_009",
  "prod_002",
  "prod_004",
  "prod_007",
  "prod_008",
] as const;

export const featuredData: Promise<FeaturedType[]> = (async () => {
  return Promise.all(
    featuredProductIds.map(async (productId) => ({
      productId,
      product: await findProductById(productId),
    })),
  );
})();
