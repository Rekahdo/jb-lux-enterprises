import { imageValidator } from "@/convex/schema";
import { Infer } from "convex/values";
import { IdProp } from "./reset";

type ValidatorType = Infer<typeof imageValidator>;

export type ImagesType = Omit<ValidatorType, "storageId"> &
IdProp & {
  storageId: string;
  src: string;
};

export type ImagesProps = {
  imageId: string;
  image: ImagesType;
};

export const imageData: Promise<ImagesType[]> = Promise.resolve([
  // ---------- prod_001 — Luxury Senator Suit ----------
  {
    id: "img-prod-001-obsidian-black",
    storageId: "st_prod_001_obsidian_black",
    alt: "Luxury Senator Suit - Obsidian Black",
    src: "/image/jacket.jpg",
  },
  {
    id: "img-prod-001-champagne-gold",
    storageId: "st_prod_001_champagne_gold",
    alt: "Luxury Senator Suit - Champagne Gold",
    src: "https://picsum.photos/seed/luxury-senator-suit-1-champagne-gold/800/1000",
  },
  {
    id: "img-prod-001-ivory-cream",
    storageId: "st_prod_001_ivory_cream",
    alt: "Luxury Senator Suit - Ivory Cream",
    src: "https://picsum.photos/seed/luxury-senator-suit-1-ivory-cream/800/1000",
  },

  // ---------- prod_002 — Signature Blazer ----------
  {
    id: "img-prod-002-midnight-navy",
    storageId: "st_prod_002_midnight_navy",
    alt: "Signature Blazer - Midnight Navy",
    src: "/image/jacket.jpg",
  },
  {
    id: "img-prod-002-espresso-brown",
    storageId: "st_prod_002_espresso_brown",
    alt: "Signature Blazer - Espresso Brown",
    src: "https://picsum.photos/seed/signature-blazer-2-espresso-brown/800/1000",
  },
  {
    id: "img-prod-002-warm-sand",
    storageId: "st_prod_002_warm_sand",
    alt: "Signature Blazer - Warm Sand",
    src: "https://picsum.photos/seed/signature-blazer-2-warm-sand/800/1000",
  },

  // ---------- prod_003 — Premium Trousers ----------
  {
    id: "img-prod-003-charcoal-slate",
    storageId: "st_prod_003_charcoal_slate",
    alt: "Premium Trousers - Charcoal Slate",
    src: "https://picsum.photos/seed/premium-trousers-3-charcoal-slate/800/1000",
  },
  {
    id: "img-prod-003-olive-drab",
    storageId: "st_prod_003_olive_drab",
    alt: "Premium Trousers - Olive Drab",
    src: "https://picsum.photos/seed/premium-trousers-3-olive-drab/800/1000",
  },
  {
    id: "img-prod-003-burgundy-wine",
    storageId: "st_prod_003_burgundy_wine",
    alt: "Premium Trousers - Burgundy Wine",
    src: "https://picsum.photos/seed/premium-trousers-3-burgundy-wine/800/1000",
  },

  // ---------- prod_004 — Urban Shirt ----------
  {
    id: "img-prod-004-onyx-black",
    storageId: "st_prod_004_onyx_black",
    alt: "Urban Shirt - Onyx Black",
    src: "https://picsum.photos/seed/urban-shirt-4-onyx-black/800/1000",
  },
  {
    id: "img-prod-004-stone-gray",
    storageId: "st_prod_004_stone_gray",
    alt: "Urban Shirt - Stone Gray",
    src: "https://picsum.photos/seed/urban-shirt-4-stone-gray/800/1000",
  },

  // ---------- prod_005 — Classic Dress ----------
  {
    id: "img-prod-005-obsidian-black",
    storageId: "st_prod_005_obsidian_black",
    alt: "Classic Dress - Obsidian Black",
    src: "https://picsum.photos/seed/classic-dress-5-obsidian-black/800/1000",
  },
  {
    id: "img-prod-005-champagne-gold",
    storageId: "st_prod_005_champagne_gold",
    alt: "Classic Dress - Champagne Gold",
    src: "https://picsum.photos/seed/classic-dress-5-champagne-gold/800/1000",
  },
  {
    id: "img-prod-005-ivory-cream",
    storageId: "st_prod_005_ivory_cream",
    alt: "Classic Dress - Ivory Cream",
    src: "https://picsum.photos/seed/classic-dress-5-ivory-cream/800/1000",
  },

  // ---------- prod_006 — Urban Penny Loafers ----------
  {
    id: "img-prod-006-midnight-navy",
    storageId: "st_prod_006_midnight_navy",
    alt: "Urban Penny Loafers - Midnight Navy",
    src: "https://picsum.photos/seed/urban-penny-loafers-14-midnight-navy/800/1000",
  },
  {
    id: "img-prod-006-espresso-brown",
    storageId: "st_prod_006_espresso_brown",
    alt: "Urban Penny Loafers - Espresso Brown",
    src: "https://picsum.photos/seed/urban-penny-loafers-14-espresso-brown/800/1000",
  },
  {
    id: "img-prod-006-warm-sand",
    storageId: "st_prod_006_warm_sand",
    alt: "Urban Penny Loafers - Warm Sand",
    src: "https://picsum.photos/seed/urban-penny-loafers-14-warm-sand/800/1000",
  },

  // ---------- prod_007 — Classic Court Sneakers ----------
  {
    id: "img-prod-007-charcoal-slate",
    storageId: "st_prod_007_charcoal_slate",
    alt: "Classic Court Sneakers - Charcoal Slate",
    src: "https://picsum.photos/seed/classic-court-sneakers-15-charcoal-slate/800/1000",
  },
  {
    id: "img-prod-007-olive-drab",
    storageId: "st_prod_007_olive_drab",
    alt: "Classic Court Sneakers - Olive Drab",
    src: "https://picsum.photos/seed/classic-court-sneakers-15-olive-drab/800/1000",
  },
  {
    id: "img-prod-007-burgundy-wine",
    storageId: "st_prod_007_burgundy_wine",
    alt: "Classic Court Sneakers - Burgundy Wine",
    src: "https://picsum.photos/seed/classic-court-sneakers-15-burgundy-wine/800/1000",
  },

  // ---------- prod_008 — Elite Chelsea Boots ----------
  {
    id: "img-prod-008-onyx-black",
    storageId: "st_prod_008_onyx_black",
    alt: "Elite Chelsea Boots - Onyx Black",
    src: "https://picsum.photos/seed/elite-chelsea-boots-16-onyx-black/800/1000",
  },
  {
    id: "img-prod-008-stone-gray",
    storageId: "st_prod_008_stone_gray",
    alt: "Elite Chelsea Boots - Stone Gray",
    src: "https://picsum.photos/seed/elite-chelsea-boots-16-stone-gray/800/1000",
  },

  // ---------- prod_009 — Signature Gold-Rim Aviators ----------
  {
    id: "img-prod-009-onyx-black",
    storageId: "st_prod_009_onyx_black",
    alt: "Signature Gold-Rim Aviators - Onyx Black",
    src: "https://picsum.photos/seed/signature-gold-rim-aviators-40-onyx-black/800/1000",
  },
  {
    id: "img-prod-009-stone-gray",
    storageId: "st_prod_009_stone_gray",
    alt: "Signature Gold-Rim Aviators - Stone Gray",
    src: "https://picsum.photos/seed/signature-gold-rim-aviators-40-stone-gray/800/1000",
  },

  // ---------- prod_010 — Premium Tortoiseshell Wayfarers ----------
  {
    id: "img-prod-010-obsidian-black",
    storageId: "st_prod_010_obsidian_black",
    alt: "Premium Tortoiseshell Wayfarers - Obsidian Black",
    src: "https://picsum.photos/seed/premium-tortoiseshell-wayfarers-41-obsidian-black/800/1000",
  },
  {
    id: "img-prod-010-champagne-gold",
    storageId: "st_prod_010_champagne_gold",
    alt: "Premium Tortoiseshell Wayfarers - Champagne Gold",
    src: "https://picsum.photos/seed/premium-tortoiseshell-wayfarers-41-champagne-gold/800/1000",
  },
  {
    id: "img-prod-010-ivory-cream",
    storageId: "st_prod_010_ivory_cream",
    alt: "Premium Tortoiseshell Wayfarers - Ivory Cream",
    src: "https://picsum.photos/seed/premium-tortoiseshell-wayfarers-41-ivory-cream/800/1000",
  },
]);

export async function findImageById(
  id: string,
): Promise<ImagesType | undefined> {
  return (await imageData).find((each) => each.id === id);
}
