import { headerValidator } from "@/convex/schema";
import { Infer } from "convex/values";

export type SrcImage = {
  src: string;
  alt?: string;
};

type ValidatorType = Infer<typeof headerValidator>;

type PromiseType = Omit<ValidatorType, "logo"> & {
  logo: SrcImage;
};

export const headerData: Promise<PromiseType> = Promise.resolve({
  logo: {
    src: "/image/logo.png",
    alt: "JB Lux Enterprises Logo",
  },
});
