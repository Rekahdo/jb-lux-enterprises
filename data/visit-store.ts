import { visitStoreValidator } from "@/convex/schema";
import { Infer } from "convex/values";
import { SrcImage } from "@/data/header";

type ValidatorType = Infer<typeof visitStoreValidator>;

type PromiseType = Omit<ValidatorType, "images"> & {
  images: SrcImage[];
};

export const visitStoreData: Promise<PromiseType> = Promise.resolve({
  badge: "Gbode Ventures Plaza • Lagos Island",
  images: [
    {
      src: "",
      alt: "Interior of the JB Lux Enterprises physical store at Gbode Ventures Plaza",
    },
  ],
  overline: "ATELIER HERITAGE & PHYSICAL STORE",
  headline: "Experience JB Lux on Lagos Island",
  description:
    "Located in the heart of Lagos Island's historic mercantile district on Nnamdi Azikiwe Street, JB Lux Enterprises crafts premium unisex streetwear and bespoke tailoring for men and women with world-class precision.",
  address: {
    houseNumber: "Gbode Ventures Plaza",
    street: "Nnamdi Azikiwe Street",
    city: "Lagos Island",
    state: "Lagos",
    country: "Nigeria",
    postalCode: "101241",
    closestBusStop: "Idumota",
  },
  addressNote: "In-person consultations & bulk collections available.",
  phoneNumber: "+234 905 940 5621",
  phoneNote: "Direct line / WhatsApp",
});
