import { headerValidator } from "@/convex/schema";
import { Infer } from "convex/values";
import { SrcImageType } from "./reset";

type ValidatorType = Infer<typeof headerValidator>;

type PromiseType = Omit<ValidatorType, "logoId"> & {
  logoId: SrcImageType;
};

export const headerData: Promise<PromiseType> = Promise.resolve({
  logoId: {
    src: "/image/logo.png",
    alt: "JB Lux Enterprises Logo",
  },
});
