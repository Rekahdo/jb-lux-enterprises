import { colorValidator } from "@/convex/schema";
import { Infer } from "convex/values";
import { IdProp } from "./reset";

type ValidatorType = Infer<typeof colorValidator>;

export type ColorType = ValidatorType & IdProp;

export type ColorProps = {
  colorId: string;
  color: ColorType | undefined;
};

export const colorData: Promise<ColorType[]> = Promise.resolve([
  // ---------- Blacks & Neautrals ----------
  {
    id: "col-obsidian-black",
    name: "Obsidian Black",
    hex: "#141311",
  },
  {
    id: "col-onyx-black",
    name: "Onyx Black",
    hex: "#0F0F0F",
  },
  {
    id: "col-jet-black",
    name: "Jet Black",
    hex: "#0A0A0A",
  },
  {
    id: "col-charcoal-slate",
    name: "Charcoal Slate",
    hex: "#2F323A",
  },
  {
    id: "col-stone-gray",
    name: "Stone Gray",
    hex: "#8E8E93",
  },

  // ---------- Whites & Creams ----------
  {
    id: "col-ivory-cream",
    name: "Ivory Cream",
    hex: "#FAF8F5",
  },
  {
    id: "col-warm-sand",
    name: "Warm Sand",
    hex: "#D6C7B2",
  },

  // ---------- Navies & Blues ----------
  {
    id: "col-midnight-navy",
    name: "Midnight Navy",
    hex: "#1B263B",
  },

  // ---------- Browns ----------
  {
    id: "col-espresso-brown",
    name: "Espresso Brown",
    hex: "#3E2723",
  },

  // ---------- Golds ----------
  {
    id: "col-champagne-gold",
    name: "Champagne Gold",
    hex: "#D4AF37",
  },

  // ---------- Reds & Wines ----------
  {
    id: "col-burgundy-wine",
    name: "Burgundy Wine",
    hex: "#5E1914",
  },

  // ---------- Greens ----------
  {
    id: "col-olive-drab",
    name: "Olive Drab",
    hex: "#4B5320",
  },
]);

export async function findColorById(
  id: string,
): Promise<ColorType | undefined> {
  return (await colorData).find((each) => each.id === id);
}
