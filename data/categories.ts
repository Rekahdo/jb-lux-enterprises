import { categoryValidator } from "@/convex/schema";
import { Infer } from "convex/values";
import { SrcImageType } from "./reset";

type ValidatorType = Infer<typeof categoryValidator>;

export type CategoryType = Omit<ValidatorType, "imageId"> & {
  id: string;
  imageId?: SrcImageType;
};

export const categoriesData: Promise<CategoryType[]> = Promise.resolve([
  {
    id: "cat-01",
    badge: "CLOTHING",
    slug: "clothing-apparel",
    title: "Clothing / Apparel",
    description:
      "Premium menswear and unisex streetwear, from tailored suits to heavyweight cotton essentials.",
    count: 5,
    imageId: {
      src: "/image/jacket.jpg",
      alt: "Clothing & Apparel",
    },
  },
  {
    id: "cat-02",
    badge: "FOOTWEAR",
    slug: "footwear",
    title: "Footwear",
    description:
      "Handcrafted leather shoes, statement sneakers, and architectural boots.",
    count: 3,
    imageId: {
      src: "https://picsum.photos/seed/cat-02-footwear/800/800",
      alt: "Footwear",
    },
  },
  {
    id: "cat-03",
    badge: "HEADWEAR",
    slug: "headwear",
    title: "Headwear",
    description:
      "Structured caps, beanies, and cultural wraps to complete the silhouette.",
    count: 0,
    imageId: {
      src: "https://picsum.photos/seed/cat-03-headwear/800/800",
      alt: "Headwear",
    },
  },
  {
    id: "cat-04",
    badge: "EYEWEAR",
    slug: "eyewear",
    title: "Eyewear",
    description:
      "Gold-rimmed aviators, bold acetate frames, and precision optical lenses.",
    count: 2,
    imageId: {
      src: "https://picsum.photos/seed/cat-04-eyewear/800/800",
      alt: "Eyewear",
    },
  },
  {
    id: "cat-05",
    badge: "JEWELRY",
    slug: "jewelry",
    title: "Fine Jewelry",
    description:
      "Cuban link chains, signet rings, and Swiss-engineered timepieces.",
    count: 0,
    imageId: {
      src: "https://picsum.photos/seed/cat-05-jewelry/800/800",
      alt: "Jewelry",
    },
  },
  {
    id: "cat-06",
    badge: "ACCESSORIES",
    slug: "accessories",
    title: "Accessories",
    description: "Full-grain leather belts, silk ties, and luxury hosiery.",
    count: 0,
    imageId: {
      src: "https://picsum.photos/seed/cat-06-accessories/800/800",
      alt: "Accessories",
    },
  },
  {
    id: "cat-07",
    badge: "BAGS",
    slug: "bags-carrywear",
    title: "Bags & Carrywear",
    description: "Structured briefcases, weekend duffels, and crossbody bags.",
    count: 0,
    imageId: {
      src: "https://picsum.photos/seed/cat-07-bags-carrywear/800/800",
      alt: "Bags & Carrywear",
    },
  },
  {
    id: "cat-08",
    badge: "ACTIVEWEAR",
    slug: "activewear-swimwear",
    title: "Activewear & Swimwear",
    description:
      "Moisture-wicking gym sets, tracksuits, and resort-ready swim trunks.",
    count: 0,
    imageId: {
      src: "https://picsum.photos/seed/cat-08-activewear-swimwear/800/800",
      alt: "Activewear & Swimwear",
    },
  },
  {
    id: "cat-09",
    badge: "SLEEPWEAR",
    slug: "intimates-sleepwear",
    title: "Intimates & Sleepwear",
    description:
      "Premium cotton underwear, silk robes, and relaxed loungewear.",
    count: 0,
    imageId: {
      src: "https://picsum.photos/seed/cat-09-intimates-sleepwear/800/800",
      alt: "Intimates & Sleepwear",
    },
  },
]);

export async function findCategoryById(
  id: string,
): Promise<CategoryType | undefined> {
  return (await categoriesData).find((each) => each.id === id);
}
