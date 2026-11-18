import { styleValidator } from "@/convex/schema";
import { Infer } from "convex/values";
import { IdProp } from "./reset";

type ValidatorType = Infer<typeof styleValidator>;

export type StyleType = Omit<ValidatorType, "isActive"> & IdProp &  {
  isActive?: boolean;
};

export const stylesData: Promise<StyleType[]> = Promise.resolve([
  {
    id: "style-01",
    name: "Streetwear",
    isActive: true,
  },
  {
    id: "style-02",
    name: "Traditional",
    isActive: true,
  },
  {
    id: "style-03",
    name: "Formal",
    isActive: true,
  },
  {
    id: "style-04",
    name: "Casual",
    isActive: true,
  },
  {
    id: "style-05",
    name: "Athleisure",
    isActive: true,
  },
  {
    id: "style-06",
    name: "Luxury / Bespoke",
    isActive: true,
  },
  {
    id: "style-07",
    name: "Minimalist",
    isActive: true,
  },
  {
    id: "style-08",
    name: "Avant-Garde",
    isActive: false,
  },
]);

export async function findStyleById(
  id: string,
): Promise<StyleType | undefined> {
  return Promise.resolve((await stylesData).find((each) => each.id === id));
}
