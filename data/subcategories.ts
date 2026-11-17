import { subCategoryValidator } from "@/convex/schema";
import { Infer } from "convex/values";
import { CategoryType, findCategoryById } from "./categories";

type ValidatorType = Infer<typeof subCategoryValidator>;

export type SubCategoryType = Omit<ValidatorType, "categoryId"> & {
  id: string;
  categoryId: string;
  category: CategoryType | undefined;
};

export const subCategoriesData: Promise<SubCategoryType[]> = Promise.resolve([
  // --- Clothing / Apparel (cat-01) ---
  { id: "sub-01", categoryId: "cat-01", category: await findCategoryById("cat-01"), name: "Tops" },
  { id: "sub-02", categoryId: "cat-01", category: await findCategoryById("cat-01"), name: "Bottoms" },
  { id: "sub-03", categoryId: "cat-01", category: await findCategoryById("cat-01"), name: "Outerwear" },
  { id: "sub-04", categoryId: "cat-01", category: await findCategoryById("cat-01"), name: "Traditional & Cultural Wear" },
  { id: "sub-05", categoryId: "cat-01", category: await findCategoryById("cat-01"), name: "One-Pieces" },
  { id: "sub-06", categoryId: "cat-01", category: await findCategoryById("cat-01"), name: "Formal & Tailored" },

  // --- Footwear (cat-02) ---
  { id: "sub-07", categoryId: "cat-02", category: await findCategoryById("cat-02"), name: "Casual Footwear" },
  { id: "sub-08", categoryId: "cat-02", category: await findCategoryById("cat-02"), name: "Formal Footwear" },
  { id: "sub-09", categoryId: "cat-02", category: await findCategoryById("cat-02"), name: "Boots" },
  { id: "sub-10", categoryId: "cat-02", category: await findCategoryById("cat-02"), name: "Open-Toe & Warm-Weather" },

  // --- Headwear (cat-03) ---
  { id: "sub-11", categoryId: "cat-03", category: await findCategoryById("cat-03"), name: "Caps & Hats" },
  { id: "sub-12", categoryId: "cat-03", category: await findCategoryById("cat-03"), name: "Cold-Weather" },
  { id: "sub-13", categoryId: "cat-03", category: await findCategoryById("cat-03"), name: "Cultural & Wrap" },

  // --- Eyewear (cat-04) ---
  { id: "sub-14", categoryId: "cat-04", category: await findCategoryById("cat-04"), name: "Sunglasses" },
  { id: "sub-15", categoryId: "cat-04", category: await findCategoryById("cat-04"), name: "Optical & Protective" },

  // --- Jewelry (cat-05) ---
  { id: "sub-16", categoryId: "cat-05", category: await findCategoryById("cat-05"), name: "Wristwear" },
  { id: "sub-17", categoryId: "cat-05", category: await findCategoryById("cat-05"), name: "Neckwear" },
  { id: "sub-18", categoryId: "cat-05", category: await findCategoryById("cat-05"), name: "Hand & Ear Jewelry" },

  // --- Accessories (cat-06) ---
  { id: "sub-19", categoryId: "cat-06", category: await findCategoryById("cat-06"), name: "Waist & Formal" },
  { id: "sub-20", categoryId: "cat-06", category: await findCategoryById("cat-06"), name: "Cold-Weather & Neck" },
  { id: "sub-21", categoryId: "cat-06", category: await findCategoryById("cat-06"), name: "Hosiery" },

  // --- Bags & Carrywear (cat-07) ---
  { id: "sub-22", categoryId: "cat-07", category: await findCategoryById("cat-07"), name: "Everyday & Casual" },
  { id: "sub-23", categoryId: "cat-07", category: await findCategoryById("cat-07"), name: "Formal & Evening" },
  { id: "sub-24", categoryId: "cat-07", category: await findCategoryById("cat-07"), name: "Travel & Utility" },

  // --- Activewear & Swimwear (cat-08) ---
  { id: "sub-25", categoryId: "cat-08", category: await findCategoryById("cat-08"), name: "Gym & Performance" },
  { id: "sub-26", categoryId: "cat-08", category: await findCategoryById("cat-08"), name: "Waterwear" },

  // --- Intimates & Sleepwear (cat-09) ---
  { id: "sub-27", categoryId: "cat-09", category: await findCategoryById("cat-09"), name: "Underwear" },
  { id: "sub-28", categoryId: "cat-09", category: await findCategoryById("cat-09"), name: "Sleep & Lounge" },
]);

export async function findSubCategoryById(id: string): Promise<SubCategoryType | undefined> {
  return Promise.resolve(
    (await subCategoriesData).find((each) => each.id === id),
  );
}