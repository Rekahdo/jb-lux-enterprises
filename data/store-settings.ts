import { storeSettingsValidator } from "@/convex/schema";
import { FLAGSHIP_ROUTE, ORDERS_ROUTE, STOREFRONT_ROUTE } from "@/lib/routes";
import { Infer } from "convex/values";
import { AddressType, findAddressById } from "./address";
import { findPhoneById as findPhoneById, PhoneType } from "./phone";
import { AddressPropType, PhonePropType } from "./reset";

type ValidatorType = Infer<typeof storeSettingsValidator>;

type PromiseType = Omit<ValidatorType, "addressId" | "phoneId"> &
  AddressPropType &
  PhonePropType & {};

export const storeSettingsData: Promise<PromiseType> = Promise.resolve({
  brandName: "JB Lux Enterprises",
  year: "2026",
  bankName: "Opay",
  accountName: "Okafor Richard Tochukwu",
  accountNumber: "9059405621",
  email: "realjblux@gmail.com",
  retail: true,
  retailDiscount: 0,
  wholesale: true,
  wholesaleDiscount: 0,
  phoneId: "phn-01",
  phone: await findPhoneById("phn-01"),
  addressId: "add-01",
  address: await findAddressById("add-01"),
  facebook: "https://facebook.com/jbluxenterprises",
  whatsapp: "https://wa.me/2349059405621",
  instagram: "https://instagram.com/jbluxenterprises",
  tiktok: "https://tiktok.com/@jbluxenterprises",
  x: "https://x.com/jbluxenterprises",
  services: [
    {
      service: "All Collections & Unisex Streetwear",
      href: STOREFRONT_ROUTE,
    },
    { service: "Wholesale Bulk Discounts", href: STOREFRONT_ROUTE },
    { service: "Atelier Craftsmanship", href: FLAGSHIP_ROUTE },
    { service: "Track Order by Receipt", href: ORDERS_ROUTE },
  ],
  days: [
    {
      from: "mon",
      to: "sat",
      openHour: "08:30",
      closeHour: "18:30",
    },
  ],
});
