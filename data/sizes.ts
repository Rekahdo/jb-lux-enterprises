import { sizesValidator } from "@/convex/schema";
import { Infer } from "convex/values";
import { IdProp } from "./reset";
import { CategoryProps, findCategoryById } from "./categories";

type ValidatorType = Infer<typeof sizesValidator>;

export type SizeType = Omit<ValidatorType, "categoryId"> &
  IdProp &
  CategoryProps;

export type SizeProps = {
  sizeId: string;
  size: SizeType | undefined;
};

export const sizesData: Promise<SizeType[]> = Promise.resolve([
  // ---------- Clothing (cat-01) ----------
  {
    id: "sz-xs",
    size: "XS",
    name: "Extra Small",
    categoryId: "cat-01",
    category: await findCategoryById("cat-01"),
  },
  {
    id: "sz-s",
    size: "S",
    name: "Small",
    categoryId: "cat-01",
    category: await findCategoryById("cat-01"),
  },
  {
    id: "sz-m",
    size: "M",
    name: "Medium",
    categoryId: "cat-01",
    category: await findCategoryById("cat-01"),
  },
  {
    id: "sz-l",
    size: "L",
    name: "Large",
    categoryId: "cat-01",
    category: await findCategoryById("cat-01"),
  },
  {
    id: "sz-xl",
    size: "XL",
    name: "Extra Large",
    categoryId: "cat-01",
    category: await findCategoryById("cat-01"),
  },
  {
    id: "sz-xxl",
    size: "XXL",
    name: "Double Extra Large",
    categoryId: "cat-01",
    category: await findCategoryById("cat-01"),
  },
  {
    id: "sz-3xl",
    size: "3XL",
    name: "Triple Extra Large",
    categoryId: "cat-01",
    category: await findCategoryById("cat-01"),
  },

  // ---------- Footwear (cat-02) ----------
  {
    id: "sz-eu-39",
    size: "39",
    name: "EU 39",
    categoryId: "cat-02",
    category: await findCategoryById("cat-02"),
  },
  {
    id: "sz-eu-40",
    size: "40",
    name: "EU 40",
    categoryId: "cat-02",
    category: await findCategoryById("cat-02"),
  },
  {
    id: "sz-eu-41",
    size: "41",
    name: "EU 41",
    categoryId: "cat-02",
    category: await findCategoryById("cat-02"),
  },
  {
    id: "sz-eu-42",
    size: "42",
    name: "EU 42",
    categoryId: "cat-02",
    category: await findCategoryById("cat-02"),
  },
  {
    id: "sz-eu-43",
    size: "43",
    name: "EU 43",
    categoryId: "cat-02",
    category: await findCategoryById("cat-02"),
  },
  {
    id: "sz-eu-44",
    size: "44",
    name: "EU 44",
    categoryId: "cat-02",
    category: await findCategoryById("cat-02"),
  },
  {
    id: "sz-eu-45",
    size: "45",
    name: "EU 45",
    categoryId: "cat-02",
    category: await findCategoryById("cat-02"),
  },
  {
    id: "sz-eu-46",
    size: "46",
    name: "EU 46",
    categoryId: "cat-02",
    category: await findCategoryById("cat-02"),
  },
  {
    id: "sz-eu-47",
    size: "47",
    name: "EU 47",
    categoryId: "cat-02",
    category: await findCategoryById("cat-02"),
  },

  // ---------- Eyewear (cat-04) ----------
  {
    id: "sz-lens-50",
    size: "50mm",
    name: "50mm Lens",
    categoryId: "cat-04",
    category: await findCategoryById("cat-04"),
  },
  {
    id: "sz-lens-52",
    size: "52mm",
    name: "52mm Lens",
    categoryId: "cat-04",
    category: await findCategoryById("cat-04"),
  },
  {
    id: "sz-lens-54",
    size: "54mm",
    name: "54mm Lens",
    categoryId: "cat-04",
    category: await findCategoryById("cat-04"),
  },
  {
    id: "sz-lens-56",
    size: "56mm",
    name: "56mm Lens",
    categoryId: "cat-04",
    category: await findCategoryById("cat-04"),
  },
  {
    id: "sz-lens-58",
    size: "58mm",
    name: "58mm Lens",
    categoryId: "cat-04",
    category: await findCategoryById("cat-04"),
  },

  // ---------- Headwear (cat-03) ----------
  {
    id: "sz-hat-s",
    size: "S",
    name: "Small (54–55cm)",
    categoryId: "cat-03",
    category: await findCategoryById("cat-03"),
  },
  {
    id: "sz-hat-m",
    size: "M",
    name: "Medium (56–57cm)",
    categoryId: "cat-03",
    category: await findCategoryById("cat-03"),
  },
  {
    id: "sz-hat-l",
    size: "L",
    name: "Large (58–59cm)",
    categoryId: "cat-03",
    category: await findCategoryById("cat-03"),
  },
  {
    id: "sz-hat-xl",
    size: "XL",
    name: "Extra Large (60–61cm)",
    categoryId: "cat-03",
    category: await findCategoryById("cat-03"),
  },
  {
    id: "sz-hat-os",
    size: "OS",
    name: "One Size (adjustable)",
    categoryId: "cat-03",
    category: await findCategoryById("cat-03"),
  },
]);

export async function findSizeById(id: string): Promise<SizeType | undefined> {
  return (await sizesData).find((each) => each.id === id);
}
