import { heroValidator } from "@/convex/schema";
import { SrcImage } from "@/data/header";
import { Infer } from "convex/values";

type ValidatorType = Infer<typeof heroValidator>;

type PromiseType = Omit<ValidatorType, "images"> & {
  images: SrcImage[];
};

export const heroData: Promise<PromiseType> = Promise.resolve({
  badge: "LAGOS ISLAND BESPOKE TAILORING & UNISEX STREETWEAR",
  headline: "Where Royal Heritage Meets Contemporary Urban Apparel",
  description:
    "Crafted at Gbode Ventures Plaza, Lagos Island. Tailored Senator attires, heavyweight luxury unisex streetwear, and sartorial silhouettes engineered for men and women of distinction. Available in single retail and high-volume wholesale tiers.",
  images: [
    {
      src: "https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=2000&auto=format&fit=crop",
      alt: "Man wearing a dark luxury heritage jacket standing against a modern city skyline at dusk",
    },
  ],
  tags: [
    {
      title: "DIRECT TRANSFER",
      description: "Manual Bank Transfer with Instant Receipt Approval",
    },
    {
      title: "UP TO 45% OFF",
      description: "Tiered Wholesale Discounts for Resellers",
    },
    {
      title: "LAGOS ATELIER",
      description: "Hand-tailored at Gbode Plaza, Lagos Island",
    },
    {
      title: "NATIONWIDE & GLOBAL",
      description: "Insured dispatch to 36 states & worldwide",
    },
  ],
});
