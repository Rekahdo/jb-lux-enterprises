import { productsValidator } from "@/convex/schema";
import { Infer } from "convex/values";
import { SrcImage } from "./header";

export type ColorImage = {
  name: string;
  hex?: string;
  image: SrcImage;
};

type ValidatorType = Infer<typeof productsValidator>;

export type ProductType = Omit<ValidatorType, "colors"> & {
  id: string;
  colors: ColorImage[];
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
    category: "Clothing / Apparel",
    subCategory: "Traditional & Cultural Wear",
    gender: "male",
    description:
      "Refined luxury senator suit tailored from cashmere wool blend, combining Nigerian royal heritage with contemporary urban silhouettes.",
    fullDescription:
      "Designed and finished at JB Lux Enterprises on Lagos Island, the Luxury Senator Suit exemplifies sartorial precision and everyday versatility. Constructed using cashmere wool blend, each piece undergoes strict atelier quality inspection to ensure lasting structure, comfort, and elevated presence. Available for single retail orders as well as tiered wholesale bulk distribution with insured nationwide and international dispatch.",
    unitPrice: 179000,
    isSale: false,
    stock: 46,
    isActive: true,
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      {
        name: "Obsidian Black",
        hex: "#141311",
        image: {
          src: "https://picsum.photos/seed/luxury-senator-suit-1-0/800/1000",
          alt: "Luxury Senator Suit - Obsidian Black",
        },
      },
      {
        name: "Champagne Gold",
        hex: "#D4AF37",
        image: {
          src: "https://loremflickr.com/800/1000/suit,fashion?lock=11",
          alt: "Luxury Senator Suit - Champagne Gold",
        },
      },
      {
        name: "Ivory Cream",
        hex: "#FAF8F5",
        image: {
          src: "https://picsum.photos/seed/luxury-senator-suit-1-2/800/1000",
          alt: "Luxury Senator Suit - Ivory Cream",
        },
      },
    ],
    wholesaleTiers: [
      { minQuantity: 5, discountPercentage: 15 },
      { minQuantity: 20, discountPercentage: 30 },
      { minQuantity: 100, discountPercentage: 45 },
    ],
    details: {
      fabric: "Cashmere Wool Blend",
      provenance: "Hand-crafted at Gbode Ventures Plaza Atelier, Lagos Island",
    },
    isFeatured: true,
    isPopular: true,
    isCategory: true,
    rating: 4.7,
  },
  {
    id: "prod_002",
    name: "Signature Blazer",
    slug: "signature-blazer-2",
    badge: "LIMITED DROP",
    tagline:
      "Crafted for distinction \u2014 outerwear engineered with virgin wool twill.",
    category: "Clothing / Apparel",
    subCategory: "Outerwear",
    gender: "female",
    description:
      "Refined signature blazer tailored from virgin wool twill, combining Nigerian royal heritage with contemporary urban silhouettes.",
    fullDescription:
      "Designed and finished at JB Lux Enterprises on Lagos Island, the Signature Blazer exemplifies sartorial precision and everyday versatility. Constructed using virgin wool twill, each piece undergoes strict atelier quality inspection to ensure lasting structure, comfort, and elevated presence. Available for single retail orders as well as tiered wholesale bulk distribution with insured nationwide and international dispatch.",
    unitPrice: 121000,
    isSale: true,
    stock: 80,
    isActive: true,
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      {
        name: "Midnight Navy",
        hex: "#1B263B",
        image: {
          src: "https://loremflickr.com/800/1000/blazer,fashion?lock=20",
          alt: "Signature Blazer - Midnight Navy",
        },
      },
      {
        name: "Espresso Brown",
        hex: "#3E2723",
        image: {
          src: "https://picsum.photos/seed/signature-blazer-2-1/800/1000",
          alt: "Signature Blazer - Espresso Brown",
        },
      },
      {
        name: "Warm Sand",
        hex: "#D6C7B2",
        image: {
          src: "https://loremflickr.com/800/1000/blazer,fashion?lock=22",
          alt: "Signature Blazer - Warm Sand",
        },
      },
    ],
    wholesaleTiers: [
      { minQuantity: 5, discountPercentage: 15 },
      { minQuantity: 20, discountPercentage: 30 },
      { minQuantity: 100, discountPercentage: 45 },
    ],
    details: {
      fabric: "Virgin Wool Twill",
      provenance: "Tailored in Lagos Island with imported Italian textiles",
    },
    isFeatured: true,
    isPopular: true,
    isCategory: false,
    rating: 4.8,
  },
  {
    id: "prod_003",
    name: "Premium Trousers",
    slug: "premium-trousers-3",
    badge: "BESTSELLER",
    tagline:
      "Crafted for distinction \u2014 bottoms engineered with heavyweight cotton twill.",
    category: "Clothing / Apparel",
    subCategory: "Bottoms",
    gender: "unisex",
    description:
      "Refined premium trousers tailored from heavyweight cotton twill, combining Nigerian royal heritage with contemporary urban silhouettes.",
    fullDescription:
      "Designed and finished at JB Lux Enterprises on Lagos Island, the Premium Trousers exemplifies sartorial precision and everyday versatility. Constructed using heavyweight cotton twill, each piece undergoes strict atelier quality inspection to ensure lasting structure, comfort, and elevated presence. Available for single retail orders as well as tiered wholesale bulk distribution with insured nationwide and international dispatch.",
    unitPrice: 52000,
    isSale: false,
    stock: 40,
    isActive: true,
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      {
        name: "Charcoal Slate",
        hex: "#2F323A",
        image: {
          src: "https://picsum.photos/seed/premium-trousers-3-0/800/1000",
          alt: "Premium Trousers - Charcoal Slate",
        },
      },
      {
        name: "Olive Drab",
        hex: "#4B5320",
        image: {
          src: "https://loremflickr.com/800/1000/trousers,fashion?lock=31",
          alt: "Premium Trousers - Olive Drab",
        },
      },
      {
        name: "Burgundy Wine",
        hex: "#5E1914",
        image: {
          src: "https://picsum.photos/seed/premium-trousers-3-2/800/1000",
          alt: "Premium Trousers - Burgundy Wine",
        },
      },
    ],
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
    isFeatured: false,
    isPopular: true,
    isCategory: false,
    rating: 4.9,
  },
  {
    id: "prod_004",
    name: "Urban Shirt",
    slug: "urban-shirt-4",
    badge: "NEW ARRIVAL",
    tagline:
      "Crafted for distinction \u2014 tops engineered with egyptian giza cotton.",
    category: "Clothing / Apparel",
    subCategory: "Tops",
    gender: "male",
    description:
      "Refined urban shirt tailored from egyptian giza cotton, combining Nigerian royal heritage with contemporary urban silhouettes.",
    fullDescription:
      "Designed and finished at JB Lux Enterprises on Lagos Island, the Urban Shirt exemplifies sartorial precision and everyday versatility. Constructed using egyptian giza cotton, each piece undergoes strict atelier quality inspection to ensure lasting structure, comfort, and elevated presence. Available for single retail orders as well as tiered wholesale bulk distribution with insured nationwide and international dispatch.",
    unitPrice: 37000,
    isSale: false,
    stock: 25,
    isActive: true,
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      {
        name: "Onyx Black",
        hex: "#0F0F0F",
        image: {
          src: "https://loremflickr.com/800/1000/shirt,fashion?lock=40",
          alt: "Urban Shirt - Onyx Black",
        },
      },
      {
        name: "Stone Gray",
        hex: "#8E8E93",
        image: {
          src: "https://picsum.photos/seed/urban-shirt-4-1/800/1000",
          alt: "Urban Shirt - Stone Gray",
        },
      },
    ],
    wholesaleTiers: [
      { minQuantity: 5, discountPercentage: 15 },
      { minQuantity: 20, discountPercentage: 30 },
      { minQuantity: 100, discountPercentage: 45 },
    ],
    details: {
      fabric: "Egyptian Giza Cotton",
      provenance: "Small-batch atelier production, Lagos, Nigeria",
    },
    isFeatured: false,
    isPopular: true,
    isCategory: false,
    rating: 4.7,
  },
  {
    id: "prod_005",
    name: "Classic Dress",
    slug: "classic-dress-5",
    badge: "WHOLESALE READY",
    tagline:
      "Crafted for distinction \u2014 one-pieces engineered with structured crepe.",
    category: "Clothing / Apparel",
    subCategory: "One-Pieces",
    gender: "female",
    description:
      "Refined classic dress tailored from structured crepe, combining Nigerian royal heritage with contemporary urban silhouettes.",
    fullDescription:
      "Designed and finished at JB Lux Enterprises on Lagos Island, the Classic Dress exemplifies sartorial precision and everyday versatility. Constructed using structured crepe, each piece undergoes strict atelier quality inspection to ensure lasting structure, comfort, and elevated presence. Available for single retail orders as well as tiered wholesale bulk distribution with insured nationwide and international dispatch.",
    unitPrice: 105000,
    isSale: false,
    stock: 24,
    isActive: true,
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      {
        name: "Obsidian Black",
        hex: "#141311",
        image: {
          src: "https://picsum.photos/seed/classic-dress-5-0/800/1000",
          alt: "Classic Dress - Obsidian Black",
        },
      },
      {
        name: "Champagne Gold",
        hex: "#D4AF37",
        image: {
          src: "https://loremflickr.com/800/1000/dress,fashion?lock=51",
          alt: "Classic Dress - Champagne Gold",
        },
      },
      {
        name: "Ivory Cream",
        hex: "#FAF8F5",
        image: {
          src: "https://picsum.photos/seed/classic-dress-5-2/800/1000",
          alt: "Classic Dress - Ivory Cream",
        },
      },
    ],
    wholesaleTiers: [
      { minQuantity: 5, discountPercentage: 15 },
      { minQuantity: 20, discountPercentage: 30 },
      { minQuantity: 100, discountPercentage: 45 },
    ],
    details: {
      fabric: "Structured Crepe",
      provenance: "Hand-crafted at Gbode Ventures Plaza Atelier, Lagos Island",
    },
    isFeatured: false,
    isPopular: true,
    isCategory: false,
    rating: 4.9,
  },

  // ---------- Footwear ----------
  {
    id: "prod_006",
    name: "Urban Penny Loafers",
    slug: "urban-penny-loafers-14",
    badge: "ATELIER SIGNATURE",
    tagline:
      "Crafted for distinction \u2014 formal footwear engineered with hand-burnished calfskin leather.",
    category: "Footwear",
    subCategory: "Formal Footwear",
    gender: "female",
    description:
      "Refined urban penny loafers tailored from hand-burnished calfskin leather, combining Nigerian royal heritage with contemporary urban silhouettes.",
    fullDescription:
      "Designed and finished at JB Lux Enterprises on Lagos Island, the Urban Penny Loafers exemplifies sartorial precision and everyday versatility. Constructed using hand-burnished calfskin leather, each piece undergoes strict atelier quality inspection to ensure lasting structure, comfort, and elevated presence. Available for single retail orders as well as tiered wholesale bulk distribution with insured nationwide and international dispatch.",
    unitPrice: 113000,
    isSale: false,
    stock: 110,
    isActive: true,
    sizes: ["40", "41", "42", "43", "44", "45"],
    colors: [
      {
        name: "Midnight Navy",
        hex: "#1B263B",
        image: {
          src: "https://loremflickr.com/800/1000/loafers,shoes?lock=140",
          alt: "Urban Penny Loafers - Midnight Navy",
        },
      },
      {
        name: "Espresso Brown",
        hex: "#3E2723",
        image: {
          src: "https://picsum.photos/seed/urban-penny-loafers-14-1/800/1000",
          alt: "Urban Penny Loafers - Espresso Brown",
        },
      },
      {
        name: "Warm Sand",
        hex: "#D6C7B2",
        image: {
          src: "https://loremflickr.com/800/1000/loafers,shoes?lock=142",
          alt: "Urban Penny Loafers - Warm Sand",
        },
      },
    ],
    wholesaleTiers: [
      { minQuantity: 5, discountPercentage: 15 },
      { minQuantity: 20, discountPercentage: 30 },
      { minQuantity: 100, discountPercentage: 45 },
    ],
    details: {
      fabric: "Hand-Burnished Calfskin Leather",
      provenance: "Tailored in Lagos Island with imported Italian textiles",
    },
    isFeatured: true,
    isPopular: true,
    isCategory: true,
    rating: 4.9,
  },
  {
    id: "prod_007",
    name: "Classic Court Sneakers",
    slug: "classic-court-sneakers-15",
    badge: "BESTSELLER",
    tagline:
      "Crafted for distinction \u2014 casual footwear engineered with suede & technical mesh.",
    category: "Footwear",
    subCategory: "Casual Footwear",
    gender: "unisex",
    description:
      "Refined classic court sneakers tailored from suede & technical mesh, combining Nigerian royal heritage with contemporary urban silhouettes.",
    fullDescription:
      "Designed and finished at JB Lux Enterprises on Lagos Island, the Classic Court Sneakers exemplifies sartorial precision and everyday versatility. Constructed using suede & technical mesh, each piece undergoes strict atelier quality inspection to ensure lasting structure, comfort, and elevated presence. Available for single retail orders as well as tiered wholesale bulk distribution with insured nationwide and international dispatch.",
    unitPrice: 111000,
    isSale: true,
    stock: 35,
    isActive: true,
    sizes: ["40", "41", "42", "43", "44", "45"],
    colors: [
      {
        name: "Charcoal Slate",
        hex: "#2F323A",
        image: {
          src: "https://picsum.photos/seed/classic-court-sneakers-15-0/800/1000",
          alt: "Classic Court Sneakers - Charcoal Slate",
        },
      },
      {
        name: "Olive Drab",
        hex: "#4B5320",
        image: {
          src: "https://loremflickr.com/800/1000/sneakers,shoes?lock=151",
          alt: "Classic Court Sneakers - Olive Drab",
        },
      },
      {
        name: "Burgundy Wine",
        hex: "#5E1914",
        image: {
          src: "https://picsum.photos/seed/classic-court-sneakers-15-2/800/1000",
          alt: "Classic Court Sneakers - Burgundy Wine",
        },
      },
    ],
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
    isFeatured: true,
    isPopular: true,
    isCategory: false,
    rating: 4.7,
  },
  {
    id: "prod_008",
    name: "Elite Chelsea Boots",
    slug: "elite-chelsea-boots-16",
    badge: "NEW ARRIVAL",
    tagline:
      "Crafted for distinction \u2014 boots engineered with full-grain pull-up leather.",
    category: "Footwear",
    subCategory: "Boots",
    gender: "male",
    description:
      "Refined elite chelsea boots tailored from full-grain pull-up leather, combining Nigerian royal heritage with contemporary urban silhouettes.",
    fullDescription:
      "Designed and finished at JB Lux Enterprises on Lagos Island, the Elite Chelsea Boots exemplifies sartorial precision and everyday versatility. Constructed using full-grain pull-up leather, each piece undergoes strict atelier quality inspection to ensure lasting structure, comfort, and elevated presence. Available for single retail orders as well as tiered wholesale bulk distribution with insured nationwide and international dispatch.",
    unitPrice: 125000,
    isSale: false,
    stock: 92,
    isActive: true,
    sizes: ["40", "41", "42", "43", "44", "45"],
    colors: [
      {
        name: "Onyx Black",
        hex: "#0F0F0F",
        image: {
          src: "https://loremflickr.com/800/1000/boots,leather?lock=160",
          alt: "Elite Chelsea Boots - Onyx Black",
        },
      },
      {
        name: "Stone Gray",
        hex: "#8E8E93",
        image: {
          src: "https://picsum.photos/seed/elite-chelsea-boots-16-1/800/1000",
          alt: "Elite Chelsea Boots - Stone Gray",
        },
      },
    ],
    wholesaleTiers: [
      { minQuantity: 5, discountPercentage: 15 },
      { minQuantity: 20, discountPercentage: 30 },
      { minQuantity: 100, discountPercentage: 45 },
    ],
    details: {
      fabric: "Full-Grain Pull-Up Leather",
      provenance: "Small-batch atelier production, Lagos, Nigeria",
    },
    isFeatured: false,
    isPopular: true,
    isCategory: false,
    rating: 5.0,
  },

  // ---------- Eyewear ----------
  {
    id: "prod_009",
    name: "Signature Gold-Rim Aviators",
    slug: "signature-gold-rim-aviators-40",
    badge: "ATELIER SIGNATURE",
    tagline:
      "Crafted for distinction \u2014 sunglasses engineered with 18k gold-plated titanium & polarized glass.",
    category: "Eyewear",
    subCategory: "Sunglasses",
    gender: "male",
    description:
      "Refined signature gold-rim aviators tailored from 18k gold-plated titanium & polarized glass, combining Nigerian royal heritage with contemporary urban silhouettes.",
    fullDescription:
      "Designed and finished at JB Lux Enterprises on Lagos Island, the Signature Gold-Rim Aviators exemplifies sartorial precision and everyday versatility. Constructed using 18k gold-plated titanium & polarized glass, each piece undergoes strict atelier quality inspection to ensure lasting structure, comfort, and elevated presence. Available for single retail orders as well as tiered wholesale bulk distribution with insured nationwide and international dispatch.",
    unitPrice: 55000,
    isSale: false,
    stock: 134,
    isActive: true,
    sizes: ["52mm", "54mm", "56mm"],
    colors: [
      {
        name: "Onyx Black",
        hex: "#0F0F0F",
        image: {
          src: "https://loremflickr.com/800/1000/aviator,sunglasses?lock=400",
          alt: "Signature Gold-Rim Aviators - Onyx Black",
        },
      },
      {
        name: "Stone Gray",
        hex: "#8E8E93",
        image: {
          src: "https://picsum.photos/seed/signature-gold-rim-aviators-40-1/800/1000",
          alt: "Signature Gold-Rim Aviators - Stone Gray",
        },
      },
    ],
    wholesaleTiers: [
      { minQuantity: 5, discountPercentage: 15 },
      { minQuantity: 20, discountPercentage: 30 },
      { minQuantity: 100, discountPercentage: 45 },
    ],
    details: {
      fabric: "18k Gold-Plated Titanium & Polarized Glass",
      provenance: "Small-batch atelier production, Lagos, Nigeria",
    },
    isFeatured: true,
    isPopular: true,
    isCategory: true,
    rating: 4.7,
  },
  {
    id: "prod_010",
    name: "Premium Tortoiseshell Wayfarers",
    slug: "premium-tortoiseshell-wayfarers-41",
    badge: "WHOLESALE READY",
    tagline:
      "Crafted for distinction \u2014 sunglasses engineered with bio-acetate & polarized lenses.",
    category: "Eyewear",
    subCategory: "Sunglasses",
    gender: "female",
    description:
      "Refined premium tortoiseshell wayfarers tailored from bio-acetate & polarized lenses, combining Nigerian royal heritage with contemporary urban silhouettes.",
    fullDescription:
      "Designed and finished at JB Lux Enterprises on Lagos Island, the Premium Tortoiseshell Wayfarers exemplifies sartorial precision and everyday versatility. Constructed using bio-acetate & polarized lenses, each piece undergoes strict atelier quality inspection to ensure lasting structure, comfort, and elevated presence. Available for single retail orders as well as tiered wholesale bulk distribution with insured nationwide and international dispatch.",
    unitPrice: 59000,
    isSale: true,
    stock: 63,
    isActive: true,
    sizes: ["52mm", "54mm", "56mm"],
    colors: [
      {
        name: "Obsidian Black",
        hex: "#141311",
        image: {
          src: "https://picsum.photos/seed/premium-tortoiseshell-wayfarers-41-0/800/1000",
          alt: "Premium Tortoiseshell Wayfarers - Obsidian Black",
        },
      },
      {
        name: "Champagne Gold",
        hex: "#D4AF37",
        image: {
          src: "https://loremflickr.com/800/1000/sunglasses,eyewear?lock=411",
          alt: "Premium Tortoiseshell Wayfarers - Champagne Gold",
        },
      },
      {
        name: "Ivory Cream",
        hex: "#FAF8F5",
        image: {
          src: "https://picsum.photos/seed/premium-tortoiseshell-wayfarers-41-2/800/1000",
          alt: "Premium Tortoiseshell Wayfarers - Ivory Cream",
        },
      },
    ],
    wholesaleTiers: [
      { minQuantity: 5, discountPercentage: 15 },
      { minQuantity: 20, discountPercentage: 30 },
      { minQuantity: 100, discountPercentage: 45 },
    ],
    details: {
      fabric: "Bio-Acetate & Polarized Lenses",
      provenance: "Hand-crafted at Gbode Ventures Plaza Atelier, Lagos Island",
    },
    isFeatured: true,
    isPopular: true,
    isCategory: false,
    rating: 4.9,
  },
]);
