import { addressValidator } from "@/convex/schema";
import { Infer } from "convex/values";
import { IdProp } from "./reset";

type ValidatorType = Infer<typeof addressValidator>;

export type AddressType = ValidatorType & IdProp;

export type AddressProps = {
  addressId: string;
  address: AddressType | undefined;
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
  {
    id: "add-03",
    buildingName: "Banana Island Estate",
    houseNumber: "Plot 12",
    street: "Banana Island Estate",
    city: "Ikoyi",
    state: "Lagos",
    country: "Nigeria",
    closestBusStop: "Banana Island Gate",
  },
  {
    id: "add-04",
    houseNumber: "2",
    street: "Gbode Ventures Plaza",
    city: "Lagos Island",
    state: "Lagos",
    country: "Nigeria",
    closestBusStop: "Idumota",
  },
  {
    id: "add-05",
    houseNumber: "22",
    street: "Bodija Market Road",
    city: "Ibadan",
    state: "Oyo",
    country: "Nigeria",
  },
  {
    id: "add-06",
    houseNumber: "5",
    street: "Aba Road",
    city: "Port Harcourt",
    state: "Rivers",
    country: "Nigeria",
  },
  {
    id: "add-07",
    houseNumber: "10",
    street: "Ahmadu Bello Way",
    city: "Abuja",
    state: "FCT",
    country: "Nigeria",
  },
  {
    id: "add-08",
    houseNumber: "15",
    street: "Zaria Road",
    city: "Kano",
    state: "Kano",
    country: "Nigeria",
  },
]);

export async function findAddressById(
  id: string,
): Promise<AddressType | undefined> {
  return (await addressData).find((each) => each.id === id);
}

