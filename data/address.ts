import { addressValidator } from "@/convex/schema";
import { Infer } from "convex/values";
import { IdProp } from "./reset";

type ValidatorType = Infer<typeof addressValidator>;

export type AddressType = ValidatorType & IdProp;

export const addressData: Promise<AddressType[]> = Promise.resolve([
  {
    id: "add-01",
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
  {
    id: "add-02",
    houseNumber: "14",
    street: "Admiralty Way, Lekki Phase 1",
    city: "Lekki",
    state: "Lagos",
    country: "Nigeria",
    postalCode: "106104",
    closestBusStop: "Admiralty Roundabout",
  },
]);

export async function findAddressById(
  id: string,
): Promise<AddressType | undefined> {
  return Promise.resolve((await addressData).find((each) => each.id === id));
}
