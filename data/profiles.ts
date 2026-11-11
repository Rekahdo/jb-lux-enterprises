import { profileValidator } from "@/convex/schema";
import { Infer } from "convex/values";

export const profilesData: Promise<Infer<typeof profileValidator>[]> =
  Promise.resolve([
    {
      userId: "user_richard_okafor",
      firstname: "Richard",
      lastname: "Okafor",
      email: "okaforrichard76@gmail.com",
      phone: {
        code: "+234",
        number: "9059405621",
      },
      address: {
        houseNumber: "14",
        street: "Admiralty Way, Lekki Phase 1",
        city: "Lekki",
        state: "Lagos",
        country: "Nigeria",
        postalCode: "106104",
        closestBusStop: "Admiralty Roundabout",
      },
    },
    {
      userId: "user_amaka_chukwuma",
      firstname: "Amaka",
      lastname: "Chukwuma",
      email: "amaka.c@gmail.com",
      phone: {
        code: "+234",
        number: "8031112233",
      },
      address: {
        houseNumber: "Plot 12",
        street: "Banana Island Estate",
        city: "Ikoyi",
        state: "Lagos",
        country: "Nigeria",
        closestBusStop: "Banana Island Gate",
      },
    },
    {
      userId: "user_tunde_bakare",
      firstname: "Tunde",
      lastname: "Bakare",
      email: "tunde@reseller.com",
      phone: {
        code: "+234",
        number: "7012345678",
      },
      address: undefined,
    },
    {
      userId: "user_chioma_adeyemi",
      firstname: "Chioma",
      lastname: "Adeyemi",
      email: "chioma.a@outlook.com",
      phone: {
        code: "+234",
        number: "9098765432",
      },
      address: {
        houseNumber: "2",
        street: "Gbode Ventures Plaza",
        city: "Lagos Island",
        state: "Lagos",
        country: "Nigeria",
        closestBusStop: "Idumota",
      },
    },
    {
      userId: "user_samuel_eze",
      firstname: "Samuel",
      lastname: "Eze",
      email: "samuel.eze@gmail.com",
      phone: {
        code: "+234",
        number: "8123456789",
      },
      address: undefined,
    },
    {
      userId: "user_bisi_oladipo",
      firstname: "Bisi",
      lastname: "Oladipo",
      email: "bisi.oladipo@yahoo.com",
      phone: {
        code: "+234",
        number: "8055554444",
      },
      address: {
        houseNumber: "22",
        street: "Bodija Market Road",
        city: "Ibadan",
        state: "Oyo",
        country: "Nigeria",
      },
    },
    {
      userId: "user_emeka_nwosu",
      firstname: "Emeka",
      lastname: "Nwosu",
      email: "emeka.nwosu@hotmail.com",
      phone: undefined,
      address: {
        houseNumber: "5",
        street: "Aba Road",
        city: "Port Harcourt",
        state: "Rivers",
        country: "Nigeria",
      },
    },
    {
      userId: "user_zainab_ibrahim",
      firstname: "Zainab",
      lastname: "Ibrahim",
      email: "zainab.ib@gmail.com",
      phone: {
        code: "+234",
        number: "7061112222",
      },
      address: {
        houseNumber: "10",
        street: "Ahmadu Bello Way",
        city: "Abuja",
        state: "FCT",
        country: "Nigeria",
      },
    },
    {
      userId: "user_david_ogbonna",
      firstname: "David",
      lastname: "Ogbonna",
      email: "david.ogbonna@business.com",
      phone: {
        code: "+234",
        number: "8099998888",
      },
      address: undefined,
    },
    {
      userId: "user_fatima_yusuf",
      firstname: "Fatima",
      lastname: "Yusuf",
      email: "fatima.yusuf@yahoo.com",
      phone: {
        code: "+234",
        number: "7033334444",
      },
      address: {
        houseNumber: "15",
        street: "Zaria Road",
        city: "Kano",
        state: "Kano",
        country: "Nigeria",
      },
    },
  ]);
