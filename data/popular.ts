import { popularValidator } from "@/convex/schema";
import { Infer } from "convex/values";
import { findProductById, ProductType } from "./products";
import { findColorById, ColorType } from "./colors";
import { findSizeById, SizeType } from "./sizes";

type ValidatorType = Infer<typeof popularValidator>;

export type PopularType = Omit<
  ValidatorType,
  "productId" | "color" | "size"
> & {
  productId: string;
  product: ProductType | undefined;
  color: string;
  colorRef: ColorType | undefined;
  size: string;
  sizeRef: SizeType | undefined;
};

type PopularSeed = {
  productId: string;
  color: string;
  size: string;
};

const popularSeeds: PopularSeed[] = [
  { productId: "prod_002", color: "col-midnight-navy", size: "sz-m" },
  { productId: "prod_007", color: "col-charcoal-slate", size: "sz-eu-42" },
  { productId: "prod_008", color: "col-onyx-black", size: "sz-eu-42" },
  { productId: "prod_001", color: "col-obsidian-black", size: "sz-l" },
  { productId: "prod_004", color: "col-onyx-black", size: "sz-m" },
];

export const popularData: Promise<PopularType[]> = (async () => {
  return Promise.all(
    popularSeeds.map(async ({ productId, color, size }) => ({
      productId,
      product: await findProductById(productId),
      color,
      colorRef: await findColorById(color),
      size,
      sizeRef: await findSizeById(size),
    })),
  );
})();
