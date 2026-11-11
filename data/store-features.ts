import { storeFeaturesValidator } from "@/convex/schema";
import { Infer } from "convex/values";

export const storeFeaturesData: Promise<Infer<typeof storeFeaturesValidator>> =
  Promise.resolve({
    discount: {
      title: "Wholesale Tiered Discounts",
      description:
        "Whether purchasing 5, 20, or 100 units for boutique resale or corporate events, our automated tiered pricing automatically applies discounts up to 45% with instant line-item savings.",
    },
    trust: {
      title: "Manual Bank Transfer & Verification",
      description:
        "Seamlessly transfer via your Nigerian banking app (Zenith, Access, GTB) to our verified business account. Attach your transfer receipt on checkout for 24-hour verification by store admins.",
    },
    logistics: {
      title: "Gbode Plaza Atelier Logistics",
      description:
        "Pick up directly at our Lagos Island store or enjoy rapid doorstep dispatch. Free Lagos Island shipping for wholesale purchases exceeding ₦500,000.",
    },
    bespoke: {
      title: "Bespoke Tailoring Standard",
      description:
        "Every garment begins with hand-selected textiles—from 500 GSM loopback Egyptian cottons to Super 150s Italian wools. Our master pattern-makers cut each garment with geometric precision to deliver a commanding silhouette.",
    },
    wholesale: {
      title: "Wholesale Reseller Network",
      description:
        "Beyond individual retail clients, JB Lux powers high-end boutiques and regional resellers across Nigeria and the diaspora. Our transparent tiered wholesale discounts allow partners to build thriving retail operations.",
    },
  });
