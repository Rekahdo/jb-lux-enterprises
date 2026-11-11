import { footerValidator } from "@/convex/schema";
import { Infer } from "convex/values";

export const footerData: Promise<Infer<typeof footerValidator>> = Promise.resolve({
  description:
    "Distinctive Nigerian contemporary luxury & unisex streetwear. Direct atelier craftsmanship, tailored sartorial elegance, and wholesale distribution for men and women from Lagos Island to the global stage.",
});