import { phoneValidator } from "@/convex/schema";
import { Infer } from "convex/values";
import { IdProp } from "./reset";

type ValidatorType = Infer<typeof phoneValidator>;

export type PhoneType = ValidatorType & IdProp;

export const phoneData: Promise<PhoneType[]> = Promise.resolve([
  {
    id: "phn-01",
    code: "+234",
    number: "9059405621",
  },
  {
    id: "phn-02",
    code: "+234",
    number: "9168800272",
  },
]);

export async function findPhoneById(
  id: string,
): Promise<PhoneType | undefined> {
  return Promise.resolve((await phoneData).find((each) => each.id === id));
}
