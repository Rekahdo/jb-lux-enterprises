import { styleValidator } from "@/convex/schema";
import { Infer } from "convex/values";

type ValidatorType = Infer<typeof styleValidator>;

type PromiseType = Omit<ValidatorType, "isActive"> & {
  id: string;
  isActive?: boolean; // Optional for mock data, defaults to true
};

export const stylesData: Promise<PromiseType[]> = Promise.resolve([
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
