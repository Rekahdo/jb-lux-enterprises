import { roleValidator } from "@/convex/schema";
import { Infer } from "convex/values";

export const rolesData: Promise<Infer<typeof roleValidator>[]> =
  Promise.resolve([
    {
      userId: "user_richard_okafor",
      role: "admin",
    },
    {
      userId: "user_amaka_chukwuma",
      role: "manager",
    },
    {
      userId: "user_tunde_bakare",
      role: "sales",
    },
  ]);
