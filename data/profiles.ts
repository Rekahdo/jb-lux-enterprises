import { profileValidator } from "@/convex/schema";
import { Infer } from "convex/values";
import { IdProp } from "./reset";
import { AddressProps, findAddressById } from "./address";
import { findPhoneById, PhoneProps } from "./phone";

type ValidatorType = Infer<typeof profileValidator>;

export type ProfileType = Omit<ValidatorType, "addressId" | "phoneId"> &
  IdProp &
  AddressProps &
  PhoneProps;

export type ProfileProps = {
  profileId: string;
  profile: ProfileType | undefined;
};

export const profilesData: Promise<ProfileType[]> = Promise.resolve([
  {
    id: "prof-01",
    userId: "user_richard_okafor",
    firstname: "Richard",
    lastname: "Okafor",
    email: "okaforrichard76@gmail.com",
    phoneId: "phn-02",
    phone: await findPhoneById("phn-02"),
    addressId: "add-02",
    address: await findAddressById("add-02"),
  },
  {
    id: "prof-02",
    userId: "user_amaka_chukwuma",
    firstname: "Amaka",
    lastname: "Chukwuma",
    email: "amaka.c@gmail.com",
    phoneId: "phn-03",
    phone: await findPhoneById("phn-03"),
    addressId: "add-03",
    address: await findAddressById("add-03"),
  },
  {
    id: "prof-03",
    userId: "user_tunde_bakare",
    firstname: "Tunde",
    lastname: "Bakare",
    email: "tunde@reseller.com",
    phoneId: "phn-04",
    phone: await findPhoneById("phn-04"),
    addressId: undefined as unknown as string,
    address: undefined,
  },
  {
    id: "prof-04",
    userId: "user_chioma_adeyemi",
    firstname: "Chioma",
    lastname: "Adeyemi",
    email: "chioma.a@outlook.com",
    phoneId: "phn-05",
    phone: await findPhoneById("phn-05"),
    addressId: "add-04",
    address: await findAddressById("add-04"),
  },
  {
    id: "prof-05",
    userId: "user_samuel_eze",
    firstname: "Samuel",
    lastname: "Eze",
    email: "samuel.eze@gmail.com",
    phoneId: "phn-06",
    phone: await findPhoneById("phn-06"),
    addressId: undefined as unknown as string,
    address: undefined,
  },
  {
    id: "prof-06",
    userId: "user_bisi_oladipo",
    firstname: "Bisi",
    lastname: "Oladipo",
    email: "bisi.oladipo@yahoo.com",
    phoneId: "phn-07",
    phone: await findPhoneById("phn-07"),
    addressId: "add-05",
    address: await findAddressById("add-05"),
  },
  {
    id: "prof-07",
    userId: "user_emeka_nwosu",
    firstname: "Emeka",
    lastname: "Nwosu",
    email: "emeka.nwosu@hotmail.com",
    phoneId: undefined as unknown as string,
    phone: undefined,
    addressId: "add-06",
    address: await findAddressById("add-06"),
  },
  {
    id: "prof-08",
    userId: "user_zainab_ibrahim",
    firstname: "Zainab",
    lastname: "Ibrahim",
    email: "zainab.ib@gmail.com",
    phoneId: "phn-08",
    phone: await findPhoneById("phn-08"),
    addressId: "add-07",
    address: await findAddressById("add-07"),
  },
  {
    id: "prof-09",
    userId: "user_david_ogbonna",
    firstname: "David",
    lastname: "Ogbonna",
    email: "david.ogbonna@business.com",
    phoneId: "phn-09",
    phone: await findPhoneById("phn-09"),
    addressId: undefined as unknown as string,
    address: undefined,
  },
  {
    id: "prof-10",
    userId: "user_fatima_yusuf",
    firstname: "Fatima",
    lastname: "Yusuf",
    email: "fatima.yusuf@yahoo.com",
    phoneId: "phn-10",
    phone: await findPhoneById("phn-10"),
    addressId: "add-08",
    address: await findAddressById("add-08"),
  },
]);

export async function findProfileById(
  id: string,
): Promise<ProfileType | undefined> {
  return (await profilesData).find((each) => each.id === id);
}

export async function findProfileByUserId(
  userId: string,
): Promise<ProfileType | undefined> {
  return (await profilesData).find((each) => each.userId === userId);
}
