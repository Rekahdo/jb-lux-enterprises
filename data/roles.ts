import { roleValidator } from "@/convex/schema";
import { Infer } from "convex/values";
import { IdProp } from "./reset";

type ValidatorType = Infer<typeof roleValidator>;

export type RoleType = ValidatorType & IdProp;

export type RoleProps = {
  roleId: string;
  role: RoleType | undefined;
};

export const rolesData: Promise<RoleType[]> = Promise.resolve([
  {
    id: "role-01",
    userId: "user_richard_okafor",
    role: "admin",
  },
  {
    id: "role-02",
    userId: "user_amaka_chukwuma",
    role: "manager",
  },
  {
    id: "role-03",
    userId: "user_tunde_bakare",
    role: "sales",
  },
]);

export async function findRoleById(id: string): Promise<RoleType | undefined> {
  return (await rolesData).find((each) => each.id === id);
}

export async function findRoleByUserId(
  userId: string,
): Promise<RoleType | undefined> {
  return (await rolesData).find((each) => each.userId === userId);
}
