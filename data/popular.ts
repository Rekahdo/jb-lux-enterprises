import { popularValidator } from "@/convex/schema";
import { Infer } from "convex/values";
import { findProductById, ProductType } from "./products";

type ValidatorType = Infer<typeof popularValidator>;

export type PopularType = Omit<ValidatorType, "productId"> & {
  productId: string;
  product: ProductType | undefined;
};

const popularProductIds = [
  "prod_002",
  "prod_007",
  "prod_008",
  "prod_001",
  "prod_004",
] as const;

export const popularData: Promise<PopularType[]> = (async () => {
  return Promise.all(
    popularProductIds.map(async (productId) => ({
      productId,
      product: await findProductById(productId),
    })),
  );
})();
