import { visitStoreValidator } from "@/convex/schema";
import { Infer } from "convex/values";
import { storeSettingsData } from "./store-settings";
import { SrcImageType } from "./reset";
import { AddressProps } from "./address";
import { PhoneProps } from "./phone";

type ValidatorType = Infer<typeof visitStoreValidator>;

type PromiseType = Omit<ValidatorType, "imageIds" | "addressId" | "phoneId"> &
  AddressProps &
  PhoneProps & {
    imageIds: SrcImageType[];
  };

export const visitStoreData: Promise<PromiseType> = Promise.resolve({
  badge: "Gbode Ventures Plaza • Lagos Island",
  imageIds: [
    {
      src: "",
      alt: "Interior of the JB Lux Enterprises physical store at Gbode Ventures Plaza",
    },
  ],
  overline: "ATELIER HERITAGE & PHYSICAL STORE",
  headline: "Experience JB Lux on Lagos Island",
  description:
    "Located in the heart of Lagos Island's historic mercantile district on Nnamdi Azikiwe Street, JB Lux Enterprises crafts premium unisex streetwear and bespoke tailoring for men and women with world-class precision.",
  addressId: (await storeSettingsData).addressId,
  address: (await storeSettingsData).address,
  addressNote: "In-person consultations & bulk collections available.",
  phoneId: (await storeSettingsData).phoneId,
  phone: (await storeSettingsData).phone,
  phoneNote: "Direct line / WhatsApp",
});
