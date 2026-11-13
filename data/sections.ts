export type titleType = {
  overline?: string;
  title?: string;
  description?: string;
};
type sectionType = Record<string, titleType>;

export const sectionData: Promise<sectionType> = Promise.resolve({
  category: {
    overline: "Atelier Departments · Lagos Island Craftsmanship",
    title: "Shop by Category",
    description:
      "From bespoke traditional Senator sets to 500 GSM loopback streetwear and tailored denim bottoms.",
  },
  featured: {
    overline: "Curated Essentials · 2026 Sartorial Catalog",
    title: "Featured Signature Pieces",
  },
  popular: {
    overline: "Best-Selling Urban Line · Limited Stock Run",
    title: "Popular Products & Casual Essentials",
    description:
      "High-rotation denim cuts, heavyweight fleece joggers, and graphic pique polos crafted for everyday distinction.",
  },
  testimonies: {
    overline: "Patron & Reseller Endorsements",
    title: "Trusted by Dignitaries, Resellers & Stylists Nationwide",
    description:
      "From Lagos Island to Abuja, Port Harcourt, and international boutiques—authentic reviews from discerning buyers who trust our direct-atelier production.",
  },
  visit: {
    overline: "Atelier Heritage & Physical Store",
    title: "Experience JB Lux on Lagos Island",
  },
  faq: {
    overline: "Buyer Assurance & Policies",
    title: "Frequently Asked Questions & Terms",
    description:
      "Transparent details regarding our automated wholesale volume discounts, manual bank verification, bespoke fittings, and nationwide shipping.",
  },
  subscribe: {
    overline: "Private Patron Ledger & Drops",
    title: "Subscribe to Receive Drops, Restocks & Wholesale Offers",
    description:
      "Be the first to access limited sartorial drops from our Gbode Ventures Plaza atelier, seasonal restocks, and private bulk wholesale catalogs before general release.",
  },
  footer: {
    title: "logo",
    description:
      "Distinctive Nigerian contemporary luxury & unisex streetwear. Direct atelier craftsmanship, tailored sartorial elegance, and wholesale distribution for men and women from Lagos Island to the global stage.",
  },
});
