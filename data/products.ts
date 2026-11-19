import { productsValidator } from "@/convex/schema";
import { Infer } from "convex/values";
import { IdProp } from "./reset";
import { findSubCategoryById, SubCategoryType } from "./subcategories";
import { findStyleById, StyleType } from "./styles";
import { ColorProps, ColorType, findColorById } from "./colors";
import { ImagesProps, findImageById } from "./images";

type ValidatorType = Infer<typeof productsValidator>;

export type ProductColorType = ColorProps & ImagesProps;

export type ProductType = Omit<
  ValidatorType,
  "colors" | "subCategoryId" | "styleId" | "sizes"
> &
  IdProp & {
    colors: ProductColorType[];
    styleId: string;
    style: StyleType | undefined;
    sizes: string[];
  };
  
export type ProductProps = {
  productId: string;
  product: ProductType | undefined;
};

export const productsData: Promise<ProductType[]> = Promise.resolve([
  // ---------- Clothing / Apparel ----------
  {
    id: "prod_001",
    name: "Luxury Senator Suit",
    slug: "luxury-senator-suit-1",
    badge: "ATELIER SIGNATURE",
    tagline:
      "Crafted for distinction \u2014 traditional & cultural wear engineered with cashmere wool blend.",
    subCategoryId: "sub-04",
    subCategory: await findSubCategoryById("sub-04"),
    styleId: "style-02",
    style: await findStyleById("style-02"),
    gender: "male",
    description:
      "Refined luxury senator suit tailored from cashmere wool blend, combining Nigerian royal heritage with contemporary urban silhouettes.",
    fullDescription:
      "Designed and finished at JB Lux Enterprises on Lagos Island, the Luxury Senator Suit exemplifies sartorial precision and everyday versatility. Constructed using cashmere wool blend, each piece undergoes strict atelier quality inspection to ensure lasting structure, comfort, and elevated presence. Available for single retail orders as well as tiered wholesale bulk distribution with insured nationwide and international dispatch.",
    unitPrice: 1790000,
    isSale: false,
    stock: 46,
    isActive: true,
    sizes: ["sz-s", "sz-m", "sz-l", "sz-xl", "sz-xxl"],
    colors: [
      {
        colorId: "col-obsidian-black",
        color: (await findColorById("col-obsidian-black"))!,
        imageId: "img-prod-001-obsidian-black",
        image: (await findImageById("img-prod-001-obsidian-black"))!,
      },
      {
        colorId: "col-champagne-gold",
        color: (await findColorById("col-champagne-gold"))!,
        imageId: "img-prod-001-champagne-gold",
        image: (await findImageById("img-prod-001-champagne-gold"))!,
      },
      {
        colorId: "col-ivory-cream",
        color: (await findColorById("col-ivory-cream"))!,
        imageId: "img-prod-001-ivory-cream",
        image: (await findImageById("img-prod-001-ivory-cream"))!,
      },
    ],
    retailDiscount: 0,
    wholesaleTiers: [
      { minQuantity: 5, discountPercentage: 15 },
      { minQuantity: 20, discountPercentage: 30 },
      { minQuantity: 100, discountPercentage: 45 },
    ],
    details: {
      fabric: "Cashmere Wool Blend",
      provenance: "Hand-crafted at Gbode Ventures Plaza Atelier, Lagos Island",
    },
    rating: {
      r2: 4,
      r4: 30,
      r6: 30,
      r8: 20,
      r10: 55,
    },
  },
  {
    id: "prod_002",
    name: "Signature Blazer",
    slug: "signature-blazer-2",
    badge: "LIMITED DROP",
    tagline:
      "Crafted for distinction \u2014 outerwear engineered with virgin wool twill.",
    subCategoryId: "sub-03",
    subCategory: await findSubCategoryById("sub-03"),
    styleId: "style-03",
    style: await findStyleById("style-03"),
    gender: "female",
    description:
      "Refined signature blazer tailored from virgin wool twill, combining Nigerian royal heritage with contemporary urban silhouettes.",
    fullDescription:
      "Designed and finished at JB Lux Enterprises on Lagos Island, the Signature Blazer exemplifies sartorial precision and everyday versatility. Constructed using virgin wool twill, each piece undergoes strict atelier quality inspection to ensure lasting structure, comfort, and elevated presence. Available for single retail orders as well as tiered wholesale bulk distribution with insured nationwide and international dispatch.",
    unitPrice: 1210000,
    isSale: true,
    stock: 80,
    isActive: true,
    sizes: ["sz-s", "sz-m", "sz-l", "sz-xl", "sz-xxl"],
    colors: [
      {
        colorId: "col-midnight-navy",
        color: (await findColorById("col-midnight-navy"))!,
        imageId: "img-prod-002-midnight-navy",
        image: (await findImageById("img-prod-002-midnight-navy"))!,
      },
      {
        colorId: "col-espresso-brown",
        color: (await findColorById("col-espresso-brown"))!,
        imageId: "img-prod-002-espresso-brown",
        image: (await findImageById("img-prod-002-espresso-brown"))!,
      },
      {
        colorId: "col-warm-sand",
        color: (await findColorById("col-warm-sand"))!,
        imageId: "img-prod-002-warm-sand",
        image: (await findImageById("img-prod-002-warm-sand"))!,
      },
    ],
    retailDiscount: 10,
    wholesaleTiers: [
      { minQuantity: 5, discountPercentage: 15 },
      { minQuantity: 20, discountPercentage: 30 },
      { minQuantity: 100, discountPercentage: 45 },
    ],
    details: {
      fabric: "Virgin Wool Twill",
      provenance: "Tailored in Lagos Island with imported Italian textiles",
    },
    rating: {
      r2: 4,
      r4: 30,
      r6: 40,
      r8: 20,
      r10: 20,
    },
  },
  {
    id: "prod_003",
    name: "Premium Trousers",
    slug: "premium-trousers-3",
    badge: "BESTSELLER",
    tagline:
      "Crafted for distinction \u2014 bottoms engineered with heavyweight cotton twill.",
    subCategoryId: "sub-02",
    subCategory: await findSubCategoryById("sub-02"),
    styleId: "style-07",
    style: await findStyleById("style-07"),
    gender: "unisex",
    description:
      "Refined premium trousers tailored from heavyweight cotton twill, combining Nigerian royal heritage with contemporary urban silhouettes.",
    fullDescription:
      "Designed and finished at JB Lux Enterprises on Lagos Island, the Premium Trousers exemplifies sartorial precision and everyday versatility. Constructed using heavyweight cotton twill, each piece undergoes strict atelier quality inspection to ensure lasting structure, comfort, and elevated presence. Available for single retail orders as well as tiered wholesale bulk distribution with insured nationwide and international dispatch.",
    unitPrice: 5200000,
    isSale: false,
    stock: 40,
    isActive: true,
    sizes: ["sz-s", "sz-m", "sz-l", "sz-xl", "sz-xxl"],
    colors: [
      {
        colorId: "col-charcoal-slate",
        color: (await findColorById("col-charcoal-slate"))!,
        imageId: "img-prod-003-charcoal-slate",
        image: (await findImageById("img-prod-003-charcoal-slate"))!,
      },
      {
        colorId: "col-olive-drab",
        color: (await findColorById("col-olive-drab"))!,
        imageId: "img-prod-003-olive-drab",
        image: (await findImageById("img-prod-003-olive-drab"))!,
      },
      {
        colorId: "col-burgundy-wine",
        color: (await findColorById("col-burgundy-wine"))!,
        imageId: "img-prod-003-burgundy-wine",
        image: (await findImageById("img-prod-003-burgundy-wine"))!,
      },
    ],
    retailDiscount: 2,
    wholesaleTiers: [
      { minQuantity: 5, discountPercentage: 15 },
      { minQuantity: 20, discountPercentage: 30 },
      { minQuantity: 100, discountPercentage: 45 },
    ],
    details: {
      fabric: "Heavyweight Cotton Twill",
      provenance:
        "Engineered at JB Lux Flagship Studio, Nnamdi Azikiwe St, Lagos",
    },
    rating: {
      r2: 4,
      r4: 49,
      r6: 30,
      r8: 49,
      r10: 55,
    },
  },
  {
    id: "prod_004",
    name: "Urban Shirt",
    slug: "urban-shirt-4",
    badge: "NEW ARRIVAL",
    tagline:
      "Crafted for distinction \u2014 tops engineered with egyptian giza cotton.",
    subCategoryId: "sub-01",
    subCategory: await findSubCategoryById("sub-01"),
    styleId: "style-04",
    style: await findStyleById("style-04"),
    gender: "male",
    description:
      "Refined urban shirt tailored from egyptian giza cotton, combining Nigerian royal heritage with contemporary urban silhouettes.",
    fullDescription:
      "Designed and finished at JB Lux Enterprises on Lagos Island, the Urban Shirt exemplifies sartorial precision and everyday versatility. Constructed using egyptian giza cotton, each piece undergoes strict atelier quality inspection to ensure lasting structure, comfort, and elevated presence. Available for single retail orders as well as tiered wholesale bulk distribution with insured nationwide and international dispatch.",
    unitPrice: 1300000,
    isSale: false,
    stock: 25,
    isActive: true,
    sizes: ["sz-s", "sz-m", "sz-l", "sz-xl", "sz-xxl"],
    colors: [
      {
        colorId: "col-onyx-black",
        color: (await findColorById("col-onyx-black"))!,
        imageId: "img-prod-004-onyx-black",
        image: (await findImageById("img-prod-004-onyx-black"))!,
      },
      {
        colorId: "col-stone-gray",
        color: (await findColorById("col-stone-gray"))!,
        imageId: "img-prod-004-stone-gray",
        image: (await findImageById("img-prod-004-stone-gray"))!,
      },
    ],
    retailDiscount: 0,
    wholesaleTiers: [
      { minQuantity: 5, discountPercentage: 15 },
      { minQuantity: 20, discountPercentage: 30 },
      { minQuantity: 100, discountPercentage: 45 },
    ],
    details: {
      fabric: "Egyptian Giza Cotton",
      provenance: "Small-batch atelier production, Lagos, Nigeria",
    },
    rating: {
      r2: 4,
      r4: 30,
      r6: 10,
      r8: 48,
      r10: 55,
    },
  },
  {
    id: "prod_005",
    name: "Classic Dress",
    slug: "classic-dress-5",
    badge: "WHOLESALE READY",
    tagline:
      "Crafted for distinction \u2014 one-pieces engineered with structured crepe.",
    subCategoryId: "sub-05",
    subCategory: await findSubCategoryById("sub-05"),
    styleId: "style-06",
    style: await findStyleById("style-06"),
    gender: "female",
    description:
      "Refined classic dress tailored from structured crepe, combining Nigerian royal heritage with contemporary urban silhouettes.",
    fullDescription:
      "Designed and finished at JB Lux Enterprises on Lagos Island, the Classic Dress exemplifies sartorial precision and everyday versatility. Constructed using structured crepe, each piece undergoes strict atelier quality inspection to ensure lasting structure, comfort, and elevated presence. Available for single retail orders as well as tiered wholesale bulk distribution with insured nationwide and international dispatch.",
    unitPrice: 1050000,
    isSale: false,
    stock: 24,
    isActive: true,
    sizes: ["sz-s", "sz-m", "sz-l", "sz-xl", "sz-xxl"],
    colors: [
      {
        colorId: "col-obsidian-black",
        color: (await findColorById("col-obsidian-black"))!,
        imageId: "img-prod-005-obsidian-black",
        image: (await findImageById("img-prod-005-obsidian-black"))!,
      },
      {
        colorId: "col-champagne-gold",
        color: (await findColorById("col-champagne-gold"))!,
        imageId: "img-prod-005-champagne-gold",
        image: (await findImageById("img-prod-005-champagne-gold"))!,
      },
      {
        colorId: "col-ivory-cream",
        color: (await findColorById("col-ivory-cream"))!,
        imageId: "img-prod-005-ivory-cream",
        image: (await findImageById("img-prod-005-ivory-cream"))!,
      },
    ],
    retailDiscount: 15,
    wholesaleTiers: [
      { minQuantity: 5, discountPercentage: 15 },
      { minQuantity: 20, discountPercentage: 30 },
      { minQuantity: 100, discountPercentage: 45 },
    ],
    details: {
      fabric: "Structured Crepe",
      provenance: "Hand-crafted at Gbode Ventures Plaza Atelier, Lagos Island",
    },
    rating: {
      r2: 4,
      r4: 2,
      r6: 20,
      r8: 20,
      r10: 44,
    },
  },

  // ---------- Footwear ----------
  {
    id: "prod_006",
    name: "Urban Penny Loafers",
    slug: "urban-penny-loafers-14",
    badge: "ATELIER SIGNATURE",
    tagline:
      "Crafted for distinction \u2014 formal footwear engineered with hand-burnished calfskin leather.",
    subCategoryId: "sub-08",
    subCategory: await findSubCategoryById("sub-08"),
    styleId: "style-03",
    style: await findStyleById("style-03"),
    gender: "female",
    description:
      "Refined urban penny loafers tailored from hand-burnished calfskin leather, combining Nigerian royal heritage with contemporary urban silhouettes.",
    fullDescription:
      "Designed and finished at JB Lux Enterprises on Lagos Island, the Urban Penny Loafers exemplifies sartorial precision and everyday versatility. Constructed using hand-burnished calfskin leather, each piece undergoes strict atelier quality inspection to ensure lasting structure, comfort, and elevated presence. Available for single retail orders as well as tiered wholesale bulk distribution with insured nationwide and international dispatch.",
    unitPrice: 1130000,
    isSale: false,
    stock: 110,
    isActive: true,
    sizes: [
      "sz-eu-40",
      "sz-eu-41",
      "sz-eu-42",
      "sz-eu-43",
      "sz-eu-44",
      "sz-eu-45",
    ],
    colors: [
      {
        colorId: "col-midnight-navy",
        color: (await findColorById("col-midnight-navy"))!,
        imageId: "img-prod-006-midnight-navy",
        image: (await findImageById("img-prod-006-midnight-navy"))!,
      },
      {
        colorId: "col-espresso-brown",
        color: (await findColorById("col-espresso-brown"))!,
        imageId: "img-prod-006-espresso-brown",
        image: (await findImageById("img-prod-006-espresso-brown"))!,
      },
      {
        colorId: "col-warm-sand",
        color: (await findColorById("col-warm-sand"))!,
        imageId: "img-prod-006-warm-sand",
        image: (await findImageById("img-prod-006-warm-sand"))!,
      },
    ],
    retailDiscount: 0,
    wholesaleTiers: [
      { minQuantity: 5, discountPercentage: 15 },
      { minQuantity: 20, discountPercentage: 30 },
      { minQuantity: 100, discountPercentage: 45 },
    ],
    details: {
      fabric: "Hand-Burnished Calfskin Leather",
      provenance: "Tailored in Lagos Island with imported Italian textiles",
    },
    rating: {
      r2: 4,
      r4: 30,
      r6: 20,
      r8: 20,
      r10: 20,
    },
  },
  {
    id: "prod_007",
    name: "Classic Court Sneakers",
    slug: "classic-court-sneakers-15",
    badge: "BESTSELLER",
    tagline:
      "Crafted for distinction \u2014 casual footwear engineered with suede & technical mesh.",
    subCategoryId: "sub-07",
    subCategory: await findSubCategoryById("sub-07"),
    styleId: "style-01",
    style: await findStyleById("style-01"),
    gender: "unisex",
    description:
      "Refined classic court sneakers tailored from suede & technical mesh, combining Nigerian royal heritage with contemporary urban silhouettes.",
    fullDescription:
      "Designed and finished at JB Lux Enterprises on Lagos Island, the Classic Court Sneakers exemplifies sartorial precision and everyday versatility. Constructed using suede & technical mesh, each piece undergoes strict atelier quality inspection to ensure lasting structure, comfort, and elevated presence. Available for single retail orders as well as tiered wholesale bulk distribution with insured nationwide and international dispatch.",
    unitPrice: 1110000,
    isSale: true,
    stock: 35,
    isActive: true,
    sizes: [
      "sz-eu-40",
      "sz-eu-41",
      "sz-eu-42",
      "sz-eu-43",
      "sz-eu-44",
      "sz-eu-45",
    ],
    colors: [
      {
        colorId: "col-charcoal-slate",
        color: (await findColorById("col-charcoal-slate"))!,
        imageId: "img-prod-007-charcoal-slate",
        image: (await findImageById("img-prod-007-charcoal-slate"))!,
      },
      {
        colorId: "col-olive-drab",
        color: (await findColorById("col-olive-drab"))!,
        imageId: "img-prod-007-olive-drab",
        image: (await findImageById("img-prod-007-olive-drab"))!,
      },
      {
        colorId: "col-burgundy-wine",
        color: (await findColorById("col-burgundy-wine"))!,
        imageId: "img-prod-007-burgundy-wine",
        image: (await findImageById("img-prod-007-burgundy-wine"))!,
      },
    ],
    retailDiscount: 5,
    wholesaleTiers: [
      { minQuantity: 5, discountPercentage: 15 },
      { minQuantity: 20, discountPercentage: 30 },
      { minQuantity: 100, discountPercentage: 45 },
    ],
    details: {
      fabric: "Suede & Technical Mesh",
      provenance:
        "Engineered at JB Lux Flagship Studio, Nnamdi Azikiwe St, Lagos",
    },
    rating: {
      r2: 4,
      r4: 48,
      r6: 11,
      r8: 20,
      r10: 29,
    },
  },
  {
    id: "prod_008",
    name: "Elite Chelsea Boots",
    slug: "elite-chelsea-boots-16",
    badge: "NEW ARRIVAL",
    tagline:
      "Crafted for distinction \u2014 boots engineered with full-grain pull-up leather.",
    subCategoryId: "sub-09",
    subCategory: await findSubCategoryById("sub-09"),
    styleId: "style-04",
    style: await findStyleById("style-04"),
    gender: "male",
    description:
      "Refined elite chelsea boots tailored from full-grain pull-up leather, combining Nigerian royal heritage with contemporary urban silhouettes.",
    fullDescription:
      "Designed and finished at JB Lux Enterprises on Lagos Island, the Elite Chelsea Boots exemplifies sartorial precision and everyday versatility. Constructed using full-grain pull-up leather, each piece undergoes strict atelier quality inspection to ensure lasting structure, comfort, and elevated presence. Available for single retail orders as well as tiered wholesale bulk distribution with insured nationwide and international dispatch.",
    unitPrice: 1205000,
    isSale: false,
    stock: 92,
    isActive: true,
    sizes: [
      "sz-eu-40",
      "sz-eu-41",
      "sz-eu-42",
      "sz-eu-43",
      "sz-eu-44",
      "sz-eu-45",
    ],
    colors: [
      {
        colorId: "col-onyx-black",
        color: (await findColorById("col-onyx-black"))!,
        imageId: "img-prod-008-onyx-black",
        image: (await findImageById("img-prod-008-onyx-black"))!,
      },
      {
        colorId: "col-stone-gray",
        color: (await findColorById("col-stone-gray"))!,
        imageId: "img-prod-008-stone-gray",
        image: (await findImageById("img-prod-008-stone-gray"))!,
      },
    ],
    retailDiscount: 0,
    wholesaleTiers: [
      { minQuantity: 5, discountPercentage: 15 },
      { minQuantity: 20, discountPercentage: 30 },
      { minQuantity: 100, discountPercentage: 45 },
    ],
    details: {
      fabric: "Full-Grain Pull-Up Leather",
      provenance: "Small-batch atelier production, Lagos, Nigeria",
    },
    rating: {
      r2: 4,
      r4: 2,
      r6: 30,
      r8: 39,
      r10: 1,
    },
  },

  // ---------- Eyewear ----------
  {
    id: "prod_009",
    name: "Signature Gold-Rim Aviators",
    slug: "signature-gold-rim-aviators-40",
    badge: "ATELIER SIGNATURE",
    tagline:
      "Crafted for distinction \u2014 sunglasses engineered with 18k gold-plated titanium & polarized glass.",
    subCategoryId: "sub-14",
    subCategory: await findSubCategoryById("sub-14"),
    styleId: "style-06",
    style: await findStyleById("style-06"),
    gender: "male",
    description:
      "Refined signature gold-rim aviators tailored from 18k gold-plated titanium & polarized glass, combining Nigerian royal heritage with contemporary urban silhouettes.",
    fullDescription:
      "Designed and finished at JB Lux Enterprises on Lagos Island, the Signature Gold-Rim Aviators exemplifies sartorial precision and everyday versatility. Constructed using 18k gold-plated titanium & polarized glass, each piece undergoes strict atelier quality inspection to ensure lasting structure, comfort, and elevated presence. Available for single retail orders as well as tiered wholesale bulk distribution with insured nationwide and international dispatch.",
    unitPrice: 5500000,
    isSale: false,
    stock: 134,
    isActive: true,
    sizes: ["sz-lens-52", "sz-lens-54", "sz-lens-56"],
    colors: [
      {
        colorId: "col-onyx-black",
        color: (await findColorById("col-onyx-black"))!,
        imageId: "img-prod-009-onyx-black",
        image: (await findImageById("img-prod-009-onyx-black"))!,
      },
      {
        colorId: "col-stone-gray",
        color: (await findColorById("col-stone-gray"))!,
        imageId: "img-prod-009-stone-gray",
        image: (await findImageById("img-prod-009-stone-gray"))!,
      },
    ],
    retailDiscount: 9,
    wholesaleTiers: [
      { minQuantity: 5, discountPercentage: 15 },
      { minQuantity: 20, discountPercentage: 30 },
      { minQuantity: 100, discountPercentage: 45 },
    ],
    details: {
      fabric: "18k Gold-Plated Titanium & Polarized Glass",
      provenance: "Small-batch atelier production, Lagos, Nigeria",
    },
    rating: {
      r2: 4,
      r4: 30,
      r6: 58,
      r8: 49,
      r10: 90,
    },
  },
  {
    id: "prod_010",
    name: "Premium Tortoiseshell Wayfarers",
    slug: "premium-tortoiseshell-wayfarers-41",
    badge: "WHOLESALE READY",
    tagline:
      "Crafted for distinction \u2014 sunglasses engineered with bio-acetate & polarized lenses.",
    subCategoryId: "sub-14",
    subCategory: await findSubCategoryById("sub-14"),
    styleId: "style-07",
    style: await findStyleById("style-07"),
    gender: "female",
    description:
      "Refined premium tortoiseshell wayfarers tailored from bio-acetate & polarized lenses, combining Nigerian royal heritage with contemporary urban silhouettes.",
    fullDescription:
      "Designed and finished at JB Lux Enterprises on Lagos Island, the Premium Tortoiseshell Wayfarers exemplifies sartorial precision and everyday versatility. Constructed using bio-acetate & polarized lenses, each piece undergoes strict atelier quality inspection to ensure lasting structure, comfort, and elevated presence. Available for single retail orders as well as tiered wholesale bulk distribution with insured nationwide and international dispatch.",
    unitPrice: 5009000,
    isSale: true,
    stock: 63,
    isActive: true,
    sizes: ["sz-lens-52", "sz-lens-54", "sz-lens-56"],
    colors: [
      {
        colorId: "col-obsidian-black",
        color: (await findColorById("col-obsidian-black"))!,
        imageId: "img-prod-010-obsidian-black",
        image: (await findImageById("img-prod-010-obsidian-black"))!,
      },
      {
        colorId: "col-champagne-gold",
        color: (await findColorById("col-champagne-gold"))!,
        imageId: "img-prod-010-champagne-gold",
        image: (await findImageById("img-prod-010-champagne-gold"))!,
      },
      {
        colorId: "col-ivory-cream",
        color: (await findColorById("col-ivory-cream"))!,
        imageId: "img-prod-010-ivory-cream",
        image: (await findImageById("img-prod-010-ivory-cream"))!,
      },
    ],
    retailDiscount: 0,
    wholesaleTiers: [
      { minQuantity: 5, discountPercentage: 15 },
      { minQuantity: 20, discountPercentage: 30 },
      { minQuantity: 100, discountPercentage: 45 },
    ],
    details: {
      fabric: "Bio-Acetate & Polarized Lenses",
      provenance: "Hand-crafted at Gbode Ventures Plaza Atelier, Lagos Island",
    },
    rating: {
      r2: 4,
      r4: 21,
      r6: 30,
      r8: 32,
      r10: 55,
    },
  },
]);

export async function findProductById(
  id: string,
): Promise<ProductType | undefined> {
  return (await productsData).find((each) => each.id === id);
}
