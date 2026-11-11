import { productsValidator } from "@/convex/schema";
import { SrcImage } from "@/data/header";
import { Infer } from "convex/values";

export type ColorImage = {
  name: string;
  hex?: string;
  image: SrcImage;
};

type ValidatorType = Infer<typeof productsValidator>;

type PromiseType = Omit<ValidatorType, "images" | "colors"> & {
  id: string;
  colors: ColorImage[];
};

const generateMockProducts = (): PromiseType[] => {
  const types = [
    "streetwear",
    "casual",
    "formal",
    "traditional",
    "athleisure",
    "outerwear",
  ];
  const genders = ["male", "female", "unisex"] as const;
  const adjectives = [
    "Luxury",
    "Signature",
    "Premium",
    "Urban",
    "Classic",
    "Elite",
    "Royal",
    "Modern",
  ];
  const items = [
    "Blazer",
    "Trousers",
    "Shirt",
    "Dress",
    "Jacket",
    "Tee",
    "Joggers",
    "Kaftan",
    "Polo",
    "Trench Coat",
  ];

  const getSmallImage = (id: number) =>
    `https://picsum.photos/seed/jblux${id}/800/800`;

  return Array.from({ length: 95 }).map((_, i) => {
    const adj = adjectives[i % adjectives.length];
    const item = items[i % items.length];
    const gender = genders[i % genders.length];
    const type = types[i % types.length];
    const id = i + 100;

    return {
      id: `prod-${id}`,
      name: `${adj} ${item}`,
      slug: `${adj.toLowerCase()}-${item.toLowerCase()}-${id}`,
      badge: i % 5 === 0 ? "Best Seller" : undefined,
      category: "cloth",
      type: type,
      gender: gender,
      description: `Experience the perfect blend of comfort and style with our ${adj.toLowerCase()} ${item.toLowerCase()}.`,
      unitPrice: 40000 + i * 1500,
      stock: 50 + i,
      sizes: ["S", "M", "L", "XL"],
      colors: [
        {
          name: "Default Colorway",
          hex: "#000000",
          image: { src: getSmallImage(id), alt: `${adj} ${item}` },
        },
      ],
      wholesaleTiers: [
        { minQuantity: 10, discountPercentage: 15 },
        { minQuantity: 50, discountPercentage: 30 },
      ],
      details: {
        fabric: "Premium imported blend",
        provenance: "Crafted internationally",
        fullDescription: `Elevate your wardrobe with this exceptional ${item.toLowerCase()}. Designed for the modern trendsetter.`,
      },
      isBespokeAvailable: i % 4 === 0,
    };
  });
};

export const productsData: Promise<PromiseType[]> = Promise.resolve([
  {
    id: "prod-001",
    name: "Gold Crest Bomber Jacket",
    slug: "gold-crest-bomber-jacket",
    badge: "Signature Collection",
    category: "cloth",
    type: "streetwear",
    gender: "male",
    description:
      "Matte technical satin with hand-embroidered golden lion crest",
    unitPrice: 85000,
    stock: 88,
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      {
        name: "Jet Black with Gold Hardware",
        hex: "#000000",
        image: {
          src: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&q=80",
          alt: "Jet Black Bomber",
        },
      },
    ],
    wholesaleTiers: [
      { minQuantity: 5, discountPercentage: 18 },
      { minQuantity: 20, discountPercentage: 28 },
      { minQuantity: 50, discountPercentage: 40 },
    ],
    details: {
      fabric: "Heavyweight Japanese Technical Satin (320 GSM)",
      provenance: "Precision engineered in Lagos & Milan",
      fullDescription:
        "The pinnacle of Lagos urban high-fashion. Breathable micro-quilted luxury viscose lining ensures effortless comfort in both tropical climates and air-conditioned lounges.",
    },
    isBespokeAvailable: true,
  },
  {
    id: "prod-002",
    name: "Illicit Luxury Hoodie",
    slug: "illicit-luxury-hoodie",
    badge: "New Arrival",
    category: "cloth",
    type: "streetwear",
    gender: "unisex",
    description:
      "500 GSM loopback French terry with mirror gold foil typography",
    unitPrice: 52000,
    stock: 140,
    sizes: ["S", "M", "L", "XL", "XXL", "3XL"],
    colors: [
      {
        name: "Obsidian Black",
        hex: "#1a1a1a",
        image: {
          src: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&q=80",
          alt: "Obsidian Black Hoodie",
        },
      },
      {
        name: "Charcoal Heather",
        hex: "#36454F",
        image: {
          src: "https://images.unsplash.com/photo-1578681994506-b8f463449011?w=800&q=80",
          alt: "Charcoal Heather Hoodie",
        },
      },
    ],
    wholesaleTiers: [
      { minQuantity: 10, discountPercentage: 20 },
      { minQuantity: 30, discountPercentage: 30 },
      { minQuantity: 100, discountPercentage: 42 },
    ],
    details: {
      fabric: "100% Combed Egyptian Loopback Cotton (500 GSM)",
      provenance: "Atelier Finished, Lagos",
      fullDescription:
        "Engineered for modern streetwear connoisseurs. Features an oversized double-layered hood without exposed eyelets, seamless kangaroo pocket with concealed headphone port.",
    },
    isBespokeAvailable: false,
  },
  {
    id: "prod-003",
    name: "Signature Silk Senator Set",
    slug: "signature-silk-senator-set",
    badge: "Bespoke",
    category: "cloth",
    type: "traditional",
    gender: "male",
    description: "Premium cashmere silk blend with subtle embroidery.",
    unitPrice: 120000,
    stock: 25,
    sizes: ["M", "L", "XL", "XXL"],
    colors: [
      {
        name: "Royal Navy",
        hex: "#000080",
        image: {
          src: "https://images.unsplash.com/photo-1593030103066-0093718efeb9?w=800&q=80",
          alt: "Navy Senator",
        },
      },
    ],
    wholesaleTiers: [
      { minQuantity: 5, discountPercentage: 10 },
      { minQuantity: 10, discountPercentage: 20 },
    ],
    details: {
      fabric: "100% Italian Cashmere Silk",
      provenance: "Hand-tailored in Lagos",
      fullDescription:
        "The ultimate formal wear for the modern African man. Breathable, lightweight, and perfectly structured.",
    },
    isBespokeAvailable: true,
  },
  {
    id: "prod-004",
    name: "Midnight Velvet Evening Gown",
    slug: "midnight-velvet-evening-gown",
    badge: "Limited Edition",
    category: "cloth",
    type: "evening wear",
    gender: "female",
    description: "Deep velvet floor-length gown with a thigh-high slit.",
    unitPrice: 155000,
    stock: 12,
    sizes: ["XS", "S", "M", "L"],
    colors: [
      {
        name: "Midnight Black",
        hex: "#000000",
        image: {
          src: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=800&q=80",
          alt: "Black Velvet Gown",
        },
      },
    ],
    wholesaleTiers: undefined,
    details: {
      fabric: "Italian Silk Velvet",
      provenance: "Atelier Milan",
      fullDescription:
        "A show-stopping piece designed for red carpet moments. The luxurious velvet catches the light beautifully.",
    },
    isBespokeAvailable: true,
  },
  {
    id: "prod-005",
    name: "Oversized Graphic Tee",
    slug: "oversized-graphic-tee",
    category: "cloth",
    type: "casual",
    gender: "unisex",
    description: "Heavyweight cotton tee with vintage wash and back graphic.",
    unitPrice: 35000,
    stock: 200,
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      {
        name: "Vintage Black",
        hex: "#2b2b2b",
        image: {
          src: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80",
          alt: "Black Tee",
        },
      },
      {
        name: "Off-White",
        hex: "#f5f5f5",
        image: {
          src: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&q=80",
          alt: "White Tee",
        },
      },
    ],
    wholesaleTiers: [
      { minQuantity: 20, discountPercentage: 25 },
      { minQuantity: 50, discountPercentage: 35 },
      { minQuantity: 100, discountPercentage: 45 },
    ],
    details: {
      fabric: "100% Organic Cotton (280 GSM)",
      provenance: "Ethically made in Portugal",
      fullDescription: "Drop shoulder, boxy fit. The perfect everyday staple.",
    },
    isBespokeAvailable: false,
  },

  ...generateMockProducts(),
]);
