import { storeSettingsValidator } from "@/convex/schema";
import { FLAGSHIP_ROUTE, ORDERS_ROUTE, STOREFRONT_ROUTE } from "@/lib/routes";
import { formatToAmPm } from "@/lib/time";
import { Infer } from "convex/values";

export const storeSettingsData: Promise<Infer<typeof storeSettingsValidator>> =
  Promise.resolve({
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
    phoneNumber: {
      code: "+234",
      number: "9059405621",
    },
    address: {
      name: "JB Lux Enterprises",
      buildingName: "Gbode Ventures Plaza",
      houseNumber: "20",
      street: "Nnamdi Azikiwe Street",
      city: "Lagos Island",
      state: "Lagos",
      country: "Nigeria",
      postalCode: "101241",
      closestBusStop: "Idumota Bus-stop",
    },
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
