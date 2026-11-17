import { addressValidator } from "@/convex/schema";
import { Infer } from "convex/values";

type ValidatorType = Infer<typeof addressValidator>;

export type AddressType = ValidatorType & {
  id: string;
};

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
]);

export async function findAddressById(id: string): Promise<AddressType | undefined> {
  return Promise.resolve((await addressData).find((each) => each.id === id));
}